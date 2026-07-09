import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export const getPublishedPosts = (posts: BlogPost[]) =>
  [...posts]
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

export const getPostHref = (post: BlogPost) => `/blog/${post.id}/`;

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
