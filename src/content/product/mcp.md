---
title: Video editing MCP server for Claude, ChatGPT, and Cursor
description: "Vyra's MCP server lets Claude, ChatGPT, or Cursor drive a real video editor: the agent gets the editing tools and sees your footage, not a prompt passthrough."
updated: 2026-09-24
category: product
---

**Vyra's MCP server connects the AI assistant you already pay for to a full video editor. Claude, ChatGPT, or Cursor gets the actual editing tools, can read your transcripts and scene descriptions, and edits the timeline live in your browser. You describe the video in the chat you already use. The editor does the work.**

MCP is the Model Context Protocol, the open standard that lets AI assistants call external tools. Vyra shipped its connector in May 2026. Since then, several editors have added MCP integrations. The difference is what the agent is allowed to do once connected.

## How it works

1. Connect Vyra to your MCP client. Claude Desktop, Claude Code, claude.ai, ChatGPT, and Cursor are supported. Setup is a single connector entry; see /docs/mcp.
2. Open or name a project. The agent can list your projects and read what is in each one.
3. Ask it to look before it cuts. "Summarize the footage and propose a 45-second structure with timestamps."
4. Approve the plan, then execute step by step: rough cut, captions, music, graphics, export.
5. Verify with frames. "Capture frames at 0:03, 0:15, and 0:40" shows you the composed canvas without leaving the chat.

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
| What the agent can do | Nothing, you drive | Sends your prompt to the vendor's own AI | Calls add, trim, split, caption, mask, motion graphic, keyframe, effect, and export tools directly |
| What the agent can see | Nothing | Usually nothing | Transcripts, scene descriptions, timeline state, rendered frames |
| Where you work | Their app | Their app plus your chat | Your chat, with the editor updating live |
| Model | Theirs | Theirs | Yours |

## Limits

- The agent needs the project open in a browser tab to apply changes live.
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
No. Describe the outcome. The assistant chooses the tools.

## Related

- /docs/mcp
- /claude
- /best/video-editors-that-work-with-claude-and-chatgpt
- /pricing
