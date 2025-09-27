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
    const professorId = searchParams.get("professorId");

    let where = {};

    // Filter by professor if specified or if user is a professor
    if (professorId) {
      where = { professorId };
    } else if (session.user.role === "PROFESSOR") {
      where = { professorId: session.user.id };
    }

    const classes = await db.class.findMany({
      where,
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
          include: {
            members: {
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
          },
        },
        _count: {
          select: {
            enrollments: true,
            groups: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ classes });
  } catch (error) {
    console.error("Error fetching classes:", error);
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

    // Only professors and admins can create classes
    if (session.user.role !== "PROFESSOR" && session.user.role !== "ADMIN") {
      return NextResponse.json({ message: "Acesso negado" }, { status: 403 });
    }

    const { name, code, description, semester, professorId } = await req.json();

    // Validation
    if (!name || !code || !semester) {
      return NextResponse.json(
        { message: "Nome, código e semestre são obrigatórios" },
        { status: 400 }
      );
    }

    // Determine professor ID
    let finalProfessorId = professorId;
    if (session.user.role === "PROFESSOR") {
      finalProfessorId = session.user.id;
    }

    if (!finalProfessorId) {
      return NextResponse.json(
        { message: "Professor é obrigatório" },
        { status: 400 }
      );
    }

    // Check if class code already exists
    const existingClass = await db.class.findUnique({
      where: { code },
    });

    if (existingClass) {
      return NextResponse.json(
        { message: "Código da turma já existe" },
        { status: 400 }
      );
    }

    // Verify professor exists
    const professor = await db.user.findUnique({
      where: {
        id: finalProfessorId,
        role: "PROFESSOR",
      },
    });

    if (!professor) {
      return NextResponse.json(
        { message: "Professor não encontrado" },
        { status: 404 }
      );
    }

    // Create class
    const newClass = await db.class.create({
      data: {
        name,
        code,
        description,
        semester,
        professorId: finalProfessorId,
      },
      include: {
        professor: {
          select: {
            id: true,
            name: true,
            email: true,
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

    return NextResponse.json(
      {
        message: "Turma criada com sucesso",
        class: newClass,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating class:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
