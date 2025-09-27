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

    const { searchParams } = new URL(req.url);
    const classId = searchParams.get("classId");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    let where: any = {};

    if (session.user.role === "PROFESSOR") {
      // Professors can only see groups from their classes
      where = {
        class: {
          professorId: session.user.id,
        },
      };

      if (classId) {
        where.classId = classId;
      }
    } else if (session.user.role === "STUDENT") {
      // Students can only see groups they are members of
      where = {
        members: {
          some: {
            userId: session.user.id,
          },
        },
      };
    } else if (session.user.role === "ADMIN") {
      // Admins can see all groups
      if (classId) {
        where.classId = classId;
      }
    } else {
      return NextResponse.json(
        { message: "Acesso negado" },
        { status: 403 }
      );
    }

    const [groups, total] = await Promise.all([
      db.group.findMany({
        where,
        include: {
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
          },
          _count: {
            select: {
              members: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      db.group.count({ where }),
    ]);

    return NextResponse.json({
      groups,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching groups:", error);
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

    // Only professors can create groups
    if (session.user.role !== "PROFESSOR") {
      return NextResponse.json(
        { message: "Apenas professores podem criar grupos" },
        { status: 403 }
      );
    }

    const { name, description, classId, memberIds = [] } = await req.json();

    // Validation
    if (!name || !classId) {
      return NextResponse.json(
        { message: "Nome e turma são obrigatórios" },
        { status: 400 }
      );
    }

    // Verify the class belongs to the professor
    const classData = await db.class.findFirst({
      where: {
        id: classId,
        professorId: session.user.id,
      },
    });

    if (!classData) {
      return NextResponse.json(
        { message: "Turma não encontrada ou você não tem permissão" },
        { status: 404 }
      );
    }

    // Verify all members are students enrolled in the class
    if (memberIds.length > 0) {
      const enrolledStudents = await db.classEnrollment.findMany({
        where: {
          classId: classId,
          userId: { in: memberIds },
          user: { role: "STUDENT" },
        },
        select: { userId: true },
      });

      const enrolledStudentIds = enrolledStudents.map((e) => e.userId);
      const invalidMemberIds = memberIds.filter(
        (id: string) => !enrolledStudentIds.includes(id)
      );

      if (invalidMemberIds.length > 0) {
        return NextResponse.json(
          {
            message: "Alguns estudantes não estão matriculados nesta turma",
            invalidMembers: invalidMemberIds,
          },
          { status: 400 }
        );
      }
    }

    // Create group with members in a transaction
    const result = await db.$transaction(async (tx) => {
      // Create the group
      const group = await tx.group.create({
        data: {
          name,
          description,
          classId,
        },
        include: {
          class: {
            select: {
              id: true,
              name: true,
              code: true,
              semester: true,
            },
          },
        },
      });

      // Add members to the group
      if (memberIds.length > 0) {
        await tx.groupMember.createMany({
          data: memberIds.map((userId: string) => ({
            userId,
            groupId: group.id,
          })),
        });
      }

      // Return group with members
      return await tx.group.findUnique({
        where: { id: group.id },
        include: {
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
          },
          _count: {
            select: {
              members: true,
            },
          },
        },
      });
    });

    return NextResponse.json(
      {
        message: "Grupo criado com sucesso",
        group: result,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating group:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}


