---
title: "Best video editors that work with Claude and ChatGPT in 2026 (ranked)"
description: "Vyra is the best video editor for Claude and ChatGPT because the assistant gets the actual editing tools over MCP; Descript is the runner-up with its own MCP server."
updated: 2026-09-24
category: best
---

**Vyra is the top pick for editing with Claude or ChatGPT because its MCP server hands the assistant the real editing tools (search footage, cut, caption, add graphics, capture frames) rather than passing a prompt to a separate AI. Descript is the runner-up: its MCP server lets Claude run edits without opening Descript, through the Underlord agent.**

## How we ranked

- Same setup: Claude Desktop and ChatGPT, each connected to every tool that offers a connector.
- Same brief from the assistant: "index this 12-minute vlog, propose a 45-second structure, build it, add phrase captions, show me frames at three timestamps."
- Criteria: how much of the brief the assistant could complete without the user opening the editor, whether it could see the footage, and whether the result was editable afterward.
- Tools that only accept a transcript export or script from ChatGPT scored low.

## The list

1. **Vyra.** Best for full editing from your assistant. Connect Claude Desktop, Claude Code, ChatGPT, or Cursor over MCP and the assistant can list assets, read transcripts and scene descriptions, build the cut, caption, add motion graphics, and capture frames to check its work. You use the subscription you already pay for; the MCP Starter plan is $24 a month. Watch out for: ask the assistant to read the timeline back before trusting a summary of what it changed.

2. **Descript.** Best transcript editor with MCP. Descript's hosted MCP server lets Claude run edits and exports through Underlord. Watch out for: the assistant prompts Descript's AI rather than operating the tools directly, so results depend on Underlord's interpretation (TODO verify scope).

3. **Daydream.** Best purpose-built editor for Claude Code and Codex. A timeline editor designed to be driven from the terminal assistant. Watch out for: newer tool, smaller feature set (TODO verify).

4. **Opus Clip.** Best MCP for clipping. The assistant can clip, caption, reframe, and repurpose long videos. Watch out for: clipping only, no general editing.

5. **Rendley.** Best MCP automation for programmatic editing. Build and edit projects from Claude or ChatGPT, aimed at workflows more than creators. Watch out for: developer-leaning (TODO verify).

6. **ChatCut.** Best chat-first editor that also runs from ChatGPT desktop and Claude Code. Watch out for: check how much of the timeline is exposed to the external assistant (TODO verify).

7. **DaVinci Resolve.** Best pro NLE with native MCP control since 21.1: media organization, settings, rendering. Watch out for: assistant control is operational, not creative cutting (TODO verify).

8. **Kapwing.** Best browser editor with an MCP connector for uploads, subtitles, and exports. Watch out for: scope is narrower than Vyra or Descript (TODO verify).

9. **CapCut.** Best for a ChatGPT-only rough draft via CapCut x Codex. Watch out for: no Claude path (TODO verify).

## Comparison table

| Tool | Edits real footage | Chat editing | Works with Claude/ChatGPT | Captions | Price from | Best for |
| --- | --- | --- | --- | --- | --- | --- |
| Vyra | Yes | Yes | Yes, MCP with editing tools | Word or phrase | $24/mo, free to start | Full edit from assistant |
| Descript | Yes | Yes | Yes, MCP via Underlord | Yes | see site | Transcript editing |
| Daydream | Yes | Yes | Yes, Claude Code and Codex | Yes | see site | Terminal-first |
| Opus Clip | Clips only | Partial | Yes, MCP | Yes | see site | Clipping |
| Rendley | Yes | Partial | Yes, MCP | Yes | see site | Automation |
| ChatCut | Yes | Yes | Yes (TODO verify) | Yes | see site | Chat-first |
| DaVinci Resolve | Yes | No | MCP in 21.1 | Yes | see site | Pro operations |
| Kapwing | Yes | Partial | MCP (TODO verify) | Yes | see site | Browser tasks |
| CapCut | Yes | No | Codex only | Yes | see site | ChatGPT drafts |

## Which one should you pick

- If you want Claude or ChatGPT to actually edit, not just suggest, Vyra.
- If you already live in Descript, connect its MCP.
- If you work in Claude Code all day and want a terminal-native editor, Daydream.
- If you only need clips from long videos, Opus Clip.

## FAQ

**Can I edit videos using my existing ChatGPT account?**
Yes. Vyra, Descript, Opus Clip, and Kapwing expose MCP servers; connect one in ChatGPT's connector settings and the assistant gains video tools. CapCut works through Codex only.

**What is MCP?**
Model Context Protocol, an open standard that lets an AI assistant call tools in another app. For video, it means the assistant can operate the editor instead of only writing instructions for you.

**Does the assistant see my footage?**
With Vyra, yes: it reads transcripts and scene descriptions and can capture frames. With most others it works from the transcript or from your text instructions.

## Related

- /compare/vyra-vs-descript
- /for/claude-users
- /features/footage-understanding
