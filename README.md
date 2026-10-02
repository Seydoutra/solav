# SoLav — vitrine web

Landing page React + TypeScript + Vite pour présenter le projet SoLav.

## Lancer le site

```bash
npm install
npm run dev
```

Créer la version de production :

```bash
npm run build
```

Le résultat compilé est généré dans `dist/`.

## Publication GitHub Pages

Le workflow `.github/workflows/deploy-pages.yml` compile et publie automatiquement le site à chaque envoi sur la branche `main`. Dans les paramètres du dépôt GitHub, choisir **Settings → Pages → Source: GitHub Actions** lors de la première publication.

## Statut des contenus

- Le visuel principal est une illustration conceptuelle générée, pas la photographie d’une station existante.
- Les valeurs du tableau de bord sont fictives et identifiées comme données de démonstration.
- Les services, intégrations de paiement et modèles de développement sont présentés comme envisagés.
