import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  SMTP_SECURE,
  CONTACT_RECIPIENT,
  CONTACT_FROM,
} = process.env;

const transport = SMTP_HOST
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT ? Number(SMTP_PORT) : 587,
      secure: SMTP_SECURE === "true",
      auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
    })
  : nodemailer.createTransport({
      jsonTransport: true,
    });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, subject, inquiryType } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const normalizedInquiry: string =
      typeof inquiryType === "string" && inquiryType.trim().length > 0
        ? inquiryType.trim()
        : "general-question";

    const formattedInquiry = normalizedInquiry
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    const to = CONTACT_RECIPIENT || "shelteraidtx@gmail.com";
    const from =
      CONTACT_FROM ||
      (SMTP_USER ? `Shelter Aid TX <${SMTP_USER}>` : "Shelter Aid TX <no-reply@shelteraidtx.org>");

    const formattedSubject = subject?.trim()
      ? `[Shelter Aid TX] ${subject.trim()}`
      : "[Shelter Aid TX] Website Inquiry";

    const subjectWithInquiry =
      formattedInquiry && formattedInquiry.length > 0
        ? `${formattedSubject} - ${formattedInquiry}`
        : formattedSubject;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Inquiry Type: ${formattedInquiry}`,
      "",
      "Message:",
      message,
    ].join("\n");

    // Send email
    const result = await transport.sendMail({
      to,
      from,
      replyTo: email,
      subject: subjectWithInquiry,
      text,
    });

    // Log for development (remove in production)
    if (!SMTP_HOST) {
      console.log("\n📧 Contact Form Submission (DEV MODE - not actually sent):");
      console.log("To:", to);
      console.log("From:", from);
      console.log("Subject:", subjectWithInquiry);
      console.log("Message:\n", text);
      console.log("---\n");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { error: "Unable to send message. Please try again later." },
      { status: 500 }
    );
  }
}
