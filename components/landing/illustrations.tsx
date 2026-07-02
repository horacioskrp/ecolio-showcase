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

/** Finance : pile de pièces + reçu à code-barres + tendance. */
export function FinanceIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 320" className={className} role="img" aria-label="Trésorerie et écolage" fill="none">
      <defs>
        <linearGradient id="fin-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-2)" />
          <stop offset="100%" stopColor="var(--brand-1)" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="160" r="140" fill="var(--brand-3)" fillOpacity="0.08" />

      {/* pile de pièces */}
      <g>
        {[214, 186, 158, 130].map((cy, i) => (
          <g key={cy}>
            <ellipse cx="104" cy={cy + 14} rx="46" ry="15" fill="url(#fin-grad)" />
            <ellipse cx="104" cy={cy + 14} rx="46" ry="15" fill="black" fillOpacity={i === 0 ? 0 : 0.06} />
          </g>
        ))}
        <ellipse cx="104" cy="144" rx="46" ry="15" fill="url(#fin-grad)" />
        <ellipse cx="104" cy="144" rx="46" ry="15" fill="white" fillOpacity="0.18" />
        <text x="104" y="150" textAnchor="middle" fontSize="16" fontWeight="800" fill="white">F</text>
      </g>

      {/* reçu */}
      <g>
        <path d="M196 70 H316 V236 l-15 -10 -15 10 -15 -10 -15 10 -15 -10 -15 10 -15 -10 V70 Z" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="214" y="92" width="64" height="8" rx="4" fill="url(#fin-grad)" />
        <rect x="214" y="112" width="84" height="6" rx="3" fill="var(--border)" />
        <rect x="214" y="126" width="70" height="6" rx="3" fill="var(--border)" />
        {/* code-barres */}
        <g fill="var(--foreground)">
          {[0, 6, 10, 18, 22, 30, 36, 42, 50, 58, 64, 72].map((dx, i) => (
            <rect key={dx} x={216 + dx} y="150" width={i % 3 === 0 ? 4 : 2} height="34" />
          ))}
        </g>
        <rect x="214" y="196" width="40" height="8" rx="4" fill="url(#fin-grad)" />
      </g>

      {/* tendance */}
      <g transform="translate(300 40)">
        <circle cx="14" cy="14" r="24" fill="url(#fin-grad)" fillOpacity="0.14" />
        <path d="M2 22 L12 12 L18 18 L28 6" stroke="url(#fin-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M28 6 h-7 m7 0 v7" stroke="url(#fin-grad)" strokeWidth="3" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

/** Fonctionnalités : fenêtre avec tuiles de modules, en blanc (pour fond bleu). */
export function FeaturesIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 300" className={className} role="img" aria-label="Fonctionnalités" fill="none">
      <defs>
        <linearGradient id="feat-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-2)" />
          <stop offset="100%" stopColor="var(--brand-1)" />
        </linearGradient>
      </defs>

      <circle cx="180" cy="150" r="120" fill="white" fillOpacity="0.06" />
      <circle cx="180" cy="150" r="80" fill="white" fillOpacity="0.06" />

      {/* fenêtre */}
      <rect x="64" y="62" width="232" height="176" rx="16" fill="white" />
      <rect x="64" y="62" width="232" height="30" rx="16" fill="#eef2f7" />
      <circle cx="82" cy="77" r="3.5" fill="url(#feat-grad)" />
      <circle cx="94" cy="77" r="3.5" fill="#cbd5e1" />

      {/* tuiles de modules */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 84 + col * 68;
        const y = 108 + row * 60;
        return (
          <g key={i}>
            <rect x={x} y={y} width="52" height="44" rx="9" fill="url(#feat-grad)" fillOpacity="0.14" />
            <rect x={x + 12} y={y + 11} width="20" height="20" rx="5" fill="url(#feat-grad)" />
            <rect x={x + 10} y={y + 35} width="32" height="4" rx="2" fill="#cbd5e1" />
          </g>
        );
      })}

      {/* accents */}
      <g transform="translate(286 56)" fill="white">
        <path d="M0 -12 L3 -3 12 0 3 3 0 12 -3 3 -12 0 -3 -3 Z" />
      </g>
      <circle cx="70" cy="56" r="4" fill="white" fillOpacity="0.8" />
      <circle cx="300" cy="210" r="5" fill="white" fillOpacity="0.7" />
    </svg>
  );
}

