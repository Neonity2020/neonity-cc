# NEONITY.cc Design System

This document abstracts the current site design into reusable rules for future
pages, sections, and components.

## Design Position

NEONITY.cc should feel like a personal node on the open web: compact, direct,
hand-built, energetic, and useful. The visual language is closer to a small
tool console, zine cover, and personal lab wall than to a soft marketing site.

The site should preserve these qualities:

- **Personal, not generic**: the brand mark, wordmark, and content should feel
  authored.
- **Dense but readable**: generous section spacing, strong hierarchy, and
  compact repeated items.
- **Hard-edged and graphic**: thick type, clear borders, 1px grid dividers,
  poster-like blocks, and limited radii.
- **Useful before decorative**: decorative marks should reinforce identity,
  navigation, or information structure.
- **Small web energy**: simple markup, content-driven components, and a design
  that can grow without needing a large framework.

## Design Tokens

The canonical tokens live in `src/styles/global.css` under `:root`.

### Color

Use the current palette as a small, high-contrast system.

| Token | Value | Role |
| --- | --- | --- |
| `--ink` | `#11100f` | Deep body ink and near-black details |
| `--panel` | `#0d0b0b` | Main dark panel background |
| `--panel-soft` | `#171313` | Raised dark surfaces and contact panel |
| `--stage` | `#282322` | Outer page stage |
| `--cream` | `#fff8dc` | Primary text on dark surfaces |
| `--cream-muted` | `#c9c3ad` | Muted text on dark surfaces |
| `--yellow` | `#ffb82e` | Primary action, stat numbers, pins |
| `--yellow-dark` | `#15110a` | Text on yellow buttons |
| `--orange` | `#ff7624` | Brand flame, eyebrow labels |
| `--purple` | `#8065ad` | Dark-panel atmosphere |
| `--pink` | `#f28aa5` | Wordmark accent and identity paths |
| `--blue` | `#28b7e4` | Identity paths |
| `--line` | `#2d2927` | Structural line color |
| `--grid` | `rgba(255, 248, 220, 0.075)` | Dark panel grid lines |

Use cream on dark panels, near-black on cream sections, orange for section
eyebrows, yellow for primary emphasis, and pink/blue only as identity accents.

### Typography

- Display type uses `--display`: `Impact`, `"Arial Black"`, then system
  sans-serif. Use it for `h1`, `h2`, `h3`, and the wordmark.
- Body type uses Inter/system UI from `:root`.
- Display headings are uppercase, weight `900`, line-height `0.95`, and
  letter-spacing `0`.
- Body copy should stay confident and legible: weights around `650`, line-height
  `1.45` to `1.5`.
- Eyebrows and metadata are uppercase, heavy, and compact.

Recommended scale:

| Element | Desktop | Mobile |
| --- | --- | --- |
| `h1` | `5.25rem` | `3.05rem` below `580px` |
| Section `h2` | `4.75rem` | `3.25rem` below `900px` |
| Card `h3` | `2rem` to `2.75rem` | Keep same unless cramped |
| Hero body | `1.75rem` | `1.35rem` below `900px` |
| Section body | `1.45rem` | `1.2rem` below `900px` |

## Layout System

### Stage Shell

All main pages should use this structure:

```astro
<BaseLayout>
  <main class="site-shell">
    ...
  </main>
</BaseLayout>
```

`.site-shell` creates the outer stage:

- width: `min(100%, 2048px)`
- centered with `margin: 0 auto`
- padding and gaps from `--stage-pad`
- stage background: `--stage`
- bottom radius: `24px`, reducing to `16px` on small screens

This shell is the reusable frame for the whole site. Do not wrap every section
in extra cards; sections should sit directly inside this shell.

### Section Width

Use `.section-inner` for normal content:

- width: `min(100% - 2.5rem, 1320px)`
- mobile width: `min(100% - 2rem, 1320px)`
- centered with `margin: 0 auto`

Use wider custom widths only for hero content and full-width repeated grids.

### Panel Types

There are two primary section modes:

1. **Dark grid panels**
   - Use `.grid-panel`.
   - Background is a 42px grid over `--panel`.
   - Add subtle purple/black atmospheric gradients through the existing
     pseudo-element.
   - Use for hero, work, and contact sections.

2. **Cream content sections**
   - Use `#fff6cf` or nearby cream tones.
   - Text should be near-black.
   - Use for explanatory, reflective, or editorial sections.

Alternate dark grid panels with cream sections to keep the page from becoming a
single-color block.

## Core Components

### Header And Wordmark

Use `SiteHeader.astro` at the top of hero-like sections.

- Left side: square avatar mark using the site owner image.
- Right side: skewed `NEONITY.cc` wordmark.
- Wordmark uses display type, cream body, pink `.cc`, and a hard text shadow.
- Header should feel like brand/navigation, not a full app bar.

### Hero

Use `HeroSection.astro` as the model for any top-level landing view.

Structure:

- dark `.grid-panel`
- `SiteHeader`
- optional `IdentityField`
- `.hero-copy` with eyebrow, `h1`, body copy, and actions
- bottom `.signal-row` with four compact stats or themes

Rules:

