import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type PageHeroProps = {
  /** Pastille optionnelle (ex. « Centre d'aide »). */
  badge?: { label: string; icon?: LucideIcon };
  title: ReactNode;
  description?: ReactNode;
  /** Illustration (idéalement blanche) affichée à droite. */
  illustration?: ReactNode;
};

/**
 * Hero de page réutilisable : fond bleu dégradé en profondeur, halo radial,
 * grille en filigrane et orbes animés. Titre + description à gauche,
 * illustration à droite.
 */
export function PageHero({ badge, title, description, illustration }: PageHeroProps) {
  const BadgeIcon = badge?.icon;

  return (
    <section className="relative overflow-hidden text-white bg-linear-to-br from-brand-deep via-brand-1 to-brand-2">
      {/* Fonds animés */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 -left-20 w-96 h-96 rounded-full bg-white/10 blur-3xl hero-orb-a" />
        <div className="absolute -top-10 -right-16 w-80 h-80 rounded-full bg-brand-3/30 blur-3xl hero-orb-b" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-white/10 blur-3xl hero-orb-c" />
        {/* halo radial pour la profondeur */}
        <div className="absolute inset-0 [background:radial-gradient(60%_60%_at_22%_0%,rgba(255,255,255,0.20),transparent_60%)]" />
        {/* grille en filigrane */}
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:radial-gradient(circle_at_50%_0%,black,transparent_78%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className={illustration ? "grid md:grid-cols-2 gap-10 items-center" : "max-w-2xl"}>
          <div>
            {badge && (
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm px-3 py-1 text-sm font-medium mb-5">
                {BadgeIcon && <BadgeIcon className="w-4 h-4" />} {badge.label}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{title}</h1>
            {description && <div className="text-lg text-white/85 max-w-lg">{description}</div>}
          </div>

          {illustration && (
            <div className="flex justify-center md:justify-end">{illustration}</div>
          )}
        </div>
      </div>
    </section>
  );
}
