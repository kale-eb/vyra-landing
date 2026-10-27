---
title: "Can Claude edit videos? Yes, through MCP — here's how (2026)"
description: "Claude can't cut video inside the Claude app. Connect it to Vyra over MCP and it edits your real footage: cuts, captions, beat sync, and motion graphics on a real timeline."
updated: 2026-10-27
category: answers
---

**Claude can't edit video inside the Claude app — it has no timeline, no renderer, and no access to your footage. But connect Claude to Vyra over MCP (Model Context Protocol) and it becomes a real video editor: it reads your transcripts and scene analysis, makes cuts, writes captions, syncs to music, and builds motion graphics on an actual timeline you can open and adjust. Setup takes about two minutes, and it works with the Claude subscription you already pay for.**

## What Claude can and can't do with video

| | Claude alone | Claude + Vyra over MCP |
| --- | --- | --- |
| Watch or understand your footage | No | Yes — every clip is transcribed and scene-analyzed on upload |
| Cut and trim clips | No | Yes, on a real multi-track timeline |
| Captions | Script text only | Styled, word-timed captions on the video |
| Music and beat sync | Suggestions only | Adds tracks and cuts to the beat |
| Motion graphics | Descriptions only | Builds and places them |
| Export a finished video | No | Yes, render and download |

## How it works

1. **Connect once.** Add Vyra as a connector in Claude (works in Claude.ai, Claude Desktop, and Claude Code). The walkthrough is at [/docs/mcp](/docs/mcp).
2. **Upload footage to a Vyra project.** On upload, Vyra transcribes every word and analyzes every scene, so Claude can "see" the footage through structured data instead of guessing.
3. **Describe the edit in your Claude chat.** "Cut the dead air, caption it in 3–5 word phrases, sync the b-roll to the beat." Claude calls Vyra's editing tools and reports back what it changed.
4. **Open the timeline when you want control.** Vyra is a full editor underneath — every edit Claude makes is a normal timeline edit you can nudge by hand.

## Why Claude is good at this

- Editing instructions are language, and Claude is better at language than any editor's built-in assistant. It plans a cut, explains its choices, and revises on feedback.
- It already knows your preferences from your other conversations and projects.
- You're reusing a subscription you already pay for. Claude Pro is $20/month; adding Vyra's MCP Starter at $24/month costs about what one standalone AI editor charges, and your AI does more than video.

## Do it in Vyra

```
You're connected to my Vyra project "launch week". List the assets and summarize the footage, then propose a 45-second vertical cut with timestamps. Wait for my OK before editing.
```

```
Build it as planned. Phrase captions, music under my voice, straight cuts. When you're done, read the timeline back to me.
```

## FAQ

**Does this work with Claude Code?**
Yes. Vyra's MCP server works from Claude.ai, Claude Desktop, Claude Code, and Cursor. Developers tend to drive it from Claude Code; the setup is the same.

**Can ChatGPT edit videos the same way?**
Yes — Vyra connects to ChatGPT and Cursor over the same protocol. See [Vyra for ChatGPT users](/for/chatgpt-users).

**Is this text-to-video generation?**
No. Generators like Runway and Sora create synthetic footage from a prompt. Claude + Vyra edits the real footage you shot.

**What does it cost to try?**
Vyra is free to start. MCP plans start at $24/month; see [pricing](/pricing).

## Related
- [Vyra for Claude users](/for/claude-users)
- [Set up the MCP connection](/docs/mcp)
- [What is an agentic video editor?](/answers/what-is-an-agentic-video-editor)
- [Conversational editing vs traditional editing](/answers/conversational-editing-vs-traditional-editing)
