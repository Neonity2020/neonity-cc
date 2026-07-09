---
title: Site Map
description: The current public structure of NEONITY.cc and where future docs fit.
---

NEONITY.cc currently has two public zones:

| Path | Purpose |
| --- | --- |
| `/` | The personal homepage: identity, projects, focus areas, and contact. |
| `/docs/` | The documentation system powered by Astro Starlight. |

## Homepage Sections

The homepage is composed from data-driven Astro components:

- `HeroSection` introduces NEONITY.cc and provides the primary calls to action.
- `IntroSection` explains the purpose of the site.
- `WorkSection` lists current project threads.
- `FocusSection` describes the kinds of work that live here.
- `ContactSection` closes with availability and contact links.

## Documentation Sections

The docs live under `src/content/docs/docs/` so Starlight generates them at `/docs/`.

Recommended groups:

- **Start** for entry points and orientation.
- **System** for structure, design, and implementation notes.
- **Practice** for writing, maintenance, and contribution habits.

Keep docs short and specific. If a page grows into several unrelated concerns, split it.
