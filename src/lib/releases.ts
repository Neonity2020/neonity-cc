import { getCollection, type CollectionEntry } from 'astro:content';

export type Release = CollectionEntry<'releases'>;
export type ReleaseStatus = Release['data']['status'];

export const releaseStatusLabels: Record<ReleaseStatus, string> = {
	stable: '稳定版',
	beta: '测试版',
	alpha: '预览版',
};

export async function getPublishedReleases() {
	const releases = await getCollection('releases', ({ data }) => !data.draft);
	return releases.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
