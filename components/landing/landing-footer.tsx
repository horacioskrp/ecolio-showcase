export function LandingFooter() {
  return (
    <footer className="border-t border-white/5 bg-background/50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Ecolio</h3>
            <p className="text-sm text-muted">Système scolaire souverain pour l&apos;Afrique</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm">Produit</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href="#modules" className="hover:text-foreground transition">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#tarifs" className="hover:text-foreground transition">
                  Tarification
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-foreground transition">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm">Ressources</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href="/documentation" className="hover:text-foreground transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/documentation#api" className="hover:text-foreground transition">
                  API Reference
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm">Légal</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href="/documentation#licence" className="hover:text-foreground transition">
                  Licence GPL v3
                </a>
              </li>
              <li>
                <a href="/documentation#confidentialite" className="hover:text-foreground transition">
                  Confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-sm text-muted">
          <p>&copy; 2024 Ecolio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
