import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedReleases, releaseStatusLabels } from '../../lib/releases';

export async function GET(context: APIContext) {
	const releases = await getPublishedReleases();

	return rss({
		title: 'neonity.cc Releases',
		description: 'neonity.cc 的版本发布记录与重要变更。',
		site: context.site!,
		items: releases.map((release) => ({
			title: `v${release.data.version} · ${release.data.title}`,
			description: release.data.description,
			pubDate: release.data.date,
			link: `/releases/${release.id}/`,
			categories: [releaseStatusLabels[release.data.status]],
		})),
		customData: '<language>zh-CN</language>',
	});
}
