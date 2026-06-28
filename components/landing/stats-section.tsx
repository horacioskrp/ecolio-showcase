import { quickStats } from "./data";

export function StatsSection() {
  return (
    <section id="chiffres" className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card p-6 md:p-10 gs-fade-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {quickStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold title-gradient">{stat.value}</div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
