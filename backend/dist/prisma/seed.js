"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../generated/prisma");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new prisma_1.PrismaClient();
async function main() {
    console.log('🌱 Iniciando seed do banco de dados...');
    const hashedPassword = await bcryptjs_1.default.hash('123456', 10);
    console.log('📋 Criando configurações do sistema...');
    await prisma.systemConfig.createMany({
        data: [
            {
                key: 'FEEDBACK_POINTS_PER_SUBMISSION',
                value: '10',
                type: 'NUMBER',
                category: 'POINTS',
                description: 'Pontos concedidos por cada feedback enviado',
                isPublic: true,
            },
            {
                key: 'MAX_FEEDBACK_PER_DAY',
                value: '5',
                type: 'NUMBER',
                category: 'LIMITS',
                description: 'Máximo de feedbacks que um usuário pode enviar por dia',
                isPublic: true,
            },
            {
                key: 'REWARD_REDEMPTION_COOLDOWN',
                value: '24',
                type: 'NUMBER',
                category: 'REWARDS',
                description: 'Tempo de espera em horas entre resgates de recompensas',
                isPublic: true,
            },
            {
                key: 'SYSTEM_NAME',
                value: 'FEIBACK',
                type: 'STRING',
                category: 'GENERAL',
                description: 'Nome do sistema',
                isPublic: true,
            },
            {
                key: 'SYSTEM_VERSION',
                value: '1.0.0',
                type: 'STRING',
                category: 'GENERAL',
                description: 'Versão do sistema',
                isPublic: true,
            },
        ],
    });
    console.log('👑 Criando usuário administrador...');
    const adminUser = await prisma.user.upsert({
        where: { email: 'admin@feiback.com' },
        update: {},
        create: {
            email: 'admin@feiback.com',
            password: hashedPassword,
            firstName: 'Admin',
            lastName: 'FEIBACK',
            role: 'ADMIN',
            status: 'ACTIVE',
            emailVerified: true,
            emailVerifiedAt: new Date(),
            lastLoginAt: new Date(),
        },
    });
    await prisma.admin.upsert({
        where: { userId: adminUser.id },
        update: {},
        create: {
            userId: adminUser.id,
        },
    });
    console.log('🎓 Criando usuários estudantes de exemplo...');
    const students = [
        {
            email: 'joao.silva@fei.edu.br',
            firstName: 'João',
            lastName: 'Silva',
            registerNumber: '2023001',
            course: 'Ciência da Computação',
            semester: '5',
        },
        {
            email: 'maria.santos@fei.edu.br',
            firstName: 'Maria',
            lastName: 'Santos',
            registerNumber: '2023002',
            course: 'Engenharia de Software',
            semester: '3',
        },
        {
            email: 'pedro.oliveira@fei.edu.br',
            firstName: 'Pedro',
            lastName: 'Oliveira',
            registerNumber: '2023003',
            course: 'Sistemas de Informação',
            semester: '7',
        },
    ];
    for (const studentData of students) {
        const user = await prisma.user.upsert({
            where: { email: studentData.email },
            update: {},
            create: {
                email: studentData.email,
                password: hashedPassword,
                firstName: studentData.firstName,
                lastName: studentData.lastName,
                role: 'STUDENT',
                status: 'ACTIVE',
                emailVerified: true,
                emailVerifiedAt: new Date(),
            },
        });
        await prisma.student.upsert({
            where: { userId: user.id },
            update: {},
            create: {
                userId: user.id,
                registerNumber: studentData.registerNumber,
                course: studentData.course,
                semester: studentData.semester,
                institution: 'FEI',
                campus: 'SBC',
                totalPoints: Math.floor(Math.random() * 500) + 100,
                level: Math.floor(Math.random() * 5) + 1,
            },
        });
        const student = await prisma.student.findUnique({
            where: { userId: user.id },
        });
        if (student) {
            await prisma.studentPoints.upsert({
                where: { studentId: student.id },
                update: {},
                create: {
                    studentId: student.id,
                    totalPoints: Math.floor(Math.random() * 500) + 100,
                    availablePoints: Math.floor(Math.random() * 200) + 50,
                    spentPoints: Math.floor(Math.random() * 300),
                    level: Math.floor(Math.random() * 5) + 1,
                },
            });
        }
    }
    console.log('👨‍🏫 Criando usuários professores...');
    const teachers = [
        {
            email: 'prof.ana@fei.edu.br',
            firstName: 'Ana',
            lastName: 'Costa',
            registerNumber: 'PROF001',
            department: 'Ciência da Computação',
        },
        {
            email: 'prof.carlos@fei.edu.br',
            firstName: 'Carlos',
            lastName: 'Rodrigues',
            registerNumber: 'PROF002',
            department: 'Engenharia de Software',
        },
    ];
    for (const teacherData of teachers) {
        const user = await prisma.user.upsert({
            where: { email: teacherData.email },
            update: {},
            create: {
                email: teacherData.email,
                password: hashedPassword,
                firstName: teacherData.firstName,
                lastName: teacherData.lastName,
                role: 'TEACHER',
                status: 'ACTIVE',
                emailVerified: true,
                emailVerifiedAt: new Date(),
            },
        });
        await prisma.teacher.upsert({
            where: { userId: user.id },
            update: {},
            create: {
                userId: user.id,
                registerNumber: teacherData.registerNumber,
                department: teacherData.department,
                isApproved: true,
                approvedAt: new Date(),
                approvedBy: adminUser.id,
            },
        });
    }
    console.log('📚 Criando disciplinas...');
    const subjects = [
        {
            name: 'Algoritmos e Estruturas de Dados',
            code: 'CC001',
            description: 'Fundamentos de algoritmos e estruturas de dados',
            department: 'Ciência da Computação',
        },
        {
            name: 'Desenvolvimento Web',
            code: 'CC002',
            description: 'Desenvolvimento de aplicações web modernas',
            department: 'Ciência da Computação',
        },
        {
            name: 'Inteligência Artificial',
            code: 'CC003',
            description: 'Fundamentos de IA e machine learning',
            department: 'Ciência da Computação',
        },
    ];
    for (const subjectData of subjects) {
        await prisma.subject.upsert({
            where: { code: subjectData.code },
            update: {},
            create: subjectData,
        });
    }
    console.log('👥 Criando grupos de trabalho...');
    const subjectsData = await prisma.subject.findMany();
    const teachersData = await prisma.teacher.findMany();
    const workGroups = [
        {
            name: 'Grupo de IA - Projeto Final',
            subjectId: subjectsData.find(s => s.code === 'CC003')?.id,
            teacherId: teachersData[0]?.id,
            maxMembers: 4,
            description: 'Grupo para desenvolvimento do projeto final de IA',
        },
        {
            name: 'Equipe Web Development',
            subjectId: subjectsData.find(s => s.code === 'CC002')?.id,
            teacherId: teachersData[1]?.id,
            maxMembers: 3,
            description: 'Equipe para projeto de desenvolvimento web',
        },
    ];
    for (const groupData of workGroups) {
        if (groupData.subjectId && groupData.teacherId) {
            await prisma.workGroup.create({
                data: {
                    name: groupData.name,
                    subjectId: groupData.subjectId,
                    teacherId: groupData.teacherId,
                    maxMembers: groupData.maxMembers,
                    description: groupData.description,
                },
            });
        }
    }
    console.log('🎁 Criando cupons de desconto...');
    const coupons = [
        {
            name: 'Desconto 10% na Cantina FEI',
            description: 'Desconto de 10% em qualquer item da cantina da FEI',
            partnerName: 'Cantina FEI',
            discount: '10% de desconto',
            pointsCost: 50,
            status: 'ACTIVE',
            maxRedemptions: 100,
            validFrom: new Date(),
            validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
        {
            name: 'Desconto 15% no Restaurante Universitário',
            description: 'Desconto de 15% no restaurante universitário da FEI',
            partnerName: 'Restaurante Universitário FEI',
            discount: '15% de desconto',
            pointsCost: 75,
            status: 'ACTIVE',
            maxRedemptions: 50,
            validFrom: new Date(),
            validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
        {
            name: 'Desconto 20% na Livraria FEI',
            description: 'Desconto de 20% em livros e materiais na livraria da FEI',
            partnerName: 'Livraria FEI',
            discount: '20% de desconto',
            pointsCost: 100,
            status: 'ACTIVE',
            maxRedemptions: 30,
            validFrom: new Date(),
            validUntil: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
        },
    ];
    for (const couponData of coupons) {
        await prisma.coupon.create({
            data: couponData,
        });
    }
    console.log('👥 Adicionando estudantes aos grupos...');
    const studentsData = await prisma.student.findMany();
    const workGroupsData = await prisma.workGroup.findMany();
    if (studentsData.length >= 3 && workGroupsData.length >= 2) {
        await prisma.workGroupMember.createMany({
            data: [
                {
                    workGroupId: workGroupsData[0].id,
                    studentId: studentsData[0].id,
                    role: 'LEADER',
                },
                {
                    workGroupId: workGroupsData[0].id,
                    studentId: studentsData[1].id,
                    role: 'MEMBER',
                },
                {
                    workGroupId: workGroupsData[0].id,
                    studentId: studentsData[2].id,
                    role: 'MEMBER',
                },
            ],
        });
        await prisma.workGroupMember.createMany({
            data: [
                {
                    workGroupId: workGroupsData[1].id,
                    studentId: studentsData[0].id,
                    role: 'COORDINATOR',
                },
                {
                    workGroupId: workGroupsData[1].id,
                    studentId: studentsData[1].id,
                    role: 'MEMBER',
                },
            ],
        });
    }
    console.log('✅ Seed concluído com sucesso!');
    console.log('📊 Dados criados:');
    console.log('   - 1 Administrador (admin@feiback.com / 123456)');
    console.log('   - 3 Estudantes de exemplo');
    console.log('   - 2 Professores de exemplo');
    console.log('   - 3 Disciplinas');
    console.log('   - 2 Grupos de trabalho');
    console.log('   - 3 Cupons de desconto');
    console.log('   - Configurações do sistema');
}
main()
    .catch((e) => {
    console.error('❌ Erro durante o seed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map