/** Tarifs : cadenas ouvert (libre) + étiquette, en blanc (pour fond bleu). */
export function PricingIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 300" className={className} role="img" aria-label="Open source et gratuit" fill="none">
      <circle cx="180" cy="150" r="120" fill="white" fillOpacity="0.06" />
      <circle cx="180" cy="150" r="80" fill="white" fillOpacity="0.06" />

      {/* cadenas ouvert */}
      <g>
        {/* anse ouverte */}
        <path d="M118 132 V104 a34 34 0 0 1 64 -14" stroke="white" strokeWidth="12" strokeLinecap="round" fill="none" />
        {/* corps */}
        <rect x="96" y="132" width="108" height="86" rx="16" fill="white" />
        <circle cx="150" cy="168" r="12" fill="var(--brand-1)" />
        <rect x="145" y="176" width="10" height="22" rx="5" fill="var(--brand-1)" />
      </g>

      {/* étiquette "libre" */}
      <g transform="rotate(-12 250 168)">
        <path d="M222 138 H300 a8 8 0 0 1 8 8 V190 a8 8 0 0 1 -8 8 H222 L200 168 Z" fill="white" />
        <circle cx="224" cy="168" r="6" fill="var(--brand-1)" />
        <rect x="240" y="156" width="52" height="9" rx="4.5" fill="var(--brand-2)" />
        <rect x="240" y="174" width="38" height="7" rx="3.5" fill="var(--brand-3)" />
      </g>

      {/* étincelles */}
      <g transform="translate(286 70)" fill="white">
        <path d="M0 -11 L3 -3 11 0 3 3 0 11 -3 3 -11 0 -3 -3 Z" />
      </g>
      <circle cx="74" cy="80" r="4" fill="white" fillOpacity="0.8" />
      <circle cx="292" cy="216" r="5" fill="white" fillOpacity="0.7" />
    </svg>
  );
}

/** Documentation : page de doc + signet + badge code, en blanc (pour fond bleu). */
export function DocsIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 300" className={className} role="img" aria-label="Documentation" fill="none">
      <circle cx="180" cy="150" r="120" fill="white" fillOpacity="0.06" />
      <circle cx="180" cy="150" r="80" fill="white" fillOpacity="0.06" />

      {/* page arrière */}
      <rect x="106" y="64" width="150" height="180" rx="12" fill="white" fillOpacity="0.55" transform="rotate(6 181 154)" />

      {/* page avant */}
      <g>
        <rect x="92" y="58" width="150" height="184" rx="12" fill="white" />
        <rect x="112" y="84" width="72" height="9" rx="4.5" fill="var(--brand-1)" />
        {[108, 124, 140, 156, 172, 188].map((y) => (
          <rect key={y} x="112" y={y} width={y % 32 === 12 ? 90 : 110} height="6" rx="3" fill="#cbd5e1" />
        ))}
        {/* signet */}
        <path d="M210 58 v44 l-12 -9 -12 9 V58 Z" fill="var(--brand-1)" />
      </g>

      {/* badge code */}
      <g transform="translate(232 176)">
        <circle cx="0" cy="0" r="28" fill="var(--brand-1)" />
        <path d="M-8 -7 L-15 0 L-8 7 M8 -7 L15 0 L8 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* accents */}
      <g transform="translate(96 56)" fill="white"><path d="M0 -10 L3 -3 10 0 3 3 0 10 -3 3 -10 0 -3 -3 Z" /></g>
      <circle cx="276" cy="92" r="4" fill="white" fillOpacity="0.8" />
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

