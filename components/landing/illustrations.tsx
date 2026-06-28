/**
 * Illustrations SVG inline, theme-aware (couleurs via les variables de marque
 * --brand-1/2/3, --card, --border, --background). Décoratives → aria-hidden.
 */

export function DecorBlobs({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute -top-16 -left-10 w-72 h-72 rounded-full bg-brand-3/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-1/10 blur-3xl" />
    </div>
  );
}

/** Bouclier + couches de permissions — pour la section Sécurité. */
export function ShieldIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 380" className={className} role="img" aria-label="Sécurité et permissions" fill="none">
      <defs>
        <linearGradient id="shield-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-2)" />
          <stop offset="100%" stopColor="var(--brand-1)" />
        </linearGradient>
        <linearGradient id="shield-soft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-3)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--brand-1)" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* anneaux concentriques */}
      <circle cx="210" cy="190" r="150" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 8" />
      <circle cx="210" cy="190" r="110" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 8" />

      {/* halo */}
      <circle cx="210" cy="180" r="120" fill="url(#shield-soft)" />

      {/* bouclier */}
      <path
        d="M210 70 L300 105 V200 C300 258 258 295 210 312 C162 295 120 258 120 200 V105 Z"
        fill="url(#shield-grad)"
      />
      <path
        d="M210 70 L300 105 V200 C300 258 258 295 210 312 C162 295 120 258 120 200 V105 Z"
        fill="white" fillOpacity="0.08"
      />
      {/* check */}
      <path d="M172 192 L200 220 L255 158" stroke="white" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />

      {/* badges flottants */}
      <g>
        <circle cx="96" cy="118" r="26" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="86" y="110" width="20" height="16" rx="3" stroke="var(--brand-1)" strokeWidth="3" fill="none" />
        <path d="M90 110 V105 a6 6 0 0 1 12 0 V110" stroke="var(--brand-1)" strokeWidth="3" fill="none" />
      </g>
      <g>
        <circle cx="328" cy="150" r="26" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
        <circle cx="324" cy="146" r="7" stroke="var(--brand-2)" strokeWidth="3" fill="none" />
        <path d="M329 151 L338 160" stroke="var(--brand-2)" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g>
        <circle cx="316" cy="288" r="24" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
        <path d="M306 288 l7 7 13 -15" stroke="var(--brand-1)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}

/* ---- Bannières de cartes (section Capacités) — viewBox 320×150 ---- */

function BannerDefs() {
  return (
    <defs>
      <linearGradient id="cap-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="var(--brand-2)" />
        <stop offset="100%" stopColor="var(--brand-1)" />
      </linearGradient>
    </defs>
  );
}

/** Pilotage : tableau de bord (KPIs, barres, tendance). */
export function PilotageIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 150" className={className} role="img" aria-label="Tableau de bord" fill="none">
      <BannerDefs />
      <rect x="40" y="24" width="240" height="108" rx="12" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
      <circle cx="56" cy="40" r="3" fill="var(--brand-3)" />
      <circle cx="68" cy="40" r="3" fill="var(--border)" />
      {/* KPI pills */}
      <rect x="54" y="54" width="64" height="30" rx="6" fill="url(#cap-grad)" fillOpacity="0.12" />
      <rect x="60" y="60" width="34" height="6" rx="3" fill="url(#cap-grad)" />
      <rect x="60" y="71" width="22" height="6" rx="3" fill="var(--border)" />
      {/* bars */}
      <g fill="url(#cap-grad)">
        <rect x="138" y="92" width="14" height="24" rx="3" />
        <rect x="158" y="80" width="14" height="36" rx="3" />
        <rect x="178" y="66" width="14" height="50" rx="3" />
        <rect x="198" y="84" width="14" height="32" rx="3" />
        <rect x="218" y="56" width="14" height="60" rx="3" />
      </g>
      {/* trend line */}
      <polyline points="138,72 158,64 178,52 198,58 232,40" stroke="var(--brand-2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="232" cy="40" r="4" fill="var(--brand-2)" />
    </svg>
  );
}

/** Pédagogie : bulletin & notes. */
export function PedagogieIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 150" className={className} role="img" aria-label="Bulletin et notes" fill="none">
      <BannerDefs />
      {/* feuille */}
      <rect x="92" y="20" width="136" height="116" rx="10" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
      <rect x="108" y="34" width="72" height="8" rx="4" fill="url(#cap-grad)" />
      {/* lignes de notes */}
      {[58, 76, 94, 112].map((y, i) => (
        <g key={y}>
          <rect x="108" y={y} width="70" height="6" rx="3" fill="var(--border)" />
          <rect x="190" y={y - 1} width="24" height="9" rx="4" fill="url(#cap-grad)" fillOpacity={0.25 + i * 0.18} />
        </g>
      ))}
      {/* chapeau de diplômé */}
      <g transform="translate(60 36)">
        <path d="M0 14 L26 4 L52 14 L26 24 Z" fill="url(#cap-grad)" />
        <path d="M14 19 v10 c0 4 24 4 24 0 v-10" fill="var(--brand-1)" fillOpacity="0.6" />
        <line x1="52" y1="14" x2="52" y2="28" stroke="var(--brand-2)" strokeWidth="2" />
      </g>
      {/* badge check */}
      <circle cx="214" cy="120" r="16" fill="url(#cap-grad)" />
      <path d="M206 120 l6 6 10 -12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/** Productivité : documents & automatisation. */
