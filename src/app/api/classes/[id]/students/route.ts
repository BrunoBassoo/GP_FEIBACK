import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const { id: classId } = await params;

    // Verify access permissions
    let hasAccess = false;

    if (session.user.role === "ADMIN") {
      hasAccess = true;
    } else if (session.user.role === "PROFESSOR") {
      // Verify the class belongs to the professor
      const classData = await db.class.findFirst({
        where: {
          id: classId,
          professorId: session.user.id,
        },
      });
      hasAccess = !!classData;
    } else if (session.user.role === "STUDENT") {
      // Students can only see classmates if they are enrolled in the class
      const enrollment = await db.classEnrollment.findFirst({
        where: {
          classId: classId,
          userId: session.user.id,
        },
      });
      hasAccess = !!enrollment;
    }

    if (!hasAccess) {
      return NextResponse.json(
        { message: "Acesso negado ou turma não encontrada" },
        { status: 403 }
      );
    }

    // Get students enrolled in the class
    const enrollments = await db.classEnrollment.findMany({
      where: {
        classId: classId,
        user: {
          role: "STUDENT",
        },
      },
      select: {
        user: {
          select: {
            id: true,
            name: true,
            studentId: true,
            createdAt: true,
            // Include stats for professors/admins
            ...(session.user.role !== "STUDENT" && {
              _count: {
                select: {
                  feedbackGiven: true,
                  feedbackReceived: true,
                  groupMemberships: true,
                },
              },
            }),
          },
        },
        createdAt: true,
      },
      orderBy: {
        user: {
          name: "asc",
        },
      },
    });

    const students = enrollments.map((enrollment) => ({
      ...enrollment.user,
      enrolledAt: enrollment.createdAt,
    }));

    return NextResponse.json({
      students,
      total: students.length,
    });
  } catch (error) {
    console.error("Error fetching class students:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
