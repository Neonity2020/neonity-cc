import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SiteDescription, SiteTitle } from '../consts';
import { getPublishedPosts } from '../lib/posts';

export async function GET(context: APIContext) {
	const posts = await getPublishedPosts();

	return rss({
		title: SiteTitle,
		description: SiteDescription,
		site: context.site!,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: `/posts/${post.id}/`,
			categories: post.data.tags,
		})),
		customData: '<language>zh-CN</language>',
	});
}