export function ProductiviteIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 150" className={className} role="img" aria-label="Documents et automatisation" fill="none">
      <BannerDefs />
      {/* feuilles empilées */}
      <rect x="86" y="34" width="96" height="92" rx="10" fill="var(--brand-3)" fillOpacity="0.18" transform="rotate(-8 134 80)" />
      <rect x="104" y="28" width="96" height="92" rx="10" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
      <rect x="118" y="44" width="50" height="7" rx="3.5" fill="url(#cap-grad)" />
      {[60, 74, 88].map((y) => (
        <rect key={y} x="118" y={y} width="68" height="5" rx="2.5" fill="var(--border)" />
      ))}
      {/* étiquette PDF */}
      <rect x="150" y="100" width="40" height="18" rx="5" fill="url(#cap-grad)" />
      <text x="170" y="113" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">PDF</text>
      {/* éclair (automatisation) */}
      <g transform="translate(214 40)">
        <circle cx="14" cy="14" r="22" fill="url(#cap-grad)" fillOpacity="0.12" />
        <path d="M16 0 L4 18 h10 l-4 14 14 -20 h-10 z" fill="url(#cap-grad)" />
      </g>
    </svg>
  );
}

/** Couches techniques (stack) — pour la section Technologie. */
export function StackIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 360" className={className} role="img" aria-label="Stack technique" fill="none">
      <defs>
        <linearGradient id="stack-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-2)" />
          <stop offset="100%" stopColor="var(--brand-1)" />
        </linearGradient>
      </defs>

      {/* halo */}
      <circle cx="200" cy="180" r="140" fill="var(--brand-3)" fillOpacity="0.08" />

      {/* couches empilées (perspective isométrique douce) */}
      {[
        { y: 230, fill: "var(--brand-1)", op: 1 },
        { y: 185, fill: "var(--brand-2)", op: 0.92 },
        { y: 140, fill: "var(--brand-3)", op: 0.85 },
      ].map((layer) => (
        <g key={layer.y}>
          <path
            d={`M200 ${layer.y - 34} L320 ${layer.y} L200 ${layer.y + 34} L80 ${layer.y} Z`}
            fill={layer.fill}
            fillOpacity={layer.op}
          />
          <path
            d={`M80 ${layer.y} L200 ${layer.y + 34} L200 ${layer.y + 50} L80 ${layer.y + 16} Z`}
            fill="black"
            fillOpacity="0.12"
          />
          <path
            d={`M320 ${layer.y} L200 ${layer.y + 34} L200 ${layer.y + 50} L320 ${layer.y + 16} Z`}
            fill="black"
            fillOpacity="0.05"
          />
        </g>
      ))}

      {/* nœuds orbitant */}
      {[
        { cx: 96, cy: 96 },
        { cx: 312, cy: 84 },
        { cx: 330, cy: 226 },
      ].map((n) => (
        <g key={`${n.cx}-${n.cy}`}>
          <circle cx={n.cx} cy={n.cy} r="20" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx={n.cx} cy={n.cy} r="6" fill="url(#stack-grad)" />
        </g>
      ))}
      <g stroke="var(--brand-1)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 6">
        <line x1="96" y1="96" x2="180" y2="150" />
        <line x1="312" y1="84" x2="220" y2="150" />
      </g>
    </svg>
  );
}

/** FAQ : bulles de discussion + points d'interrogation, en blanc (pour fond bleu). */
export function FaqIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 300" className={className} role="img" aria-label="Questions fréquentes" fill="none">
      {/* halos */}
      <circle cx="180" cy="150" r="120" fill="white" fillOpacity="0.06" />
      <circle cx="180" cy="150" r="80" fill="white" fillOpacity="0.06" />

      {/* grande bulle (question) */}
      <g>
        <rect x="64" y="70" width="150" height="96" rx="20" fill="white" />
        <path d="M96 166 l0 26 26 -26 z" fill="white" />
        <text x="139" y="140" textAnchor="middle" fontSize="62" fontWeight="800" fill="var(--brand-1)">?</text>
      </g>

      {/* petite bulle (réponse) */}
      <g>
        <rect x="196" y="150" width="104" height="72" rx="18" fill="white" fillOpacity="0.92" />
        <path d="M276 222 l0 22 -24 -22 z" fill="white" fillOpacity="0.92" />
        <rect x="214" y="172" width="68" height="8" rx="4" fill="var(--brand-2)" />
        <rect x="214" y="188" width="50" height="8" rx="4" fill="var(--brand-3)" />
        <rect x="214" y="204" width="40" height="8" rx="4" fill="var(--brand-3)" />
      </g>

      {/* points d'interrogation flottants */}
      <text x="290" y="78" fontSize="34" fontWeight="800" fill="white" fillOpacity="0.85">?</text>
      <text x="44" y="220" fontSize="26" fontWeight="800" fill="white" fillOpacity="0.6">?</text>
      <circle cx="300" cy="120" r="5" fill="white" fillOpacity="0.8" />
      <circle cx="70" cy="56" r="4" fill="white" fillOpacity="0.7" />
    </svg>
  );
}

