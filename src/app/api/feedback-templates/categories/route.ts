import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

// Default categories for classes without custom templates
const DEFAULT_CATEGORIES = [
  {
    name: "Comunicação",
    description: "Clareza e efetividade na comunicação",
    pointsPositive: 5,
    pointsImprovement: -2,
  },
  {
    name: "Trabalho em Equipe",
    description: "Colaboração e cooperação com o grupo",
    pointsPositive: 5,
    pointsImprovement: -2,
  },
  {
    name: "Qualidade do Trabalho",
    description: "Nível de qualidade das entregas",
    pointsPositive: 5,
    pointsImprovement: -2,
  },
  {
    name: "Pontualidade",
    description: "Cumprimento de prazos e compromissos",
    pointsPositive: 5,
    pointsImprovement: -2,
  },
  {
    name: "Proatividade",
    description: "Iniciativa e engajamento nas atividades",
    pointsPositive: 5,
    pointsImprovement: -2,
  },
];

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const classId = searchParams.get("classId");
    const groupId = searchParams.get("groupId");

    let targetClassId = classId;

    // If groupId is provided, get the classId from the group
    if (groupId && !classId) {
      const group = await db.group.findUnique({
        where: { id: groupId },
        select: { classId: true },
      });

      if (!group) {
        return NextResponse.json(
          { message: "Grupo não encontrado" },
          { status: 404 }
        );
      }

      targetClassId = group.classId;
    }

    if (!targetClassId) {
      // Return default categories if no class is specified
      return NextResponse.json({
        categories: DEFAULT_CATEGORIES,
        isDefault: true,
      });
    }

    // Check if user has access to this class
    if (session.user.role === "STUDENT") {
      const enrollment = await db.classEnrollment.findFirst({
        where: {
          userId: session.user.id,
          classId: targetClassId,
        },
      });

      if (!enrollment) {
        return NextResponse.json(
          { message: "Você não está matriculado nesta turma" },
          { status: 403 }
        );
      }
    } else if (session.user.role === "PROFESSOR") {
      const classData = await db.class.findUnique({
        where: { id: targetClassId },
        select: { professorId: true },
      });

      if (!classData || classData.professorId !== session.user.id) {
        return NextResponse.json(
          { message: "Você não tem acesso a esta turma" },
          { status: 403 }
        );
      }
    }

    // Get custom template for this class
    const template = await db.feedbackTemplate.findUnique({
      where: { classId: targetClassId },
      include: {
        categories: {
          orderBy: { order: "asc" },
        },
      },
    });

    if (template && template.categories.length > 0) {
      return NextResponse.json({
        categories: template.categories,
        isDefault: false,
        templateName: template.name,
        templateDescription: template.description,
      });
    }

    // Return default categories if no custom template exists
    return NextResponse.json({
      categories: DEFAULT_CATEGORIES,
      isDefault: true,
    });
  } catch (error) {
    console.error("Error fetching feedback categories:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
