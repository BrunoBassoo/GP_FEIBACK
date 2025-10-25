import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function PATCH(req: NextRequest) {
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
            partner: true,
          },
        },
      },
    });

    if (!redemption) {
      return NextResponse.json(
        { message: "Código não encontrado" },
        { status: 404 }
      );
    }

    // Check if already used
    if (redemption.status === "USED") {
      return NextResponse.json(
        { message: "Este código já foi utilizado" },
        { status: 400 }
      );
    }

    // Check if not approved
    if (redemption.status !== "APPROVED") {
      return NextResponse.json(
        { message: "Este código ainda não foi aprovado" },
        { status: 400 }
      );
    }

    // Mark as used
    const updatedRedemption = await db.redemption.update({
      where: { id: redemption.id },
      data: { status: "USED" },
    });

    return NextResponse.json({
      message: "Código marcado como utilizado com sucesso",
      redemption: updatedRedemption,
    });
  } catch (error) {
    console.error("Error marking code as used:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}


