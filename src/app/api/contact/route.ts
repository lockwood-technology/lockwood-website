import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const companyName = (body.company || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_EMAIL || "info@lockwood.co.tz";
  const from = process.env.SMTP_FROM || "non-reply@lockwood.co.tz";

  if (!host || !user || !pass) {
    console.error("SMTP not configured");
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const html = `
    <div style="font-family:'DM Sans',Arial,sans-serif;color:#111;max-width:520px;margin:0 auto;padding:24px;">
      <div style="border-bottom:3px solid #1F49FF;padding-bottom:12px;margin-bottom:20px;">
        <div style="font-weight:800;font-size:20px;color:#1F49FF;">Lockwood</div>
        <div style="font-size:12px;color:#888;">New contact enquiry</div>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;color:#888;width:120px;">Name</td><td style="padding:6px 0;font-weight:600;">${escape(name)}</td></tr>
        <tr><td style="padding:6px 0;color:#888;">Email</td><td style="padding:6px 0;">${escape(email)}</td></tr>
        ${companyName ? `<tr><td style="padding:6px 0;color:#888;">Company</td><td style="padding:6px 0;">${escape(companyName)}</td></tr>` : ""}
      </table>
      <div style="margin-top:20px;padding:16px;background:#F7F7F8;border-radius:8px;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escape(message)}</div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Lockwood enquiry from ${name}${companyName ? ` (${companyName})` : ""}`,
      html,
      text: `From: ${name} <${email}>\nCompany: ${companyName || "-"}\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail error", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
