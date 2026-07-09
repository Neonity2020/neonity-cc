# Daily Intel Workflow

Purpose: provide a prepared morning intelligence brief for neonity.cc's
one-person-company operating loop.

## Loop

```text
Source watchlist -> harvest -> SQLite memory -> digest -> morning push -> review
```

## Jobs

### 05:30 Harvest

The harvest job searches for current high-signal information across frontier AI,
technology, and international finance. It writes normalized items to SQLite and
generates a ready-to-send Chinese Markdown digest.

Success criteria:

- Current sources were searched.
- Duplicate URLs for the same day were collapsed.
- Every saved item has a source, summary, why-it-matters note, OPC relevance,
  and signal score.
- `daily_digests.status` is `ready`.

### 06:30 Push

The push job reads the ready digest and posts it to the Codex thread.

Success criteria:

- No live search happens during push.
- If today's digest exists, it is sent and marked `sent`.
- If today's digest is missing, the job reports that state and falls back to the
  latest saved digest when available.

## Review Questions

During weekly OPC review, inspect:

- Which sources repeatedly produce useful information?
- Which categories are noisy and need stricter filters?
- Which items changed product, strategy, or content decisions?
- Should any repeated analysis become a script, dashboard, or Astro page?

## Expansion Ideas

- Add RSS/API runners once the prompt-driven MVP stabilizes.
- Add a private `/intel` page to neonity.cc.
- Add weekly source-quality scoring.