/** Statistiques : tableau de bord analytique (barres + camembert + courbe). */
export function StatsIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 330" className={className} role="img" aria-label="Statistiques et pilotage" fill="none">
      <defs>
        <linearGradient id="stat-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-2)" />
          <stop offset="100%" stopColor="var(--brand-1)" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="165" r="140" fill="var(--brand-3)" fillOpacity="0.08" />

      {/* fenêtre */}
      <rect x="46" y="52" width="308" height="226" rx="16" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
      <rect x="46" y="52" width="308" height="30" rx="16" fill="var(--surface)" />
      <circle cx="64" cy="67" r="3.5" fill="var(--brand-3)" />
      <circle cx="76" cy="67" r="3.5" fill="var(--border)" />

      {/* KPIs */}
      {[
        { x: 66, w: 74, label: 20 },
        { x: 150, w: 74, label: 30 },
        { x: 234, w: 74, label: 24 },
      ].map((k, i) => (
        <g key={i}>
          <rect x={k.x} y="96" width={k.w} height="34" rx="7" fill="url(#stat-grad)" fillOpacity="0.10" />
          <rect x={k.x + 10} y="104" width="34" height="7" rx="3.5" fill="url(#stat-grad)" />
          <rect x={k.x + 10} y="116" width={k.label} height="6" rx="3" fill="var(--border)" />
        </g>
      ))}

      {/* barres */}
      <g>
        {[48, 70, 54, 88, 66].map((h, i) => (
          <rect key={i} x={70 + i * 30} y={244 - h} width="18" height={h} rx="4" fill="url(#stat-grad)" opacity={0.55 + i * 0.09} />
        ))}
        {/* courbe de tendance */}
        <polyline points="79,180 109,168 139,176 169,150 199,158" fill="none" stroke="var(--brand-1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="199" cy="158" r="3.5" fill="var(--brand-1)" />
      </g>

      {/* camembert */}
      <g transform="translate(288 195)">
        <circle cx="0" cy="0" r="42" fill="var(--surface)" />
        <path d="M0 0 L0 -42 A42 42 0 0 1 36 22 Z" fill="url(#stat-grad)" />
        <path d="M0 0 L36 22 A42 42 0 0 1 -30 30 Z" fill="var(--brand-3)" />
        <circle cx="0" cy="0" r="20" fill="var(--card)" />
      </g>

      {/* étincelle */}
      <g transform="translate(322 60)" fill="url(#stat-grad)">
        <path d="M0 -11 L3 -3 11 0 3 3 0 11 -3 3 -11 0 -3 -3 Z" />
      </g>
    </svg>
  );
}

/** Numérisation : un ordinateur affichant le tableau de bord, école passée au digital. */
export function DigitalizationIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 330" className={className} role="img" aria-label="École numérique" fill="none">
      <defs>
        <linearGradient id="dg-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-2)" />
          <stop offset="100%" stopColor="var(--brand-1)" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="160" r="140" fill="var(--brand-3)" fillOpacity="0.08" />

      {/* écran */}
      <rect x="70" y="56" width="260" height="162" rx="14" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
      <rect x="70" y="56" width="260" height="28" rx="14" fill="var(--surface)" />
      <circle cx="88" cy="70" r="3.5" fill="var(--border)" />
      <circle cx="100" cy="70" r="3.5" fill="var(--border)" />

      {/* KPIs */}
      {[94, 168, 242].map((x, i) => (
        <g key={x}>
          <rect x={x} y="100" width="64" height="34" rx="7" fill="url(#dg-grad)" fillOpacity={0.12} />
          <rect x={x + 8} y="108" width="30" height="6" rx="3" fill="url(#dg-grad)" />
          <rect x={x + 8} y="120" width={20 + i * 6} height="6" rx="3" fill="var(--border)" />
        </g>
      ))}

      {/* mini graphe */}
      <rect x="94" y="146" width="212" height="56" rx="8" fill="var(--surface)" />
      <polyline points="106,188 138,176 170,182 202,162 234,168 266,148 294,154" fill="none" stroke="url(#dg-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* pied d'ordinateur */}
      <path d="M150 218 H250 L268 244 H132 Z" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />

      {/* badge diplôme */}
      <g transform="translate(40 78)">
        <circle cx="0" cy="0" r="26" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
        <path d="M-14 -2 L0 -9 14 -2 0 5 Z" fill="url(#dg-grad)" />
        <path d="M-7 1 v7 c0 4 14 4 14 0 v-7" stroke="var(--brand-1)" strokeWidth="2.5" fill="none" />
      </g>

      {/* badge validé */}
      <g transform="translate(338 196)">
        <circle cx="0" cy="0" r="24" fill="url(#dg-grad)" />
        <path d="M-9 0 l6 6 12 -14" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* étincelle */}
      <g transform="translate(330 64)" fill="url(#dg-grad)">
        <path d="M0 -12 L3 -3 12 0 3 3 0 12 -3 3 -12 0 -3 -3 Z" />
      </g>
    </svg>
  );
}

