import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const { code } = await req.json();

    if (!code) {
      return NextResponse.json(
        { message: "Código é obrigatório" },
        { status: 400 }
      );
    }

    // Find redemption by code
    const redemption = await db.redemption.findFirst({
      where: {
        code: code.toUpperCase(),
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
        user: {
          select: {
            name: true,
            studentId: true,
          },
        },
      },
    });

    if (!redemption) {
      return NextResponse.json(
        {
          valid: false,
          message: "Código inválido ou não encontrado",
        },
        { status: 404 }
      );
    }

    // Check if already used
    if (redemption.status === "USED") {
      return NextResponse.json({
        valid: false,
        message: "Este código já foi utilizado",
        usedAt: redemption.updatedAt,
      });
    }

    // Check if rejected
    if (redemption.status === "REJECTED") {
      return NextResponse.json({
        valid: false,
        message: "Este código foi rejeitado",
      });
    }

    // Valid code
    return NextResponse.json({
      valid: true,
      message: "Código válido",
      redemption: {
        id: redemption.id,
        code: redemption.code,
        status: redemption.status,
        createdAt: redemption.createdAt,
        reward: redemption.reward,
        student: {
          name: redemption.user.name,
          studentId: redemption.user.studentId,
        },
      },
    });
  } catch (error) {
    console.error("Error validating code:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}


