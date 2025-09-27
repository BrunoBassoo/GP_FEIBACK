import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { calculateTotalPoints } from "@/lib/utils";

function generateRedemptionCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    // Only students can redeem rewards
    if (session.user.role !== "STUDENT") {
      return NextResponse.json(
        { message: "Apenas estudantes podem resgatar recompensas" },
        { status: 403 }
      );
    }

    const { rewardId } = await req.json();

    if (!rewardId) {
      return NextResponse.json(
        { message: "ID da recompensa é obrigatório" },
        { status: 400 }
      );
    }

    // Get reward
    const reward = await db.reward.findUnique({
      where: { id: rewardId, isActive: true },
    });

    if (!reward) {
      return NextResponse.json(
        { message: "Recompensa não encontrada" },
        { status: 404 }
      );
    }

    // Get user's point transactions to calculate total points
    const pointTransactions = await db.pointTransaction.findMany({
      where: { userId: session.user.id },
      select: { points: true },
    });

    const totalPoints = calculateTotalPoints(pointTransactions);

    // Check if user has enough points
    if (totalPoints < reward.pointsCost) {
      return NextResponse.json(
        { message: "Pontos insuficientes para resgatar esta recompensa" },
        { status: 400 }
      );
    }

    // Create redemption and deduct points in a transaction
    const result = await db.$transaction(async (tx) => {
      // Create redemption
      const redemption = await tx.redemption.create({
        data: {
          userId: session.user.id,
          rewardId,
          code: generateRedemptionCode(),
          status: "PENDING",
        },
        include: {
          reward: {
            select: {
              name: true,
              description: true,
              partner: true,
              pointsCost: true,
            },
          },
        },
      });

      // Create point transaction to deduct points
      await tx.pointTransaction.create({
        data: {
          userId: session.user.id,
          points: -reward.pointsCost,
          description: `Resgate: ${reward.name} - ${reward.partner}`,
        },
      });

      return redemption;
    });

    return NextResponse.json(
      {
        message: "Recompensa resgatada com sucesso! Aguarde aprovação.",
        redemption: result,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error redeeming reward:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
