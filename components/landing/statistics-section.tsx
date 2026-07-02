import { ArrowRight, FileText, GraduationCap, School, Users, Wallet } from "lucide-react";
import { StatsIllustration } from "./illustrations";

const advantages = [
  {
    icon: Users,
    grad: "from-violet-500 to-purple-500",
    title: "Parité & équité",
    text: "Indice de parité (IPS), part des filles, redoublement, abandon et sur-âge suivis en un coup d'œil.",
  },
  {
    icon: GraduationCap,
    grad: "from-blue-500 to-cyan-500",
    title: "Réussite & examens officiels",
    text: "Mentions, taux de réussite interne et résultats aux examens officiels (CEPD, BEPC, BAC).",
  },
  {
    icon: Wallet,
    grad: "from-emerald-500 to-teal-500",
    title: "Recouvrement & Mobile Money",
    text: "Taux de recouvrement de l'écolage et répartition par mode de paiement (Flooz, T-Money…).",
  },
  {
    icon: School,
    grad: "from-amber-500 to-orange-500",
    title: "Encadrement & assiduité",
    text: "Ratio élèves/enseignant, classes pléthoriques et absentéisme, par classe et par période.",
  },
  {
    icon: FileText,
    grad: "from-fuchsia-500 to-pink-500",
    title: "Rapports officiels prêts à l'emploi",
    text: "Export PDF & Excel, comparaisons pluriannuelles, alignés sur l'annuaire statistique (MEPSTA).",
  },
];

export function StatisticsSection() {
  return (
    <section id="statistiques" className="py-20 md:py-28 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-3 gs-fade-up">Statistiques &amp; pilotage</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gs-fade-up">
            Pilotez avec des chiffres, pas à l&apos;aveugle
          </h2>
          <p className="text-lg text-muted gs-fade-up">
            Des indicateurs clairs — parité, réussite, finances, assiduité — et des comparaisons
            d&apos;une année à l&apos;autre, exportables pour vos conseils et le ministère.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Avantages */}
          <div className="order-2 lg:order-1">
            <div className="space-y-5 gs-stagger-up">
              {advantages.map((adv) => (
                <div key={adv.title} className="flex gap-4">
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-linear-to-br ${adv.grad} text-white shadow-md shrink-0`}>
                    <adv.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{adv.title}</div>
                    <div className="text-sm text-muted">{adv.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary mt-8 gs-fade-up">
              Demander une démo <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Illustration */}
          <div className="flex justify-center order-1 lg:order-2 gs-fade-up">
            <StatsIllustration className="w-full max-w-md h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
