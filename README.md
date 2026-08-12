# 🌱 jardin numérique — structure de départ

Scaffold [Astro](https://astro.build) prêt à déployer sur GitHub Pages, avec :

- **Galerie de notes** (`/`) — cartes filtrables par étiquette, générées depuis une content
  collection Markdown.
- **Note individuelle** (`/notes/[id]/`) — route dynamique générée pour chaque fichier de
  `src/content/notes/`.
- **Recherche** (`/recherche`) — recherche plein texte 100% côté client, sans serveur ni
  service tiers, basée sur un index JSON généré au build (`/search-index.json`).
- **Carte du jardin** (`/carte`) — première visualisation de données : un graphe des notes
  reliées par étiquettes partagées, en SVG généré par une petite simulation de forces.

## Démarrer

```bash
npm install
npm run dev       # http://localhost:4321
```

## Ajouter une note

Crée un fichier dans `src/content/notes/mon-titre.md` :

```md
---
title: "Mon titre"
planted: 2026-08-12
stage: "graine"   # graine | pousse | arbre
tags: ["idée"]
summary: "Une phrase de résumé."
---

Le contenu de la note en Markdown.
```

Le schéma est défini et validé dans `src/content.config.ts`.

## Déployer sur GitHub Pages

1. Pousse ce projet sur un dépôt GitHub.
2. Dans **Settings → Pages**, choisis la source **GitHub Actions**.
3. Dans `astro.config.mjs`, mets à jour `site` avec ton URL réelle (`https://tonpseudo.github.io`
   si le dépôt s'appelle `tonpseudo.github.io`, sinon décommente `base: "/nom-du-depot"`).
4. Le workflow `.github/workflows/deploy.yml` build et déploie automatiquement à chaque push
   sur `main`.

## Pistes pour la suite

- **Interactions utilisateurs** : sans serveur perso, [giscus](https://giscus.app) (commentaires
  basés sur les GitHub Discussions) s'intègre en quelques lignes et reste gratuit.
- **Recherche plus puissante** : si le jardin grossit beaucoup, remplace la recherche maison par
  [Pagefind](https://pagefind.app) (indexation au build, floue, très rapide, toujours sans
  serveur).
- **Carte du jardin plus riche** : la simulation actuelle est volontairement simple (aucune
  dépendance). [D3.js](https://d3js.org) permettrait un graphe interactif (zoom, drag, clustering
  par étiquette).
- **Design** : la palette et la typographie sont centralisées dans `src/styles/global.css`
  (variables CSS) — à adapter à l'identité visuelle de *Compatibilité Déco* si tu veux une
  cohérence entre tes projets.
