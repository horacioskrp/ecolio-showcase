"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  // Horodatage d'ouverture du formulaire (anti-bot : délai minimal de remplissage).
  const startedAt = useRef<number>(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      school: fd.get("school"),
      subject: fd.get("subject"),
      message: fd.get("message"),
      company: fd.get("company"), // honeypot
      startedAt: startedAt.current,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.error ?? "Une erreur est survenue.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError("Impossible d'envoyer le message. Vérifiez votre connexion.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-600 mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-bold mb-2">Message envoyé !</h2>
        <p className="text-muted">
          Merci pour votre intérêt. Notre équipe vous recontacte au plus vite.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8 space-y-4" noValidate>
      {/* Honeypot anti-spam (caché aux humains) */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Ne pas remplir
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">Nom complet *</label>
          <input id="name" name="name" required minLength={2} autoComplete="name" className={inputCls} placeholder="Votre nom" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">E-mail *</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} placeholder="vous@exemple.com" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="school" className="block text-sm font-medium mb-1.5">Établissement</label>
          <input id="school" name="school" className={inputCls} placeholder="Nom de votre école" />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1.5">Sujet</label>
          <input id="subject" name="subject" className={inputCls} placeholder="Demande de démo, question…" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message *</label>
        <textarea id="message" name="message" required minLength={10} rows={5} className={`${inputCls} resize-y`} placeholder="Décrivez votre besoin (établissement, nombre d'élèves, objectifs…)" />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{error}</p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full sm:w-auto disabled:opacity-60">
        {status === "sending" ? (
          <>
            <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" /> Envoi…
          </>
        ) : (
          <>
            Envoyer le message <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-xs text-muted">
        Vos informations servent uniquement à traiter votre demande et ne sont jamais revendues.
      </p>
    </form>
  );
}
