---
title: "Vyra for developers: drive a real video editor from Cursor or Claude Code over MCP"
description: "Vyra exposes its editor as MCP tools, so an agent in Cursor, Claude Code, or Claude Desktop can add media, trim, split, caption, mask, animate, keyframe, apply effects, and export, with transcripts and scene analysis available to it."
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

**Vyra is a video editor with an MCP surface. The agent you already run in Cursor or Claude Code gets the real tools: add and search media, trim, split, captions, masks, motion graphics, keyframes, effects, and export, plus read access to the transcript and per-scene analysis of every asset.**

## What you make

- Product and feature demos: [/formats/product-demo](/formats/product-demo)
- App walkthroughs from screen recordings: [/formats/app-walkthrough](/formats/app-walkthrough)
- Build-in-public updates: [/formats/founder-build-in-public](/formats/founder-build-in-public)
- Explainers for docs and onboarding: [/formats/explainer](/formats/explainer)

## Your three most-used prompts

From Claude Code:
```
Open the project "release 2.4 demo". List the assets and summarize the screen recording by section. Then build a 60-second cut: intro from the talking-head clip, then the three new features in the order they appear in the changelog I pasted, cropping the screen recording to the relevant region for each. Add 3-5 word captions. Export 16:9 at 1080p and a 9:16 version.
```

Batch:
```
For every project tagged "support-clips", add phrase captions in the saved style and export a 9:16 MP4. Report each export path when done.
```

Inspect before editing:
```
Read the timeline back with start and end times for every item. Then capture frames at 0:05, 0:20, and 0:45 so I can check text placement.
```

## A typical workflow

1. Connect your MCP client to Vyra (see [/mcp](/mcp)).
2. Have the agent list assets and read transcripts and scene summaries.
3. Ask for a plan, then execute in steps: rough cut, captions, graphics, export.
4. Verify with frame captures and a timeline readback.
5. Wire it into your pipeline: changelog in, demo video out.

## What Vyra does that matters for you

- Tool-level access, not a prompt passthrough. The agent manipulates the timeline directly.
- Transcript and scene analysis exposed as data the agent can search.
- Motion graphics are code-based (React and Remotion), so the agent can generate and edit them from a description.
- Client-side export with presets, or custom resolution, format, and bitrate.

## What it does not do

- It is not a headless rendering API. Exports run in the browser session.
- It does not generate footage. It edits uploaded media and stock from Pexels.

## Example

Example creator: TODO

## FAQ

**Which clients are tested?**
Claude Desktop, Claude Code, claude.ai, ChatGPT, and Cursor. Any MCP-compatible client should work.

**Can I keep the agent from touching certain items?**
Say so in the prompt, or lock tracks in the editor. The agent respects existing placements when asked to change a property.

**Is there a rate limit on tool calls?**
Plan credits cover processing and agent work. See [/pricing](/pricing).

## Related

- [/mcp](/mcp)
- [/cursor](/cursor)
- [/claude](/claude)
- [/prompts/using-claude-or-chatgpt-with-vyra](/prompts/using-claude-or-chatgpt-with-vyra)
