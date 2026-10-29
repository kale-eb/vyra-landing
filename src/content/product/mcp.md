---
title: Video editing MCP server for Claude, ChatGPT, and Cursor
description: Vyra's MCP server lets Claude, ChatGPT, or Cursor drive a real video editor. The agent gets the editing tools and can see your footage.
updated: 2026-10-29
category: product
reels:
  - DZumPohtfW8
  - DY4pVwtu3KD
newsletter:
  - vyra-is-live
---

**Vyra's MCP server connects the AI you already pay for to a full video editor. Claude, ChatGPT, or Cursor gets the actual editing tools, reads your transcripts and scene descriptions, and edits the timeline on Vyra's servers, so no browser tab has to stay open. You describe the video in the chat you already use.**

MCP is the Model Context Protocol, an open standard that lets AI assistants call outside tools. We shipped our connector in May 2026 and rebuilt it as a headless server in October 2026. Other editors have added MCP since. The difference is what the agent is allowed to do once it's connected.

## What the headless server means

Each agent gets its own editing container on Vyra's servers. Nothing runs in your browser.

- **No tab to keep open.** The agent creates projects, reads your library, edits, and exports on its own. Your laptop can be closed.
- **Edit from your phone.** Upload footage straight into the Claude app, ask for the video, and put the phone away while it works.
- **Several projects at once.** Run one agent across many projects, or several agents in parallel.
- **Generated media.** The agent can add voiceovers, images, sound effects, and music. Video footage still comes from you or Pexels stock.
- **Still a real project.** Everything the agent builds opens in the Vyra web and iPhone apps for hand edits.

## Which AI clients and models work

| Client | Works | How you connect |
| --- | --- | --- |
| Claude Code | Yes, the most tested | Two terminal commands, below |
| Claude Desktop and claude.ai | Yes | Customize > Connectors > Add custom connector |
| ChatGPT on the web | Yes | Plugins > Add custom MCP server |
| ChatGPT desktop app | Yes | Settings > MCP servers |
| OpenAI Codex | Yes | Two terminal commands, below |
| Cursor | Yes | `.cursor/mcp.json` |
| Any other MCP client | Yes, if it supports Streamable HTTP and OAuth 2.1 with PKCE | The same URL |

Vyra doesn't pick the model. Whatever model your client runs, Claude, GPT, or the one you choose in Cursor, makes the editing decisions and calls Vyra's tools.

## How it works

1. Connect your client to `https://api.usevyra.com/mcp`. It uses Streamable HTTP and OAuth 2.1 with PKCE. A sign-in window opens, you approve, and the client saves the connection. Exact commands are below.
2. Ask the agent to open a project or create one. Nothing has to stay open on your side. The agent edits on Vyra's servers, and the project shows up in the web and iPhone apps whenever you want to look.
3. Ask the agent to look before it cuts. "Summarize the footage and propose a 45-second structure with timestamps."
4. Approve the plan, then go step by step. Rough cut, captions, music, graphics, export.
5. Check with frames. "Capture frames at 0:03, 0:15, and 0:40."

## Setup by client

Claude Code. Run these. The second command opens the sign-in window.

```
claude mcp add --transport http Vyra https://api.usevyra.com/mcp
claude mcp login Vyra
```

Claude Desktop and claude.ai. Go to Customize > Connectors, click "+ Add", then "Add custom connector". Name it `Vyra`, enter the URL, and click Continue. Review the detected sign-in, click Continue, choose "Sign in now" under Authentication, and click Add. On Team and Enterprise plans an Owner adds it in Organization settings > Connectors first, then members click Connect. Free plans allow one custom connector.

OpenAI Codex. Run these. The second command opens the sign-in window.

```
codex mcp add vyra --url https://api.usevyra.com/mcp
codex mcp login vyra
```

In the ChatGPT desktop app, use Settings > MCP servers > Add server instead. Name it `vyra`, choose Streamable HTTP, enter the URL, and save. Then click Restart and Authenticate.

ChatGPT on the web. Go to `https://chatgpt.com/plugins`, click the plus button, then "Add custom MCP server". Name it `Vyra`, enter the URL under Connection, set authentication to OAuth, accept the warning, and select "Create as a plugin". Install it and sign in.

Cursor. Add this to `.cursor/mcp.json` (or `~/.cursor/mcp.json` for every project), then turn Vyra on in Customize and sign in when asked.

```json
{
  "mcpServers": {
    "Vyra": {
      "url": "https://api.usevyra.com/mcp"
    }
  }
}
```

Any other client with Streamable HTTP and OAuth 2.1 PKCE works with the same URL. Metadata is at `https://api.usevyra.com/.well-known/oauth-authorization-server`.

