import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export async function getPublishedPosts() {
	const posts = await getCollection('posts', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function getAllTags(posts: Post[]) {
	return [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) =>
		a.localeCompare(b, 'zh-CN'),
	);
}

export function getTagHref(tag: string) {
	return `/tags/${encodeURIComponent(tag)}`;
}
