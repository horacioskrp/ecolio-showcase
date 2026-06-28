import { Check } from "lucide-react";
import { audiences } from "./data";
import { DecorBlobs } from "./illustrations";

const accents: Record<string, { tile: string; bar: string; dot: string }> = {
  direction: {
    tile: "bg-blue-500/10 text-blue-600",
    bar: "from-blue-500 to-blue-300",
    dot: "bg-blue-500/15 text-blue-600",
  },
  enseignants: {
    tile: "bg-violet-500/10 text-violet-600",
    bar: "from-violet-500 to-violet-300",
    dot: "bg-violet-500/15 text-violet-600",
  },
  administration: {
    tile: "bg-amber-500/10 text-amber-600",
    bar: "from-amber-500 to-amber-300",
    dot: "bg-amber-500/15 text-amber-600",
  },
  familles: {
    tile: "bg-emerald-500/10 text-emerald-600",
    bar: "from-emerald-500 to-emerald-300",
    dot: "bg-emerald-500/15 text-emerald-600",
  },
};

export function AudiencesSection() {
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

        <div className="grid md:grid-cols-2 gap-6 gs-stagger-up">
          {audiences.map((aud, index) => {
            const accent = accents[aud.id] ?? accents.direction;
            return (
              <div
                key={aud.id}
                className="card card-hover relative overflow-hidden p-7 md:p-8"
              >
                <span
                  className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${accent.bar}`}
                  aria-hidden
                />

                <div className="flex items-start gap-4 mb-6">
                  <div className={`inline-flex p-3.5 rounded-2xl shrink-0 ${accent.tile}`}>
                    <aud.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-muted">
                        0{index + 1}
                      </span>
                      <span className="h-px flex-1 bg-border" />
                    </div>
                    <h3 className="text-xl font-bold mt-1">{aud.title}</h3>
                    <p className="text-sm text-muted">{aud.tagline}</p>
                  </div>
                </div>

                <ul className="grid sm:grid-cols-1 gap-3">
                  {aud.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm">
                      <span
                        className={`mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0 ${accent.dot}`}
                      >
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="text-foreground/80">{point}</span>
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
