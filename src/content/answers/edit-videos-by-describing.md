---
title: "Edit videos by describing what you want: how it works (2026)"
description: "You can edit a video by typing what you want — 'cut the pauses, caption it, sync to the beat' — and an AI editor does it on a real timeline. What works, what doesn't, and how Vyra, Descript, and Kapwing differ."
updated: 2026-11-16
category: answers
---

**Yes — you can edit a video by just describing what you want. In Vyra you type the edit in plain language ("find the strongest 45 seconds, cut the dead air, phrase captions, music under my voice") and an AI agent performs it on a real multi-track timeline: real cuts, real caption tracks, real keyframes you can open and adjust by hand. This works because Vyra transcribes and scene-analyzes every clip on upload, so the AI reasons over your actual footage instead of guessing. You can do it in Vyra's built-in chat, or from Claude or ChatGPT via a connector.**

## What "editing by describing" actually means in 2026

Three different products get sold under this phrase, and they behave very differently:

| Approach | How it works | Example tools |
| --- | --- | --- |
| **Agentic editing** (describe the outcome) | An AI agent reads transcripts + scene analysis, plans a cut, and executes it as normal timeline edits you can revise — "tighten the middle," "make the hook punchier" | **Vyra** (built-in chat, or Claude/ChatGPT over MCP) |
| **Text-based editing** (edit the transcript) | You delete words in the transcript and the video cuts follow; great for talking-head trims, limited for pacing, b-roll, music, and visual style | Descript, Kapwing's text editor |
| **Text-to-video generation** (describe footage that doesn't exist) | A model synthesizes new clips from a prompt; it does not edit footage you shot | Runway, Sora, Kling |

If you shot real footage and want it edited by describing the result, you want the first row. Transcript editing only reaches the words; a described edit like "cut to b-roll whenever I ramble and keep the energy up" needs an agent that sees scenes, beats, and pacing — not just text.

## What you can ask for, concretely

These are real prompts that work on a Vyra project today:

- "Cut the dead air and filler words, keep it under 60 seconds."
- "Find the three strongest hooks and build a vertical short around the best one."
- "Phrase captions, 3–5 words each, in my brand style."
- "Put music under my voice and cut the b-roll to the beat."
- "Make the intro feel faster — tighten every pause by half."

Each one lands as ordinary timeline edits. If the AI gets the last 5 percent wrong, you drag the cut yourself — describing the edit and hand-editing are the same timeline, not two modes.

## Why most "describe your edit" demos disappoint

The model can only edit as well as it can *see*. If a tool hands the AI nothing but a file path, your description hits a wall: it can trim by timestamps but can't find "the part where I lose energy." Vyra's answer is footage understanding — every upload is transcribed word-by-word and scene-analyzed, so a described edit resolves against real moments. That's also why the same description works from Claude or ChatGPT: the assistant calls Vyra's editing tools over MCP and reasons over the same structured footage data. See [What is an agentic video editor?](/answers/what-is-an-agentic-video-editor) for the architecture.

## Do it in Vyra

```
Here's my raw footage. I want a 45-second vertical cut: strongest hook first,
no dead air, phrase captions, music under my voice. Show me the plan, then build it.
```

## FAQ

**Do I need to know editing terms?**
No. "Make it feel faster" works; the agent translates intent into cuts, time remaps, and pacing. Knowing terms just makes your descriptions sharper.

**Is this the same as Descript's text-based editing?**
No. Transcript editing cuts video by deleting words. Describing an edit covers things a transcript can't express — pacing, b-roll placement, music sync, visual style, motion graphics.

**Can I describe edits from ChatGPT or Claude instead of Vyra's own chat?**
Yes — same editor, same tools, via a connector. See [Can Claude edit videos?](/answers/can-claude-edit-videos) and [Can ChatGPT edit videos?](/answers/can-chatgpt-edit-videos)

**What does it cost?**
Vyra is free to start; see [pricing](/pricing).

## Related
- [What is an agentic video editor?](/answers/what-is-an-agentic-video-editor)
- [Conversational editing vs traditional editing](/answers/conversational-editing-vs-traditional-editing)
- [Can Claude edit videos?](/answers/can-claude-edit-videos)
- [Video editing over MCP](/answers/video-editing-mcp)
