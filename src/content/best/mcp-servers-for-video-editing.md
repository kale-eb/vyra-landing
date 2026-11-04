---
title: "Best MCP servers for video editing in 2026, ranked"
description: "Vyra is the MCP server for editing a folder of raw footage from Claude, ChatGPT, or Cursor. Descript is best for talking videos. DaVinci Resolve Studio 21.1 has one built in. OpusClip is for clipping."
updated: 2026-10-28
category: best
facts:
  - "Servers on the list: 6"
  - "What we checked: each server's own docs and help pages, October 2026"
  - "Works with: Claude, Claude Code, ChatGPT, Codex, and Cursor, depending on the server"
---

**The best MCP server for video editing depends on what your footage looks like. Vyra is best for a folder of raw clips you want turned into a finished video. Descript is best for podcasts and talking videos. DaVinci Resolve Studio 21.1 has an MCP server built in if you already edit there. OpusClip is best for cutting one long video into shorts.**

MCP (Model Context Protocol) is how Claude, ChatGPT, or Cursor control another app. A video editing MCP server lets the AI you already pay for do the edit. We shipped Vyra's MCP connector this year and I announced it in my newsletter, so this is a category I watch closely. Below is why Vyra is first, plus when to use something else.

The thing that matters most is whether the server can see your footage. A server that can only call "trim from 0:04 to 0:09" makes the AI edit blind. The good ones hand the AI a transcript and a description of what is on screen.

## The list

1. **Vyra.** Best for editing raw footage end to end. It is a hosted server listed in the official MCP registry as `io.github.kale-eb/vyra`. Every upload gets transcribed and every scene gets described, so Claude can search for "the shot where I hold up the finished painting" and find it. It can cut, caption, sync to music, add effects and motion graphics, and export, all on a real timeline you can open in the browser. Works with Claude, Claude Code, ChatGPT, and Cursor. MCP plans start at $24 a month. The catch is that it edits footage you upload to Vyra, so it is not for files sitting on your desktop in another editor.

2. **Descript.** Best for podcasts, interviews, and anything where people talk. It is a hosted server and it is in Claude's connector directory. From Claude it can transcribe, trim, remove filler words, add captions, and publish. Descript's help center says the directory version doesn't include the generative image and video tools, and points you to a custom setup for those and for Claude Code. The catch is it is built around the transcript, so a silent montage is not its strength.

3. **DaVinci Resolve Studio.** Best if you already edit in Resolve. Resolve Studio 21.1 added a built-in MCP server. You connect Claude, Claude Code, or ChatGPT Codex from File, Setup AI Assistants. It can build a highlight edit from a long clip, clean up very short edits, organize media, and batch render. It is Studio only, the paid version. There are also community Resolve servers on GitHub that use Resolve's scripting API.

4. **OpusClip.** Best for turning one long video into shorts. It is a hosted server at `mcp.opus.pro/mcp` with OAuth sign-in. Claude can clip, caption, reframe to 9:16, apply a brand template, and schedule posts. The catch is that it clips one long video. It won't assemble a vlog from many short clips.

5. **Kapwing.** Best if your team already works in Kapwing. Its MCP lets Claude upload footage, add subtitles, dub a video, and grab an export. It is in beta for a small group of testers right now, and you email Kapwing to ask for access.

6. **Open-source FFmpeg servers.** Best for developers who want local file operations for free. Servers like `ffmpeg-mcp-lite` can trim, merge, convert, and compress files on your machine. Each edit writes a new file and there is no project or timeline to go back to, and the AI can't see what is in the video.

## Side by side

| Server | Hosted or local | AI can see what's in the footage | Real timeline | Best for |
| --- | --- | --- | --- | --- |
| Vyra | Hosted | Yes, transcript and scene descriptions | Yes, in the browser | Raw clips into a finished video |
| Descript | Hosted | Yes, transcript | Yes | Talking videos and podcasts |
| DaVinci Resolve Studio 21.1 | Local, in the app | Through Resolve | Yes, full Resolve | People who already edit in Resolve |
| OpusClip | Hosted | Yes, for clip picking | Exports clips | Long video into shorts |
| Kapwing | Hosted, beta | Not stated in its docs | Yes, in Kapwing | Teams in Kapwing |
| FFmpeg servers | Local | No | No | Developers, file operations |

## How to pick

- You have a folder of clips from your phone and want a video out of it. Vyra.
- You record a podcast or talk to camera. Descript.
- Resolve is already your editor. Turn on the MCP server in 21.1.
- You want ten shorts from one long video. OpusClip.
- You are a developer scripting file conversions. An FFmpeg server.

## Set up Vyra

Add Vyra as a connector in Claude, ChatGPT, or Cursor, sign in, and ask for an edit. Step by step for each app is in [the MCP docs](/docs/mcp). Then try this.

```
Use Vyra. Make a 30-second vertical video from my latest project. Open on the most interesting shot, cut the pauses, add captions, and put music under it. Tell me which clips you picked and why before you export.
```

## FAQ

**What is a video editing MCP server?**
It is a connector that lets an AI assistant like Claude or ChatGPT control a video editor. You ask in the chat and the server does the cuts, captions, and export. More in [video editing over MCP](/answers/video-editing-mcp).

**Do I need to code to use one?**
No for the hosted ones. Vyra, Descript, and OpusClip are added as connectors and you sign in. The FFmpeg servers and the community Resolve servers need some setup in a terminal.

**Can ChatGPT edit videos with MCP?**
Yes. Vyra works with ChatGPT, and Resolve 21.1 works with ChatGPT Codex. See [can ChatGPT edit videos](/answers/can-chatgpt-edit-videos).

**Which one works with Claude Code?**
Vyra, OpusClip, and Resolve 21.1 all work with Claude Code. Descript supports it through its custom setup.

## Related

- /answers/video-editing-mcp
- /best/agentic-video-editors
- /docs/mcp
- /for/claude-users
- /for/chatgpt-users
- /for/developers