/** Open source : éditeur de code + graphe git + étoile. */
export function OpenSourceIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 340" className={className} role="img" aria-label="Logiciel open source" fill="none">
      <defs>
        <linearGradient id="os-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-2)" />
          <stop offset="100%" stopColor="var(--brand-1)" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="170" r="140" fill="var(--brand-3)" fillOpacity="0.08" />

      {/* fenêtre de code */}
      <rect x="46" y="62" width="244" height="178" rx="14" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
      <rect x="46" y="62" width="244" height="34" rx="14" fill="var(--surface)" />
      <circle cx="68" cy="79" r="4" fill="#ef4444" fillOpacity="0.7" />
      <circle cx="82" cy="79" r="4" fill="#f59e0b" fillOpacity="0.7" />
      <circle cx="96" cy="79" r="4" fill="#22c55e" fillOpacity="0.7" />

      {/* lignes de code */}
      {[
        { y: 116, x: 66, w: 70, c: "url(#os-grad)" },
        { y: 116, x: 144, w: 40, c: "var(--border)" },
        { y: 138, x: 82, w: 54, c: "var(--border)" },
        { y: 138, x: 144, w: 90, c: "var(--brand-3)" },
        { y: 160, x: 82, w: 110, c: "var(--border)" },
        { y: 182, x: 66, w: 48, c: "url(#os-grad)" },
        { y: 182, x: 122, w: 64, c: "var(--border)" },
        { y: 204, x: 82, w: 80, c: "var(--border)" },
      ].map((l, i) => (
        <rect key={i} x={l.x} y={l.y} width={l.w} height="8" rx="4" fill={l.c} />
      ))}

      {/* graphe git */}
      <g stroke="url(#os-grad)" strokeWidth="3" fill="none">
        <path d="M330 110 V250" />
        <path d="M330 170 C330 200 360 200 360 230" />
      </g>
      {[
        { cx: 330, cy: 110 },
        { cx: 330, cy: 250 },
        { cx: 360, cy: 230 },
      ].map((n) => (
        <circle key={`${n.cx}-${n.cy}`} cx={n.cx} cy={n.cy} r="11" fill="var(--card)" stroke="url(#os-grad)" strokeWidth="3" />
      ))}

      {/* étoile open source */}
      <g transform="translate(300 56)">
        <circle cx="0" cy="0" r="26" fill="url(#os-grad)" />
        <path d="M0 -13 L4 -4 14 -3 6 4 8 14 0 9 -8 14 -6 4 -14 -3 -4 -4 Z" fill="white" />
      </g>
    </svg>
  );
}

/** Réseau d'acteurs autour de l'école — pour le CTA final. */
export function NetworkIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 300" className={className} role="img" aria-label="Établissement connecté" fill="none">
      <defs>
        <linearGradient id="net-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-2)" />
          <stop offset="100%" stopColor="var(--brand-1)" />
        </linearGradient>
      </defs>

      {/* liens */}
      <g stroke="var(--brand-1)" strokeOpacity="0.35" strokeWidth="2">
        <line x1="180" y1="150" x2="70" y2="70" />
        <line x1="180" y1="150" x2="295" y2="70" />
        <line x1="180" y1="150" x2="70" y2="235" />
        <line x1="180" y1="150" x2="295" y2="235" />
      </g>

      {/* nœud central : école */}
      <circle cx="180" cy="150" r="46" fill="url(#net-grad)" />
      <path d="M158 156 v-18 l22 -13 22 13 v18 z" fill="white" fillOpacity="0.95" />
      <rect x="172" y="150" width="16" height="14" fill="url(#net-grad)" />
      <path d="M180 117 l30 17 h-60 z" fill="white" />

      {/* nœuds satellites */}
      {[
        { x: 70, y: 70 },
        { x: 295, y: 70 },
        { x: 70, y: 235 },
        { x: 295, y: 235 },
      ].map((p) => (
        <g key={`${p.x}-${p.y}`}>
          <circle cx={p.x} cy={p.y} r="26" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx={p.x} cy={p.y - 5} r="7" fill="var(--brand-1)" />
          <path d={`M${p.x - 12} ${p.y + 14} a12 12 0 0 1 24 0`} fill="var(--brand-1)" />
        </g>
      ))}
    </svg>
  );
}
