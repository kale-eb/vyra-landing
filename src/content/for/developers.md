---
title: "Vyra for developers: drive a real video editor from Cursor or Claude Code over MCP"
description: "Vyra exposes its editor as MCP tools. An agent in Cursor or Claude Code can add media, trim, caption, mask, animate, and export, with scene analysis."
updated: 2026-09-24
category: for
facts:
  - "Best for: Developers building video pipelines, agent workflows, or internal tooling"
  - "Typical footage: Screen recordings, demo videos, batch content, user-submitted clips"
  - "Typical output: Product demos, release notes videos, batch captioned clips, automated cutdowns"
  - "Time saved: A changelog to a captioned demo video from one agent run"
  - "Works with: Cursor, Claude Code, Claude Desktop, ChatGPT, any MCP client"
  - "Price: Free to start, MCP Starter $24/mo"
---

**Vyra is a video editor with an MCP surface. The agent you already run in Cursor or Claude Code gets the real tools. Add and search media, trim, split, captions, masks, motion graphics, keyframes, effects, export. It can also read the transcript and per-scene analysis of every asset.**

## What you make

- [Product and feature demos](/formats/product-demo)
- [App walkthroughs](/formats/app-walkthrough) from screen recordings
- [Build-in-public updates](/formats/founder-build-in-public)
- [Explainers](/formats/explainer) for docs and onboarding

## Your three most-used prompts

**From Claude Code**
```
Open the project "release 2.4 demo". List the assets and summarize the screen recording by section. Build a 60-second cut. Intro from the talking-head clip, then the three new features in the order they appear in the changelog I pasted, cropping the screen recording to the relevant region each time. 3-5 word captions. Export 16:9 at 1080p and a 9:16 version.
```

**Batch**
```
For every project tagged "support-clips", add phrase captions in the saved style and export a 9:16 MP4. Report each export path when done.
```

**Inspect before editing**
```
Read the timeline back with start and end times for every item. Then capture frames at 0:05, 0:20, and 0:45 so I can check text placement.
```

## A typical workflow

1. Connect your MCP client to Vyra. See [/mcp](/mcp).
2. Have the agent list assets and read transcripts and scene summaries.
3. Ask for a plan, then run it in steps. Rough cut, captions, graphics, export.
4. Check with frame captures and a timeline readback.
5. Wire it into your pipeline. Changelog in, demo video out.

## What Vyra does that matters for you

- Tool-level access. The agent moves things on the timeline itself, it doesn't pass prompts to someone else's AI.
- Transcript and scene analysis exposed as data the agent can search.
- Motion graphics are code (React and Remotion), so the agent can write and edit them from a description.
- Export runs in the browser with presets, or custom resolution, format, and bitrate.

## What it does not do

- It isn't a headless render API. Exports run in a browser session.
- It doesn't generate footage. It edits uploaded media and Pexels stock.

## Example

Example creator (TODO)

## FAQ

**Which clients are tested?**
Claude Desktop, Claude Code, claude.ai, ChatGPT, and Cursor. Any MCP client should work.

**Can I keep the agent from touching certain items?**
Say so in the prompt, or lock tracks in the editor.

**Is there a rate limit on tool calls?**
Plan credits cover processing and agent work. See [/pricing](/pricing).

## Related

- [/mcp](/mcp)
- [/cursor](/cursor)
- [/claude](/claude)
- [/prompts/using-claude-or-chatgpt-with-vyra](/prompts/using-claude-or-chatgpt-with-vyra)
