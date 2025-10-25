import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

// GET - Get single class details
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const classData = await db.class.findUnique({
      where: {
        id: params.id,
      },
      include: {
        professor: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        enrollments: {
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
        },
        groups: {
          select: {
            id: true,
            name: true,
            _count: {
              select: {
                members: true,
              },
            },
          },
        },
        _count: {
          select: {
            enrollments: true,
            groups: true,
          },
        },
      },
    });

    if (!classData) {
      return NextResponse.json(
        { error: "Turma não encontrada" },
        { status: 404 }
      );
    }

    // Check permissions
    if (session.user.role === "STUDENT") {
      // Students can only see classes they're enrolled in
      const isEnrolled = classData.enrollments.some(
        (e) => e.userId === session.user.id
      );
      if (!isEnrolled) {
        return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
      }
    } else if (session.user.role === "PROFESSOR") {
      // Professors can only see their own classes
      if (classData.professorId !== session.user.id) {
        return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
      }
    }

    return NextResponse.json({ class: classData });
  } catch (error) {
    console.error("Error fetching class:", error);
    return NextResponse.json(
      { error: "Erro ao buscar turma" },
      { status: 500 }
    );
  }
}

// PUT - Update class (Admin and Professor owner only)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const classData = await db.class.findUnique({
      where: { id: params.id },
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
    const { name, code, description, semester } = body;

    // Validate required fields
    if (!name || !code || !semester) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    // Check if code is already used by another class
    const existingClass = await db.class.findFirst({
      where: {
        code,
        id: {
          not: params.id,
        },
      },
    });

    if (existingClass) {
      return NextResponse.json(
        { error: "Código já está em uso por outra turma" },
        { status: 400 }
      );
    }

    const updatedClass = await db.class.update({
      where: {
        id: params.id,
      },
      data: {
        name,
        code,
        description: description || null,
        semester,
      },
      include: {
        professor: {
          select: {
            id: true,
            name: true,
          },
        },
        _count: {
          select: {
            enrollments: true,
            groups: true,
          },
        },
      },
    });

    return NextResponse.json({
      message: "Turma atualizada com sucesso",
      class: updatedClass,
    });
  } catch (error) {
    console.error("Error updating class:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar turma" },
      { status: 500 }
    );
  }
}

// DELETE - Delete class (Admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const classData = await db.class.findUnique({
      where: { id: params.id },
      include: {
        _count: {
          select: {
            enrollments: true,
            groups: true,
          },
        },
      },
    });

    if (!classData) {
      return NextResponse.json(
        { error: "Turma não encontrada" },
        { status: 404 }
      );
    }

    // Check if class has enrollments or groups
    if (classData._count.enrollments > 0 || classData._count.groups > 0) {
      return NextResponse.json(
        {
          error:
            "Não é possível excluir turma com estudantes ou grupos associados",
        },
        { status: 400 }
      );
    }

    await db.class.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({
      message: "Turma excluída com sucesso",
    });
  } catch (error) {
    console.error("Error deleting class:", error);
    return NextResponse.json(
      { error: "Erro ao excluir turma" },
      { status: 500 }
    );
  }
}
