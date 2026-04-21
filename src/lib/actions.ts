"use server";

import { prisma } from "@/lib/db";
import { hashPassword, verifyPassword } from "@/lib/auth";
import { z } from "zod";

const RegisterSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "Mínimo 8 caracteres"),
  confirmPassword: z.string(),
  name: z.string().min(2, "Nombre requerido"),
  role: z.enum(["OWNER", "EMPLOYEE"]),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export async function registerUser(formData: any) {
  try {
    const validated = RegisterSchema.parse(formData);

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validated.email }
    });

    if (existingUser) {
      return { error: "El email ya está registrado" };
    }

    const hashedPassword = await hashPassword(validated.password);

    const user = await prisma.user.create({
      data: {
        email: validated.email,
        password: hashedPassword,
        name: validated.name,
        role: validated.role,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      }
    });

    return { success: true, user };
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return { error: error.errors[0].message };
    }
    return { error: "Error al registrar usuario" };
  }
}

const LoginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(1, "Contraseña requerida"),
});

export async function loginUser(formData: any) {
  try {
    const validated = LoginSchema.parse(formData);

    const user = await prisma.user.findUnique({
      where: { email: validated.email }
    });

    if (!user) {
      return { error: "Email o contraseña incorrectos" };
    }

    const passwordValid = await verifyPassword(validated.password, user.password);

    if (!passwordValid) {
      return { error: "Email o contraseña incorrectos" };
    }

    return { 
      success: true, 
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      }
    };
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return { error: error.errors[0].message };
    }
    return { error: "Error al iniciar sesión" };
  }
}
