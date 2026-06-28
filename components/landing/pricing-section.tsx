import clsx from "clsx";
import { BadgeCheck, Check, DatabaseBackup, ShieldCheck } from "lucide-react";
import { pricingPlans } from "./data";

const reassurance = [
  { icon: ShieldCheck, label: "Données hébergées chez vous" },
  { icon: DatabaseBackup, label: "Sauvegardes planifiées" },
  { icon: BadgeCheck, label: "Sans engagement" },
];

export function PricingSection() {
  return (
    <section id="tarifs" className="py-20 md:py-28 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-3 gs-fade-up">Tarifs &amp; déploiement</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gs-fade-up">
            Une offre pour chaque établissement
          </h2>
          <p className="text-lg text-muted gs-fade-up">
            Open source et auto-hébergeable. Gratuit en self-hosted, accompagnement à la demande.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 gs-stagger-up items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                "card p-8 relative flex flex-col",
                plan.featured
                  ? "ring-2 ring-primary md:scale-[1.04] shadow-xl z-10"
                  : "card-hover",
              )}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-primary text-[var(--primary-foreground)] text-xs font-bold rounded-full shadow-md">
                    POPULAIRE
                  </span>
                </div>
              )}

              <div
                className={clsx(
                  "inline-flex p-3 rounded-xl mb-5 w-fit",
                  plan.featured ? "bg-primary text-[var(--primary-foreground)]" : "bg-primary/10 text-primary",
                )}
              >
                <plan.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-sm text-muted mb-5">{plan.caption}</p>

              <div className="flex items-end gap-1.5 mb-6">
                <span className="text-4xl font-bold leading-none">{plan.price}</span>
                {plan.priceSuffix && (
                  <span className="text-sm text-muted mb-0.5">{plan.priceSuffix}</span>
                )}
              </div>

              <a
                href="#contact"
                className={clsx("btn w-full mb-6", plan.featured ? "btn-primary" : "btn-secondary")}
              >
                {plan.cta}
              </a>

              <div className="border-t border-border pt-5 mt-auto">
                {plan.inheritNote && (
                  <p className="text-xs font-semibold text-foreground/70 mb-3">{plan.inheritNote}</p>
                )}
                <ul className="space-y-3">
                  {plan.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm">
                      <span className="mt-0.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500/15 shrink-0">
                        <Check className="w-3 h-3 text-emerald-600" />
                      </span>
                      <span className="text-muted">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12 gs-fade-up">
          {reassurance.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm text-muted">
              <item.icon className="w-4 h-4 text-primary" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
