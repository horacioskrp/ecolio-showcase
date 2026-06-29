import { BadgeCheck, DatabaseBackup, Gauge, GraduationCap, ReceiptText, UserCheck } from "lucide-react";
import { AutomationIllustration } from "./illustrations";

const tasks = [
  { icon: GraduationCap, title: "Bulletins en PDF", text: "Générés pour toute une classe en un clic, fidèles au format officiel." },
  { icon: Gauge, title: "Moyennes calculées", text: "Pondération par coefficients et mentions, sans calcul manuel." },
  { icon: ReceiptText, title: "Reçus numérotés", text: "Code-barres et vérification anti-falsification automatiques." },
  { icon: UserCheck, title: "Présences consolidées", text: "Appels agrégés en statistiques par élève et par période." },
  { icon: DatabaseBackup, title: "Sauvegardes planifiées", text: "Quotidiennes ou hebdomadaires, avec rétention automatique." },
  { icon: BadgeCheck, title: "Documents officiels", text: "Certificats et attestations générés depuis des modèles." },
];

export function AutomationSection() {
  return (
    <section id="automatisation" className="py-20 md:py-28 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="flex justify-center order-1 gs-fade-up">
            <AutomationIllustration className="w-full max-w-md h-auto" />
          </div>

          <div className="order-2">
            <p className="eyebrow mb-3 gs-fade-up">Automatisation</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gs-fade-up">
              Automatisez vos processus scolaires en quelques clics
            </h2>
            <p className="text-lg text-muted mb-8 gs-fade-up">
              Dalibi prend en charge les tâches répétitives et chronophages : vous vous concentrez sur
              l&apos;essentiel, le logiciel s&apos;occupe du reste.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 gs-stagger-up">
              {tasks.map((t) => (
                <div key={t.title} className="flex gap-3">
                  <div className="inline-flex p-2 rounded-lg bg-primary/10 text-primary h-fit shrink-0">
                    <t.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.title}</div>
                    <div className="text-sm text-muted">{t.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
