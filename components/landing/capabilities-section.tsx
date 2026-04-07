import { CheckCircle2 } from "lucide-react";
import { featureColumns } from "./data";

export function CapabilitiesSection() {
  return (
    <section id="stack" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 gs-fade-up">Capacités complètes</h2>

        <div className="grid md:grid-cols-3 gap-8 gs-stagger-up">
          {featureColumns.map((col) => (
            <div key={col.title} className="section-shell p-8">
              <h3 className="text-xl font-bold mb-2">{col.title}</h3>
              <p className="text-sm text-muted mb-6">{col.subtitle}</p>
              <ul className="space-y-3">
                {col.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
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
