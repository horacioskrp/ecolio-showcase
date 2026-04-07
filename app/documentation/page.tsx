import { BookOpenCheck, Cpu, FileText, Layers3, ArrowLeft } from "lucide-react";
import Link from "next/link";

const docsLinks = [
  {
    title: "installation.md",
    description: "Guide complet PHP, Composer et PostgreSQL.",
    icon: BookOpenCheck,
  },
  {
    title: "configuration_ecole.md",
    description: "Logo, nom d'ecole, signatures et personnalisation.",
    icon: FileText,
  },
  {
    title: "calcul_notes.md",
    description: "Methodes de calcul des moyennes et des rangs.",
    icon: Layers3,
  },
  {
    title: "api.md",
    description: "Base d'integration pour Mobile Money et partenaires.",
    icon: Cpu,
  },
];

export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour a l&apos;accueil
        </Link>

        <header className="mb-12">
          <p className="text-sm uppercase tracking-[0.15em] text-blue-400 mb-4">Documentation</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Guides Ecolio</h1>
          <p className="text-lg text-muted max-w-3xl">
            Retrouvez ici les documents de reference pour installer, configurer et integrer Ecolio.
          </p>
        </header>

        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {docsLinks.map((doc) => (
            <article
              key={doc.title}
              className="section-shell p-6 hover:border-white/20 transition group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition">
                <doc.icon className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="font-bold mb-2 text-sm">{doc.title}</h2>
              <p className="text-xs text-muted">{doc.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
