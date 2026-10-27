---
title: "Video editing over MCP: how it works and which servers exist (2026)"
description: "MCP (Model Context Protocol) lets Claude, ChatGPT, and Cursor control a video editor directly. What a video editing MCP server does, which ones exist, and how to pick."
updated: 2026-10-27
category: answers
---

**MCP (Model Context Protocol) is the open standard that lets AI assistants call external tools — and a video editing MCP server exposes real editing operations (cut, trim, caption, place, keyframe, export) so the assistant you already use can edit footage for you. Instead of learning a new app's built-in AI, you connect your editor to Claude, ChatGPT, or Cursor once, and then edit by chatting where you already work.**

## What a video editing MCP server actually does

When you ask Claude to "cut the dead air and caption this," the model doesn't touch pixels. It calls tools the server exposes — list the project's assets, read the transcript, split a clip at a timestamp, add a caption track, start an export — and the editor executes them on a real timeline. Three things decide whether that works well:

1. **Footage understanding.** The server must give the model something to reason over: transcripts, scene analysis, beat maps. A server that only exposes "trim(file, start, end)" makes the model edit blind.
2. **Granular, reversible operations.** Real timeline edits the model can revise ("tighten the middle by 10 seconds") rather than one-shot renders.
3. **A human escape hatch.** The result should open in a normal editor so you can fix the last 5 percent by hand.

## Which video editing MCP servers exist (2026)

| Server | What it is | Scope |
| --- | --- | --- |
| **Vyra** (`io.github.kale-eb/vyra`) | Hosted remote server for the Vyra editor: footage search, timeline cuts, captions, effects, music sync, motion graphics, export — on a full web editor | General editing of your real footage; listed in the official MCP registry; works with Claude, Claude Code, ChatGPT, and Cursor |
| **Opus Clip (via its Claude setup)** | Claude-driven clipping of long recordings into shorts | Clipping only, not general editing |
| **Open-source projects** (e.g. `video-editing-mcp`, `mcp-video` on GitHub) | Local servers wrapping FFmpeg-style operations | Developer-oriented; no footage analysis or hosted timeline |

The honest state of the category: it's young. Most "AI video editing" products still keep their AI inside their own app; only a handful expose a real MCP surface. If you want the assistant you already pay for to do the editing, check that the server is in the [official MCP registry](https://registry.modelcontextprotocol.io) and that it exposes footage understanding, not just file operations.

## Set it up

- Claude (web or desktop): [connect Claude Desktop](/tutorials/connect-claude-desktop)
- Claude Code: [connect Claude Code](/tutorials/connect-claude-code)
- ChatGPT: [connect ChatGPT](/tutorials/connect-chatgpt)
- The full reference, including the raw server config, is at [/docs/mcp](/docs/mcp) and in machine-readable form in our [llms.txt](/llms.txt).

## Do it in Vyra

```
List the tools you have for my Vyra project, then summarize the footage and propose a 45-second cut. I want to see the plan before you edit.
```

## FAQ

**Do I need to run anything locally?**
Not for Vyra — it's a hosted (remote) MCP server; you authorize it like any connector. Local open-source servers require installing and running them yourself.

**Does MCP cost extra?**
The protocol is free and open. Vyra's MCP plans start at $24/month; your Claude/ChatGPT subscription is the one you already have.

**Is MCP only for developers?**
No. It started in developer tools, but connectors in Claude and ChatGPT are now a normal end-user feature — a few clicks, no terminal.

## Related
- [Can Claude edit videos?](/answers/can-claude-edit-videos)
- [Can ChatGPT edit videos?](/answers/can-chatgpt-edit-videos)
- [What is an agentic video editor?](/answers/what-is-an-agentic-video-editor)
- [MCP setup docs](/docs/mcp)