- Keep the hero direct and first-screen useful.
- The `h1` should be the brand, page object, or literal subject.
- Limit hero copy width to preserve poster-like composition.
- Use one primary button and one optional secondary button.
- Keep the identity graphic behind content and non-interactive.

### Identity Field

`IdentityField.astro` is the site's reusable brand artifact.

Use it when a page needs a strong NEONITY identity signal:

- place it absolutely inside a dark panel
- keep it decorative with `aria-hidden="true"`
- preserve the framed blueprint feeling: cream border, dark fill, diagonal
  hatch texture, colored signal paths, and yellow pins
- hide it below `900px`

Avoid using it as a generic illustration. It should mean "this is part of the
NEONITY.cc system."

### Section Heading

Use `SectionHeading.astro` for reusable section titles.

Pattern:

```astro
<SectionHeading eyebrow="Projects" title="Current threads" titleId="work-title" />
```

Rules:

- Eyebrow: short category label.
- Title: plain-language section promise.
- Keep heading max width around `56rem`.
- Pair every section heading with an accessible `aria-labelledby`.

### Intro Section

Use the `IntroSection.astro` layout for explanatory content.

- Two-column desktop layout: heading in the left column, body in the right.
- Collapse to one column below `900px`.
- Body copy should be arranged in `.text-flow` with consistent vertical gaps.
- Best for about, philosophy, notes, or context-setting sections.

### Project Grid

Use the `WorkSection.astro` pattern for dense lists of work.

Grid rules:

- desktop: four columns
- below `1180px`: two columns
- below `580px`: one column
- use `gap: 1px` plus a subtle cream border/background to create dividers

Card rules:

- use `.project-card`
- dark background over a 1px grid container
- grid rows: top metadata/title, flexible description, bottom tags
- status label in yellow
- title in cream display type
- tags as compact pill chips

This pattern is best for projects, tools, notes collections, labs, or resource
indexes.

### Focus Cards

Use the `FocusSection.astro` and `FocusCard.astro` pattern for a small set of
conceptual categories.

- desktop: three columns
- mobile: one column
- cream card on cream section, with black border and hard black shadow
- `8px` radius maximum
- orange kicker, large display title, readable body

This pattern should feel like physical cards pinned to the page, not soft SaaS
cards.

### Contact Panel

Use `ContactSection.astro` for calls to action.

- dark grid section
- two-column layout: section heading plus contact panel
- contact panel uses `--panel-soft`, cream border, `8px` radius
- availability items reuse chip styling
- actions reuse `.button` and `.button-secondary`

## Interactive Elements

### Buttons

Primary buttons:

- yellow background
- near-black text
- uppercase heavy label
- pill radius
- `2px` dark border
- hard downward shadow
- hover moves down by `3px` and reduces shadow

Secondary buttons:

- transparent background
- cream border
- cream text
- no shadow
- subtle cream hover fill

Buttons should be short, action-oriented, and used sparingly.

### Chips

Use chips for tags, availability, and compact metadata.

- small uppercase text
- pill radius
- low-contrast border
- wrap naturally
- never become the dominant visual element

## Content Voice

The writing should sound personal, specific, and quietly opinionated.

Use phrases like:

- "small systems"
- "notes before certainty"
- "personal node"
- "tools with a point of view"
- "prototype with taste"
- "make, write, ship"

Avoid generic portfolio language like:

- "innovative solutions"
- "passionate creator"
- "world-class experiences"
- "seamless digital transformation"

Section titles should be concrete and memorable. Body copy can be warm and
reflective, but it should stay concise.

## Responsive Rules

Use these breakpoints consistently:

| Breakpoint | Purpose |
| --- | --- |
| `1180px` | Reduce oversized hero type and move project grid to two columns |
| `900px` | Collapse major layout grids to one column and hide identity field |
| `580px` | Tighten shell/header, make buttons full-width, use one-column cards |

Responsive behavior should simplify composition rather than introduce new
visual ideas.

## Accessibility Rules

- Every major section should use `aria-labelledby`.
- Decorative identity graphics should be hidden from assistive tech.
- Links that are only marks need meaningful `aria-label` values.
- Keep text contrast high: cream on dark, near-black on cream.
- Respect `prefers-reduced-motion` by disabling transitions.

## Reuse Recipe

When adding a new page or section:

1. Put page content inside `BaseLayout` and `.site-shell`.
2. Choose either a dark `.grid-panel` or a cream section background.
3. Use `.section-inner` unless the section is intentionally full-width.
4. Use `SectionHeading` for section identity.
5. Pick an existing layout pattern:
   - two-column text for explanation
   - 1px divided grid for work/resource lists
   - focus cards for three key concepts
   - contact panel for calls to action
6. Store repeatable content in `src/data/*` and keep components mostly
   presentational.
7. Reuse existing button, chip, heading, and card classes before adding new
   primitives.
8. Check the three breakpoints before shipping.

## Anti-Patterns

Do not introduce:

- soft nested card layouts
- large rounded marketing panels
- generic stock imagery
- pastel-only palettes
- low-contrast gray text
- decorative blobs or unrelated gradients
- extra navigation chrome that competes with the wordmark
- long paragraphs inside cards
- new typefaces unless the full site typography is intentionally revisited

New work should feel like it belongs to the same small, sharp, authored web
space.
