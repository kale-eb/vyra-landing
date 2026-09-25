---
title: Edit videos from Cursor
description: Add Vyra as an MCP server in Cursor and its agent can cut, caption, and export your footage from the IDE, one video or a batch.
updated: 2026-09-24
category: product
---

**Cursor's agent can edit video once you add Vyra as an MCP server. It gets the editing tools, reads your transcripts and scene descriptions, and builds timelines while the editor updates in a browser tab. Good for batch captioning, scripted cutdowns, and demo videos made from the same repo you ship from.**

Cursor is where developers already run agents. Vyra makes video one more thing those agents can do, with real footage and a real timeline.

## How it works

1. Add the Vyra MCP server in Cursor's MCP settings. The URL is `https://api.usevyra.com/mcp`. It uses Streamable HTTP with OAuth 2.1 and PKCE, and metadata is at `https://api.usevyra.com/.well-known/oauth-authorization-server`. On first use a sign-in window opens. The exact Cursor menu path is (TODO confirm).
2. Open `https://app.usevyra.com`, sign in with the same account, and open a project. A green dot appears top-right. Keep the tab open.
3. Upload your footage. Clips get transcribed and described.
4. In the Cursor agent, describe the edit or write a task that loops over projects.
5. The agent uses the editing tools. Add, trim, split, captions, masks, motion graphics, effects, export, plus templates, styles, and presets.
6. Ask for a timeline read-back or frames to check.

## What you can ask for

| You say | Cursor's agent does in Vyra |
| --- | --- |
| "List every project and how many clips each has" | Reads your workspace |
| "Cut the screen recording to the moments where the terminal output changes" | Uses scene analysis to find the cuts |
| "Add phrase captions to all ten demo clips in the same style" | Batches captions across projects |
| "Put the app logo bottom right whenever I say the product name" | Times an overlay to the transcript |
| "Reframe the 16:9 recording to 9:16 and follow the cursor" | Tracks a mask and resizes the canvas |
| "Export each one at 1080x1920 and report the file names" | Renders and reports |

## Prompts to paste

```
Connect to my Vyra project "release demo v2". List the clips. Then cut a 45-second walkthrough: open on the terminal command, show the UI change, end on the deployed page. Remove all pauses and my false starts. No captions yet.
```

```
For every project whose name starts with "changelog-", add word-by-word captions in white above center, add a lower third with "@usevyra" for the first 4 seconds, and export 1080x1920. List what you exported.
```

```
This is a 12-minute screen recording with voiceover. Find every moment I say "for example" and build a 60-second highlight from the 10 seconds after each one. Straight cuts, 3-5 word captions.
```

## Compared to the usual way

| | Traditional editor | Template AI tool | Cursor with Vyra |
| --- | --- | --- | --- |
| Fits a dev workflow | No | No, web UI only | Yes, agent tasks in the IDE |
| Batch across many videos | One at a time | Rarely | Loop in a single task |
| Uses your real recordings | Yes | Often stock or generated | Yes |
| Fine control | Full | Limited | Full timeline when you want it |

## Limits

- A Vyra project must be open in a browser tab for live changes.
- Vyra edits uploaded footage. It doesn't generate video.
- Agents can claim a step is done early. Ask for a timeline read-back in the task.

## Pricing

| Plan | Price | AI | Export |
| --- | --- | --- | --- |
| MCP Starter | $24/mo | Bring your own Claude, ChatGPT, or Cursor subscription | Up to 1440p |
| MCP Pro | $65/mo | Bring your own subscription | Up to 4K |
| Vyra AI Starter | $54/mo | Built-in AI, no external subscription needed | Up to 1440p |
| Vyra AI Pro | $129/mo | Built-in AI | Up to 4K |

Free to start. See /pricing for the full breakdown.

## FAQ

**Which model does the editing?**
Whatever model Cursor is running. Vyra provides the tools and the footage context.

**Can I run this in CI?**
The server is built for interactive agents. Batch tasks inside a Cursor session work today. A headless pipeline is a different setup, ask us in Discord.

**Is Cursor different from Claude Code here?**
Same server, same tools. Claude Code registers it with `claude mcp add vyra https://api.usevyra.com/mcp`.

## Related

- /mcp
- /docs/mcp
- /claude
- /formats/app-walkthrough
