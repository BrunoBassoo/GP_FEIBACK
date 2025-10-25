import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

// Get specific reward
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const { id } = await params;

    const reward = await db.reward.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            redemptions: true,
          },
        },
      },
    });

    if (!reward) {
      return NextResponse.json(
        { message: "Recompensa não encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json({ reward });
  } catch (error) {
    console.error("Error fetching reward:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

// Update reward (admin only)
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      return NextResponse.json({ message: "Acesso negado" }, { status: 403 });
    }

    const { id } = await params;
    const { name, description, pointsCost, partner, imageUrl, isActive } =
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

    // Check if reward exists
    const existingReward = await db.reward.findUnique({
      where: { id },
    });

    if (!existingReward) {
      return NextResponse.json(
        { message: "Recompensa não encontrada" },
        { status: 404 }
      );
    }

    // Update reward
    const reward = await db.reward.update({
      where: { id },
      data: {
        name,
        description,
        pointsCost,
        partner,
        imageUrl,
        isActive: isActive !== undefined ? isActive : existingReward.isActive,
      },
    });

    return NextResponse.json({
      message: "Recompensa atualizada com sucesso",
      reward,
    });
  } catch (error) {
    console.error("Error updating reward:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

// Delete reward (soft delete by setting isActive to false)
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      return NextResponse.json({ message: "Acesso negado" }, { status: 403 });
    }

    const { id } = await params;

    // Check if reward exists
    const existingReward = await db.reward.findUnique({
      where: { id },
    });

    if (!existingReward) {
      return NextResponse.json(
        { message: "Recompensa não encontrada" },
        { status: 404 }
      );
    }

    // Soft delete by setting isActive to false
    await db.reward.update({
      where: { id },
      data: { isActive: false },
    });

    return NextResponse.json({
      message: "Recompensa desativada com sucesso",
    });
  } catch (error) {
    console.error("Error deleting reward:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}


