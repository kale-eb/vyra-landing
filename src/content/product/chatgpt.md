---
title: Edit videos with ChatGPT
description: "Connect Vyra to ChatGPT over MCP and ChatGPT edits your real footage: it reads the transcript, cuts the timeline, adds captions, and exports from the chat."
updated: 2026-09-24
category: product
---

**You can edit videos with ChatGPT by connecting it to Vyra over MCP. ChatGPT gets the editing tools, reads your transcripts and scene descriptions, and builds the timeline while you watch it update in the browser. You use the ChatGPT subscription you already have, on your own footage, with no templates and no generated clips.**

ChatGPT is a strong planner and a fast writer. It is not a video editor. Vyra is the editor it operates. The connector exposes the same toolset the built-in Vyra agent uses, so ChatGPT can do everything from a rough cut to a tracked reframe.

## How it works

1. Add Vyra as a connector in ChatGPT. Setup is at /docs/mcp.
2. Upload footage to a Vyra project. Each clip is transcribed and visually described on upload.
3. Describe the video: length, platform, keep, cut, captions, music.
4. ChatGPT calls the editing tools and the timeline updates live.
5. Ask for frames or a timeline read-back, then correct one line at a time.

## What you can ask for

| You say | ChatGPT does in Vyra |
| --- | --- |
| "What is in this project?" | Lists clips with scene summaries |
| "Write a 60-second script from the best lines, then cut to it" | Uses the transcript to script, then assembles |
| "Caption everything, word by word, white, above center" | Generates styled captions |
| "Put the screen recording top right while I talk about the prompt" | Places a picture-in-picture with a mask |
| "Cut to the beat of the attached track" | Detects beats and lands cuts on them |
| "Export a 9:16 and a 1:1 version" | Renders both |

## Prompts to paste

```
Connect to my Vyra project "product demo". Summarize the footage, then propose a 30-second TikTok: hook in the first 2 seconds, one clean demo, one result shot. Wait for my OK before you edit.
```

```
Build the cut as planned. Remove pauses over half a second, filler words, and retakes. Add word-by-word captions, bold sans-serif, white, slightly above center. No music. Read the timeline back with start and end times.
```

```
This project has ten clips of the same talking head. Keep only the best take of each point, in the order I filmed them, target 45 seconds. Then add 3-5 word captions and a low lo-fi track at 25%. Export 1080x1920.
```

## Compared to the usual way

| | Traditional editor | ChatGPT with a passthrough integration | ChatGPT with Vyra |
| --- | --- | --- | --- |
| ChatGPT's role | None | Forwards prompts to the vendor's AI | Plans and executes with real editing tools |
| Sees the footage | No | No | Transcripts, scene descriptions, captured frames |
| Where you work | The app | The app plus ChatGPT | ChatGPT, editor updates live |
| Cost | App subscription | App plus ChatGPT | Vyra MCP plan plus the ChatGPT plan you already pay for |

## Limits

- ChatGPT edits what you uploaded. Vyra does not generate footage.
- Keep the project open in a browser tab so edits apply live.
- ChatGPT sometimes reports a step as complete early. Ask it to read the timeline back before you trust a summary.

## Pricing

| Plan | Price | AI | Export |
| --- | --- | --- | --- |
| MCP Starter | $24/mo | Bring your own Claude, ChatGPT, or Cursor subscription | Up to 1440p |
| MCP Pro | $65/mo | Bring your own subscription | Up to 4K |
| Vyra AI Starter | $54/mo | Built-in AI, no external subscription needed | Up to 1440p |
| Vyra AI Pro | $129/mo | Built-in AI | Up to 4K |

Free to start. See /pricing for the full breakdown.

## FAQ

**Can I use my existing ChatGPT account?**
Yes. That is the point of the MCP plans. Your ChatGPT subscription does the thinking, Vyra does the editing.

**Is this the same as CapCut's Codex integration?**
No. That is a ChatGPT-only draft generator inside CapCut. Vyra exposes the full editing toolset to ChatGPT and also works with Claude and Cursor.

**Will ChatGPT understand what is in my clips?**
It reads the transcript and the scene descriptions Vyra generated on upload, and it can request frames. It can find "the shot where I hold up the finished piece" without you scrubbing.

**Can I switch between ChatGPT and the built-in agent?**
Yes. Same project, same timeline.

## Related

- /mcp
- /docs/mcp
- /prompts/how-to-prompt-vyra
- /compare/vyra-vs-descript
