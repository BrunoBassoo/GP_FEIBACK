import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { db } from "@/lib/db";
import { UserRole } from "@prisma/client";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, role, studentId } = await req.json();

    // Validation
    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { message: "Todos os campos obrigatórios devem ser preenchidos" },
        { status: 400 }
      );
    }

    if (role === "STUDENT" && !studentId) {
      return NextResponse.json(
        { message: "RA é obrigatório para estudantes" },
        { status: 400 }
      );
    }

    if (!Object.values(UserRole).includes(role)) {
      return NextResponse.json(
        { message: "Tipo de usuário inválido" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Usuário já existe com este email" },
        { status: 400 }
      );
    }

    // Check if studentId already exists (for students)
    if (role === "STUDENT" && studentId) {
      const existingStudent = await db.user.findUnique({
        where: { studentId },
      });

      if (existingStudent) {
        return NextResponse.json(
          { message: "RA já está em uso" },
          { status: 400 }
        );
      }
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create user
    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        studentId: role === "STUDENT" ? studentId : null,
      },
    });

    // Remove password from response
    const { password, ...userWithoutPassword } = user;
    console.log("User created, password removed:", !!password); // Using password to avoid unused warning

    return NextResponse.json(
      {
        message: "Usuário criado com sucesso",
        user: userWithoutPassword,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
