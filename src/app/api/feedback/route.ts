import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { FeedbackType } from "@prisma/client";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const giverId = searchParams.get("giverId");
    const receiverId = searchParams.get("receiverId");
    const type = searchParams.get("type") as FeedbackType | null;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    let where: any = {};

    // Filter based on user role and parameters
    if (session.user.role === "STUDENT") {
      // Students can only see feedback they gave or received
      where = {
        OR: [{ giverId: session.user.id }, { receiverId: session.user.id }],
      };
    }

    // Apply additional filters
    if (giverId) where.giverId = giverId;
    if (receiverId) where.receiverId = receiverId;
    if (type) where.type = type;

    // Only show public feedback unless user is involved
    if (session.user.role !== "ADMIN" && session.user.role !== "PROFESSOR") {
      if (!giverId && !receiverId) {
        where.isPublic = true;
      }
    }

    const [feedback, total] = await Promise.all([
      db.feedback.findMany({
        where,
        include: {
          giver: {
            select: {
              id: true,
              name: true,
              studentId: true,
            },
          },
          receiver: {
            select: {
              id: true,
              name: true,
              studentId: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      db.feedback.count({ where }),
    ]);

    return NextResponse.json({
      feedback,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching feedback:", error);
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

    // Only students can give feedback
    if (session.user.role !== "STUDENT") {
      return NextResponse.json(
        { message: "Apenas estudantes podem dar feedback" },
        { status: 403 }
      );
    }

    const {
      content,
      type,
      points,
      category,
      receiverId,
      isPublic = true,
    } = await req.json();

    // Validation
    if (!content || !type || !category || !receiverId) {
      return NextResponse.json(
        {
          message: "Conteúdo, tipo, categoria e destinatário são obrigatórios",
        },
        { status: 400 }
      );
    }

    if (!Object.values(FeedbackType).includes(type)) {
      return NextResponse.json(
        { message: "Tipo de feedback inválido" },
        { status: 400 }
      );
    }

    // Cannot give feedback to yourself
    if (receiverId === session.user.id) {
      return NextResponse.json(
        { message: "Você não pode dar feedback para si mesmo" },
        { status: 400 }
      );
    }

    // Verify receiver exists and is a student
    const receiver = await db.user.findUnique({
      where: {
        id: receiverId,
        role: "STUDENT",
      },
    });

    if (!receiver) {
      return NextResponse.json(
        { message: "Destinatário não encontrado" },
        { status: 404 }
      );
    }

    // Check if both users are in the same group
    const sharedGroup = await db.groupMember.findFirst({
      where: {
        userId: session.user.id,
        group: {
          members: {
            some: {
              userId: receiverId,
            },
          },
        },
      },
    });

    if (!sharedGroup) {
      return NextResponse.json(
        { message: "Você só pode dar feedback para colegas do mesmo grupo" },
        { status: 400 }
      );
    }

    // Calculate points based on feedback type
    let calculatedPoints = points || 0;
    if (type === "POSITIVE") {
      calculatedPoints = Math.max(1, calculatedPoints || 10);
    } else if (type === "IMPROVEMENT") {
      calculatedPoints = Math.min(0, calculatedPoints || -5);
    }

    // Create feedback and point transaction in a transaction
    const result = await db.$transaction(async (tx) => {
      // Create feedback
      const feedback = await tx.feedback.create({
        data: {
          content,
          type,
          points: calculatedPoints,
          category,
          giverId: session.user.id,
          receiverId,
          isPublic,
        },
        include: {
          giver: {
            select: {
              id: true,
              name: true,
              studentId: true,
            },
          },
          receiver: {
            select: {
              id: true,
              name: true,
              studentId: true,
            },
          },
        },
      });

      // Create point transaction for receiver
      await tx.pointTransaction.create({
        data: {
          userId: receiverId,
          points: calculatedPoints,
          description: `Feedback ${
            type === "POSITIVE" ? "positivo" : "de melhoria"
          } de ${session.user.name}`,
          feedbackId: feedback.id,
        },
      });

      return feedback;
    });

    return NextResponse.json(
      {
        message: "Feedback criado com sucesso",
        feedback: result,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating feedback:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
