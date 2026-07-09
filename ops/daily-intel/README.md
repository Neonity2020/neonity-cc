# Neonity Daily Intel

Daily intelligence intake for the neonity.cc one-person-company operating
system. The workflow gathers high-signal frontier AI, technology, and
international finance news before the morning review window, stores it locally,
and prepares a Chinese briefing that can be pushed without waiting for live
search.

## Schedule

- Harvest: every day at 05:30 Asia/Shanghai
- Push: every day at 06:30 Asia/Shanghai

The harvest job searches, filters, writes SQLite records, and prepares the
digest. The push job only reads the prepared digest and sends it to the Codex
thread.

## Files

- `schema.sql`: SQLite schema and seed source watchlist.
- `data/neonity_daily_intel.sqlite`: local generated database, ignored by git.
- `prompts/harvest.md`: instructions for the 05:30 harvest automation.
- `prompts/push.md`: instructions for the 06:30 push automation.

## Database Tables

- `source_watchlist`: durable list of preferred sources.
- `daily_runs`: run bookkeeping and error status.
- `news_items`: normalized daily source items.
- `daily_digests`: ready-to-send Markdown briefings.

## Operating Principles

- Prefer primary sources and high-trust reporting.
- Keep raw news items separate from the final digest.
- Do not fabricate freshness; every harvest must use current search/browsing.
- Do not let the push step search. If the harvest is missing, report that
  state and fall back to the latest saved digest.
- Treat this workflow as an internal OPC input layer first; web presentation can
  be added separately under the Astro app.

## Local Setup

Initialize the local database from the repo root:

```sh
sqlite3 ops/daily-intel/data/neonity_daily_intel.sqlite ".read ops/daily-intel/schema.sql"
```

The Codex automations are the scheduler. Scripts can be added later once this
workflow graduates from prompt-driven MVP to a checked-in runner.
