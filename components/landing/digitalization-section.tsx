import { ArrowRight, Gauge, Sparkles, Users, Wallet, Zap } from "lucide-react";
import { DigitalizationIllustration } from "./illustrations";

const advantages = [
  {
    icon: Zap,
    grad: "from-amber-500 to-orange-500",
    title: "Gagnez un temps précieux",
    text: "Bulletins, reçus et documents générés automatiquement, en quelques clics.",
  },
  {
    icon: Gauge,
    grad: "from-blue-500 to-cyan-500",
    title: "Fini les erreurs de calcul",
    text: "Moyennes pondérées et mentions fiables, calculées automatiquement.",
  },
  {
    icon: Wallet,
    grad: "from-emerald-500 to-teal-500",
    title: "Des finances sous contrôle",
    text: "Paiements tracés, reçus à code-barres et soldes en temps réel.",
  },
  {
    icon: Users,
    grad: "from-violet-500 to-purple-500",
    title: "Des parents rassurés",
    text: "Notes, présences et scolarité accessibles depuis le portail famille.",
  },
  {
    icon: Sparkles,
    grad: "from-fuchsia-500 to-pink-500",
    title: "Une image moderne",
    text: "Une école digitale, organisée et sereine, qui inspire confiance.",
  },
];

export function DigitalizationSection() {
  return (
    <section id="numerisation" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-3 gs-fade-up">Passez au numérique</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gs-fade-up">
            Faites entrer votre école dans l&apos;ère du numérique
          </h2>
          <p className="text-lg text-muted gs-fade-up">
            Dites adieu aux registres papier et aux calculs interminables : avec Dalibi, vous
            digitalisez toute la gestion de votre établissement et vous gagnez un temps précieux.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Illustration */}
          <div className="flex justify-center order-1 gs-fade-up">
            <DigitalizationIllustration className="w-full max-w-md h-auto" />
          </div>

          {/* Avantages */}
          <div className="order-2">
            <div className="space-y-5 gs-stagger-up">
              {advantages.map((adv) => (
                <div key={adv.title} className="flex gap-4">
                  <div
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-linear-to-br ${adv.grad} text-white shadow-md shrink-0`}
                  >
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
              Lancer la digitalisation de mon école <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
