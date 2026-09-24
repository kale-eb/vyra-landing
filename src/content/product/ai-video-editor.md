---
title: AI video editor that edits your real footage by describing the edit
description: Vyra is an AI video editor that turns your raw footage into a finished video when you describe the edit in plain language. No templates, no generated clips.
updated: 2026-09-24
category: product
example: https://www.instagram.com/reel/Da_tDQwtc-M/
---

**Vyra is an AI video editor for real footage. You upload what you filmed, describe the video you want in plain language, and the editor cuts it, captions it, adds graphics and music, and exports it. If you can explain the edit to a friend, you can get it from Vyra. When you want to fine-tune, the full timeline is one click away.**

Most tools that call themselves AI video editors do one of two things. They generate synthetic clips from a text prompt, or they bolt an auto-caption button onto a normal timeline. Vyra does neither. It was built as a chat window first. The editor reads your footage, then works from your description.

## How it works

1. Upload your clips. Vyra transcribes every spoken word with timestamps and writes a visual description of every scene, so the agent knows what was said and what is on screen.
2. Describe the edit. Length, platform, what to keep, what to cut, how captions and music should behave.
3. Vyra builds the timeline. It picks takes, cuts pauses, places b-roll, adds captions and graphics, and syncs music.
4. Correct it in one line at a time. "Tighter in the middle." "Move the caption under my chin." "Swap the intro clip."
5. Open the timeline if you want. Everything the agent made is a normal editable item. Export up to 4K.

## What you can ask for

| You say | Vyra does |
| --- | --- |
| "Cut this 8-minute video to 60 seconds for Reels, best takes only" | Searches the transcript, removes pauses and retakes, keeps your order, hits the length |
| "Find every moment I show the canvas from above" | Searches scene descriptions and lists timestamps |
| "Add 3-5 word captions, bold white, lower third" | Places phrase captions from the transcript in that style |
| "Cut the montage to the beat of this track" | Detects beats and lands cuts on them |
| "Animate the three tool names on screen as I say them" | Builds a custom motion graphic timed to your speech |
| "Match the pacing and caption style of the reference I attached" | Reads the reference and applies its rhythm, text treatment, and music behavior to your footage |
| "Make a 9:16 version that keeps me centered" | Reframes with a tracked mask, no separate crop tool needed |

## Prompts to paste

```
Cut this raw footage down to a 60-second vertical video for Instagram Reels. Keep the strongest takes, remove pauses, retakes, and filler words. Open on the line "nobody tells you this". No captions yet, straight cuts only.
```

```
Add captions to the whole video as 3-5 word phrases, bold white text with a thin black outline, centered in the lower third. Make the words "eighty percent" bigger and yellow. Turn captions off during the b-roll at the end.
```

```
Add a calm lo-fi track under the whole video at about 25% while I speak and 70% during b-roll. Fade out over the last 2 seconds. Then export a 1080x1920 version for TikTok.
```

## Compared to the usual way

| | Traditional editor | Template AI tool | Vyra |
| --- | --- | --- | --- |
| Starting point | Empty timeline | Pick a template | Describe the video |
| Knows your footage | No | No | Transcript and scene analysis of every clip |
| Uses your real clips | Yes | Often generated or stock | Yes, only your footage |
| Fine control | Full | Limited | Full timeline when you want it |
| Time to first cut | Hours | Minutes, but generic | Minutes, from your own footage |

In a side-by-side test on the same 35-minute file, Vyra indexed the whole recording in under 2 minutes with searchable scene descriptions. CapCut timed out after 4 minutes. Buffer's July 2026 roundup of AI video editors ranked Vyra first and called it "the most consistent performer" across the same footage and brief.

## Limits

- Vyra edits footage you already have. It does not generate video, avatars, or stock scenes from text.
- It runs in the browser. There is no mobile app yet.
- The agent is good at the first 90%. Frame-accurate polish is faster on the timeline, which is why the timeline is always there.

## Pricing

| Plan | Price | AI | Export |
| --- | --- | --- | --- |
| MCP Starter | $24/mo | Bring your own Claude, ChatGPT, or Cursor subscription | Up to 1440p |
| MCP Pro | $65/mo | Bring your own subscription | Up to 4K |
| Vyra AI Starter | $54/mo | Built-in AI, no external subscription needed | Up to 1440p |
| Vyra AI Pro | $129/mo | Built-in AI | Up to 4K |

Free to start. See /pricing for the full breakdown.

## FAQ

**Do I need to know editing terms?**
No. "Show the product while I am still talking about it" works as well as "J-cut". Describe the result and the agent picks the technique.

**Does it work with footage that has no speech?**
Yes. Scene analysis works on silent clips, so the agent can still find the shot of the bridge at night or the moment the paint gets poured.

**Can I use my own Claude or ChatGPT instead of Vyra's AI?**
Yes. The MCP plans connect your existing assistant to the editor. The agent gets the actual editing tools and can see your footage, it does not just forward prompts.

**What happens if the first cut is wrong?**
Give one correction per message. Ask for a list of every cut with timestamps if you want to verify before watching.

## Related

- /pricing
- /prompts/how-to-prompt-vyra
- /features/footage-understanding
- /compare/vyra-vs-descript
