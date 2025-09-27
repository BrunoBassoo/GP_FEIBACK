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

    const { id: groupId } = await params;

    // Verify group exists and user has access
    let group;

    if (session.user.role === "PROFESSOR") {
      // Professors can see members of groups from their classes
      group = await db.group.findFirst({
        where: {
          id: groupId,
          class: {
            professorId: session.user.id,
          },
        },
        include: {
          class: {
            select: {
              id: true,
              name: true,
              code: true,
            },
          },
        },
      });
    } else if (session.user.role === "STUDENT") {
      // Students can only see members of groups they belong to
      group = await db.group.findFirst({
        where: {
          id: groupId,
          members: {
            some: {
              userId: session.user.id,
            },
          },
        },
        include: {
          class: {
            select: {
              id: true,
              name: true,
              code: true,
            },
          },
        },
      });
    } else if (session.user.role === "ADMIN") {
      // Admins can see all groups
      group = await db.group.findUnique({
        where: { id: groupId },
        include: {
          class: {
            select: {
              id: true,
              name: true,
              code: true,
            },
          },
        },
      });
    }

    if (!group) {
      return NextResponse.json(
        { message: "Grupo não encontrado ou acesso negado" },
        { status: 404 }
      );
    }

    // Get group members
    const members = await db.groupMember.findMany({
      where: {
        groupId: groupId,
      },
      select: {
        id: true,
        joinedAt: true,
        user: {
          select: {
            id: true,
            name: true,
            studentId: true,
            createdAt: true,
            // Include feedback stats for each member
            _count: {
              select: {
                feedbackGiven: true,
                feedbackReceived: true,
              },
            },
          },
        },
      },
      orderBy: {
        joinedAt: "asc",
      },
    });

    // If student is requesting, filter out sensitive information
    const filteredMembers =
      session.user.role === "STUDENT"
        ? members.map((member) => ({
            ...member,
            user: {
              id: member.user.id,
              name: member.user.name,
              studentId: member.user.studentId,
              // Don't expose creation date and counts to other students
            },
          }))
        : members;

    return NextResponse.json({
      group,
      members: filteredMembers,
    });
  } catch (error) {
    console.error("Error fetching group members:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    // Only professors can add members to groups
    if (session.user.role !== "PROFESSOR") {
      return NextResponse.json(
        { message: "Apenas professores podem adicionar membros aos grupos" },
        { status: 403 }
      );
    }

    const { id: groupId } = await params;
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { message: "ID do usuário é obrigatório" },
        { status: 400 }
      );
    }

    // Verify group belongs to the professor
    const group = await db.group.findFirst({
      where: {
        id: groupId,
        class: {
          professorId: session.user.id,
        },
      },
      include: {
        class: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },
      },
    });

    if (!group) {
      return NextResponse.json(
        { message: "Grupo não encontrado ou você não tem permissão" },
        { status: 404 }
      );
    }

    // Verify user is a student enrolled in the class
    const enrollment = await db.classEnrollment.findFirst({
      where: {
        classId: group.classId,
        userId: userId,
        user: { role: "STUDENT" },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            studentId: true,
          },
        },
      },
    });

    if (!enrollment) {
      return NextResponse.json(
        { message: "Estudante não está matriculado nesta turma" },
        { status: 400 }
      );
    }

    // Check if user is already a member
    const existingMember = await db.groupMember.findFirst({
      where: {
        groupId: groupId,
        userId: userId,
      },
    });

    if (existingMember) {
      return NextResponse.json(
        { message: "Estudante já é membro deste grupo" },
        { status: 400 }
      );
    }

    // Add member to group
    const newMember = await db.groupMember.create({
      data: {
        groupId: groupId,
        userId: userId,
      },
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
    });

    return NextResponse.json(
      {
        message: "Membro adicionado com sucesso",
        member: newMember,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding group member:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
