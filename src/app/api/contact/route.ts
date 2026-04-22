import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/db";

// configurar transporte de email (usar variables de entorno)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, phone } = body;

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Guardar en base de datos
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject,
        message,
        read: false
      }
    });

    // Enviar email de confirmación al usuario
    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || "noreply@fichaje.app",
        to: email,
        subject: "Hemos recibido tu mensaje - Fichaje SaaS",
        html: `
          <h2>Hola ${name},</h2>
          <p>Hemos recibido tu mensaje correctamente.</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <p>Nuestro equipo te responderá lo antes posible, normalmente en menos de 2 horas durante horario laboral (L-V 9:00-18:00 CET).</p>
          <hr/>
          <p><strong>Datos de tu mensaje:</strong></p>
          <p>${message}</p>
          <hr/>
          <p>Saludos,<br/>El equipo de Fichaje SaaS</p>
        `
      });
    } catch (emailError) {
      console.error("Error enviando email de confirmación:", emailError);
    }

    // Enviar email al admin
    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || "noreply@fichaje.app",
        to: process.env.ADMIN_EMAIL || "admin@fichaje.app",
        subject: `Nuevo mensaje de contacto: ${subject}`,
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <hr/>
          <p><strong>Mensaje:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
          <hr/>
          <p>Responde directamente a este email.</p>
        `
      });
    } catch (emailError) {
      console.error("Error enviando email del admin:", emailError);
    }

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente",
      id: contactMessage.id
    });

  } catch (error) {
    console.error("Error procesando contacto:", error);
    return NextResponse.json(
      { error: "Error procesando tu solicitud" },
      { status: 500 }
    );
  }
}
