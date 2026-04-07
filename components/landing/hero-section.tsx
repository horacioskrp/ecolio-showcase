import { ArrowRight } from "lucide-react";
import { quickStats } from "./data";

const heroAvatarIds = ["avatar-1", "avatar-2", "avatar-3", "avatar-4"];

export function HeroSection() {
  return (
    <section id="accueil" className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 bg-blue-500" />
        <div className="absolute -bottom-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-10 bg-purple-500" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-sm text-blue-400 mb-6 gs-fade-up">
          ✨ Système scolaire souverain
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 gs-fade-up">
          Gestion scolaire complète,{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">
            open source
          </span>
        </h1>

        <p className="text-lg text-muted max-w-2xl mb-8 gs-fade-up">
          Une plateforme pour les écoles togolaises: inscriptions, notes, paiements et bulletins. Sans dépendance propriétaire.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12 gs-fade-up">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition flex items-center justify-center gap-2">
            Démarrer <ArrowRight className="w-4 h-4" />
          </button>
          <a href="/documentation" className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-lg font-medium transition text-center">
            Documentation
          </a>
        </div>

        <div className="flex items-center justify-between py-8 gs-fade-up">
          <div className="flex -space-x-2">
            {heroAvatarIds.map((id) => (
              <div key={id} className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-500 border-2 border-background" />
            ))}
          </div>

          <p className="text-sm text-muted">Utilisé par 50+ écoles en Afrique</p>

          <div className="flex gap-4">
            {quickStats.slice(0, 2).map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
