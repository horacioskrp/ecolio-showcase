import { techStack } from "./data";
import { StackIllustration } from "./illustrations";

export function TechSection() {
  return (
    <section id="technologie" className="py-20 md:py-28 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="flex justify-center order-1 lg:order-1 gs-fade-up">
            <StackIllustration className="w-full max-w-sm h-auto" />
          </div>

          <div className="order-2 lg:order-2">
            <p className="eyebrow mb-3 gs-fade-up">Technologie</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gs-fade-up">
              Construit avec des technologies open source éprouvées
            </h2>
            <p className="text-lg text-muted mb-8 gs-fade-up">
              Une base moderne et robuste, sans dépendance propriétaire : vos données restent chez
              vous, sur une stack maintenue par de larges communautés.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 gs-stagger-up">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="card p-3 flex items-center gap-2.5"
                  title={tech.name}
                >
                  <tech.icon className="w-5 h-5 shrink-0" style={{ color: tech.color }} aria-hidden />
                  <span className="text-sm font-medium truncate">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
