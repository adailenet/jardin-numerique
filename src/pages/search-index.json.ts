import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const notes = await getCollection("notes", ({ data }) => !data.draft);

  const index = notes.map((note) => ({
    id: note.id,
    title: note.data.title,
    summary: note.data.summary ?? "",
    tags: note.data.tags,
    // corps brut, utilisé pour la recherche plein texte côté client
    body: note.body ?? "",
  }));

  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json" },
  });
};
