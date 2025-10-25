import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const includeInactive = searchParams.get("includeInactive") === "true";

    // Admin can see all rewards (including inactive), others only active
    const where =
      session.user.role === "ADMIN" && includeInactive
        ? {}
        : { isActive: true };

    const rewards = await db.reward.findMany({
      where,
      include: {
        _count: {
          select: {
            redemptions: true,
          },
        },
      },
      orderBy: { pointsCost: "asc" },
    });

    return NextResponse.json({ rewards });
  } catch (error) {
    console.error("Error fetching rewards:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    // Only admins can create rewards
    if (session.user.role !== "ADMIN") {
      return NextResponse.json({ message: "Acesso negado" }, { status: 403 });
    }

    const { name, description, pointsCost, partner, imageUrl } =
      await req.json();

    // Validation
    if (!name || !description || !pointsCost || !partner) {
      return NextResponse.json(
        {
          message:
            "Nome, descrição, custo em pontos e parceiro são obrigatórios",
        },
        { status: 400 }
      );
    }

    if (pointsCost <= 0) {
      return NextResponse.json(
        { message: "Custo em pontos deve ser maior que zero" },
        { status: 400 }
      );
    }

    // Create reward
    const reward = await db.reward.create({
      data: {
        name,
        description,
        pointsCost,
        partner,
        imageUrl,
        isActive: true,
      },
    });

    return NextResponse.json(
      {
        message: "Recompensa criada com sucesso",
        reward,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating reward:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
