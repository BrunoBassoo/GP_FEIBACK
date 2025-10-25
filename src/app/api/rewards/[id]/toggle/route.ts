import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

// Toggle reward active status
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      return NextResponse.json({ message: "Acesso negado" }, { status: 403 });
    }


    // Get current reward
    const reward = await db.reward.findUnique({
      where: { id },
    });

    if (!reward) {
      return NextResponse.json(
        { message: "Recompensa não encontrada" },
        { status: 404 }
      );
    }

    // Toggle isActive
    const updatedReward = await db.reward.update({
      where: { id },
      data: { isActive: !reward.isActive },
    });

    return NextResponse.json({
      message: `Recompensa ${
        updatedReward.isActive ? "ativada" : "desativada"
      } com sucesso`,
      reward: updatedReward,
    });
  } catch (error) {
    console.error("Error toggling reward:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}


