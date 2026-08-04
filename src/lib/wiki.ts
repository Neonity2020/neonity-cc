import type { CollectionEntry } from "astro:content";

export type WikiEntry = CollectionEntry<"wiki">;

export const getPublishedWikiEntries = (entries: WikiEntry[]) =>
  [...entries]
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

export const getWikiHref = (entry: WikiEntry) => `/viktor-lee-s-wiki/${entry.id}/`;

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);

export const estimateReadingTime = (markdown = "") => {
  const words = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 220));
};