import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    // Only admins and professors can enroll students
    if (session.user.role !== "ADMIN" && session.user.role !== "PROFESSOR") {
      return NextResponse.json(
        {
          message:
            "Apenas administradores e professores podem matricular estudantes",
        },
        { status: 403 }
      );
    }

    const { id: classId } = await params;
    const { studentIds } = await req.json();

    if (!studentIds || !Array.isArray(studentIds) || studentIds.length === 0) {
      return NextResponse.json(
        { message: "Lista de estudantes é obrigatória" },
        { status: 400 }
      );
    }

    // Verify class exists and user has permission
    let classData;
    if (session.user.role === "ADMIN") {
      classData = await db.class.findUnique({
        where: { id: classId },
        include: {
          professor: {
            select: { id: true, name: true },
          },
        },
      });
    } else {
      // Professor can only enroll students in their own classes
      classData = await db.class.findFirst({
        where: {
          id: classId,
          professorId: session.user.id,
        },
        include: {
          professor: {
            select: { id: true, name: true },
          },
        },
      });
    }

    if (!classData) {
      return NextResponse.json(
        { message: "Turma não encontrada ou você não tem permissão" },
        { status: 404 }
      );
    }

    // Verify all users are students
    const students = await db.user.findMany({
      where: {
        id: { in: studentIds },
        role: "STUDENT",
      },
      select: {
        id: true,
        name: true,
        studentId: true,
        email: true,
      },
    });

    if (students.length !== studentIds.length) {
      const foundIds = students.map((s) => s.id);
      const notFoundIds = studentIds.filter((id) => !foundIds.includes(id));
      return NextResponse.json(
        {
          message:
            "Alguns usuários não foram encontrados ou não são estudantes",
          notFound: notFoundIds,
        },
        { status: 400 }
      );
    }

    // Check for existing enrollments
    const existingEnrollments = await db.classEnrollment.findMany({
      where: {
        classId: classId,
        userId: { in: studentIds },
      },
      select: { userId: true },
    });

    const alreadyEnrolledIds = existingEnrollments.map((e) => e.userId);
    const newEnrollmentIds = studentIds.filter(
      (id) => !alreadyEnrolledIds.includes(id)
    );

    if (newEnrollmentIds.length === 0) {
      return NextResponse.json(
        {
          message: "Todos os estudantes já estão matriculados nesta turma",
          alreadyEnrolled: alreadyEnrolledIds.length,
        },
        { status: 400 }
      );
    }

    // Create new enrollments
    const enrollments = await db.$transaction(
      newEnrollmentIds.map((userId) =>
        db.classEnrollment.create({
          data: {
            userId,
            classId,
          },
          include: {
            user: {
              select: {
                id: true,
                name: true,
                studentId: true,
                email: true,
              },
            },
          },
        })
      )
    );

    return NextResponse.json(
      {
        message: `${enrollments.length} estudante${
          enrollments.length !== 1 ? "s" : ""
        } matriculado${enrollments.length !== 1 ? "s" : ""} com sucesso`,
        enrollments: enrollments.map((e) => e.user),
        alreadyEnrolled: alreadyEnrolledIds.length,
        class: {
          id: classData.id,
          name: classData.name,
          code: classData.code,
          professor: classData.professor,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error enrolling students:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    // Only admins and professors can unenroll students
    if (session.user.role !== "ADMIN" && session.user.role !== "PROFESSOR") {
      return NextResponse.json(
        {
          message:
            "Apenas administradores e professores podem desmatricular estudantes",
        },
        { status: 403 }
      );
    }

    const { id: classId } = await params;
    const { studentIds } = await req.json();

    if (!studentIds || !Array.isArray(studentIds) || studentIds.length === 0) {
      return NextResponse.json(
        { message: "Lista de estudantes é obrigatória" },
        { status: 400 }
      );
    }

    // Verify class exists and user has permission
    let classData;
    if (session.user.role === "ADMIN") {
      classData = await db.class.findUnique({
        where: { id: classId },
      });
    } else {
      classData = await db.class.findFirst({
        where: {
          id: classId,
          professorId: session.user.id,
        },
      });
    }

    if (!classData) {
      return NextResponse.json(
        { message: "Turma não encontrada ou você não tem permissão" },
        { status: 404 }
      );
    }

    // Remove enrollments
    const result = await db.classEnrollment.deleteMany({
      where: {
        classId: classId,
        userId: { in: studentIds },
      },
    });

    return NextResponse.json({
      message: `${result.count} estudante${
        result.count !== 1 ? "s" : ""
      } desmatriculado${result.count !== 1 ? "s" : ""} com sucesso`,
      unenrolled: result.count,
    });
  } catch (error) {
    console.error("Error unenrolling students:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
