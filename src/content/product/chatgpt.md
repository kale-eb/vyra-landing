---
title: Edit videos with ChatGPT
description: Connect Vyra to ChatGPT over MCP. ChatGPT reads your transcript, cuts the timeline, adds captions, and exports, all from the chat.
updated: 2026-09-24
category: product
reels:
  - DajEylHSiz8
  - DY_kJF4uI9-
---

**ChatGPT can edit your videos once you connect it to Vyra over MCP. It gets the editing tools, reads your transcripts and scene descriptions, and builds the timeline while you watch it update in the browser. You use the ChatGPT plan you already pay for.**

ChatGPT is good at planning and writing. It can't open a video file. Vyra is the editor it drives.

## How it works

1. Add the Vyra MCP server. The ChatGPT desktop path uses the Codex-compatible config. Add this and restart. Sign in to Vyra when the OAuth window opens.

   ```toml
   [mcp_servers.vyra]
   url = "https://api.usevyra.com/mcp"
   ```

2. Open `https://app.usevyra.com`, sign in with the same account, and open a project. A green dot appears top-right. Keep the tab open.
3. Upload your footage. Each clip gets transcribed and described.
4. Tell ChatGPT what to make. Length, platform, keep, cut, captions, music.
5. Watch the timeline update. Ask for a read-back, then fix one thing at a time.

## What you can ask for

| You say | ChatGPT does in Vyra |
| --- | --- |
| "What's in this project?" | Lists clips with scene summaries |
| "Write a 60-second script from the best lines, then cut to it" | Scripts from the transcript, then assembles |
| "Caption everything word by word, white, above center" | Generates styled captions |
| "Put the screen recording top right while I talk about the prompt" | Places a picture-in-picture |
| "Cut to the beat of the attached track" | Lands cuts on the beats |
| "Export a 9:16 and a 1:1 version" | Renders both |

## Prompts to paste

```
Connect to my Vyra project "product demo". Summarize the footage, then propose a 30-second TikTok: hook in the first 2 seconds, one clean demo, one result shot. Wait for my OK before you edit.
```

```
Build the cut as planned. Remove pauses over half a second, filler words, and retakes. Add word-by-word captions, bold, white, slightly above center. No music. Read the timeline back with start and end times.
```

```
This project has ten takes of the same talking head. Keep the best take of each point, in the order I filmed them, target 45 seconds. Add 3-5 word captions and a lo-fi track at 25%. Export 1080x1920.
```

## Compared to the usual way

| | Traditional editor | ChatGPT with a passthrough integration | ChatGPT with Vyra |
| --- | --- | --- | --- |
| ChatGPT's role | None | Forwards your prompt to the vendor's AI | Plans and executes with real editing tools |
| Sees the footage | No | No | Transcripts, scene descriptions, frames |
| Where you work | The app | The app plus ChatGPT | ChatGPT, editor updates live |
| Cost | App subscription | App plus ChatGPT | Vyra MCP plan plus the ChatGPT plan you already have |

## Limits

- ChatGPT edits what you uploaded. Vyra doesn't generate footage.
- Keep a Vyra project open in a browser tab so edits apply live.
- ChatGPT sometimes says a step is done early. Ask it to read the timeline back.

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
Yes. That's what the MCP plans are for.

**Is this the same as CapCut's Codex integration?**
No. That one only makes a draft inside CapCut. Vyra gives ChatGPT the full editing toolset, and it works with Claude and Cursor too.

**Can I switch between ChatGPT and Vyra's built-in agent?**
Yes. Same project, same timeline.

## Related

- /mcp
- /docs/mcp
- /prompts/how-to-prompt-vyra
- /compare/vyra-vs-descript
