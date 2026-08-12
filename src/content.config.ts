import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Chaque note du jardin est un fichier Markdown dans src/content/notes/
const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    // date de première plantation de la note
    planted: z.coerce.date(),
    // date de dernière mise à jour (optionnelle : une note peut ne jamais repousser)
    updated: z.coerce.date().optional(),
    // stade de maturité, façon "jardin numérique" (graine / pousse / arbre)
    stage: z.enum(["graine", "pousse", "arbre"]).default("graine"),
    tags: z.array(z.string()).default([]),
    // courte description utilisée dans la galerie et le SEO
    summary: z.string().optional(),
    // image de couverture optionnelle, relative à /public
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
