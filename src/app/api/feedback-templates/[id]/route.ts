import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "PROFESSOR") {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const template = await db.feedbackTemplate.findUnique({
      where: { id: params.id },
      include: {
        categories: {
          orderBy: { order: "asc" },
        },
        class: {
          select: {
            id: true,
            name: true,
            code: true,
            professorId: true,
          },
        },
      },
    });

    if (!template) {
      return NextResponse.json(
        { message: "Template não encontrado" },
        { status: 404 }
      );
    }

    if (template.class.professorId !== session.user.id) {
      return NextResponse.json(
        { message: "Você não tem permissão para acessar este template" },
        { status: 403 }
      );
    }

    return NextResponse.json({ template });
  } catch (error) {
    console.error("Error fetching feedback template:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "PROFESSOR") {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const body = await req.json();
    const { name, description, categories } = body;

    if (!name || !categories || categories.length < 2) {
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

    // Verify professor owns the template
    const existingTemplate = await db.feedbackTemplate.findUnique({
      where: { id: params.id },
      include: {
        class: {
          select: { professorId: true },
        },
      },
    });

    if (!existingTemplate) {
      return NextResponse.json(
        { message: "Template não encontrado" },
        { status: 404 }
      );
    }

    if (existingTemplate.class.professorId !== session.user.id) {
      return NextResponse.json(
        { message: "Você não tem permissão para modificar este template" },
        { status: 403 }
      );
    }

    // Delete existing categories and create new ones
    await db.$transaction([
      db.feedbackTemplateCategory.deleteMany({
        where: { templateId: params.id },
      }),
      db.feedbackTemplate.update({
        where: { id: params.id },
        data: {
          name,
          description,
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
      }),
    ]);

    // Fetch updated template
    const template = await db.feedbackTemplate.findUnique({
      where: { id: params.id },
      include: {
        categories: {
          orderBy: { order: "asc" },
        },
      },
    });

    return NextResponse.json({ template });
  } catch (error) {
    console.error("Error updating feedback template:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "PROFESSOR") {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    // Verify professor owns the template
    const template = await db.feedbackTemplate.findUnique({
      where: { id: params.id },
      include: {
        class: {
          select: { professorId: true, id: true },
        },
      },
    });

    if (!template) {
      return NextResponse.json(
        { message: "Template não encontrado" },
        { status: 404 }
      );
    }

    if (template.class.professorId !== session.user.id) {
      return NextResponse.json(
        { message: "Você não tem permissão para deletar este template" },
        { status: 403 }
      );
    }

    // Check if there are feedbacks using this template
    const feedbackCount = await db.feedback.count({
      where: { classId: template.class.id },
    });

    if (feedbackCount > 0) {
      return NextResponse.json(
        {
          message:
            "Não é possível deletar o template pois já existem feedbacks cadastrados nesta turma",
        },
        { status: 400 }
      );
    }

    // Delete template (categories will be deleted by cascade)
    await db.feedbackTemplate.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Template deletado com sucesso" });
  } catch (error) {
    console.error("Error deleting feedback template:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
