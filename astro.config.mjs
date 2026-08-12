// @ts-check
import { defineConfig } from "astro/config";

// Astro build entièrement statique (aucun serveur requis) : c'est ce
// qu'attend GitHub Pages.
//
// -> Remplace "site" par l'URL réelle de ton site GitHub Pages.
//    - si ton repo s'appelle "tonpseudo.github.io" : pas de "base" nécessaire
//    - sinon (ex: repo "jardin") : décommente "base" ci-dessous
export default defineConfig({
  output: "static",
  site: "https://tonpseudo.github.io",
  // base: "/jardin",
});
