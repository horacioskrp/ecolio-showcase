import { ArrowRight, Menu, X } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks } from "./data";

type LandingHeaderProps = {
  mobileMenuOpen: boolean;
  onToggleMenu: () => void;
};

export function LandingHeader({ mobileMenuOpen, onToggleMenu }: LandingHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#accueil" className="flex items-center shrink-0" aria-label="Dalibi">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/dalibi.svg" alt="Dalibi" className="h-7 w-auto block dark:hidden" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/dalibi-blanc.svg" alt="Dalibi" className="h-7 w-auto hidden dark:block" />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://github.com/horacioskrp/dalibi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted hover:text-foreground transition"
          >
            <SiGithub className="w-[18px] h-[18px]" />
          </a>
          <ThemeToggle />
          <a href="#tarifs" className="hidden md:inline-flex text-sm font-medium text-foreground hover:text-primary transition px-2">
            Connexion
          </a>
          <a href="#contact" className="hidden sm:inline-flex btn btn-primary text-sm py-2.5">
            Demander une démo <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={onToggleMenu}
            aria-label="Menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-1 max-w-6xl mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onToggleMenu}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-foreground hover:bg-surface transition"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={onToggleMenu} className="btn btn-primary mt-3">
              Demander une démo <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
