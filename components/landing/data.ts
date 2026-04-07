import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CircleDollarSign,
  GraduationCap,
  HandCoins,
  ReceiptText,
  School,
  ShieldUser,
  UserCheck,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type FeatureColumn = {
  title: string;
  subtitle: string;
  points: string[];
};

export type PricingPlan = {
  name: string;
  price: string;
  caption: string;
  cta: string;
  featured: boolean;
  points: string[];
};

export type FaqItem = {
  id: string;
  q: string;
  a: string;
};

export type ModuleItem = {
  id: string;
  title: string;
  icon: LucideIcon;
  subtitle: string;
  color: string;
  iconColor: string;
  iconBg: string;
  points: string[];
};

export type FlowStep = {
  role: string;
  action: string;
  icon: LucideIcon;
  step: string;
};

export type QuickStat = {
  value: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { label: "Accueil", href: "#accueil" },
  { label: "Modules", href: "#modules" },
  { label: "Documentation", href: "/documentation" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
  { label: "Contribuer", href: "#contribuer" },
];

export const trustedBy: string[] = [
  "Lycee Lome Tech",
  "College Kara Plus",
  "Complexe Aneho Future",
  "Institut Savanes",
  "Ecole Maritime Togo",
  "Academie Kabye",
];

export const featureColumns: FeatureColumn[] = [
  {
    title: "Communication",
    subtitle: "Piloter l'ecole en temps reel",
    points: [
      "Tableaux dynamiques pour administration et direction",
      "Signalements instantanes sur retards de paiement",
      "Journal d'evenements centralise",
    ],
  },
  {
    title: "Gestion",
    subtitle: "Organisation hybride generale + technique",
    points: [
      "Cycles trimestre et semestre en parallele",
      "Gestion des series et coefficients configurable",
      "Authentification a deux facteurs (2FA) pour les comptes sensibles",
      "Validation finale securisee des moyennes",
    ],
  },
  {
    title: "Productivite",
    subtitle: "Moins de papier, plus de decisions",
    points: [
      "Recus et bulletins generes en un clic",
      "Exports massifs PDF et journaux financiers",
      "Flux simplifie pour secretariat et econome",
    ],
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "0 FCFA",
    caption: "Open source self-hosted",
    cta: "Commencer",
    featured: false,
    points: [
      "Installation locale de base",
      "Modules Vie Scolaire + Excellence",
      "Support communautaire GitHub",
    ],
  },
  {
    name: "Etablissement",
    price: "Sur devis",
    caption: "Accompagnement deploiement",
    cta: "Demander une demo",
    featured: true,
    points: [
      "Migration de donnees ecole",
      "Configuration tresorerie complete",
      "Support prioritaire de lancement",
    ],
  },
  {
    name: "Reseau",
    price: "Sur devis",
    caption: "Pour groupes scolaires",
    cta: "Parler au projet",
    featured: false,
    points: [
      "Multi-etablissements",
      "Consolidation regionale",
      "Formation equipe et documentation",
    ],
  },
];

export const faqs: FaqItem[] = [
  {
    id: "faq-offline",
    q: "Ecolio fonctionne-t-il sans internet permanent ?",
    a: "Oui. Le deploiement local sur serveur d'ecole permet un usage en reseau interne avec synchronisation planifiee.",
  },
  {
    id: "faq-lycee-tech",
    q: "Peut-on adapter le systeme pour les lycees techniques ?",
    a: "Oui. Le calcul des notes est parametrable par serie et coefficient, avec gestion trimestre et semestre.",
  },
  {
    id: "faq-contribution",
    q: "Comment contribuer au projet ?",
    a: "Le depot GitHub accepte des Pull Requests sur UI, traductions locales, documentation et optimisation SQL.",
  },
  {
    id: "faq-securite",
    q: "La solution est-elle securisee ?",
    a: "Ecolio suit une approche defense-in-depth: permissions par role, authentification a deux facteurs (2FA), tracabilite des actions et base PostgreSQL robuste.",
  },
];

export const modules: ModuleItem[] = [
  {
    id: "vie-scolaire",
    title: "Vie Scolaire",
    icon: School,
    subtitle: "Administration",
    color: "from-violet-500/20 to-purple-500/10",
    iconColor: "text-violet-500",
    iconBg: "bg-violet-500/15",
    points: [
      "Enrolement intelligent avec pieces jointes",
      "Matricules parametrables: 2026-ECO-001",
      "Fiches de presence automatiques par classe",
    ],
  },
  {
    id: "excellence",
    title: "Excellence",
    icon: GraduationCap,
    subtitle: "Pedagogie",
    color: "from-purple-500/20 to-fuchsia-500/10",
    iconColor: "text-purple-500",
    iconBg: "bg-purple-500/15",
    points: [
      "Saisie decentralisee des notes enseignant",
      "Calcul automatique par coefficients et series",
      "Export Kente-PDF avec filigrane ecole",
    ],
  },
  {
    id: "tresorerie",
    title: "Tresorerie",
    icon: HandCoins,
    subtitle: "Finances",
    color: "from-fuchsia-500/20 to-pink-500/10",
    iconColor: "text-fuchsia-500",
    iconBg: "bg-fuchsia-500/15",
    points: [
      "Plans de paiement en tranches datees",
      "Bourses et remises appliquees automatiquement",
      "Journal quotidien de caisse pour comptable",
    ],
  },
  {
    id: "gestion-utilisateurs",
    title: "Gestion Utilisateurs",
    icon: ShieldUser,
    subtitle: "Acces et securite",
    color: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/15",
    points: [
      "Gestion granulaire avec des roles et permissions",
      "Gestion de profil utilisateur et parametres du compte",
      "2FA configurable",
    ],
  },
];

export const userFlow: FlowStep[] = [
  {
    role: "L'econome",
    action: "Configure les frais de scolarite par niveau.",
    icon: CircleDollarSign,
    step: "01",
  },
  {
    role: "Le secretaire",
    action: "Inscrit l'eleve et encaisse la premiere tranche avec recu.",
    icon: ReceiptText,
    step: "02",
  },
  {
    role: "L'enseignant",
    action: "Saisit les notes de fin de trimestre de facon securisee.",
    icon: UserCheck,
    step: "03",
  },
  {
    role: "Le directeur",
    action: "Valide les moyennes et imprime les bulletins en un clic.",
    icon: BadgeCheck,
    step: "04",
  },
];

export const quickStats: QuickStat[] = [
  { value: "3", label: "Modules metier" },
  { value: "4", label: "Roles utilisateur" },
  { value: "100%", label: "Open source GPL v3" },
];
