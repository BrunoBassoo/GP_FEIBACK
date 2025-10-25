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

    // Only students can view public feedback
    if (session.user.role !== "STUDENT") {
      return NextResponse.json(
        { message: "Apenas estudantes podem visualizar feedbacks públicos" },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type") as FeedbackType | null;
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const skip = (page - 1) * limit;

    // Build where clause for public feedback from all college students
    const where: Record<string, unknown> = {
      isPublic: true,
    };

    // Apply filters
    if (type) {
      where.type = type;
    }

    if (category) {
      where.category = category;
    }

    // Search in content, giver name, or receiver name
    if (search) {
      where.OR = [
        { content: { contains: search, mode: "insensitive" } },
        { giver: { name: { contains: search, mode: "insensitive" } } },
        { receiver: { name: { contains: search, mode: "insensitive" } } },
      ];
    }

    const [feedback, total] = await Promise.all([
      db.feedback.findMany({
        where,
        select: {
          id: true,
          content: true,
          type: true,
          category: true,
          createdAt: true,
          // Exclude points for privacy - students can't see others' points
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
    console.error("Error fetching public feedback:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
