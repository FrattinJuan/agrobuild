import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const nodemailer = require("nodemailer");

  // Configura tu transporte SMTP
  const transporter = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io", // Ejemplo: smtp.gmail.com
    port: 587,
    secure: false,
    auth: {
      user: "consultas@agrobuild.com.ar",
      pass: "TU_PASSWORD", // Usa variables de entorno en producción
    },
  });

  try {
    await transporter.sendMail({
      from: `"Agrobuild Web" <consultas@agrobuild.com.ar>`,
      to: "consultas@agrobuild.com.ar",
      subject: "Nueva consulta desde Agrobuild",
      html: `
        <h3>Consulta desde Agrobuild</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
