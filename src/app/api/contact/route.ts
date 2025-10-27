import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const to = process.env.CONTACT_RECIPIENT || "shelteraidtx@gmail.com";

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

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Shelter Aid TX <contact@shelteraidtx.org>",
      to: [to],
      replyTo: email,
      subject: subjectWithInquiry,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Unable to send message. Please try again later." },
        { status: 500 }
      );
    }

    console.log("✅ Email sent successfully via Resend:", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { error: "Unable to send message. Please try again later." },
      { status: 500 }
    );
  }
}
