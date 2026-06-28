import { Check } from "lucide-react";
import { modules } from "./data";

// Dégradés vifs par module (icône illustrée distincte).
const iconGradients: Record<string, string> = {
  eleves: "from-violet-500 to-purple-500",
  bulletins: "from-purple-500 to-fuchsia-500",
  tresorerie: "from-fuchsia-500 to-pink-500",
  presences: "from-emerald-500 to-teal-500",
  documents: "from-amber-500 to-orange-500",
  securite: "from-blue-500 to-cyan-500",
};

export function ModulesSection() {
  return (
    <section id="modules" className="py-20 md:py-28 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-3 gs-fade-up">Fonctionnalités</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gs-fade-up">Six modules intégrés</h2>
          <p className="text-lg text-muted gs-fade-up">
            Couvrir tous les besoins administratifs, pédagogiques et financiers, sans logiciel tiers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {modules.map((mod) => {
            const grad = iconGradients[mod.id] ?? "from-brand-1 to-brand-3";
            return (
              <div key={mod.id} className="gs-module-card card card-hover p-7">
                {/* Icône illustrée */}
                <div
                  className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br ${grad} shadow-lg mb-5 overflow-hidden`}
                >
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/20" aria-hidden />
                  <span className="absolute -bottom-4 -left-2 w-7 h-7 rounded-full bg-black/10" aria-hidden />
                  <mod.icon className="relative w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-1">{mod.title}</h3>
                <p className="text-sm text-primary/90 mb-4">{mod.subtitle}</p>
                <ul className="space-y-2.5">
                  {mod.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-muted">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
