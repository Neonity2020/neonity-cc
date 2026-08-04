import { getCollection } from "astro:content";
import { getPublishedPosts } from "../../lib/blog";

export const prerender = true;

const FALLBACK_SITE = new URL("https://neonity.cc");

export async function GET({ site }: { site?: URL }) {
  const posts = getPublishedPosts(await getCollection("blog"));
  const siteUrl = site ?? FALLBACK_SITE;

  const payload = {
    version: 1,
    generatedAt: new Date().toISOString(),
    posts: posts.map((post) => ({
      id: post.id,
      slug: post.id,
      title: post.data.title,
      description: post.data.description,
      tags: post.data.tags,
      publishedAt: post.data.pubDate.toISOString(),
      updatedAt: (post.data.updatedDate ?? post.data.pubDate).toISOString(),
      canonicalUrl: new URL(`/blog/${post.id}/`, siteUrl).toString(),
      content: post.body,
    })),
  };

  return new Response(JSON.stringify(payload), {
    headers: {
      "access-control-allow-origin": "*",
      "cache-control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
      "content-type": "application/json; charset=utf-8",
    },
  });
}
