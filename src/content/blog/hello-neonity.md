---
title: "Hello, NEONITY"
description: "An opening note for the personal web node: what this place is for, and how it should grow."
pubDate: 2026-07-09
tags:
  - site
  - writing
  - open web
---

NEONITY.cc is meant to be small enough to stay personal and structured enough to become useful.

This blog is the public notebook layer: a place for essays, build logs, design notes, and unfinished observations that are still worth keeping in the open. The homepage can stay compact while the writing gets room to breathe.

## What Belongs Here

The useful test is simple: if a note explains a decision, records a pattern, or helps a future version of me remember why something mattered, it probably belongs here.

Expect short entries about software, design, language, AI tools, and the texture of making things on the web.

## How To Add A Post

Add a Markdown file to `src/content/blog/` with frontmatter for `title`, `description`, `pubDate`, and `tags`. The collection schema will validate it during development and build.

Draft posts can stay in the same folder with `draft: true`; they will be excluded from the public index and generated routes.
