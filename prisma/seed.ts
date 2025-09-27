import { PrismaClient, UserRole, FeedbackType } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Create admin user
  const adminPassword = await hash("admin123", 12);
  await prisma.user.upsert({
    where: { email: "admin@fei.edu.br" },
    update: {},
    create: {
      name: "Administrador FEI",
      email: "admin@fei.edu.br",
      password: adminPassword,
      role: UserRole.ADMIN,
    },
  });
  console.log("✅ Admin user created");

  // Create professors
  const professorPassword = await hash("professor123", 12);
  const professors = await Promise.all([
    prisma.user.upsert({
      where: { email: "joao.silva@fei.edu.br" },
      update: {},
      create: {
        name: "Dr. João Silva",
        email: "joao.silva@fei.edu.br",
        password: professorPassword,
        role: UserRole.PROFESSOR,
      },
    }),
    prisma.user.upsert({
      where: { email: "maria.costa@fei.edu.br" },
      update: {},
      create: {
        name: "Dra. Maria Costa",
        email: "maria.costa@fei.edu.br",
        password: professorPassword,
        role: UserRole.PROFESSOR,
      },
    }),
    prisma.user.upsert({
      where: { email: "carlos.lima@fei.edu.br" },
      update: {},
      create: {
        name: "Dr. Carlos Lima",
        email: "carlos.lima@fei.edu.br",
        password: professorPassword,
        role: UserRole.PROFESSOR,
      },
    }),
  ]);
  console.log("✅ Professors created");

  // Create students
  const studentPassword = await hash("student123", 12);
  const students = await Promise.all([
    prisma.user.upsert({
      where: { email: "maria.silva@fei.edu.br" },
      update: {},
      create: {
        name: "Maria Silva",
        email: "maria.silva@fei.edu.br",
        password: studentPassword,
        role: UserRole.STUDENT,
        studentId: "22.12345-6",
      },
    }),
    prisma.user.upsert({
      where: { email: "joao.santos@fei.edu.br" },
      update: {},
      create: {
        name: "João Santos",
        email: "joao.santos@fei.edu.br",
        password: studentPassword,
        role: UserRole.STUDENT,
        studentId: "22.12346-7",
      },
    }),
    prisma.user.upsert({
      where: { email: "ana.costa@fei.edu.br" },
      update: {},
      create: {
        name: "Ana Costa",
        email: "ana.costa@fei.edu.br",
        password: studentPassword,
        role: UserRole.STUDENT,
        studentId: "22.12347-8",
      },
    }),
    prisma.user.upsert({
      where: { email: "carlos.oliveira@fei.edu.br" },
      update: {},
      create: {
        name: "Carlos Oliveira",
        email: "carlos.oliveira@fei.edu.br",
        password: studentPassword,
        role: UserRole.STUDENT,
        studentId: "22.12348-9",
      },
    }),
    prisma.user.upsert({
      where: { email: "lucia.fernandes@fei.edu.br" },
      update: {},
      create: {
        name: "Lucia Fernandes",
        email: "lucia.fernandes@fei.edu.br",
        password: studentPassword,
        role: UserRole.STUDENT,
        studentId: "22.12349-0",
      },
    }),
    prisma.user.upsert({
      where: { email: "pedro.rodrigues@fei.edu.br" },
      update: {},
      create: {
        name: "Pedro Rodrigues",
        email: "pedro.rodrigues@fei.edu.br",
        password: studentPassword,
        role: UserRole.STUDENT,
        studentId: "22.12350-1",
      },
    }),
  ]);
  console.log("✅ Students created");

  // Create classes
  const classes = await Promise.all([
    prisma.class.upsert({
      where: { code: "CC6NA" },
      update: {},
      create: {
        name: "Engenharia de Software",
        code: "CC6NA",
        description: "Disciplina de Engenharia de Software para o 6º semestre",
        semester: "2024-2",
        professorId: professors[0].id,
      },
    }),
    prisma.class.upsert({
      where: { code: "CC4NA" },
      update: {},
      create: {
        name: "Estruturas de Dados",
        code: "CC4NA",
        description: "Disciplina de Estruturas de Dados para o 4º semestre",
        semester: "2024-2",
        professorId: professors[1].id,
      },
    }),
    prisma.class.upsert({
      where: { code: "CC5NA" },
      update: {},
      create: {
        name: "Banco de Dados",
        code: "CC5NA",
        description: "Disciplina de Banco de Dados para o 5º semestre",
        semester: "2024-2",
        professorId: professors[2].id,
      },
    }),
  ]);
  console.log("✅ Classes created");

  // Enroll students in classes
  const enrollments = [];
  // CC6NA - Engenharia de Software (students 0, 1, 2)
  for (let i = 0; i < 3; i++) {
    enrollments.push(
      prisma.classEnrollment.upsert({
        where: {
          userId_classId: {
            userId: students[i].id,
            classId: classes[0].id,
          },
        },
        update: {},
        create: {
          userId: students[i].id,
          classId: classes[0].id,
        },
      })
    );
  }

  // CC4NA - Estruturas de Dados (students 2, 3, 4)
  for (let i = 2; i < 5; i++) {
    enrollments.push(
      prisma.classEnrollment.upsert({
        where: {
          userId_classId: {
            userId: students[i].id,
            classId: classes[1].id,
          },
        },
        update: {},
        create: {
          userId: students[i].id,
          classId: classes[1].id,
        },
      })
    );
  }

  // CC5NA - Banco de Dados (students 4, 5, 0)
  const cc5Students = [students[4], students[5], students[0]];
  for (const student of cc5Students) {
    enrollments.push(
      prisma.classEnrollment.upsert({
        where: {
          userId_classId: {
            userId: student.id,
            classId: classes[2].id,
          },
        },
        update: {},
        create: {
          userId: student.id,
          classId: classes[2].id,
        },
      })
    );
  }

  await Promise.all(enrollments);
  console.log("✅ Student enrollments created");

  // Create groups
  const groups = await Promise.all([
    // CC6NA groups
    prisma.group.upsert({
      where: { id: "group-alpha" },
      update: {},
      create: {
        id: "group-alpha",
        name: "Grupo Alpha",
        description: "Sistema Web de Gestão",
        classId: classes[0].id,
      },
    }),
    prisma.group.upsert({
      where: { id: "group-beta" },
      update: {},
      create: {
        id: "group-beta",
        name: "Grupo Beta",
        description: "App Mobile E-commerce",
        classId: classes[0].id,
      },
    }),
    // CC4NA groups
    prisma.group.upsert({
      where: { id: "group-delta" },
      update: {},
      create: {
        id: "group-delta",
        name: "Grupo Delta",
        description: "Implementação Árvore AVL",
        classId: classes[1].id,
      },
    }),
    // CC5NA groups
    prisma.group.upsert({
      where: { id: "group-gamma" },
      update: {},
      create: {
        id: "group-gamma",
        name: "Grupo Gamma",
        description: "Sistema CRUD",
        classId: classes[2].id,
      },
    }),
  ]);
  console.log("✅ Groups created");

  // Add group members
  const groupMemberships = [
    // Group Alpha (CC6NA): Maria, João
    { userId: students[0].id, groupId: groups[0].id },
    { userId: students[1].id, groupId: groups[0].id },

    // Group Beta (CC6NA): Ana
    { userId: students[2].id, groupId: groups[1].id },

    // Group Delta (CC4NA): Ana, Carlos, Lucia
    { userId: students[2].id, groupId: groups[2].id },
    { userId: students[3].id, groupId: groups[2].id },
    { userId: students[4].id, groupId: groups[2].id },

    // Group Gamma (CC5NA): Lucia, Pedro, Maria
    { userId: students[4].id, groupId: groups[3].id },
    { userId: students[5].id, groupId: groups[3].id },
    { userId: students[0].id, groupId: groups[3].id },
  ];

  for (const membership of groupMemberships) {
    await prisma.groupMember.upsert({
      where: {
        userId_groupId: {
          userId: membership.userId,
          groupId: membership.groupId,
        },
      },
      update: {},
      create: membership,
    });
  }
  console.log("✅ Group memberships created");

  // Create sample feedback
  const feedbackData = [
    {
      content:
        "Excelente colaboração no desenvolvimento do front-end. Sempre disposto a ajudar.",
      type: FeedbackType.POSITIVE,
      points: 15,
      category: "colaboração",
      giverId: students[1].id, // João
      receiverId: students[0].id, // Maria
    },
    {
      content: "Boa comunicação e pontualidade nas reuniões.",
      type: FeedbackType.POSITIVE,
      points: 10,
      category: "comunicação",
      giverId: students[0].id, // Maria
      receiverId: students[1].id, // João
    },
    {
      content: "Poderia ser mais proativo na documentação do código.",
      type: FeedbackType.IMPROVEMENT,
      points: -5,
      category: "contribuição",
      giverId: students[2].id, // Ana
      receiverId: students[0].id, // Maria
    },
    {
      content: "Excelente liderança na organização das tarefas do grupo.",
      type: FeedbackType.POSITIVE,
      points: 12,
      category: "colaboração",
      giverId: students[3].id, // Carlos
      receiverId: students[4].id, // Lucia
    },
    {
      content: "Muito dedicada e sempre entrega no prazo.",
      type: FeedbackType.POSITIVE,
      points: 10,
      category: "pontualidade",
      giverId: students[4].id, // Lucia
      receiverId: students[2].id, // Ana
    },
  ];

  for (const feedback of feedbackData) {
    const createdFeedback = await prisma.feedback.create({
      data: feedback,
    });

    // Create corresponding point transaction
    await prisma.pointTransaction.create({
      data: {
        userId: feedback.receiverId,
        points: feedback.points,
        description: `Feedback ${
          feedback.type === "POSITIVE" ? "positivo" : "de melhoria"
        }`,
        feedbackId: createdFeedback.id,
      },
    });
  }
  console.log("✅ Sample feedback and point transactions created");

  // Create rewards
  const rewards = [
    {
      name: "Mac FEI - 10% desconto",
      description: "10% de desconto em qualquer lanche no Mac FEI",
      pointsCost: 100,
      partner: "Mac FEI",
    },
    {
      name: "Jujuca - 15% desconto",
      description: "15% de desconto em qualquer produto da Jujuca",
      pointsCost: 150,
      partner: "Jujuca",
    },
    {
      name: "Miyagi-san - 20% desconto",
      description: "20% de desconto em qualquer prato no Miyagi-san",
      pointsCost: 200,
      partner: "Miyagi-san",
    },
    {
      name: "Augustus - 25% desconto",
      description: "25% de desconto em qualquer item no Augustus",
      pointsCost: 300,
      partner: "Augustus",
    },
  ];

  for (const reward of rewards) {
    await prisma.reward.create({
      data: reward,
    });
  }
  console.log("✅ Rewards created");

  console.log("🎉 Database seed completed!");
  console.log("\n📝 Login credentials:");
  console.log("Admin: admin@fei.edu.br / admin123");
  console.log("Professor: joao.silva@fei.edu.br / professor123");
  console.log("Student: maria.silva@fei.edu.br / student123");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
