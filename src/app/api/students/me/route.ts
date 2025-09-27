import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    // Only students can access this endpoint
    if (session.user.role !== "STUDENT") {
      return NextResponse.json(
        { message: "Acesso negado - apenas estudantes" },
        { status: 403 }
      );
    }

    // Get comprehensive student data
    const studentData = await db.user.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        studentId: true,
        createdAt: true,
        // Groups the student is member of
        groupMemberships: {
          select: {
            id: true,
            joinedAt: true,
            group: {
              select: {
                id: true,
                name: true,
                description: true,
                createdAt: true,
                class: {
                  select: {
                    id: true,
                    name: true,
                    code: true,
                    semester: true,
                    professor: {
                      select: {
                        id: true,
                        name: true,
                      },
                    },
                  },
                },
                // Other group members for evaluation
                members: {
                  select: {
                    id: true,
                    joinedAt: true,
                    user: {
                      select: {
                        id: true,
                        name: true,
                        studentId: true,
                      },
                    },
                  },
                  where: {
                    userId: {
                      not: session.user.id, // Exclude current user
                    },
                  },
                },
                _count: {
                  select: {
                    members: true,
                  },
                },
              },
            },
          },
        },
        // Feedback received by the student
        feedbackReceived: {
          select: {
            id: true,
            content: true,
            type: true,
            points: true,
            category: true,
            isPublic: true,
            createdAt: true,
            giver: {
              select: {
                id: true,
                name: true,
                studentId: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        // Feedback given by the student
        feedbackGiven: {
          select: {
            id: true,
            content: true,
            type: true,
            points: true,
            category: true,
            isPublic: true,
            createdAt: true,
            receiver: {
              select: {
                id: true,
                name: true,
                studentId: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        // Point transactions for the student
        pointsTransactions: {
          select: {
            id: true,
            points: true,
            description: true,
            createdAt: true,
            feedbackId: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        // Redemptions made by the student
        redemptions: {
          select: {
            id: true,
            status: true,
            code: true,
            createdAt: true,
            reward: {
              select: {
                id: true,
                name: true,
                description: true,
                pointsCost: true,
                partner: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!studentData) {
      return NextResponse.json(
        { message: "Dados do estudante não encontrados" },
        { status: 404 }
      );
    }

    // Calculate total points
    const totalPoints = studentData.pointsTransactions.reduce(
      (sum, transaction) => sum + transaction.points,
      0
    );

    // Calculate statistics
    const stats = {
      totalPoints,
      feedbackReceived: studentData.feedbackReceived.length,
      feedbackGiven: studentData.feedbackGiven.length,
      groupsJoined: studentData.groupMemberships.length,
      rewardsRedeemed: studentData.redemptions.filter(
        (r) => r.status === "USED" || r.status === "APPROVED"
      ).length,
    };

    // Recent activity (last 10 activities)
    const recentActivity = [
      ...studentData.feedbackReceived.slice(0, 5).map((f) => ({
        type: "feedback_received",
        description: `Feedback ${
          f.type === "POSITIVE" ? "positivo" : "de melhoria"
        } recebido de ${f.giver.name}`,
        points: f.points,
        createdAt: f.createdAt,
        category: f.category,
      })),
      ...studentData.feedbackGiven.slice(0, 5).map((f) => ({
        type: "feedback_given",
        description: `Feedback dado para ${f.receiver.name}`,
        createdAt: f.createdAt,
        category: f.category,
      })),
      ...studentData.redemptions.slice(0, 3).map((r) => ({
        type: "reward_redeemed",
        description: `Recompensa resgatada: ${r.reward.name}`,
        points: -r.reward.pointsCost,
        createdAt: r.createdAt,
      })),
    ]
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, 10);

    return NextResponse.json({
      student: studentData,
      stats,
      recentActivity,
    });
  } catch (error) {
    console.error("Error fetching student data:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
