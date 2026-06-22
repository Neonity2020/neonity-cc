# neonity.cc

分享对 AI 技术的重要思考。基于 Astro 构建的静态博客。

## 开发

```sh
pnpm install
pnpm dev
```

生产构建：

```sh
pnpm build
```

## 发布文章

在 `src/content/posts/` 中新增 Markdown 或 MDX 文件：

```yaml
---
title: '文章标题'
description: '文章摘要'
date: '2026-06-22'
updatedDate: '2026-06-23' # 可选
author: 'neonity.cc'
tags: ['AI', '工程实践']
draft: false
image: # 可选
  src: '../../assets/cover.jpg'
  alt: '封面图片说明'
---
```

文件名会成为文章 URL，例如 `reliable-agents.md` 对应 `/posts/reliable-agents`。设置 `draft: true` 后，文章不会进入生产页面和标签索引。

## 发布 Release

在 `src/content/releases/` 中新增 Markdown 或 MDX 文件。Release 与博客文章是两个独立的内容集合：

```yaml
---
title: '版本标题'
version: '1.0.0'
description: '本次发布的简要说明'
date: '2026-06-22'
status: 'stable' # stable、beta 或 alpha
breaking: false
draft: false
highlights:
  - '第一项重要变化'
  - '第二项重要变化'
---
```

正文建议按“新增”“改进”“修复”“破坏性变更”和“已知限制”等章节组织。设置 `draft: true` 后，Release 不会进入列表或生成公开详情页。

## 维护在建项目

在 `src/content/projects/` 中新增 Markdown 或 MDX 文件：

```yaml
---
title: '项目名称'
description: '项目目标与价值'
status: 'building' # planning、building、testing 或 paused
progress: 40 # 0–100 的整数
startedAt: '2026-06-22'
targetDate: '2026-07-15' # 可选
technologies: ['Astro', 'TypeScript']
website: 'https://example.com' # 可选
repository: 'https://github.com/example/repo' # 可选
featured: false
draft: false
---
```

正文用于持续记录项目目标、已完成工作、当前进展和下一步。重点项目优先展示，其余项目按阶段与启动时间排序。

## 页面

- `/`：首页与最新文章
- `/posts/[slug]`：文章详情
- `/releases`：Release 列表
- `/releases/[slug]`：Release 详情
- `/projects`：在建项目看板
- `/projects/[slug]`：项目详情
- `/rss.xml`：博客文章 RSS
- `/releases/rss.xml`：Release RSS
- `/tags`：标签索引
- `/tags/[tag]`：标签文章列表
- `/about`：关于页面
