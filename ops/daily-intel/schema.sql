PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS daily_runs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_date TEXT NOT NULL,
  run_kind TEXT NOT NULL,
  started_at TEXT NOT NULL DEFAULT (datetime('now')),
  finished_at TEXT,
  status TEXT NOT NULL CHECK (status IN ('running', 'succeeded', 'failed', 'partial')),
  error TEXT,
  notes TEXT,
  UNIQUE (run_date, run_kind)
);

CREATE TABLE IF NOT EXISTS news_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_date TEXT NOT NULL,
  category TEXT NOT NULL CHECK (
    category IN ('frontier_ai', 'technology', 'international_finance')
  ),
  source_name TEXT NOT NULL,
  source_tier TEXT NOT NULL CHECK (source_tier IN ('primary', 'wire', 'trusted_media', 'market_data', 'other')),
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  published_at TEXT,
  retrieved_at TEXT NOT NULL DEFAULT (datetime('now')),
  summary TEXT NOT NULL,
  why_it_matters TEXT NOT NULL,
  relevance_to_opc TEXT,
  region TEXT,
  tags_json TEXT NOT NULL DEFAULT '[]',
  signal_score INTEGER NOT NULL CHECK (signal_score BETWEEN 1 AND 5),
  UNIQUE (run_date, url)
);

CREATE INDEX IF NOT EXISTS idx_news_items_run_date_category
  ON news_items (run_date, category);

CREATE TABLE IF NOT EXISTS daily_digests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_date TEXT NOT NULL UNIQUE,
  generated_at TEXT NOT NULL DEFAULT (datetime('now')),
  title TEXT NOT NULL,
  executive_brief TEXT NOT NULL,
  markdown TEXT NOT NULL,
  item_count INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL CHECK (status IN ('draft', 'ready', 'sent', 'failed')),
  sent_at TEXT,
  error TEXT
);

CREATE TABLE IF NOT EXISTS source_watchlist (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category TEXT NOT NULL CHECK (
    category IN ('frontier_ai', 'technology', 'international_finance')
  ),
  source_name TEXT NOT NULL,
  source_url TEXT NOT NULL,
  source_tier TEXT NOT NULL CHECK (source_tier IN ('primary', 'wire', 'trusted_media', 'market_data', 'other')),
  notes TEXT,
  active INTEGER NOT NULL DEFAULT 1,
  UNIQUE (category, source_url)
);

INSERT OR IGNORE INTO source_watchlist
  (category, source_name, source_url, source_tier, notes)
VALUES
  ('frontier_ai', 'OpenAI News', 'https://openai.com/news/', 'primary', 'OpenAI product, research, and policy updates.'),
  ('frontier_ai', 'Anthropic News', 'https://www.anthropic.com/news', 'primary', 'Claude and AI safety/product announcements.'),
  ('frontier_ai', 'Google DeepMind Blog', 'https://deepmind.google/discover/blog/', 'primary', 'Frontier AI research and product updates.'),
  ('frontier_ai', 'Meta AI Blog', 'https://ai.meta.com/blog/', 'primary', 'Open models, research, and infrastructure.'),
  ('frontier_ai', 'arXiv cs.AI', 'https://arxiv.org/list/cs.AI/recent', 'primary', 'Recent AI papers.'),
  ('technology', 'Hacker News', 'https://news.ycombinator.com/', 'trusted_media', 'Developer and startup signal discovery.'),
  ('technology', 'The Verge Tech', 'https://www.theverge.com/tech', 'trusted_media', 'Consumer and platform technology coverage.'),
  ('technology', 'TechCrunch', 'https://techcrunch.com/', 'trusted_media', 'Startup and technology company news.'),
  ('international_finance', 'Reuters Markets', 'https://www.reuters.com/markets/', 'wire', 'Global market and macro reporting.'),
  ('international_finance', 'Bloomberg Markets', 'https://www.bloomberg.com/markets', 'trusted_media', 'Global markets and financial news.'),
  ('international_finance', 'Financial Times Markets', 'https://www.ft.com/markets', 'trusted_media', 'Markets, macro, and company coverage.'),
  ('international_finance', 'Federal Reserve', 'https://www.federalreserve.gov/newsevents.htm', 'primary', 'US central-bank releases.'),
  ('international_finance', 'European Central Bank', 'https://www.ecb.europa.eu/press/html/index.en.html', 'primary', 'Euro-area central-bank releases.'),
  ('international_finance', 'IMF News', 'https://www.imf.org/en/News', 'primary', 'Global macro and policy releases.');
