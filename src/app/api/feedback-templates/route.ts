import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "PROFESSOR") {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const classId = searchParams.get("classId");

    if (classId) {
      // Get template for specific class
      const classData = await db.class.findUnique({
        where: { id: classId },
        select: { professorId: true },
      });

      if (!classData || classData.professorId !== session.user.id) {
        return NextResponse.json(
          { message: "Você não tem permissão para acessar esta turma" },
          { status: 403 }
        );
      }

      const template = await db.feedbackTemplate.findUnique({
        where: { classId },
        include: {
          categories: {
            orderBy: { order: "asc" },
          },
        },
      });

      return NextResponse.json({ template });
    }

    // Get all templates for professor's classes
    const templates = await db.feedbackTemplate.findMany({
      where: {
        class: {
          professorId: session.user.id,
        },
      },
      include: {
        categories: {
          orderBy: { order: "asc" },
        },
        class: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },
      },
    });

    return NextResponse.json({ templates });
  } catch (error) {
    console.error("Error fetching feedback templates:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "PROFESSOR") {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const body = await req.json();
    const { classId, name, description, categories } = body;

    if (!classId || !name || !categories || categories.length < 2) {
      return NextResponse.json(
        { message: "Dados inválidos. É necessário pelo menos 2 categorias." },
        { status: 400 }
      );
    }

    if (categories.length > 10) {
      return NextResponse.json(
        { message: "Máximo de 10 categorias permitidas" },
        { status: 400 }
      );
    }

    // Verify professor owns the class
    const classData = await db.class.findUnique({
      where: { id: classId },
      select: { professorId: true },
    });

    if (!classData || classData.professorId !== session.user.id) {
      return NextResponse.json(
        { message: "Você não tem permissão para modificar esta turma" },
        { status: 403 }
      );
    }

    // Check if template already exists
    const existingTemplate = await db.feedbackTemplate.findUnique({
      where: { classId },
    });

    if (existingTemplate) {
      return NextResponse.json(
        { message: "Já existe um template de feedback para esta turma" },
        { status: 400 }
      );
    }

    // Create template with categories
    const template = await db.feedbackTemplate.create({
      data: {
        name,
        description,
        classId,
        categories: {
          create: categories.map(
            (
              cat: {
                name: string;
                description?: string;
                pointsPositive?: number;
                pointsImprovement?: number;
              },
              index: number
            ) => ({
              name: cat.name,
              description: cat.description,
              pointsPositive: cat.pointsPositive || 5,
              pointsImprovement: cat.pointsImprovement || -2,
              order: index,
            })
          ),
        },
      },
      include: {
        categories: {
          orderBy: { order: "asc" },
        },
      },
    });

    return NextResponse.json({ template }, { status: 201 });
  } catch (error) {
    console.error("Error creating feedback template:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
