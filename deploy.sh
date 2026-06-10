#!/bin/bash

# Arrêter le script au premier échec
set -e

echo "📦 1. Compilation du projet..."
npm run build

echo "🚀 2. Déploiement sur Firebase Hosting..."
npx firebase deploy

echo "💾 3. Ajout des modifications à Git..."
git add .

# Message de commit par défaut ou passé en argument
COMMIT_MSG=${1:-"feat: translate privacy policy, add offline check on contact & add 5 testimonials"}

echo "📝 4. Création du commit Git..."
git commit -m "$COMMIT_MSG"

echo "📤 5. Envoi vers GitHub..."
git push

echo "✅ Déploiement et sauvegarde terminés avec succès !"
