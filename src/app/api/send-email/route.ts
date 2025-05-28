import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message, to } = await req.json();
     
//   console.log("Received data:", { name, email, message, to });
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Agrobuild Web" <${process.env.SMTP_USER}>`,
      to: to || process.env.SMTP_USER,
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
    // console.error("Email error:", error);
    return NextResponse.json(
      { ok: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