## Everything the agent can do

The agent gets 50+ tools. You don't need their names. Describe the result and it picks them.

| Area | Actions |
| --- | --- |
| See and search | Browse project assets and references, read the timeline (tracks, items, timing), search footage by what's on screen, what's said, location, or date, capture the canvas at any timestamp, search Pexels and Freesound stock |
| Edit and build | Add video, audio, and images with trim control, add text overlays, shapes, and styled captions, change position, scale, opacity, volume, and speed, move, split, slip, clone, and delete items, set keyframes |
| Effects and compositing | Apply and configure color, stylize, and distort effects, create and animate rectangle, ellipse, and pen masks, remove backgrounds with AI, build motion graphics |
| Generate | Voiceovers, images, sound effects, and music for the project |
| Project and assets | Create projects, read the project's template and style, add assets from your library or stock, manage markers, consolidate tracks |
| Export | Render MP4 or WebM at the size and aspect ratio you ask for |

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
| Where you work | Their app | Their app plus your chat | Your chat, on desktop or phone, with nothing else open |
| Model | Theirs | Theirs | Yours |

## Claude Code and Cursor examples

Developers use Vyra from Claude Code and Cursor to script edits that would take an afternoon by hand.

```
For every project tagged "client-reels", read the transcript, cut a 30-second vertical version that opens on the strongest line, add 3-5 word captions in the project style, and export 1080x1920. Report the file name and length of each.
```

```
Here's my product changelog in CHANGELOG.md. For each of the last 3 releases, find the matching screen recording in my Vyra project, cut a 45-second walkthrough, and put the release title on a title card at the start.
```

```
Read the timeline back as a table of clip, start, end, and caption text. Flag any caption longer than 6 words and any clip shorter than half a second.
```

More in the [developer guide](/for/developers) and on the [Cursor page](/cursor).

## Requirements

- A Vyra account.
- Nothing open on your side. Since October 2026 the server is headless, so the agent works with your laptop closed or from the Claude app on your phone.
- An MCP client from the table above.

## Managing sessions

See active MCP sessions and revoke access in Settings > External Agent in the Vyra app. While an agent is connected, an "MCP" tab next to the chat panel shows each tool call as it happens.

## Limits

- External models sometimes say a step is done when it isn't. Ask for a timeline read-back.
- Vyra doesn't generate footage. The agent edits what you uploaded.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| The agent asks you to open a browser tab | It's running the old tool list. Refresh the tools, reconnect the Vyra connector, start a new session, and reload your AI app. |
| Sign-in fails | Remove and re-add the server in your client. In Claude Code, run `claude mcp remove Vyra`, then add it again. |
| Tools don't show up | Reconnect the session. The tool list loads when the connection starts. |
| The agent says it's done but it isn't | Ask it to read the timeline back or capture frames at the timestamps you care about. |

## Pricing

| Plan | Price | AI | Export |
| --- | --- | --- | --- |
| MCP Starter | $24/mo | Bring your own Claude, ChatGPT, or Cursor subscription | Up to 1440p |
| MCP Pro | $65/mo | Bring your own subscription | Up to 4K |
| Vyra AI Starter | $54/mo | Built-in AI, no external subscription needed | Up to 1440p |
| Vyra AI Pro | $129/mo | Built-in AI | Up to 4K |

3-day free trial, then plans from $24/mo. See /pricing for the full breakdown.

## FAQ

**Which clients are tested?**
Claude Desktop and Claude Code the most. claude.ai, ChatGPT, Codex, and Cursor also work.

**Which LLMs can I use?**
Any model your MCP client runs. Vyra provides the editing tools and the footage context, and your model makes the decisions.

**Can it edit many videos at once?**
Yes. Ask for the same treatment across several projects in one conversation, run several agent sessions in parallel, or script it from Claude Code.

**Do I need to keep Vyra open in a browser?**
No. Since October 2026 the server is headless. The agent edits on Vyra's servers, so it keeps going with your laptop closed or your phone off.

**Can I use it from my phone?**
Yes. Add Vyra as a connector in your Claude account and it works in the Claude mobile app. Upload footage in the chat and ask for the video.

**How is this different from Descript's or Opus Clip's MCP?**
Those forward your prompt to the vendor's own assistant. Vyra exposes the editing tools themselves, so your model does the edit and can look at the footage while it works.

**Do I need to learn the tool names?**
No. Describe the result. The full catalog is available through the standard MCP `tools/list` method, and there's a `searchHelpDocs` tool for Vyra's help library.

## Related

- /answers/video-editors-that-integrate-with-llms
- /claude
- /cursor
- /for/developers
- /docs/mcp
- /best/mcp-servers-for-video-editing
