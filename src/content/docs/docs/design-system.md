---
title: Design System
description: Reusable design rules for extending NEONITY.cc.
---

The canonical design abstraction is maintained in `DESIGN.md` at the repository root. Use that file as the source of truth when building new public-facing surfaces.

## Design Position

NEONITY.cc should feel compact, direct, authored, and useful. Its visual language mixes a dark grid console, hard-edged cards, zine-like display type, and small-web personal energy.

## Reusable Primitives

| Primitive | Use |
| --- | --- |
| `.site-shell` | Outer stage for public pages. |
| `.grid-panel` | Dark grid sections like hero, work, and contact. |
| `.section-inner` | Standard centered content width. |
| `SectionHeading` | Reusable section eyebrow and title. |
| `.button` | Primary yellow action button. |
| `.button-secondary` | Secondary transparent action button. |
| `.project-card` | Dense repeated work/resource item. |
| `.focus-card` | Conceptual card for small groups of ideas. |

## Palette

Use dark panels, cream text, orange labels, yellow emphasis, and pink/blue only as identity accents. Avoid introducing a new dominant color without revisiting the whole system.

## Extension Rule

When adding a section, choose one existing pattern first:

1. Two-column explanation.
2. One-pixel divided grid.
3. Three-card focus group.
4. Contact/action panel.

Only add a new pattern when the content genuinely cannot fit one of those shapes.
