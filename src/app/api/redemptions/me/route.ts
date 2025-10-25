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

    // Only students can view their redemptions
    if (session.user.role !== "STUDENT") {
      return NextResponse.json(
        { message: "Apenas estudantes podem visualizar resgates" },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const [redemptions, total] = await Promise.all([
      db.redemption.findMany({
        where: {
          userId: session.user.id,
        },
        include: {
          reward: {
            select: {
              name: true,
              description: true,
              partner: true,
              pointsCost: true,
              imageUrl: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      db.redemption.count({
        where: {
          userId: session.user.id,
        },
      }),
    ]);

    return NextResponse.json({
      redemptions,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching redemptions:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}


