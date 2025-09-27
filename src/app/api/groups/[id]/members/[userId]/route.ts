import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string; userId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    // Only professors can remove members from groups
    if (session.user.role !== "PROFESSOR") {
      return NextResponse.json(
        { message: "Apenas professores podem remover membros dos grupos" },
        { status: 403 }
      );
    }

    const groupId = params.id;
    const userId = params.userId;

    // Verify group belongs to the professor
    const group = await db.group.findFirst({
      where: {
        id: groupId,
        class: {
          professorId: session.user.id,
        },
      },
      include: {
        class: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },
      },
    });

    if (!group) {
      return NextResponse.json(
        { message: "Grupo não encontrado ou você não tem permissão" },
        { status: 404 }
      );
    }

    // Find the group member
    const groupMember = await db.groupMember.findFirst({
      where: {
        groupId: groupId,
        userId: userId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            studentId: true,
          },
        },
      },
    });

    if (!groupMember) {
      return NextResponse.json(
        { message: "Membro não encontrado neste grupo" },
        { status: 404 }
      );
    }

    // Remove member from group
    await db.groupMember.delete({
      where: {
        id: groupMember.id,
      },
    });

    return NextResponse.json({
      message: "Membro removido com sucesso",
      removedMember: {
        id: groupMember.user.id,
        name: groupMember.user.name,
        studentId: groupMember.user.studentId,
      },
    });
  } catch (error) {
    console.error("Error removing group member:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}


