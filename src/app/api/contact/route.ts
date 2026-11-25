import { NextResponse } from "next/server";
import { Resend } from "resend";
import { company } from "@/data/content";
import {
  escapeHtml,
  validateContactPayload,
  type ContactApiResponse,
} from "@/lib/contact";

export const runtime = "nodejs";

const DEFAULT_FROM = `${company.name} Website <onboarding@resend.dev>`;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json<ContactApiResponse>(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  // Silently accept honeypot triggers so automated bots do not retry.
  if (
    body &&
    typeof body === "object" &&
    "website" in body &&
    typeof (body as { website?: unknown }).website === "string" &&
    (body as { website: string }).website.trim().length > 0
  ) {
    return NextResponse.json<ContactApiResponse>({ ok: true });
  }

  const validation = validateContactPayload(body);
  if (!validation.valid) {
    return NextResponse.json<ContactApiResponse>(
      { ok: false, error: validation.error },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM;

  if (!apiKey || !toEmail) {
    console.error("[contact] Missing RESEND_API_KEY or CONTACT_TO_EMAIL environment variable.");
    return NextResponse.json<ContactApiResponse>(
      { ok: false, error: "Contact service is currently unavailable. Please email us directly." },
      { status: 500 },
    );
  }

  const { name, email, message } = validation.data;
  const resend = new Resend(apiKey);

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New inquiry from ${name} — ${company.name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin: 0 0 16px;">New website inquiry</h2>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin: 0 0 16px;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <div style="padding: 12px 16px; border-left: 3px solid #e10600; background: #f8f8f8;">
            ${safeMessage}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend API error:", error);
      return NextResponse.json<ContactApiResponse>(
        { ok: false, error: "Unable to send your message right now. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json<ContactApiResponse>({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error sending email:", err);
    return NextResponse.json<ContactApiResponse>(
      { ok: false, error: "Unable to send your message right now. Please try again later." },
      { status: 502 },
    );
  }
}

