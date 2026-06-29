import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const esc = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const clean = (s: unknown) => String(s ?? "").replace(/[\r\n]+/g, " ").trim();

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const school = clean(body.school);
  const subject = clean(body.subject);
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.company ?? "").trim();
  const startedAt = Number(body.startedAt ?? 0);

  // 1) Honeypot : un bot remplit ce champ caché → on accepte en silence (sans envoyer).
  if (honeypot !== "") {
    return NextResponse.json({ ok: true });
  }

  // 2) Délai minimal de remplissage (anti-bot).
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(elapsed) || elapsed < 2500) {
    return NextResponse.json({ error: "Soumission trop rapide, veuillez réessayer." }, { status: 429 });
  }

  // 3) Validation des champs.
  if (name.length < 2) return NextResponse.json({ error: "Veuillez indiquer votre nom." }, { status: 422 });
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Adresse e-mail invalide." }, { status: 422 });
  if (message.length < 10) return NextResponse.json({ error: "Votre message est trop court." }, { status: 422 });
  if (message.length > 5000) return NextResponse.json({ error: "Votre message est trop long." }, { status: 422 });

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_RECIPIENT || "hervekudayah@gmail.com";
  const from = process.env.MAIL_FROM || user;

  if (!host || !user || !pass || !from) {
    console.error("[contact] SMTP non configuré (SMTP_HOST/SMTP_USER/SMTP_PASS/MAIL_FROM).");
    return NextResponse.json({ error: "Service e-mail non configuré." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465 || process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      to,
      // Expéditeur = adresse authentifiée (anti-spoofing / délivrabilité) ;
      // Reply-To = visiteur, pour répondre directement.
      from: `Site Dalibi <${from}>`,
      replyTo: `${name} <${email}>`,
      subject: `[Contact Dalibi] ${subject || "Nouvelle demande"} — ${name}`,
      text: `Nom: ${name}\nE-mail: ${email}\nÉtablissement: ${school || "—"}\nSujet: ${subject || "—"}\n\n${message}`,
      html: `
        <div style="font-family:system-ui,Segoe UI,Arial,sans-serif;color:#0f172a">
          <h2 style="margin:0 0 12px">Nouvelle demande de contact</h2>
          <table style="border-collapse:collapse;font-size:14px">
            <tr><td style="padding:4px 12px 4px 0;color:#64748b">Nom</td><td><strong>${esc(name)}</strong></td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#64748b">E-mail</td><td>${esc(email)}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#64748b">Établissement</td><td>${esc(school) || "—"}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#64748b">Sujet</td><td>${esc(subject) || "—"}</td></tr>
          </table>
          <p style="margin:16px 0 6px;color:#64748b">Message</p>
          <div style="white-space:pre-wrap;border-left:3px solid #1d71b8;padding:8px 12px;background:#f8fafc">${esc(message)}</div>
        </div>`,
    });
  } catch (err) {
    console.error("[contact] Envoi e-mail échoué :", err);
    return NextResponse.json({ error: "Envoi impossible pour le moment. Réessayez plus tard." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
