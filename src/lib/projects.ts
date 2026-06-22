import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export type ProjectStatus = Project['data']['status'];

export const projectStatusLabels: Record<ProjectStatus, string> = {
	planning: '规划中',
	building: '开发中',
	testing: '测试中',
	paused: '已暂停',
};

const statusOrder: Record<ProjectStatus, number> = {
	building: 0,
	testing: 1,
	planning: 2,
	paused: 3,
};

export async function getPublishedProjects() {
	const projects = await getCollection('projects', ({ data }) => !data.draft);
	return projects.sort((a, b) => {
		if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
		const statusDifference = statusOrder[a.data.status] - statusOrder[b.data.status];
		if (statusDifference !== 0) return statusDifference;
		return b.data.startedAt.getTime() - a.data.startedAt.getTime();
	});
}
