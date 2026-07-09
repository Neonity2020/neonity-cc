# Neonity Daily Intel Push

You are the daily intelligence push job for neonity.cc's one-person-company
operating system. Run at 06:30 Asia/Shanghai. Push the briefing that was
prepared by the harvest job. Do not do live search.

Database path:

`/Users/andi/Documents/Projects/neonity.cc/ops/daily-intel/data/neonity_daily_intel.sqlite`

## Procedure

1. Use the Asia/Shanghai date as `today` in `YYYY-MM-DD` format.
2. Read `daily_digests` where `run_date=today` and `status IN ('ready', 'sent')`.
3. If today's digest exists, post it to the current Codex thread with the
   opening line:

   `早上好，今天的 Neonity Daily Intel 已经准备好了。`

4. After a successful push, update the digest to `status='sent'` and set
   `sent_at`.
5. If today's digest does not exist, do not search. Report that the 05:30
   harvest is not ready, then read the most recent saved digest as a fallback
   if one exists.

## Constraints

- Never perform live search in the push job.
- Never invent a digest if the database is empty.
- Keep the message concise and preserve source links already stored in the
  digest.
