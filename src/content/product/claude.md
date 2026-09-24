---
title: Edit videos with Claude
description: "Connect Vyra to Claude Desktop, Claude Code, or claude.ai over MCP and Claude edits your real footage: it sees the clips, cuts the timeline, and exports."
updated: 2026-09-24
category: product
example: https://www.instagram.com/reel/DZumPohtfW8/
---

**You can edit videos with Claude by connecting it to Vyra over MCP. Claude reads your transcripts and scene descriptions, builds the timeline, adds captions and graphics, and exports, all from the Claude chat you already use. It works in Claude Desktop, Claude Code, and claude.ai, on the Claude subscription you already have.**

Claude on its own cannot open a video file. It needs an editor it can operate. Vyra gives it one. The connector launched in May 2026 and exposes the full editing toolset, not a message relay.

## How it works

1. Add the Vyra connector in Claude Desktop, Claude Code, or claude.ai. Instructions are at /docs/mcp.
2. Upload footage to a Vyra project. Every clip is transcribed and visually described on upload.
3. Tell Claude what to make. Ask for a plan first if the footage is long.
4. Claude calls the editing tools: add clips, trim, split, captions, masks, motion graphics, keyframes, effects, export.
5. Check frames or read the timeline back, then correct one thing at a time.

## What you can ask for

| You say | Claude does in Vyra |
| --- | --- |
| "Summarize what is in this project" | Lists clips with scene summaries and durations |
| "Propose a 45-second structure, then wait" | Returns a timestamped plan you can edit in text |
| "Build it, straight cuts, no captions" | Assembles the rough cut on the timeline |
| "Add phrase captions and make 'never again' big and yellow" | Generates captions with word-level emphasis |
| "Show me frames at 0:05 and 0:30" | Captures the composed canvas so you can check placement |
| "Export for TikTok" | Renders 1080x1920 |

## Prompts to paste

```
Connect to my Vyra project "commission reveal". List every clip with a one-line description. Then propose a 40-second Reel: open on the canvas coming out of the box, three painting moments, end on the finished piece. Wait for my OK.
```

```
Build the rough cut as planned. Cut every pause over 0.4 seconds and every retake, keep the last attempt of each line. Add 3-5 word captions, bold white, lower third. Add a calm piano track at 25% under my voice. Then read the timeline back with timestamps.
```

```
Look at the reference video attached to the project. In three lines, tell me its cut rhythm, caption style, and how the music behaves. Then apply those three things to my footage without changing my order of points.
```

## Compared to the usual way

| | Traditional editor | Claude with a passthrough integration | Claude with Vyra |
| --- | --- | --- | --- |
| Claude's role | None | Forwards prompts to the vendor's AI | Plans and executes the edit with real tools |
| Sees the footage | No | No | Transcripts, scene descriptions, frames |
| Where you work | The app | The app plus Claude | Claude, editor updates live |
| Cost | App subscription | App subscription plus Claude | Vyra MCP plan plus the Claude plan you already pay for |

## Limits

- Claude edits footage you uploaded. It does not generate clips.
- Keep the Vyra project open in a browser tab so changes apply live.
- Claude may describe a step as done before it is. Ask for the timeline read-back when it matters.

## Pricing

| Plan | Price | AI | Export |
| --- | --- | --- | --- |
| MCP Starter | $24/mo | Bring your own Claude, ChatGPT, or Cursor subscription | Up to 1440p |
| MCP Pro | $65/mo | Bring your own subscription | Up to 4K |
| Vyra AI Starter | $54/mo | Built-in AI, no external subscription needed | Up to 1440p |
| Vyra AI Pro | $129/mo | Built-in AI | Up to 4K |

Free to start. See /pricing for the full breakdown.

## FAQ

**Does it work in Claude Code?**
Yes. Claude Code is one of the most tested clients. Developers use it to script batch edits across projects.

**Does it work on claude.ai in the browser?**
Yes, through the connector settings. Claude Desktop is the smoothest for long sessions.

**Can Claude see the actual video?**
It sees the transcript, the scene descriptions Vyra generated on upload, and any frames you ask it to capture. That is enough to pick takes, find moments, and check text placement.

**Do I still need a Vyra AI plan?**
No. The MCP plans are for people bringing their own Claude subscription. The Vyra AI plans include a built-in agent for people who do not want to connect anything.

## Related

- /mcp
- /docs/mcp
- /prompts/how-to-prompt-vyra
- /best/video-editors-that-work-with-claude-and-chatgpt
