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
    const groupId = searchParams.get("groupId");

    // Build where clause to get students from professor's classes
    let studentIds: string[] = [];

    if (groupId) {
      // Get students from specific group
      const groupMembers = await db.groupMember.findMany({
        where: {
          groupId,
          group: {
            class: {
              professorId: session.user.id,
            },
          },
        },
        select: {
          userId: true,
        },
      });
      studentIds = groupMembers.map((m) => m.userId);
    } else if (classId) {
      // Get students from specific class
      const enrollments = await db.classEnrollment.findMany({
        where: {
          classId,
          class: {
            professorId: session.user.id,
          },
        },
        select: {
          userId: true,
        },
      });
      studentIds = enrollments.map((e) => e.userId);
    } else {
      // Get all students from all professor's classes
      const enrollments = await db.classEnrollment.findMany({
        where: {
          class: {
            professorId: session.user.id,
          },
        },
        select: {
          userId: true,
        },
      });
      studentIds = enrollments.map((e) => e.userId);
    }

    if (studentIds.length === 0) {
      return NextResponse.json({ students: [] });
    }

    // Get all feedback received by these students
    const feedbacks = await db.feedback.findMany({
      where: {
        receiverId: {
          in: studentIds,
        },
      },
      select: {
        receiverId: true,
        category: true,
        points: true,
        type: true,
        receiver: {
          select: {
            id: true,
            name: true,
            studentId: true,
          },
        },
      },
    });

    // Group by student and calculate statistics
    const studentStats = new Map<
      string,
      {
        id: string;
        name: string;
        studentId: string;
        categories: Map<
          string,
          {
            totalPoints: number;
            count: number;
            positiveCount: number;
            improvementCount: number;
          }
        >;
        totalPoints: number;
        totalFeedbacks: number;
        positiveFeedbacks: number;
        improvementFeedbacks: number;
      }
    >();

    feedbacks.forEach((feedback) => {
      if (!studentStats.has(feedback.receiverId)) {
        studentStats.set(feedback.receiverId, {
          id: feedback.receiver.id,
          name: feedback.receiver.name,
          studentId: feedback.receiver.studentId || "",
          categories: new Map(),
          totalPoints: 0,
          totalFeedbacks: 0,
          positiveFeedbacks: 0,
          improvementFeedbacks: 0,
        });
      }

      const student = studentStats.get(feedback.receiverId)!;

      // Update category statistics
      if (!student.categories.has(feedback.category)) {
        student.categories.set(feedback.category, {
          totalPoints: 0,
          count: 0,
          positiveCount: 0,
          improvementCount: 0,
        });
      }

      const category = student.categories.get(feedback.category)!;
      category.totalPoints += feedback.points;
      category.count += 1;
      if (feedback.type === "POSITIVE") {
        category.positiveCount += 1;
      } else {
        category.improvementCount += 1;
      }

      // Update total statistics
      student.totalPoints += feedback.points;
      student.totalFeedbacks += 1;
      if (feedback.type === "POSITIVE") {
        student.positiveFeedbacks += 1;
      } else {
        student.improvementFeedbacks += 1;
      }
    });

    // Convert to array and calculate averages
    const students = Array.from(studentStats.values()).map((student) => {
      const categories = Array.from(student.categories.entries())
        .map(([name, stats]) => ({
          name,
          averagePoints: stats.totalPoints / stats.count,
          totalPoints: stats.totalPoints,
          count: stats.count,
          positiveCount: stats.positiveCount,
          improvementCount: stats.improvementCount,
        }))
        .sort((a, b) => b.averagePoints - a.averagePoints);

      // Identify strengths (top categories) and weaknesses (bottom categories)
      const strengths = categories
        .filter((c) => c.averagePoints > 0)
        .slice(0, 3);
      const weaknesses = categories
        .filter((c) => c.averagePoints <= 0)
        .sort((a, b) => a.averagePoints - b.averagePoints)
        .slice(0, 3);

      return {
        id: student.id,
        name: student.name,
        studentId: student.studentId,
        totalPoints: student.totalPoints,
        averagePoints:
          student.totalFeedbacks > 0
            ? student.totalPoints / student.totalFeedbacks
            : 0,
        totalFeedbacks: student.totalFeedbacks,
        positiveFeedbacks: student.positiveFeedbacks,
        improvementFeedbacks: student.improvementFeedbacks,
        categories,
        strengths,
        weaknesses,
      };
    });

    // Sort by total points
    students.sort((a, b) => b.totalPoints - a.totalPoints);

    return NextResponse.json({ students });
  } catch (error) {
    console.error("Error fetching student analytics:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
