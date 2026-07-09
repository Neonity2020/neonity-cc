// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://neonity.cc',
  integrations: [
    starlight({
      title: 'NEONITY.cc Docs',
      description: 'Documentation for the NEONITY.cc personal web node.',
      favicon: '/favicon.svg',
      customCss: ['./src/styles/starlight.css'],
      sidebar: [
        {
          label: 'Start',
          items: [{ slug: 'docs' }],
        },
        {
          label: 'System',
          items: [
            { slug: 'docs/site-map' },
            { slug: 'docs/design-system' },
          ],
        },
        {
          label: 'Book',
          items: [{ slug: 'docs/book/chapter-1', label: 'Chapter 1' }],
        },
        {
          label: 'Practice',
          items: [{ slug: 'docs/authoring' }],
        },
        { label: 'Back to NEONITY.cc', link: '/' },
      ],
    }),
  ],
});
