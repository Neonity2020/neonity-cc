---
title: "Codex 更新：正式更名为 ChatGPT Codex"
description: "OpenAI 官方更新日志显示，Codex 正在并入新的 ChatGPT 桌面应用；同时 GPT-5.6 的 Sol、Terra、Luna 模型家族已经可用。"
pubDate: 2026-07-10
updatedDate: 2026-07-10
tags:
  - AI
  - Codex
  - ChatGPT
  - GPT-5.6
  - tools
---

OpenAI 的 2026 年 7 月 9 日更新，把 Codex 放进了一个更大的产品叙事里：新的 ChatGPT 桌面应用同时承载 Chat、ChatGPT Work 和 Codex。对用户来说，这不是一次简单的壳层更新，而是 Codex 从独立开发者工具走向 ChatGPT 工作系统的一次正式归位。

更准确地说，Codex 仍然是面向软件开发和技术工作的专用 agent；变化在于入口、命名和上下文。OpenAI 的帮助文档已经把桌面端模式切换写成 “ChatGPT Work” 和 “ChatGPT Codex”，这意味着 Codex 的产品身份正在从一个独立应用名，变成 ChatGPT 内部的专业工作模式。

同一轮更新里还有一个更底层的信号：GPT-5.6 模型家族已经可用。OpenAI 的 [Using GPT-5.6](https://developers.openai.com/api/docs/guides/latest-model.md) 文档显示，`gpt-5.6` alias 会路由到旗舰能力模型 `gpt-5.6-sol`，同时可以选择 `gpt-5.6-terra` 获得更低价格下的强性能，或用 `gpt-5.6-luna` 承担高吞吐量工作负载。

## 官方更新说了什么

OpenAI 在 [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) 的 2026 年 7 月 9 日条目中宣布，新版 ChatGPT 桌面应用把 Chat、Work 和 Codex 合在一个 macOS / Windows 应用里。Chat 负责日常问答和对话，Work 面向研究、分析和成品交付，Codex 则继续面向软件开发。

[Codex changelog](https://developers.openai.com/codex/changelog) 的同日更新也给出了同一方向：Codex 现在是 ChatGPT desktop app 的一部分，已有 Codex app 用户可以照常更新，并保留项目、设置和工作流。

另外两篇官方帮助文档补齐了迁移语义：

- [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275) 明确写到，ChatGPT includes Chat, ChatGPT Work, and Codex；Codex 是 ChatGPT 桌面应用中的一个模式，可以使用本地文件夹、代码仓库、终端和开发工具。
- [Moving to the new ChatGPT desktop app](https://help.openai.com/en/articles/20001276) 说明，原 Codex app 更新后会变成新的 ChatGPT desktop app，包含 Chat、Work 和 Codex；既有 Codex 任务和项目会保留。
- [Using GPT-5.6](https://developers.openai.com/api/docs/guides/latest-model.md) 则确认了新的模型家族：`gpt-5.6-sol`、`gpt-5.6-terra` 和 `gpt-5.6-luna`，分别对应旗舰能力、性价比平衡和高容量工作负载。

所以，“正式更名为 ChatGPT Codex”可以理解为：Codex 的独立产品心智被收编进 ChatGPT 主体，成为 ChatGPT 桌面端里面向代码和技术工作的 Codex 模式。

同时，GPT-5.6 的可用性让这次更新不只是界面整合。它也意味着 ChatGPT Codex、ChatGPT Work 和 API 侧的 agent 工作流，正在进入一个新的模型基线：更强的前端审美、更高的 token 效率、程序化工具调用、多 agent beta、显式 prompt caching 和持久化 reasoning，都开始成为下一阶段工作系统的基础能力。

## 这不只是换名字

命名变化背后，是 OpenAI 对 agent 产品线的一次重新分层。

过去，ChatGPT 像一个对话入口，Codex 像一个工程入口。现在，OpenAI 正在把不同类型的任务放到同一个工作台里：轻量交流交给 Chat，长程研究和交付交给 Work，软件开发交给 Codex。这样的分层比“一个聊天框解决一切”更清晰，也更接近真实工作流。

对开发者来说，Codex 进入 ChatGPT 桌面应用之后，最重要的不是少装一个 app，而是上下文边界发生了变化。代码仓库、本地文件、终端、浏览器、插件、远程任务、审批动作，都更容易被组织进同一个持续工作的界面里。Codex 不再只是回答代码问题，而是在一个带权限、带状态、带审阅流程的环境里执行开发任务。

## 对个人公司意味着什么

对 neonity.cc 这样的 one-person company 来说，这次更新值得关注，因为它预示着 AI 工具的默认形态正在从“聊天助手”转向“工作代理系统”。

一个人经营的系统，最缺的往往不是单点能力，而是把想法推进成结果的连续性：收集信息、拆任务、改代码、生成页面、跑测试、写文档、复盘决策。ChatGPT Codex 如果能稳定承担代码和技术执行，ChatGPT Work 承担研究和交付，Chat 承担快速对话，而 GPT-5.6 Terra / Luna 又能把成本和吞吐量往下压，那么一个人的工作台就会更像一个小型组织。

但这也提出了新的设计要求。我们不能只问模型聪不聪明，还要问：

- 它能不能保留项目上下文？
- 它的文件和权限边界是否清楚？
- 它是否能解释自己做了什么？
- 它能不能在失败后继续推进，而不是重新开始？
- 它产出的东西能不能被审阅、回滚、复用？

这些问题，决定了 agent 是玩具、助手，还是工作系统。

## 我的判断

ChatGPT Codex 这个名字的价值，在于把 Codex 放回了 ChatGPT 的主品牌里，同时保留它作为专业开发 agent 的边界。它不是被稀释成普通聊天功能，而是在 ChatGPT 桌面应用里成为一个明确的技术工作模式。GPT-5.6 Sol / Terra / Luna 的同时可用，则把这次产品整合变成了“新入口 + 新模型基线”的组合更新。

这也是 AI 产品成熟的一种信号：入口会合并，能力会分层，工作流会变长，权限和审阅会变得比单次回答更重要。

如果说早期的 Codex 代表“AI 会写代码”，那么 ChatGPT Codex 更接近另一个命题：AI 开始成为可以参与软件项目推进的工作界面。

这比一次改名要大。
