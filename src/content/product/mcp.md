---
title: Video editing MCP server for Claude, ChatGPT, and Cursor
description: Vyra's MCP server lets Claude, ChatGPT, or Cursor drive a real video editor. The agent gets the editing tools and can see your footage.
updated: 2026-09-24
category: product
reels:
  - DZumPohtfW8
  - DY4pVwtu3KD
newsletter:
  - vyra-is-live
---

**Vyra's MCP server connects the AI you already pay for to a full video editor. Claude, ChatGPT, or Cursor gets the actual editing tools, reads your transcripts and scene descriptions, and edits the timeline live in your browser. You describe the video in the chat you already use.**

MCP is the Model Context Protocol, an open standard that lets AI assistants call outside tools. We shipped our connector in May 2026. Other editors have added MCP since. The difference is what the agent is allowed to do once it's connected.

## How it works

1. Connect your client to `https://api.usevyra.com/mcp`. It uses Streamable HTTP and OAuth 2.1 with PKCE. A sign-in window opens, you approve, and the client saves the connection. Exact commands are below.
2. Open `https://app.usevyra.com`, sign in with the same account, and open a project. A green dot appears top-right. Keep the tab open.
3. Ask the agent to look before it cuts. "Summarize the footage and propose a 45-second structure with timestamps."
4. Approve the plan, then go step by step. Rough cut, captions, music, graphics, export.
5. Check with frames. "Capture frames at 0:03, 0:15, and 0:40."

## Setup by client

Claude Code. Run this, then any `claude` command opens the sign-in window.

```
claude mcp add vyra https://api.usevyra.com/mcp
```

Claude Desktop. Add this to `claude_desktop_config.json` (macOS `~/Library/Application Support/Claude/`, Windows `%APPDATA%\Claude\`) and restart.

```json
{
  "mcpServers": {
    "vyra": {
      "url": "https://api.usevyra.com/mcp"
    }
  }
}
```

OpenAI Codex and the ChatGPT desktop path. Add this to the Codex MCP config and restart.

```toml
[mcp_servers.vyra]
url = "https://api.usevyra.com/mcp"
```

Any other client with Streamable HTTP and OAuth 2.1 PKCE works with the same URL. Metadata is at `https://api.usevyra.com/.well-known/oauth-authorization-server`.

## What you can ask for

| You say | Vyra does |
| --- | --- |
| "List the assets in this project and what's in each" | Returns clips with durations and scene summaries |
| "Find where I say 'underpainting'" | Transcript search with timestamps |
| "Build the rough cut as planned, no captions yet" | Adds, trims, and orders clips |
| "Add word-by-word captions, white, above center" | Generates styled captions |
| "Track a mask on my face and reframe to 9:16" | Tracked mask, resized canvas |
| "Add a lower third with my handle for 4 seconds" | Builds and places a motion graphic |
| "Export 1080x1920 for TikTok" | Renders the file |

## Prompts to paste

```
You are connected to my Vyra project "studio vlog sept". List the assets and summarize the footage. Then propose a 45-second Reel structure with timestamps. Wait for my OK before editing.
```

```
Build the rough cut exactly as planned. Remove pauses over half a second and every retake. Keep the last attempt of each line. No captions, no music, straight cuts. Then read the timeline back with start and end times.
```

```
For each project in this folder, add 3-5 word phrase captions in the same style, duck the music to 25% under speech, and export a 9:16 version. Tell me when each one is done.
```

## Compared to the usual way

| | Traditional editor | Passthrough MCP integration | Vyra MCP |
| --- | --- | --- | --- |
| What the agent can do | Nothing, you drive | Sends your prompt to the vendor's own AI | View and search assets, edit the timeline, add media, text, captions, motion graphics, masks, effects, keyframes, export MP4 or WebM, use templates and reference videos |
| What the agent can see | Nothing | Usually nothing | Transcripts, scene descriptions, timeline state, rendered frames |
| Where you work | Their app | Their app plus your chat | Your chat, with the editor updating live |
| Model | Theirs | Theirs | Yours |

## Limits

- The agent needs a Vyra project open in a browser tab to apply changes live.
- External models sometimes say a step is done when it isn't. Ask for a timeline read-back.
- Vyra doesn't generate footage. The agent edits what you uploaded.

## Pricing

| Plan | Price | AI | Export |
| --- | --- | --- | --- |
| MCP Starter | $24/mo | Bring your own Claude, ChatGPT, or Cursor subscription | Up to 1440p |
| MCP Pro | $65/mo | Bring your own subscription | Up to 4K |
| Vyra AI Starter | $54/mo | Built-in AI, no external subscription needed | Up to 1440p |
| Vyra AI Pro | $129/mo | Built-in AI | Up to 4K |

Free to start. See /pricing for the full breakdown.

## FAQ

**Which clients are tested?**
Claude Desktop and Claude Code the most. claude.ai, ChatGPT, and Cursor also work.

**How is this different from Descript's or Opus Clip's MCP?**
Those forward your prompt to the vendor's own assistant. Vyra exposes the editing tools themselves, so your model does the edit and can look at the footage while it works.

**Do I need to learn the tool names?**
No. Describe the result. The full catalog is available through the standard MCP `tools/list` method, and there's a `searchHelpDocs` tool for Vyra's help library.

## Related

- /docs/mcp
- /claude
- /pricing
