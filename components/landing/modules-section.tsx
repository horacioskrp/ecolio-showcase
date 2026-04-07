import clsx from "clsx";
import { Check } from "lucide-react";
import { modules } from "./data";

export function ModulesSection() {
  return (
    <section id="modules" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gs-fade-up">Trois modules intégrés</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto gs-fade-up">
            Couvrir tous les besoins administratifs et pédagogiques
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 gs-stagger-up">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className={clsx(
                "section-shell p-8 hover:border-white/20 transition bg-linear-to-br",
                mod.color,
                { "ring-1 ring-fuchsia-400/40": mod.id === "tresorerie" },
              )}
            >
              <div className={`inline-block p-3 rounded-lg ${mod.iconBg} mb-4`}>
                <mod.icon className={`w-6 h-6 ${mod.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{mod.title}</h3>
              <p className="text-sm text-muted mb-4">{mod.subtitle}</p>
              <ul className="space-y-2">
                {mod.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
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
