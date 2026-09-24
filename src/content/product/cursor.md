---
title: Edit videos from Cursor
description: "Connect Vyra to Cursor over MCP and drive a real video editor from your IDE: script batch cuts, captions, and exports on your own footage."
updated: 2026-09-24
category: product
---

**You can edit videos from Cursor by adding Vyra as an MCP server. Cursor's agent gets the editing tools, reads your transcripts and scene descriptions, and builds timelines while the editor updates in a browser tab. It suits developers who want video editing inside a pipeline: batch captioning, scripted cutdowns, or generating demo videos from the same repo you ship from.**

Cursor is where developers already run agents. Vyra makes video one more thing those agents can do, with real footage and a real timeline, not a text-to-video generator.

## How it works

1. Add the Vyra MCP server to Cursor's MCP configuration. Cursor and other MCP clients that support Streamable HTTP with OAuth 2.1 and PKCE connect with the server URL `https://api.usevyra.com/mcp`; OAuth metadata is at `https://api.usevyra.com/.well-known/oauth-authorization-server`. On first use the client opens an authorization URL; sign in to Vyra and approve. The exact Cursor menu path for adding an MCP server is (TODO confirm). After auth, the client POSTs JSON-RPC requests to the server URL and can GET the same URL for an optional SSE notification stream.
2. Open `https://app.usevyra.com`, sign in with the same account, and open a project. The tab auto-binds as the editor's dispatch target and shows a green indicator top-right. Keep at least one Vyra tab open.
3. Upload footage to a Vyra project. Clips are transcribed and visually described on upload.
4. In the Cursor agent, describe the edit or write a task that loops over projects.
5. The agent calls the editing tools: view and search assets, view the timeline, add media, text, shapes, layouts, motion graphics, and captions, edit properties, move, split, clone, and delete, color grade, effects, masks, transitions, keyframes, export MP4 or WebM and poll status, browse templates, styles, and presets.
6. Verify with a timeline read-back or captured frames.

## What you can ask for

| You say | Cursor's agent does in Vyra |
| --- | --- |
| "List every project and how many clips each has" | Reads your workspace |
| "Cut the screen recording to the moments where the terminal output changes" | Uses scene analysis to find the cuts |
| "Add phrase captions to all ten demo clips in the same style" | Batches captioning across projects |
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
| Fits a dev workflow | No, manual app | No, web UI only | Yes, agent tasks in the IDE |
| Batch across many videos | Manual, one at a time | Rarely | Loop in a single task |
| Uses your real recordings | Yes | Often stock or generated | Yes |
| Fine control | Full | Limited | Full timeline when you want it |

## Limits

- A Vyra project must be open in a browser tab for live changes. The tab binds on focus; the green indicator top-right confirms it.
- Vyra edits uploaded footage. It does not render generated video.
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

**Can I integrate this into CI?**
The MCP server is designed for interactive agents. Scripted batch tasks inside a Cursor agent session work today; a headless pipeline is a different setup, ask in Discord.

**Does it handle screen recordings well?**
Yes. Scene analysis describes what is on screen, so the agent can cut to UI changes, and tracked masks handle 16:9 to 9:16 reframing.

**Is there a difference between Cursor and Claude Code here?**
Both connect to the same server URL and get the same tools. Claude Code registers it with `claude mcp add vyra https://api.usevyra.com/mcp`. Use whichever you already run agents in.

## Related

- /mcp
- /docs/mcp
- /claude
- /formats/app-walkthrough
