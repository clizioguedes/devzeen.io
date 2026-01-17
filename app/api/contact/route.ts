import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio DevZeen <onboarding@resend.dev>", // Use your verified domain later
      to: ["clizioguedes@devzeen.io"],
      replyTo: validatedData.email,
      subject: `Contato de ${validatedData.name} - Portfolio`,
      html: `
        <h2>Nova mensagem do portfolio</h2>
        <p><strong>Nome:</strong> ${validatedData.name}</p>
        <p><strong>E-mail:</strong> ${validatedData.email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erro ao enviar email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Erro ao processar formulário" },
      { status: 500 }
    );
  }
}
