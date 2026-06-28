import { securityFeatures } from "./data";
import { ShieldIllustration } from "./illustrations";

export function SecuritySection() {
  return (
    <section id="securite" className="py-20 md:py-28 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16">
          <div className="order-2 lg:order-1">
            <p className="eyebrow mb-3 gs-fade-up">Sécurité &amp; accès</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gs-fade-up">
              Gouverné par les permissions
            </h2>
            <p className="text-lg text-muted gs-fade-up">
              Données scolaires sensibles, élèves mineurs : Dalibi applique une défense en
              profondeur, du menu jusqu&apos;à la base de données. Chaque action est gouvernée par une
              permission, et les fichiers sensibles restent privés.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center gs-fade-up">
            <ShieldIllustration className="w-full max-w-sm h-auto" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 gs-stagger-up">
          {securityFeatures.map((item) => (
            <div key={item.title} className="card card-hover p-6">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
