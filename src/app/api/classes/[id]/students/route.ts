import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

// GET - Get students enrolled in a class
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const classData = await db.class.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        professorId: true,
      },
    });

    if (!classData) {
      return NextResponse.json(
        { error: "Turma não encontrada" },
        { status: 404 }
      );
    }

    // Check permissions
    if (
      session.user.role === "PROFESSOR" &&
      classData.professorId !== session.user.id
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const enrollments = await db.classEnrollment.findMany({
      where: {
        classId: id,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            studentId: true,
          },
        },
      },
      orderBy: {
        user: {
          name: "asc",
        },
      },
    });

    const students = enrollments.map((enrollment) => enrollment.user);

    return NextResponse.json({
      students,
      count: students.length,
    });
  } catch (error) {
    console.error("Error fetching class students:", error);
    return NextResponse.json(
      { error: "Erro ao buscar estudantes" },
      { status: 500 }
    );
  }
}

// DELETE - Remove students from class (Admin and Professor owner only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const classData = await db.class.findUnique({
      where: { id: id },
    });

    if (!classData) {
      return NextResponse.json(
        { error: "Turma não encontrada" },
        { status: 404 }
      );
    }

    // Check permissions
    if (
      session.user.role === "PROFESSOR" &&
      classData.professorId !== session.user.id
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    if (session.user.role !== "ADMIN" && session.user.role !== "PROFESSOR") {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const body = await request.json();
    const { studentIds } = body;

    if (!Array.isArray(studentIds) || studentIds.length === 0) {
      return NextResponse.json(
        { error: "IDs de estudantes inválidos" },
        { status: 400 }
      );
    }

    // Remove enrollments
    await db.classEnrollment.deleteMany({
      where: {
        classId: id,
        userId: {
          in: studentIds,
        },
      },
    });

    // Also remove from groups in this class
    const groups = await db.group.findMany({
      where: {
        classId: id,
      },
      select: {
        id: true,
      },
    });

    const groupIds = groups.map((g) => g.id);

    if (groupIds.length > 0) {
      await db.groupMember.deleteMany({
        where: {
          groupId: {
            in: groupIds,
          },
          userId: {
            in: studentIds,
          },
        },
      });
    }

    return NextResponse.json({
      message: "Estudantes removidos com sucesso",
      removedCount: studentIds.length,
    });
  } catch (error) {
    console.error("Error removing students:", error);
    return NextResponse.json(
      { error: "Erro ao remover estudantes" },
      { status: 500 }
    );
  }
}
