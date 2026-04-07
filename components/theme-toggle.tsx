"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLayoutEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <button
        type="button"
        disabled
        aria-hidden="true"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 glass text-foreground/90"
      >
        <Moon size={18} />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 glass text-foreground/90 transition hover:scale-105 hover:text-[var(--brand-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
