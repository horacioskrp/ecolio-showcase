import { CheckCircle2 } from "lucide-react";
import { featureColumns } from "./data";
import {
  DecorBlobs,
  PedagogieIllustration,
  PilotageIllustration,
  ProductiviteIllustration,
} from "./illustrations";

const banners = [PilotageIllustration, PedagogieIllustration, ProductiviteIllustration];

export function CapabilitiesSection() {
  return (
    <section id="capacites" className="relative overflow-hidden py-20 md:py-28">
      <DecorBlobs />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-3 gs-fade-up">Capacités</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gs-fade-up">
            Tout pour piloter l&apos;établissement
          </h2>
          <p className="text-lg text-muted gs-fade-up">
            Trois axes complémentaires, du tableau de bord à la production des documents.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 gs-stagger-up">
          {featureColumns.map((col, index) => {
            const Banner = banners[index] ?? PilotageIllustration;
            return (
              <div key={col.title} className="card card-hover overflow-hidden flex flex-col">
                <div className="bg-linear-to-br from-primary/5 to-brand-3/10 border-b border-border px-5 pt-4">
                  <Banner className="w-full h-32" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary">
                      <col.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold">{col.title}</h3>
                  </div>
                  <p className="text-sm text-muted mb-6">{col.subtitle}</p>
                  <ul className="space-y-3">
                    {col.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
