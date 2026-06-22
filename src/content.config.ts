import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
	loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			author: z.string().default('neonity.cc'),
			tags: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
			image: z.object({
				src: image(),
				alt: z.string(),
			}).optional(),
		}),
});

const releases = defineCollection({
	loader: glob({ base: './src/content/releases', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			version: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			status: z.enum(['stable', 'beta', 'alpha']).default('stable'),
			highlights: z.array(z.string()).default([]),
			breaking: z.boolean().default(false),
			draft: z.boolean().default(false),
			image: z.object({
				src: image(),
				alt: z.string(),
			}).optional(),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			status: z.enum(['planning', 'building', 'testing', 'paused']).default('building'),
			progress: z.number().int().min(0).max(100),
			startedAt: z.coerce.date(),
			targetDate: z.coerce.date().optional(),
			technologies: z.array(z.string()).default([]),
			website: z.string().url().optional(),
			repository: z.string().url().optional(),
			featured: z.boolean().default(false),
			draft: z.boolean().default(false),
			image: z.object({
				src: image(),
				alt: z.string(),
			}).optional(),
		}),
});

export const collections = { posts, releases, projects };
