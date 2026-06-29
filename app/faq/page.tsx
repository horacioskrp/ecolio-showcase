import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, HelpCircle } from "lucide-react";
import { faqs } from "@/components/landing/data";
import { FaqIllustration } from "@/components/landing/illustrations";
import { LandingFooter } from "@/components/landing/landing-footer";
import { PageHero } from "@/components/landing/page-hero";
import { SiteHeader } from "@/components/landing/site-header";

export const metadata: Metadata = {
  title: "FAQ | Dalibi — Logiciel de gestion scolaire",
  description:
    "Questions fréquentes sur Dalibi : tarifs, déploiement, trimestres/semestres, examens officiels, écolage, portail parents & élèves, sécurité et open source.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      {/* Hero bleu réutilisable */}
      <PageHero
        badge={{ label: "Centre d'aide", icon: HelpCircle }}
        title="Questions fréquentes"
        description={
          <>
            Tout ce qu&apos;il faut savoir sur Dalibi : tarifs, déploiement, fonctionnalités,
            sécurité et open source. Une autre question ?{" "}
            <Link href="/contact" className="underline underline-offset-2 font-medium hover:text-white">
              Contactez-nous
            </Link>
            .
          </>
        }
        illustration={<FaqIllustration className="w-full max-w-sm h-auto" />}
      />

      {/* Liste des FAQ */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.id} className="group card p-5 cursor-pointer">
                <summary className="flex items-center justify-between gap-4 font-semibold">
                  <span className="text-left">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-primary shrink-0 group-open:rotate-90 transition" />
                </summary>
                <p className="text-sm text-muted mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>

          {/* Encart contact */}
          <div className="card card-hover mt-10 p-8 text-center">
            <h2 className="text-xl font-bold mb-2">Vous ne trouvez pas votre réponse ?</h2>
            <p className="text-muted mb-6">
              Notre équipe vous répond et vous propose une démonstration adaptée à votre établissement.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Demander une démo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
