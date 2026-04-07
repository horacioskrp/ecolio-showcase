export function ContributionSection() {
  return (
    <section id="contribuer" className="py-20 md:py-32 bg-white/2">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 gs-fade-up">Contribuer</h2>
        <p className="text-lg text-muted mb-8 gs-fade-up">
          Ecolio est open source. Rejoignez le projet sur GitHub pour proposer des améliorations.
        </p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition gs-fade-up"
        >
          Voir le repository GitHub
        </a>
      </div>
    </section>
  );
}
