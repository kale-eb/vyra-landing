---
title: Edit videos with Claude
description: Connect Vyra to Claude Desktop, Claude Code, or claude.ai over MCP. Claude sees your clips, cuts the timeline, and exports.
updated: 2026-09-24
category: product
example: https://www.instagram.com/reel/DZumPohtfW8/
---

**Claude can edit your videos once you connect it to Vyra over MCP. It reads your transcripts and scene descriptions, builds the timeline, adds captions and graphics, and exports, from the Claude chat you already use. Works in Claude Desktop, Claude Code, and claude.ai.**

Claude on its own can't open a video file. Vyra gives it an editor to work in. We shipped the connector in May 2026.

## How it works

1. Add the Vyra MCP server. In Claude Code, run the command below. The next `claude` command opens a sign-in window for Vyra. In Claude Desktop, add the JSON to `claude_desktop_config.json` (macOS `~/Library/Application Support/Claude/`, Windows `%APPDATA%\Claude\`) and restart. On claude.ai, add it in connector settings.

   ```
   claude mcp add vyra https://api.usevyra.com/mcp
   ```

   ```json
   {
     "mcpServers": {
       "vyra": {
         "url": "https://api.usevyra.com/mcp"
       }
     }
   }
   ```

2. Open `https://app.usevyra.com`, sign in with the same account, and open a project. A green dot appears top-right. Keep the tab open.
3. Upload your footage. Every clip gets transcribed and described.
4. Tell Claude what to make. Ask for a plan first if the footage is long.
5. Claude uses the editing tools. Add, trim, split, captions, masks, motion graphics, effects, export.
6. Check frames or read the timeline back, then fix one thing at a time.

## What you can ask for

| You say | Claude does in Vyra |
| --- | --- |
| "Summarize what's in this project" | Lists clips with scene summaries and durations |
| "Propose a 45-second structure, then wait" | Returns a timestamped plan you can edit in text |
| "Build it, straight cuts, no captions" | Assembles the rough cut |
| "Add phrase captions and make 'never again' big and yellow" | Generates captions with word-level emphasis |
| "Show me frames at 0:05 and 0:30" | Captures the canvas so you can check placement |
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
| Claude's role | None | Forwards your prompt to the vendor's AI | Plans and executes the edit with real tools |
| Sees the footage | No | No | Transcripts, scene descriptions, frames |
| Where you work | The app | The app plus Claude | Claude, editor updates live |
| Cost | App subscription | App plus Claude | Vyra MCP plan plus the Claude plan you already have |

## Limits

- Claude edits footage you uploaded. It doesn't generate clips.
- Keep a Vyra project open in a browser tab so changes apply live.
- Claude may say a step is done before it is. Ask for the timeline read-back.

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
Yes. It's one of the most tested clients. Developers use it to script batch edits.

**Can Claude see the actual video?**
It sees the transcript, the scene descriptions, and any frames you ask it to capture. That's enough to pick takes and check text placement.

**Do I still need a Vyra AI plan?**
No. MCP plans are for people bringing their own Claude. Vyra AI plans include a built-in agent.

## Related

- /mcp
- /docs/mcp
- /prompts/how-to-prompt-vyra
