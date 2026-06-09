# Lucien Amani – Portfolio & Branding

Site portfolio et branding de **Lucien Amani Bahogwerhe**, développeur fullstack (Go, React, PHP, Python, Node.js), basé à Bukavu, RDC.

---

## Stack technique

| Couche       | Technologie                  |
|--------------|------------------------------|
| Framework    | React 19 + Vite              |
| CSS          | Tailwind CSS v4              |
| Icônes       | Lucide React                 |
| Routage      | Ancres HTML (SPA one-page)   |
| Hébergement  | Firebase Hosting             |

---

## Lancer le projet en local

### Prérequis

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
npm install
```

### Démarrer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:5173](http://localhost:5173).

---

## Thème clair / sombre

Le toggle thème est disponible dans la barre de navigation (icône lune/soleil).

- **Automatique** : détecte la préférence système (`prefers-color-scheme`) au premier chargement.
- **Persistant** : le choix est sauvegardé dans `localStorage` sous la clé `theme` (`"light"` ou `"dark"`).
- **Manuel** : cliquer sur l'icône dans la navbar pour basculer à tout moment.

---

## Formulaire de contact

Le formulaire est actuellement en mode **simulé** (délai artificiel de 1,2 s puis succès).

Pour l'activer en production, deux options :

### Option 1 – Formspree (sans backend)
1. Créer un compte sur [formspree.io](https://formspree.io)
2. Créer un nouveau formulaire et récupérer l'endpoint (ex : `https://formspree.io/f/xxxxxxxx`)
3. Dans `src/components/Contact.jsx`, remplacer la ligne de simulation par :
```js
await fetch('https://formspree.io/f/VOTRE_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

### Option 2 – EmailJS
1. Installer : `npm install @emailjs/browser`
2. Suivre la documentation [EmailJS](https://www.emailjs.com/docs/)
3. Remplacer la simulation dans `handleSubmit`

---

## Déployer sur Firebase Hosting

```bash
# 1. Builder la production
npm run build

# 2. Installer Firebase CLI (si pas déjà fait)
npm install -g firebase-tools

# 3. Se connecter
firebase login

# 4. Initialiser (première fois seulement)
firebase init hosting
# → choisir "Use an existing project" ou en créer un
# → public directory : dist
# → SPA rewrite : yes

# 5. Déployer
firebase deploy --only hosting
```

---

## Structure du projet

```
lucien-amani-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation + toggle thème
│   │   ├── Hero.jsx         # Section d'accueil
│   │   ├── Portfolio.jsx    # Projets réels
│   │   ├── WhyMe.jsx        # Différenciateurs branding
│   │   ├── Services.jsx     # Offres freelance
│   │   ├── Contact.jsx      # Formulaire de contact
│   │   └── Footer.jsx       # Pied de page
│   ├── contexts/
│   │   └── ThemeContext.jsx  # Gestion dark/light mode
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── firebase.json
├── index.html
├── package.json
└── vite.config.js
```

---

## Personnalisation rapide

| Élément             | Fichier                            |
|---------------------|------------------------------------|
| Liens sociaux       | `Hero.jsx`, `Contact.jsx`, `Footer.jsx` |
| Projets portfolio   | `Portfolio.jsx` → tableau `PROJECTS` |
| Services proposés   | `Services.jsx` → tableau `SERVICES`  |
| Texte hero          | `Hero.jsx`                         |
| Couleur d'accent    | `index.css` (classe `violet-*`)    |

---

*Développé avec soin par Lucien Amani Bahogwerhe – Bukavu, RDC*
