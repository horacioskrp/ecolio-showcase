import clsx from "clsx";
import { BadgeCheck } from "lucide-react";
import { pricingPlans } from "./data";

export function PricingSection() {
  return (
    <section id="tarifs" className="py-20 md:py-32 bg-white/2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 gs-fade-up">Tarification</h2>

        <div className="grid md:grid-cols-3 gap-8 gs-stagger-up">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={clsx("section-shell p-8 relative", {
                "ring-2 ring-blue-500/50 md:scale-105": plan.featured,
              })}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">POPULAIRE</span>
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-muted mb-4">{plan.caption}</p>
              <div className="text-3xl font-bold mb-6">{plan.price}</div>

              <button
                className={clsx("w-full py-2 rounded-lg font-medium transition mb-6", {
                  "bg-blue-600 hover:bg-blue-700 text-white": plan.featured,
                  "border border-white/20 hover:border-white/40": !plan.featured,
                })}
              >
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm">
                    <BadgeCheck className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
