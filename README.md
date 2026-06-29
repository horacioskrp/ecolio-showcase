# Dalibi — Site vitrine

Site marketing de **Dalibi**, le logiciel de gestion scolaire open source pour les écoles
d'Afrique de l'Ouest. Présente le produit, ses fonctionnalités, son positionnement open source et
permet de demander une démonstration / un devis.

## 🛠️ Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS 4** (design system par variables CSS, mode clair/sombre via `next-themes`)
- **GSAP** (animations au scroll) — illustrations **SVG inline** (aucune image externe)
- **nodemailer** (envoi du formulaire de contact via SMTP)
- `lucide-react` & `react-icons` (icônes)

## 📄 Pages

| Route | Description |
| --- | --- |
| `/` | Accueil : hero (aperçu du tableau de bord), numérisation, automatisation, sélecteur de rôles, modules, capacités, sécurité, open source, technologie, CTA |
| `/fonctionnalites` | Détail des fonctionnalités : sections éditoriales illustrées + grille exhaustive |
| `/tarifs` | Positionnement open source (gratuit, GPL v3) + accompagnement sur devis |
| `/faq` | Questions fréquentes |
| `/contact` | Formulaire de contact (envoi d'e-mail) |
| `/documentation` | Guides d'installation, API du portail, licence, confidentialité |
| `/api/contact` | Route handler (POST) — envoi de l'e-mail de contact |

## 🧩 Architecture

- `app/` — pages (App Router) et la route API `app/api/contact/route.ts`.
- `components/landing/` — sections et briques réutilisables :
  - **`site-header.tsx`** — en-tête unique (logo + nav + GitHub + thème + « Demander un devis »), utilisé sur toutes les pages.
  - **`page-hero.tsx`** — hero de page réutilisable (dégradé bleu animé, badge configurable, illustration).
  - **`landing-footer.tsx`** — pied de page commun.
  - **`illustrations.tsx`** — bibliothèque d'illustrations SVG (thématiques + variantes blanches pour les hero bleus).
  - `data.ts` — contenus (modules, audiences, FAQ, sécurité…).
  - sections de la home (`hero-section`, `modules-section`, `audiences-section`, …).
- `components/theme-provider.tsx` / `theme-toggle.tsx` — thème clair (par défaut) / sombre.

## 🚀 Démarrage

Prérequis : **Node.js** et **npm**.

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## ✉️ Configuration du formulaire de contact

Le formulaire `/contact` envoie un e-mail via SMTP (nodemailer). Copier `.env.example` vers
`.env.local` et renseigner :

```env
CONTACT_RECIPIENT=hervekudayah@gmail.com   # destinataire des messages
SMTP_HOST=smtp.exemple.com
SMTP_PORT=587
SMTP_SECURE=false                          # true pour le port 465
SMTP_USER=...
SMTP_PASS=...
MAIL_FROM=no-reply@votre-domaine.com       # expéditeur (délivrabilité / anti-spam)
```

Sans configuration SMTP, l'API répond « Service e-mail non configuré ».

**Anti-spam** : champ honeypot caché, délai minimal de remplissage, validation serveur (nom,
e-mail, longueur du message) et échappement HTML. L'expéditeur est l'adresse authentifiée
(`MAIL_FROM`) et le `Reply-To` est le visiteur.

## 📜 Scripts

```bash
npm run dev          # serveur de développement
npm run build        # build de production
npm run start        # démarre le build
npm run lint         # ESLint
npm run type-check   # vérification TypeScript (tsc --noEmit)
```

## 🌿 Workflow Git (gitflow)

Branches : `main` (production, taguée) ← `develop` (intégration) ← branches de fonctionnalité.
Les features sont fusionnées dans `develop` (`--no-ff`), puis `develop` est publié sur `main` lors
d'une release versionnée (ex. `v1.0.0`).

## 🚢 Déploiement

Le formulaire de contact nécessite un runtime Node (route API) : déployer en mode serveur
(`next start`, conteneur, Vercel…), avec les variables SMTP configurées dans l'environnement.
