import { BookOpenCheck, Cpu, FileText, Layers3, ArrowLeft } from "lucide-react";
import Link from "next/link";

const docsLinks = [
  {
    title: "installation.md",
    description: "PHP 8.3, Composer, PostgreSQL, Node et déploiement Docker.",
    icon: BookOpenCheck,
  },
  {
    title: "configuration_ecole.md",
    description: "Logo, nom d'école, années académiques et types de classes.",
    icon: FileText,
  },
  {
    title: "bulletins_et_notes.md",
    description: "Moyennes pondérées, trimestre ou semestre par type de classe.",
    icon: Layers3,
  },
  {
    title: "roles_et_permissions.md",
    description: "Contrôle d'accès fin par permissions, par module et par rôle.",
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
          <p className="eyebrow mb-4">Documentation</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Guides Dalibi</h1>
          <p className="text-lg text-muted max-w-3xl">
            Retrouvez ici les documents de référence pour installer, configurer et déployer Dalibi.
          </p>
        </header>

        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {docsLinks.map((doc) => (
            <article
              key={doc.title}
              className="card card-hover p-6 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <doc.icon className="w-5 h-5 text-primary" />
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
