import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    // Get total counts
    const [
      totalUsers,
      totalStudents,
      totalProfessors,
      totalClasses,
      totalGroups,
      totalFeedbacks,
      totalRedemptions,
      totalRewards,
    ] = await Promise.all([
      db.user.count(),
      db.user.count({ where: { role: "STUDENT" } }),
      db.user.count({ where: { role: "PROFESSOR" } }),
      db.class.count(),
      db.group.count(),
      db.feedback.count(),
      db.redemption.count(),
      db.reward.count({ where: { isActive: true } }),
    ]);

    // Get average feedback rating
    const feedbackStats = await db.feedback.aggregate({
      _avg: {
        points: true,
      },
      _count: {
        id: true,
      },
    });

    // Get feedback per user (average)
    const feedbackPerUser =
      totalStudents > 0 ? (totalFeedbacks / totalStudents).toFixed(1) : "0";

    // Get top students by points
    const topStudents = await db.user.findMany({
      where: {
        role: "STUDENT",
      },
      select: {
        id: true,
        name: true,
        studentId: true,
        pointsTransactions: {
          select: {
            points: true,
          },
        },
      },
      take: 100, // Get more to calculate properly
    });

    // Calculate total points for each student
    const studentsWithPoints = topStudents
      .map((student) => ({
        id: student.id,
        name: student.name,
        studentId: student.studentId,
        totalPoints: student.pointsTransactions.reduce(
          (sum, t) => sum + t.points,
          0
        ),
      }))
      .filter((s) => s.totalPoints > 0)
      .sort((a, b) => b.totalPoints - a.totalPoints)
      .slice(0, 5);

    // Get top professors by number of classes
    const topProfessors = await db.user.findMany({
      where: {
        role: "PROFESSOR",
      },
      select: {
        id: true,
        name: true,
        _count: {
          select: {
            classes: true,
          },
        },
      },
      take: 100,
    });

    // For each professor, get their total student count
    const professorsWithStatsAll = await Promise.all(
      topProfessors.map(async (prof) => {
        const studentCount = await db.classEnrollment.count({
          where: {
            class: {
              professorId: prof.id,
            },
          },
        });

        return {
          id: prof.id,
          name: prof.name,
          classCount: prof._count.classes,
          studentCount,
        };
      })
    );

    const professorsWithStats = professorsWithStatsAll
      .filter((p) => p.classCount > 0)
      .sort((a, b) => b.studentCount - a.studentCount)
      .slice(0, 5);

    // Get top classes by feedback activity
    const topClasses = await db.class.findMany({
      select: {
        id: true,
        name: true,
        code: true,
        _count: {
          select: {
            enrollments: true,
            groups: true,
          },
        },
      },
      take: 50,
    });

    // For each class, count feedback
    const classesWithActivity = await Promise.all(
      topClasses.map(async (classItem) => {
        const feedbackCount = await db.feedback.count({
          where: {
            classId: classItem.id,
          },
        });

        return {
          id: classItem.id,
          name: classItem.name,
          code: classItem.code,
          enrollments: classItem._count.enrollments,
          groups: classItem._count.groups,
          feedbackCount,
          activityScore:
            classItem._count.enrollments > 0
              ? (feedbackCount / classItem._count.enrollments).toFixed(1)
              : "0",
        };
      })
    );

    const sortedClasses = classesWithActivity
      .filter((c) => c.enrollments > 0)
      .sort((a, b) => parseFloat(b.activityScore) - parseFloat(a.activityScore))
      .slice(0, 5);

    // Calculate growth metrics (comparing last 30 days vs previous 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const sixtyDaysAgo = new Date();
    sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);

    const [
      recentUsers,
      previousUsers,
      recentFeedbacks,
      previousFeedbacks,
      recentRedemptions,
      previousRedemptions,
    ] = await Promise.all([
      db.user.count({
        where: {
          createdAt: {
            gte: thirtyDaysAgo,
          },
        },
      }),
      db.user.count({
        where: {
          createdAt: {
            gte: sixtyDaysAgo,
            lt: thirtyDaysAgo,
          },
        },
      }),
      db.feedback.count({
        where: {
          createdAt: {
            gte: thirtyDaysAgo,
          },
        },
      }),
      db.feedback.count({
        where: {
          createdAt: {
            gte: sixtyDaysAgo,
            lt: thirtyDaysAgo,
          },
        },
      }),
      db.redemption.count({
        where: {
          createdAt: {
            gte: thirtyDaysAgo,
          },
        },
      }),
      db.redemption.count({
        where: {
          createdAt: {
            gte: sixtyDaysAgo,
            lt: thirtyDaysAgo,
          },
        },
      }),
    ]);

    // Calculate growth percentages
    const calculateGrowth = (recent: number, previous: number) => {
      if (previous === 0) return recent > 0 ? 100 : 0;
      return Math.round(((recent - previous) / previous) * 100);
    };

    const userGrowth = calculateGrowth(recentUsers, previousUsers);
    const feedbackGrowth = calculateGrowth(recentFeedbacks, previousFeedbacks);
    const redemptionGrowth = calculateGrowth(
      recentRedemptions,
      previousRedemptions
    );

    // Calculate engagement (total feedback / total students)
    const engagementRate =
      totalStudents > 0
        ? Math.round((totalFeedbacks / totalStudents) * 100) / 100
        : 0;

    const previousEngagement =
      totalStudents > 0 && previousFeedbacks > 0
        ? Math.round((previousFeedbacks / totalStudents) * 100) / 100
        : 0;

    const engagementGrowth =
      previousEngagement > 0
        ? Math.round(
            ((engagementRate - previousEngagement) / previousEngagement) * 100
          )
        : engagementRate > 0
        ? 100
        : 0;

    // Calculate participation rate (users who have given/received feedback)
    const activeUsers = await db.user.count({
      where: {
        role: "STUDENT",
        OR: [
          {
            feedbackGiven: {
              some: {},
            },
          },
          {
            feedbackReceived: {
              some: {},
            },
          },
        ],
      },
    });

    const participationRate =
      totalStudents > 0 ? Math.round((activeUsers / totalStudents) * 100) : 0;

    return NextResponse.json({
      overview: {
        totalUsers,
        totalStudents,
        totalProfessors,
        totalClasses,
        totalGroups,
        totalFeedbacks,
        totalRedemptions,
        totalRewards,
      },
      metrics: {
        participationRate,
        averageFeedbackRating: feedbackStats._avg.points?.toFixed(1) || "0",
        feedbackPerUser,
        engagementRate: engagementRate.toFixed(1),
      },
      growth: {
        users: userGrowth,
        feedback: feedbackGrowth,
        redemptions: redemptionGrowth,
        engagement: engagementGrowth,
      },
      topPerformers: {
        students: studentsWithPoints,
        professors: professorsWithStats,
        classes: sortedClasses,
      },
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return NextResponse.json(
      { error: "Erro ao buscar dados de análise" },
      { status: 500 }
    );
  }
}
