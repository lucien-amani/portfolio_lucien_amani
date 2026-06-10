# Lucien Amani Bahogwerhe   Portfolio Professionnel

> Site web portfolio et carte de visite numérique de **Lucien Amani Bahogwerhe**, développeur web fullstack basé à Bukavu, République Démocratique du Congo.

🌐 **Live** → [https://portfolio-lucien-amani.web.app](https://portfolio-lucien-amani.web.app)
📁 **Repo** → [github.com/lucien-amani/portfolio_lucien_amani](https://github.com/lucien-amani/portfolio_lucien_amani)

---

## Table des matières

1. [Aperçu du projet](#-aperçu-du-projet)
2. [Fonctionnalités](#-fonctionnalités)
3. [Stack technique](#️-stack-technique)
4. [Architecture des composants](#-architecture-des-composants)
5. [Installation locale](#-installation-locale)
6. [Déploiement en production](#-déploiement-en-production)
7. [Structure du projet](#-structure-du-projet)
8. [Internationalisation (i18n)](#-internationalisation-i18n)
9. [PWA & Service Worker](#-pwa--service-worker)
10. [SEO & Référencement](#-seo--référencement)
11. [Cookies & Confidentialité](#-cookies--confidentialité)
12. [Variables d'environnement](#-variables-denvironnement)
13. [Contribution](#-contribution)
14. [Licence](#-licence)

---

## 📋 Aperçu du projet

Ce portfolio a été conçu pour servir de **carte de visite numérique professionnelle**, présentant :
- L'identité et le parcours de Lucien Amani
- Les projets réalisés pour des organisations réelles (coopératives, écoles, ASBL)
- Les services proposés
- Un formulaire de contact intégré via EmailJS
- Une section de témoignages clients et collaborateurs

Le site est une **Single Page Application (SPA)** 100% responsive, bilingue (FR/EN), supportant le mode sombre/clair et installable comme application Progressive Web App (PWA).

---

## ✨ Fonctionnalités

| Fonctionnalité | Détail |
|---|---|
| 🌍 Bilingue FR/EN | Détection automatique de la langue du navigateur |
| 🌙 Mode sombre/clair | Persisté dans `localStorage` |
| 📱 PWA | Installable sur mobile et desktop, cache offline |
| 📸 Carrousel de photos | Navigation par miniatures dans la section Hero |
| 📬 Formulaire de contact | Envoi via EmailJS avec détection hors-ligne |
| ⭐ Témoignages | 5 témoignages clients/collaborateurs style Instagram |
| 🍪 Consentement cookies | Bannière avec options granulaires (essentiel/analytique/marketing) |
| 🔒 Politique de confidentialité | Modal intégré complet (RGPD) |
| 📍 Navigation mobile | Barre de navigation fixe en bas de l'écran |
| 💬 WhatsApp | Bouton avec messages pré-remplis aléatoires |
| 📘 Facebook | Lien direct vers le profil Facebook |
| 🔍 SEO optimisé | Meta tags, Open Graph, Twitter Card, Schema.org JSON-LD, sitemap.xml |

---

## 🛠️ Stack technique

### Frontend
| Technologie | Version | Rôle |
|---|---|---|
| **React** | 19.x | Framework UI (composants, hooks, contextes) |
| **Vite** | 8.x | Bundler et serveur de développement ultra-rapide |
| **Tailwind CSS** | 4.x | Utilitaires CSS pour le style |
| **Lucide React** | 0.474+ | Icônes SVG légères et cohérentes |

### Services externes
| Service | Rôle |
|---|---|
| **EmailJS** | Envoi des emails depuis le formulaire de contact (côté client, sans backend) |
| **Firebase Hosting** | Hébergement statique avec CDN mondial |
| **Google Fonts** | Typographies Inter (corps) & Sora (titres) |

### Outils de développement
| Outil | Rôle |
|---|---|
| **ESLint** | Analyse statique et qualité du code |
| **Git** | Versioning du code |
| **GitHub** | Hébergement du dépôt |
| **Python + Pillow** | Script de compression des images (`compress_assets.py`) |

---

## 🧩 Architecture des composants

```
src/
├── App.jsx                    # Racine de l'application, providers globaux
├── main.jsx                   # Point d'entrée React, enregistrement Service Worker
├── index.css                  # Styles globaux, variables CSS, animations
│
├── contexts/
│   ├── ThemeContext.jsx        # Gestion du mode sombre/clair (localStorage)
│   └── LanguageContext.jsx    # Système i18n FR/EN (100+ clés de traduction)
│
├── utils/
│   └── social.jsx             # Icônes WhatsApp & Facebook, helper openWhatsApp()
│
└── components/
    ├── Navbar.jsx              # Header fixe, nav desktop, actions mobiles
    ├── MobileBottomNav.jsx     # Barre de navigation fixe bas d'écran (mobile)
    ├── Hero.jsx                # Section accueil : carrousel photos, CTA, stack badges
    ├── Portfolio.jsx           # Grille des projets réalisés
    ├── WhyMe.jsx               # Différenciateurs + section témoignages ⭐
    ├── Services.jsx            # 4 services proposés + CTA
    ├── Contact.jsx             # Formulaire EmailJS + sidebar réseaux sociaux
    ├── Footer.jsx              # Pied de page avec navigation et réseaux
    ├── CookieConsent.jsx       # Bannière de consentement cookies RGPD
    └── PrivacyPolicy.jsx       # Modal politique de confidentialité complète
```

### Description détaillée des composants

#### `Navbar.jsx`
Navigation principale fixe en haut de page. Sur **desktop** : liens de section + bouton de langue + thème + CTA contact. Sur **mobile** : uniquement le logo, le sélecteur de langue, le bouton de thème, et les icônes WhatsApp/Facebook (la navigation principale est assurée par `MobileBottomNav`).

#### `MobileBottomNav.jsx`
Barre de navigation fixe en bas de l'écran, visible uniquement sur mobile (`md:hidden`). 5 onglets correspondant aux 5 sections du site, avec icônes Lucide et labels traduits dynamiquement.

#### `Hero.jsx`
Section d'accueil plein écran. Affiche la localisation (Bukavu, RDC), le rôle, la phrase d'accroche bilingue, la description, les badges de technologies, les CTAs et les liens sociaux. Côté droit : carrousel de 4 photos professionnelles avec navigation par miniatures et badge de disponibilité.

#### `Portfolio.jsx`
Grille de 4 projets réels. Chaque carte affiche : type de projet, badge statut (public/confidentiel), titre, client, problème terrain résolu, solution livrée, stack technologique et lien GitHub si disponible.

#### `WhyMe.jsx`
Deux sous-sections : 6 cartes de différenciation (compétences et approche) + 5 témoignages style Instagram avec étoiles, avatar à initiales, badge de projet et citation complète.

#### `Services.jsx`
4 services principaux en grille 2×2 : Gestion scolaire, Coopératives agricoles, Sites ASBL/Organisations, Audit de code. Chaque service liste 4 points forts spécifiques. CTA gradient en bas de section.

#### `Contact.jsx`
Formulaire complet (EmailJS) avec sélecteur de sujet personnalisé. Gère 4 états : formulaire vide, envoi en cours, succès, hors-ligne. Sidebar avec liens vers les 5 réseaux sociaux (GitHub, LinkedIn, Twitter/X, Facebook, WhatsApp). Détection de connexion internet avant envoi.

#### `CookieConsent.jsx`
Bannière flottante (bas-gauche desktop, bas mobile) affichée à la première visite. Options : "Tout accepter" ou "Paramétrer" (toggle granulaire pour analytique et marketing). Choix persisté dans `localStorage`.

#### `PrivacyPolicy.jsx`
Modal scrollable avec politique de confidentialité complète (9 sections) : responsable du traitement, données collectées, finalités, cookies, base légale, durée de conservation, droits, services tiers, modifications.

---

## 🚀 Installation locale

### Prérequis
- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- **Git**

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/lucien-amani/portfolio_lucien_amani.git
cd portfolio_lucien_amani

# 2. Installer les dépendances
npm install

# 3. Démarrer le serveur de développement
npm run dev
```

Le site sera disponible sur **http://localhost:5173**

### Scripts disponibles

```bash
npm run dev      # Serveur de développement avec hot-reload
npm run build    # Build de production dans ./dist/
npm run preview  # Prévisualisation du build de production en local
npm run lint     # Analyse du code avec ESLint
```

### Compression des images (optionnel)

Pour réduire le poids des photos de profil (passage de ~9.5 Mo à ~300 Ko) :

```bash
# Installer Pillow si nécessaire
pip install Pillow

# Lancer la compression
python3 compress_assets.py
```

---

## 🌐 Déploiement en production

### Sur Firebase Hosting (méthode utilisée)

#### 1. Prérequis Firebase
```bash
# Installer Firebase CLI
npm install -g firebase-tools

# Se connecter à Firebase
npx firebase login

# Associer le projet
npx firebase use portfolio-lucien-amani
```

#### 2. Build + Deploy
```bash
# Compiler le projet
npm run build

# Déployer sur Firebase Hosting
npx firebase deploy
```

Le site sera disponible sur : `https://portfolio-lucien-amani.web.app`

#### 3. Configuration Firebase (`firebase.json`)
```json
{
  "hosting": {
    "site": "lucien-amani",
    "public": "dist",
    "rewrites": [{ "source": "**", "destination": "/index.html" }],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [{ "key": "Cache-Control", "value": "max-age=31536000" }]
      }
    ]
  }
}
```

### Sur Vercel (alternative)
```bash
npm install -g vercel
vercel --prod
```

### Sur Netlify (alternative)
```bash
npm run build
# Glisser le dossier dist/ sur app.netlify.com/drop
```

---

## 🌍 Internationalisation (i18n)

Le système de traduction est entièrement fait maison, sans bibliothèque externe.

### Fonctionnement

- **`src/contexts/LanguageContext.jsx`** contient l'objet `TRANSLATIONS` avec toutes les clés en FR et EN
- La langue est détectée automatiquement via `navigator.language`
- Elle est persistée dans `localStorage` (`lang` key)
- Le hook `useLang()` expose `{ lang, t, switchLang }`

```jsx
import { useLang } from '../contexts/LanguageContext'

function MonComposant() {
  const { t, lang, switchLang } = useLang()
  return <p>{t('hero_tagline')}</p>
}
```

### Ajouter une nouvelle langue

1. Ajouter un bloc dans `TRANSLATIONS` (ex: `sw:` pour le Swahili)
2. Modifier `detectLang()` pour inclure la détection
3. Mettre à jour le bouton de langue dans `Navbar.jsx`

---

## 📱 PWA & Service Worker

Le site est une **Progressive Web App** :
- Installable depuis le navigateur sur mobile et desktop
- Cache les fichiers essentiels pour un affichage partiel hors-ligne
- Fichier `public/sw.js` : stratégie **Network-first** pour les pages HTML, **Cache-first** pour les assets statiques (images, JS, CSS)
- Fichier `public/manifest.json` : configuration de l'icône, couleur de thème, nom de l'application

---

## 🔍 SEO & Référencement

Le fichier `index.html` contient :
- `<title>` et `<meta name="description">` optimisés
- Balises **Open Graph** (Facebook, LinkedIn)
- Balises **Twitter Card**
- **Schema.org JSON-LD** (type `Person`) avec toutes les informations professionnelles
- `<link rel="canonical">` pointant vers le domaine principal
- `<meta name="google-site-verification">` pour la Google Search Console

Fichiers SEO dans `/public/` :
- `robots.txt`   Autorise l'indexation de toutes les pages
- `sitemap.xml`   Plan du site pour les moteurs de recherche

### Soumettre à Google
1. [Google Search Console](https://search.google.com/search-console) → Ajouter la propriété
2. Valider via la balise meta déjà présente dans `index.html`
3. Soumettre `sitemap.xml`

### Soumettre à Bing
1. [Bing Webmaster Tools](https://www.bing.com/webmasters) → Importer depuis Google Search Console

---

## 🍪 Cookies & Confidentialité

### Catégories de cookies

| Catégorie | Clé localStorage | Obligatoire | Contenu |
|---|---|---|---|
| Essentiels | `theme`, `lang`, `lucien_cookie_consent` | ✅ Oui | Thème, langue, consentement |
| Analytiques | stocké dans `lucien_cookie_consent` | ❌ Non | Mesure d'audience anonyme |
| Marketing | stocké dans `lucien_cookie_consent` | ❌ Non | Personnalisation publicitaire |

### Format du consentement stocké
```json
{
  "essential": true,
  "analytics": true,
  "marketing": false,
  "ts": 1749549600000
}
```

---

## 🔑 Variables d'environnement

Les identifiants EmailJS sont actuellement définis directement dans `src/components/Contact.jsx`. Pour une configuration par environnement, vous pouvez les externaliser dans un fichier `.env` :

```bash
# .env.local (à ne pas commiter)
VITE_EJS_SERVICE_ID=service_xxxxxxx
VITE_EJS_TEMPLATE_ID=template_xxxxxxx
VITE_EJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

Puis dans `Contact.jsx` :
```js
const EJS_SERVICE_ID  = import.meta.env.VITE_EJS_SERVICE_ID
const EJS_TEMPLATE_ID = import.meta.env.VITE_EJS_TEMPLATE_ID
const EJS_PUBLIC_KEY  = import.meta.env.VITE_EJS_PUBLIC_KEY
```

---

## 🤝 Contribution

Ce projet est un portfolio personnel, mais les suggestions sont les bienvenues :

1. Forker le dépôt
2. Créer une branche : `git checkout -b feat/ma-suggestion`
3. Commiter vos modifications : `git commit -m 'feat: description'`
4. Pousser : `git push origin feat/ma-suggestion`
5. Ouvrir une Pull Request

---

## 📄 Licence

Ce projet est sous licence **MIT**. Vous êtes libre de le réutiliser et de l'adapter à condition de conserver la mention de l'auteur original.

```
MIT License

Copyright (c) 2026 Lucien Amani Bahogwerhe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

<div align="center">

**Lucien Amani Bahogwerhe** · Développeur Web Fullstack · Bukavu, RDC

[Portfolio](https://portfolio-lucien-amani.web.app) · [GitHub](https://github.com/lucien-amani) · [LinkedIn](https://www.linkedin.com/in/lucius-amani-333540353/) · [Facebook](https://www.facebook.com/luciusamani1)

</div>