/** Automatisation : document → engrenages → sortie PDF, avec éclair. */
export function AutomationIllustration({ className = "" }: { className?: string }) {
  const gear = (cx: number, cy: number, r: number, teeth = 8) => (
    <g>
      {Array.from({ length: teeth }).map((_, i) => (
        <rect
          key={i}
          x={cx - 3.5}
          y={cy - r - 9}
          width="7"
          height="13"
          rx="2"
          fill="url(#auto-grad)"
          transform={`rotate(${(360 / teeth) * i} ${cx} ${cy})`}
        />
      ))}
      <circle cx={cx} cy={cy} r={r} fill="url(#auto-grad)" />
      <circle cx={cx} cy={cy} r={r * 0.42} fill="var(--card)" />
    </g>
  );

  return (
    <svg viewBox="0 0 400 320" className={className} role="img" aria-label="Automatisation des processus" fill="none">
      <defs>
        <linearGradient id="auto-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-2)" />
          <stop offset="100%" stopColor="var(--brand-1)" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="160" r="138" fill="var(--brand-3)" fillOpacity="0.08" />

      {/* document source */}
      <g>
        <rect x="40" y="96" width="92" height="120" rx="12" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="56" y="116" width="46" height="7" rx="3.5" fill="url(#auto-grad)" />
        {[134, 150, 166, 182].map((y) => (
          <rect key={y} x="56" y={y} width="60" height="6" rx="3" fill="var(--border)" />
        ))}
      </g>

      {/* flux */}
      <path d="M140 156 H176" stroke="var(--brand-1)" strokeWidth="2.5" strokeDasharray="3 6" strokeLinecap="round" />
      <path d="M250 156 H286" stroke="var(--brand-1)" strokeWidth="2.5" strokeDasharray="3 6" strokeLinecap="round" />

      {/* engrenages */}
      {gear(204, 142, 30, 9)}
      {gear(238, 188, 20, 8)}

      {/* sortie PDF */}
      <g>
        <rect x="294" y="100" width="86" height="112" rx="12" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="310" y="118" width="40" height="6" rx="3" fill="var(--border)" />
        <rect x="310" y="132" width="54" height="6" rx="3" fill="var(--border)" />
        <rect x="310" y="180" width="40" height="18" rx="5" fill="url(#auto-grad)" />
        <text x="330" y="193" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">PDF</text>
      </g>

      {/* éclair "en un clic" */}
      <g transform="translate(176 60)">
        <circle cx="14" cy="14" r="22" fill="url(#auto-grad)" />
        <path d="M16 2 L6 17 h8 l-3 13 13 -18 h-8 z" fill="white" />
      </g>
    </svg>
  );
}

/** Contact : enveloppe + avion en papier, en blanc (pour fond bleu). */
export function ContactIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 300" className={className} role="img" aria-label="Nous contacter" fill="none">
      <circle cx="180" cy="150" r="120" fill="white" fillOpacity="0.06" />
      <circle cx="180" cy="150" r="78" fill="white" fillOpacity="0.06" />

      {/* enveloppe */}
      <g>
        <rect x="78" y="108" width="156" height="108" rx="14" fill="white" />
        <path d="M78 122 L156 172 L234 122" stroke="var(--brand-1)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="98" y="190" width="64" height="7" rx="3.5" fill="var(--brand-3)" />
      </g>

      {/* avion en papier */}
      <g transform="translate(214 70)">
        <path d="M0 40 L72 0 L40 72 L30 44 Z" fill="white" />
        <path d="M40 72 L30 44 L72 0 Z" fill="white" fillOpacity="0.7" />
        <path d="M30 44 L52 24" stroke="var(--brand-1)" strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* trajectoire */}
      <path d="M214 150 C240 150 250 96 286 78" stroke="white" strokeOpacity="0.55" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" fill="none" />

      {/* points */}
      <circle cx="70" cy="92" r="5" fill="white" fillOpacity="0.8" />
      <circle cx="296" cy="206" r="4" fill="white" fillOpacity="0.7" />
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
