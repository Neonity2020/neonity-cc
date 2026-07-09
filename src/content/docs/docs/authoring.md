---
title: Authoring Docs
description: How to add and maintain NEONITY.cc documentation pages.
---

Docs are plain Markdown files managed by Astro Starlight.

## Add A Page

Create a Markdown file in `src/content/docs/docs/`:

```text
src/content/docs/docs/my-note.md
```

The page will be available at:

```text
/docs/my-note/
```

Every page needs frontmatter:

```md
---
title: My Note
description: A short sentence describing the page.
---
```

## Add It To Navigation

Update the `sidebar` array in `astro.config.mjs`.

Use the Starlight slug without leading or trailing slashes:

```js
{ slug: 'docs/my-note' }
```

## Writing Style

- Prefer short pages with one clear job.
- Use concrete headings.
- Put implementation paths in backticks.
- Link back to the homepage or related docs when it helps orientation.
- Keep design decisions in `DESIGN.md` and summarize them in docs only when useful.

## Local Check

Run a build after changing docs:

```sh
npm run build
```

The build validates Starlight frontmatter, links, routes, and generated content.
