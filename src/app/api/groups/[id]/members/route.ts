import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {try {
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
) {try {
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
    const { userId, userIds } = await req.json();

    // Support both single userId and multiple userIds
    const userIdsToAdd = userIds || (userId ? [userId] : []);

    if (!userIdsToAdd || userIdsToAdd.length === 0) {
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

    // Verify all users are students enrolled in the class
    const enrollments = await db.classEnrollment.findMany({
      where: {
        classId: group.classId,
        userId: { in: userIdsToAdd },
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

    if (enrollments.length !== userIdsToAdd.length) {
      const foundIds = enrollments.map((e) => e.userId);
      const notFound = userIdsToAdd.filter(
        (id: string) => !foundIds.includes(id)
      );
      return NextResponse.json(
        {
          message: "Alguns estudantes não estão matriculados nesta turma",
          notFound,
        },
        { status: 400 }
      );
    }

    // Check for existing members
    const existingMembers = await db.groupMember.findMany({
      where: {
        groupId: groupId,
        userId: { in: userIdsToAdd },
      },
    });

    const existingUserIds = existingMembers.map((m) => m.userId);
    const newUserIds = userIdsToAdd.filter(
      (id: string) => !existingUserIds.includes(id)
    );

    if (newUserIds.length === 0) {
      return NextResponse.json(
        { message: "Todos os estudantes já são membros deste grupo" },
        { status: 400 }
      );
    }

    // Add members to group
    const newMembers = await db.groupMember.createMany({
      data: newUserIds.map((userId: string) => ({
        groupId: groupId,
        userId: userId,
      })),
    });

    // Fetch the created members with user details
    const createdMembers = await db.groupMember.findMany({
      where: {
        groupId: groupId,
        userId: { in: newUserIds },
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
        message: `${newMembers.count} membro${
          newMembers.count !== 1 ? "s" : ""
        } adicionado${newMembers.count !== 1 ? "s" : ""} com sucesso`,
        members: createdMembers,
        alreadyMembers: existingUserIds.length,
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

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    // Only professors can remove members from groups
    if (session.user.role !== "PROFESSOR") {
      return NextResponse.json(
        { message: "Apenas professores podem remover membros dos grupos" },
        { status: 403 }
      );
    }

    const { id: groupId } = await params;
    const { memberIds } = await req.json();

    if (!memberIds || !Array.isArray(memberIds) || memberIds.length === 0) {
      return NextResponse.json(
        { message: "IDs dos membros são obrigatórios" },
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
    });

    if (!group) {
      return NextResponse.json(
        { message: "Grupo não encontrado ou você não tem permissão" },
        { status: 404 }
      );
    }

    // Remove members from group
    const result = await db.groupMember.deleteMany({
      where: {
        id: { in: memberIds },
        groupId: groupId,
      },
    });

    return NextResponse.json({
      message: `${result.count} membro${
        result.count !== 1 ? "s" : ""
      } removido${result.count !== 1 ? "s" : ""} com sucesso`,
      removed: result.count,
    });
  } catch (error) {
    console.error("Error removing group members:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
