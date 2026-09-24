---
title: Video editing MCP server for Claude, ChatGPT, and Cursor
description: "Vyra's MCP server lets Claude, ChatGPT, or Cursor drive a real video editor: the agent gets the editing tools and sees your footage, not a prompt passthrough."
updated: 2026-09-24
category: product
---

**Vyra's MCP server connects the AI assistant you already pay for to a full video editor. Claude, ChatGPT, or Cursor gets the actual editing tools, can read your transcripts and scene descriptions, and edits the timeline live in your browser. You describe the video in the chat you already use. The editor does the work.**

MCP is the Model Context Protocol, the open standard that lets AI assistants call external tools. Vyra shipped its connector in May 2026. Since then, several editors have added MCP integrations. The difference is what the agent is allowed to do once connected.

## How it works

1. Connect your MCP client to the Vyra server at `https://api.usevyra.com/mcp`. It uses Streamable HTTP and OAuth 2.1 with PKCE: the client opens an authorization URL, you sign in to Vyra and approve, and the client stores the connection. Exact commands per client are below.
2. Open `https://app.usevyra.com` in your browser, sign in with the same account you authorized, and open a project. The tab auto-binds as the editor's dispatch target and a green indicator appears top-right. Keep at least one Vyra tab open.
3. Open or name a project in the chat. The agent can list your projects and read what is in each one.
4. Ask it to look before it cuts. "Summarize the footage and propose a 45-second structure with timestamps."
5. Approve the plan, then execute step by step: rough cut, captions, music, graphics, export.
6. Verify with frames. "Capture frames at 0:03, 0:15, and 0:40" shows you the composed canvas without leaving the chat.

## Setup by client

Claude Code (CLI): run this, then any `claude` command opens the OAuth authorization URL in your browser.

```
claude mcp add vyra https://api.usevyra.com/mcp
```

Claude Desktop: add this to `claude_desktop_config.json` (macOS `~/Library/Application Support/Claude/`, Windows `%APPDATA%\Claude\`) and restart. It prompts for OAuth the first time a session needs Vyra.

```json
{
  "mcpServers": {
    "vyra": {
      "url": "https://api.usevyra.com/mcp"
    }
  }
}
```

OpenAI Codex and Codex-compatible clients (the ChatGPT desktop path): add this to the Codex MCP config and restart. The OAuth flow opens on first use.

```toml
[mcp_servers.vyra]
url = "https://api.usevyra.com/mcp"
```

Any other client that implements Streamable HTTP with OAuth 2.1 and PKCE: use the server URL above. OAuth metadata is at `https://api.usevyra.com/.well-known/oauth-authorization-server`. After auth, the client POSTs JSON-RPC requests to the server URL; GET on the same URL gives an optional server-pushed SSE notification stream.

## What you can ask for

| You say | Vyra does |
| --- | --- |
| "List the assets in this project and what is in each" | Returns clips with durations and scene summaries |
| "Find where I say 'underpainting'" | Transcript search with timestamps |
| "Build the rough cut as planned, no captions yet" | Adds, trims, and orders clips on the timeline |
| "Add word-by-word captions, white, above center" | Generates styled captions from the transcript |
| "Track a mask on my face and reframe to 9:16" | Creates a tracked smart mask and resizes the canvas |
| "Add a lower third with my handle for 4 seconds" | Builds a motion graphic and places it |
| "Export 1080x1920 for TikTok" | Renders and returns the file |

## Prompts to paste

```
You are connected to my Vyra project "studio vlog sept". Start by listing the assets and summarizing what is in the footage. Then propose a 45-second Reel structure with timestamps. Wait for my OK before editing.
```

```
Build the rough cut exactly as planned. Remove pauses over half a second and every retake. Keep the last attempt of each line. No captions, no music, straight cuts. Then read the timeline back to me with start and end times.
```

```
For each project in this folder, add 3-5 word phrase captions in the same style, duck the music to 25% under speech, and export a 9:16 version. Tell me when each one is done.
```

## Compared to the usual way

| | Traditional editor | Passthrough MCP integration | Vyra MCP |
| --- | --- | --- | --- |
| What the agent can do | Nothing, you drive | Sends your prompt to the vendor's own AI | Views and searches assets, views the timeline and item details, adds media, text, shapes, layouts, motion graphics, and captions, edits properties, moves, splits, clones, and deletes items, color grades, applies effects, masks, transitions, and keyframes, exports MP4 or WebM and polls status, browses templates, styles, and presets, uses reference videos |
| What the agent can see | Nothing | Usually nothing | Transcripts, scene descriptions, timeline state, rendered frames |
| Where you work | Their app | Their app plus your chat | Your chat, with the editor updating live |
| Model | Theirs | Theirs | Yours |

## Limits

- The agent needs a Vyra project open in a browser tab to apply changes live. The tab binds automatically on focus; the green indicator top-right confirms it.
- External models sometimes narrate an intent as done. Ask the agent to read the timeline back before trusting a summary.
- Vyra does not generate footage. The agent edits what you uploaded.

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
Claude Desktop and Claude Code are the most tested. claude.ai, ChatGPT, and Cursor also work. Any MCP-compatible client should connect.

**Is this different from Descript's or Opus Clip's MCP?**
Those integrations forward your prompt to the vendor's own assistant. Vyra exposes the editing tools themselves, so your model plans and executes the edit and can inspect the footage while it works.

**Can I mix the built-in agent and my own assistant?**
Yes. Same project, same timeline. Start in one, refine in the other.

**Do I need to learn the tool names?**
No. Describe the outcome. The assistant chooses the tools. The full catalog is exposed through the standard MCP `tools/list` method, each with a description and JSON-schema input, and the server includes a `searchHelpDocs` tool that searches Vyra's help library.

## Related

- /docs/mcp
- /claude
- /best/video-editors-that-work-with-claude-and-chatgpt
- /pricing
