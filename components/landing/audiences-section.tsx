"use client";

import clsx from "clsx";
import { Check } from "lucide-react";
import { useState } from "react";
import { audiences } from "./data";
import { DecorBlobs } from "./illustrations";

const accents: Record<string, { tile: string; bar: string; dot: string }> = {
  direction: { tile: "bg-blue-500/10 text-blue-600", bar: "from-blue-500 to-blue-300", dot: "bg-blue-500/15 text-blue-600" },
  enseignants: { tile: "bg-violet-500/10 text-violet-600", bar: "from-violet-500 to-violet-300", dot: "bg-violet-500/15 text-violet-600" },
  administration: { tile: "bg-amber-500/10 text-amber-600", bar: "from-amber-500 to-amber-300", dot: "bg-amber-500/15 text-amber-600" },
  familles: { tile: "bg-emerald-500/10 text-emerald-600", bar: "from-emerald-500 to-emerald-300", dot: "bg-emerald-500/15 text-emerald-600" },
};

function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-surface">
        <span className="w-2 h-2 rounded-full bg-red-400/60" />
        <span className="w-2 h-2 rounded-full bg-amber-400/60" />
        <span className="w-2 h-2 rounded-full bg-emerald-400/60" />
        <span className="ml-2 text-[11px] text-muted">{label}</span>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

function RolePreview({ id }: { id: string }) {
  if (id === "direction") {
    return (
      <Frame label="Tableau de bord">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { v: "1 248", l: "Élèves", c: "text-blue-600 bg-blue-500/10" },
            { v: "84 %", l: "Encaissé", c: "text-emerald-600 bg-emerald-500/10" },
            { v: "96 %", l: "Présence", c: "text-violet-600 bg-violet-500/10" },
          ].map((k) => (
            <div key={k.l} className={`rounded-lg p-2 ${k.c}`}>
              <div className="text-sm font-bold leading-none">{k.v}</div>
              <div className="text-[10px] text-muted mt-1">{k.l}</div>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-1.5 h-16">
          {[40, 62, 48, 78, 56, 88, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-linear-to-t from-brand-1 to-brand-3" style={{ height: `${h}%`, opacity: 0.55 + i * 0.06 }} />
          ))}
        </div>
      </Frame>
    );
  }
  if (id === "enseignants") {
    return (
      <Frame label="Saisie des notes — 3ᵉ A">
        <div className="space-y-2">
          {[
            ["Akouvi M.", "16"],
            ["Kossi A.", "13"],
            ["Aféfa D.", "14,5"],
            ["Yawo T.", "11"],
          ].map(([n, note]) => (
            <div key={n} className="flex items-center justify-between text-xs">
              <span className="text-foreground/80">{n}</span>
              <span className="font-semibold px-2 py-0.5 rounded bg-violet-500/15 text-violet-600">{note}</span>
            </div>
          ))}
        </div>
      </Frame>
    );
  }
  if (id === "administration") {
    return (
      <Frame label="Écolage & reçus">
        <div className="space-y-2">
          {[
            ["Kossi A.", "75 000 F", "Soldé", "bg-emerald-500/15 text-emerald-600"],
            ["Aféfa D.", "40 000 F", "Partiel", "bg-amber-500/15 text-amber-600"],
            ["Yawo T.", "0 F", "Impayé", "bg-red-500/15 text-red-600"],
          ].map(([n, amt, st, c]) => (
            <div key={n} className="flex items-center justify-between text-xs">
              <span className="text-foreground/80">{n}</span>
              <span className="text-muted">{amt}</span>
              <span className={`font-medium px-2 py-0.5 rounded ${c}`}>{st}</span>
            </div>
          ))}
        </div>
      </Frame>
    );
  }
  return (
    <Frame label="Portail famille">
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between rounded-lg bg-emerald-500/10 px-2.5 py-2">
          <span className="text-foreground/80">Bulletin · Trimestre 1</span>
          <span className="font-bold text-emerald-600">14,2</span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-blue-500/10 px-2.5 py-2">
          <span className="text-foreground/80">Taux de présence</span>
          <span className="font-bold text-blue-600">96 %</span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-surface px-2.5 py-2">
          <span className="text-foreground/80">Solde scolarité</span>
          <span className="font-bold">25 000 F</span>
        </div>
      </div>
    </Frame>
  );
}

export function AudiencesSection() {
  const [active, setActive] = useState(0);
  const current = audiences[active];
  const accent = accents[current.id] ?? accents.direction;

  return (
    <section id="pour-qui" className="relative overflow-hidden py-20 md:py-28">
      <DecorBlobs />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-3 gs-fade-up">Pour chaque acteur de l&apos;école</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gs-fade-up">
            Une réponse adaptée à chaque rôle
          </h2>
          <p className="text-lg text-muted gs-fade-up">
            De la direction aux familles, chacun accède aux bons outils, avec les bonnes permissions.
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 gs-fade-up">
          {/* Sélecteur de rôles — rail vertical */}
          <div className="flex flex-col border-l border-border">
            {audiences.map((aud, i) => {
              const a = accents[aud.id] ?? accents.direction;
              const isActive = i === active;
              return (
                <button
                  key={aud.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={clsx(
                    "group flex items-center gap-3 -ml-px border-l-2 pl-5 pr-2 py-4 text-left transition",
                    isActive ? "border-primary" : "border-transparent hover:border-primary/30",
                  )}
                >
                  <span
                    className={clsx(
                      "inline-flex p-2 rounded-lg shrink-0 transition",
                      isActive ? a.tile : "bg-surface text-muted group-hover:text-foreground",
                    )}
                  >
                    <aud.icon className="w-5 h-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] text-muted">0{i + 1}</span>
                    <span className={clsx("block font-semibold text-sm transition", isActive ? "text-foreground" : "text-muted group-hover:text-foreground")}>
                      {aud.title}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Panneau détaillé (sans carte) */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className={`inline-flex p-3 rounded-xl ${accent.tile}`}>
                  <current.icon className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold">{current.title}</h3>
                  <p className="text-sm text-muted">{current.tagline}</p>
                </div>
              </div>
              <ul className="space-y-3.5">
                {current.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm">
                    <span className={`mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0 ${accent.dot}`}>
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <RolePreview id={current.id} />
          </div>
        </div>
      </div>
    </section>
  );
}
