---
title: "Video editing over MCP: how it works and which servers exist (2026)"
description: "MCP (Model Context Protocol) lets Claude, ChatGPT, and Cursor control a video editor directly. What a video editing MCP server does, which ones exist as of October 2026, and how to pick."
updated: 2026-10-28
category: answers
---

**MCP (Model Context Protocol) is the open standard that lets AI assistants use other apps. A video editing MCP server gives the assistant real editing tools, like cut, trim, caption, add music, and export, so the Claude or ChatGPT you already use can edit your footage. You connect it once and then edit by chatting.**

## What a video editing MCP server actually does

When you ask Claude to "cut the dead air and caption this," the model doesn't touch the video itself. It calls tools the server gives it. It lists your clips, reads the transcript, splits a clip at a timestamp, adds a caption track, and starts an export. The editor does each step on a real timeline. Three things decide whether that works well.

1. **The AI can see your footage.** The server has to give the model transcripts and descriptions of what is on screen. A server that only offers "trim this file from 0:04 to 0:09" makes the model edit blind.
2. **Edits you can revise.** Real timeline edits the model can change later ("make the middle 10 seconds shorter"), instead of one render you have to redo.
3. **A way to take over.** The result should open in a normal editor so you can fix the last 5 percent by hand.

## Which video editing MCP servers exist (October 2026)

| Server | Hosted or local | What it is good at | Limits |
| --- | --- | --- | --- |
| **Vyra** (`io.github.kale-eb/vyra`) | Hosted | Turning raw clips into a finished video. Transcripts and scene descriptions, cuts, captions, music sync, motion graphics, export | Edits footage uploaded to Vyra |
| **Descript** | Hosted, in Claude's connector directory | Podcasts and talking videos. Transcribe, trim, remove filler words, captions, publish | Directory version leaves out generative tools; Claude Code uses a custom setup |
| **DaVinci Resolve Studio 21.1** | Local, built into Resolve | People who already edit in Resolve. Highlight edits, cleanup, media organizing, batch render | Studio (paid) only |
| **OpusClip** | Hosted (`mcp.opus.pro/mcp`) | One long video into shorts. Clip, caption, reframe, schedule | Clipping only |
| **Kapwing** | Hosted, beta | Teams in Kapwing. Upload, subtitles, dubbing, export | Closed beta, email Kapwing for access |
| **Open-source FFmpeg servers** | Local | Developers. Trim, merge, convert, compress files | No timeline, and the AI can't see the footage |

There are also community DaVinci Resolve servers on GitHub that use Resolve's scripting API. For our ranked take on which to use and when, see [best MCP servers for video editing](/best/mcp-servers-for-video-editing).

If you are picking one, check that it is in the [official MCP registry](https://registry.modelcontextprotocol.io) or your assistant's connector directory, and that it lets the AI see what is in the footage.

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
Not for Vyra, Descript, OpusClip, or Kapwing. They are hosted, and you sign in like any connector. DaVinci Resolve's server runs inside Resolve on your computer, and the open-source servers need installing.

**Does MCP cost extra?**
The protocol is free and open. Vyra's MCP plans start at $24 a month, and you keep using the Claude or ChatGPT subscription you already have. Other servers follow their own app's pricing.

**Is MCP only for developers?**
No. It started in developer tools, but connectors in Claude and ChatGPT are now a normal feature. It takes a few clicks and no terminal.

## Related
- [Best MCP servers for video editing, ranked](/best/mcp-servers-for-video-editing)
- [Can Claude edit videos?](/answers/can-claude-edit-videos)
- [Can ChatGPT edit videos?](/answers/can-chatgpt-edit-videos)
- [What is an agentic video editor?](/answers/what-is-an-agentic-video-editor)
- [MCP setup docs](/docs/mcp)
