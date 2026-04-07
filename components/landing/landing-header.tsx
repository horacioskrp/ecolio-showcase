import { GitFork, Menu, School, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks } from "./data";

type LandingHeaderProps = {
  mobileMenuOpen: boolean;
  onToggleMenu: () => void;
};

export function LandingHeader({ mobileMenuOpen, onToggleMenu }: LandingHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-md bg-background/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <School className="w-6 h-6 text-blue-500" />
          <span className="font-bold text-lg">Ecolio</span>
        </div>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium hover:text-blue-500 transition">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-white/5 rounded-lg transition"
          >
            <GitFork className="w-5 h-5" />
          </a>
          <button onClick={onToggleMenu} className="md:hidden p-2 hover:bg-white/5 rounded-lg">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-background/95">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="px-3 py-2 rounded hover:bg-white/5 transition">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
