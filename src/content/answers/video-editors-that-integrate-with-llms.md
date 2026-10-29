---
title: "Which video editors integrate with external LLMs like Claude and ChatGPT? (2026)"
description: "Vyra, Descript, DaVinci Resolve Studio 21.1, OpusClip, and Kapwing connect to Claude or ChatGPT over MCP. They differ in whether your AI gets the editing tools or only a prompt box."
updated: 2026-10-29
category: answers
facts:
  - "Editors with an MCP server: Vyra, Descript, DaVinci Resolve Studio 21.1, OpusClip, Kapwing (beta)"
  - "Clients: Claude Desktop, claude.ai, Claude Code, ChatGPT, Codex, Cursor, depending on the editor"
  - "The difference that matters: whether your AI can see the footage and edit the timeline itself"
  - "What we checked: each editor's own docs and help pages, October 2026"
reels:
  - DZumPohtfW8
  - DaAb0QFNvk0
---

**Five video editors connect to an outside LLM like Claude or ChatGPT through MCP, the Model Context Protocol. They are Vyra, Descript, DaVinci Resolve Studio 21.1, OpusClip, and Kapwing (in beta). The question that separates them is what your AI is allowed to do once it's connected. In Vyra, your AI gets the editing tools themselves, reads a transcript and a description of every scene, and edits a real timeline you can open. Some other integrations hand your request to the editor's own assistant instead.**

We make Vyra, so weigh our pick accordingly. Every fact about another editor below comes from its own docs, checked in October 2026.

## The editors, side by side

| Editor | How it connects | Works with | Your AI sees the footage | Your AI edits the timeline | Best for |
| --- | --- | --- | --- | --- | --- |
| Vyra | Hosted MCP server, `https://api.usevyra.com/mcp`, OAuth sign-in | Claude Desktop, claude.ai, Claude Code, ChatGPT, Codex, Cursor | Yes, transcript and scene descriptions of every clip | Yes, 50+ editing tools on a real timeline | Turning a folder of raw clips into a finished video |
| Descript | Hosted MCP server, in Claude's connector directory | Claude, Claude Code through a custom setup | Yes, transcript | Transcribe, trim, remove filler words, add captions, publish | Podcasts and talking videos |
| DaVinci Resolve Studio 21.1 | Built-in MCP server (File, Setup AI Assistants) | Claude, Claude Code, ChatGPT Codex | Through Resolve | Yes, full Resolve | People who already edit in Resolve |
| OpusClip | Hosted MCP server, `mcp.opus.pro/mcp`, OAuth | Claude, Claude Code | Yes, for picking clips | Exports clips | Cutting one long video into shorts |
| Kapwing | MCP in beta, by request | Claude | Not stated in its docs | Yes, in Kapwing | Teams already in Kapwing |
| CapCut | CapCut x Codex | ChatGPT desktop only | Not stated | Not stated | CapCut users on ChatGPT desktop |

Open-source FFmpeg MCP servers also exist for developers. They trim, merge, and convert files on your machine, but there's no timeline and the AI can't see what's in the video.

## Tools vs a prompt box

There are two ways an editor can plug into your LLM.

1. **Tool-level.** The editor exposes its actual operations (add a clip, trim, caption, mask, export) as MCP tools. Your model plans the edit and calls them one by one, and it can check its work by reading the timeline back or capturing frames. Vyra works this way.
2. **Passthrough.** Your request goes to the editor's built-in assistant, which does the work its own way. Your model mostly relays the message.

Tool-level matters for three reasons.

- You use the model you already pay for and like, Claude or GPT, for the editing decisions.
- The model can work across many projects in one conversation, for example captioning 20 clips in the same style.
- Developers can script it from Claude Code or Cursor like any other tool.

## What Vyra's integration covers

Everything below is available to your model once Vyra is connected. The full list is in [the MCP guide](/mcp).

| Area | What your AI can do |
| --- | --- |
| See and search | Browse project assets, read the timeline, search footage by what's on screen, what's said, location, or date, capture a frame at any timestamp, search Pexels and Freesound stock |
| Edit | Add video, audio, and images with trim control, add text, shapes, and styled captions, change position, scale, opacity, volume, and speed, move, split, slip, clone, and delete items, set keyframes |
| Effects | Apply color and stylize effects, create and animate masks, remove backgrounds, build motion graphics |
| Project | Read the project's template and style, add assets from your library, manage markers and tracks |

## Set it up

Pick your client and follow the steps in [the MCP guide](/mcp). There are separate pages for [Claude](/claude), [ChatGPT](/chatgpt), and [Cursor](/cursor), and a [developer guide](/for/developers) for Claude Code and scripted workflows.

```
Use Vyra. List the clips in my project "studio vlog" with a one-line description of each. Then propose a 45-second vertical cut with timestamps and wait for my OK before editing.
```

## FAQ

**Which video editors work with Claude?**
Vyra, Descript, DaVinci Resolve Studio 21.1, OpusClip, and Kapwing (beta) all connect to Claude over MCP. Vyra works in Claude Desktop, claude.ai, and Claude Code.

**Which video editors work with ChatGPT?**
Vyra works in ChatGPT on the web, the ChatGPT desktop app, and Codex. Resolve Studio 21.1 works with ChatGPT Codex. CapCut connects through CapCut x Codex on ChatGPT desktop.

**Can I use my own LLM subscription instead of paying for the editor's AI?**
With Vyra, yes. The MCP plans start at $24 a month and use the Claude, ChatGPT, or Cursor subscription you already have.

**Do I need to code?**
No. Hosted servers like Vyra's are added as a connector and you sign in. Claude Code and Cursor are there if you want to script it.

**Can the AI see what's in my video?**
In Vyra, yes. Every clip is transcribed and every scene is described when you upload it, and the AI can capture frames to check its work.

## Related

- /mcp
- /best/mcp-servers-for-video-editing
- /answers/video-editing-mcp
- /for/developers
