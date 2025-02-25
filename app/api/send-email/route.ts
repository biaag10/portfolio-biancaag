import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configuração do transporte de e-mail usando o Outlook
const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: process.env.EMAIL_USER, // Seu e-mail
    pass: process.env.EMAIL_PASS, // Senha ou App Password
  },
});

export async function POST(req: Request) {
  try {
    const { nome, email, mensagem } = await req.json();

    // Validação dos campos
    if (!nome || !email || !mensagem) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 });
    }

    // Envio do e-mail
    await transporter.sendMail({
      from: `"${nome}" <${email}>`, // Quem está enviando
      to: process.env.EMAIL_USER, // Seu e-mail para receber mensagens
      subject: "Nova mensagem do formulário de contato",
      text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
      html: `<p><strong>Nome:</strong> ${nome}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensagem:</strong> ${mensagem}</p>`,
    });

    return NextResponse.json({ message: "E-mail enviado com sucesso!" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json({ error: "Falha ao enviar o e-mail" }, { status: 500 });
  }
}
