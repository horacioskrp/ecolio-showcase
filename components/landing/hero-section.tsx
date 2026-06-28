import { ArrowRight, BarChart3, CheckCircle2, GraduationCap, Sparkles, Users, Wallet } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { quickStats } from "./data";

const heroAvatarIds = ["avatar-1", "avatar-2", "avatar-3", "avatar-4"];

const kpis = [
  { label: "Total facturé", value: "12,4 M", icon: Wallet, bg: "bg-blue-500/10", text: "text-blue-600" },
  { label: "Encaissé", value: "84 %", icon: CheckCircle2, bg: "bg-emerald-500/10", text: "text-emerald-600" },
  { label: "Élèves", value: "1 248", icon: Users, bg: "bg-violet-500/10", text: "text-violet-600" },
];

const months = ["Avr", "Mai", "Jun", "Jul", "Aoû", "Sep"];

export function HeroSection() {
  return (
    <section id="accueil" className="relative overflow-hidden py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          {/* Colonne texte */}
          <div>
            <div className="flex flex-wrap items-center gap-2 gs-fade-up">
              <span className="badge">
                <Sparkles className="w-4 h-4" /> Logiciel de gestion scolaire
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-muted">
                <SiGithub className="w-3.5 h-3.5" /> Open source · GPL v3
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-[3.4rem] font-bold leading-[1.06] mt-6 mb-5 gs-fade-up">
              Pilotez toute votre école depuis un{" "}
              <span className="title-gradient">seul tableau de bord</span>
            </h1>

            <p className="text-lg text-muted max-w-xl mb-8 gs-fade-up">
              Inscriptions, notes, bulletins, trésorerie, présences et portail parents : Dalibi
              réunit toute la vie scolaire dans une plateforme claire, rapide et sécurisée.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10 gs-fade-up">
              <a href="#contact" className="btn btn-primary text-base px-6 py-3.5">
                Demander une démo gratuite <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#modules" className="btn btn-secondary text-base px-6 py-3.5">
                Voir les fonctionnalités
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 gs-fade-up">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {heroAvatarIds.map((id) => (
                    <div
                      key={id}
                      className="w-9 h-9 rounded-full bg-linear-to-br from-brand-1 to-brand-3 border-2 border-background"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted">
                  Conçu pour les écoles
                  <br className="hidden sm:block" /> d&apos;Afrique de l&apos;Ouest
                </p>
              </div>

              <div className="flex gap-6">
                {quickStats.slice(0, 2).map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne aperçu produit — fidèle au tableau de bord Dalibi */}
          <div className="relative gs-fade-up">
            <div className="absolute -inset-6 bg-linear-to-tr from-brand-3/20 to-brand-1/10 blur-3xl rounded-[2rem] -z-10" />

            {/* Pastilles décoratives */}
            <span className="hidden md:block absolute -top-3 right-12 w-3 h-3 rounded-full bg-brand-2/60" aria-hidden />
            <span className="hidden md:block absolute bottom-10 -left-3 w-2.5 h-2.5 rounded-full bg-emerald-400/70" aria-hidden />

            {/* Carte flottante : bulletin validé */}
            <div className="float-soft hidden sm:flex items-center gap-3 absolute -top-5 -right-3 md:-right-6 z-20 card px-3.5 py-2.5 shadow-xl">
              <div className="inline-flex p-2 rounded-xl bg-linear-to-br from-violet-500 to-purple-500 text-white shadow-md shadow-violet-500/30">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold leading-none">Bulletin validé</div>
                <div className="text-[11px] text-muted mt-0.5">Moyenne 14,2 · 3ᵉ A</div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>

            {/* Carte flottante : paiement reçu */}
            <div className="float-soft-delayed hidden sm:flex items-center gap-3 absolute -bottom-5 -left-3 md:-left-6 z-20 card px-3.5 py-2.5 shadow-xl">
              <div className="inline-flex p-2 rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/30">
                <Wallet className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold leading-none">Paiement reçu</div>
                <div className="text-[11px] text-muted mt-0.5">+ 75 000 F · reçu n°1042</div>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-600 -rotate-45" />
            </div>

            {/* Fenêtre application */}
            <div className="card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-amber-400/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
                <span className="ml-3 text-xs text-muted">Dalibi — Tableau de bord</span>
              </div>

              <div className="p-4 sm:p-5 space-y-4">
                {/* En-tête */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold">Tableau de bord</div>
                    <div className="text-[11px] text-muted">Année scolaire 2024-2025 · Directeur</div>
                  </div>
                  <span className="text-[11px] font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1">
                    2024-2025
                  </span>
                </div>

                {/* KPIs */}
                <div className="grid grid-cols-3 gap-3">
                  {kpis.map((k) => (
                    <div key={k.label} className={`rounded-xl p-3 ${k.bg}`}>
                      <div className="flex items-start justify-between">
                        <div className="min-w-0">
                          <p className="text-[9px] uppercase tracking-wide text-muted truncate">{k.label}</p>
                          <p className={`text-base font-bold mt-1 ${k.text}`}>{k.value}</p>
                        </div>
                        <k.icon className={`w-4 h-4 shrink-0 ${k.text}`} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Graphe encaissements */}
                <div className="rounded-xl border border-border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <BarChart3 className="w-4 h-4 text-primary" /> Encaissements — 6 derniers mois
                    </div>
                    <span className="text-xs text-emerald-600 font-medium">+12 %</span>
                  </div>
                  <svg viewBox="0 0 320 110" className="w-full h-24" preserveAspectRatio="none" aria-hidden>
                    <defs>
                      <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--brand-1)" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="var(--brand-1)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M8 78 C38 78 50 62 72 62 C96 62 112 70 134 70 C160 70 176 46 198 46 C222 46 240 40 258 40 C282 40 296 26 312 26 L312 102 L8 102 Z"
                      fill="url(#heroArea)"
                    />
                    <path
                      d="M8 78 C38 78 50 62 72 62 C96 62 112 70 134 70 C160 70 176 46 198 46 C222 46 240 40 258 40 C282 40 296 26 312 26"
                      fill="none"
                      stroke="var(--brand-1)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="312" cy="26" r="3.5" fill="var(--brand-1)" />
                  </svg>
                  <div className="flex justify-between mt-2">
                    {months.map((m) => (
                      <span key={m} className="text-[10px] text-muted">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
