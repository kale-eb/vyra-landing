---
title: AI video editor that edits your real footage by describing the edit
description: Vyra is an AI video editor. You upload your footage, say what you want in plain words, and it makes the cut. Nothing is generated.
updated: 2026-09-24
category: product
example: https://www.instagram.com/reel/Da_tDQwtc-M/
reels:
  - Da_tDQwtc-M
  - DZwM74ytJxF
  - DajEylHSiz8
---

**Vyra edits the footage you actually filmed. You upload your clips, describe the video you want, and it cuts, captions, adds music and graphics, and exports. If you want to move one cut by a few frames, the timeline is right there.**

Most "AI video editors" either generate fake clips from a prompt or stick an auto-caption button on a normal timeline. We built Vyra the other way around. The chat is the editor. It reads your footage first, then does what you ask.

## How it works

1. Upload your clips. Vyra transcribes every word with timestamps and writes a description of every scene.
2. Describe the edit. Length, platform, what to keep, what to cut, how captions and music should behave.
3. Vyra builds the timeline. Best takes, no pauses, captions, music, graphics.
4. Fix things one line at a time. "Tighter in the middle." "Move the caption under my chin."
5. Open the timeline if you want to. Export up to 4K.

## What you can ask for

| You say | Vyra does |
| --- | --- |
| "Cut this 8-minute video to 60 seconds for Reels, best takes only" | Searches the transcript, removes pauses and retakes, hits the length |
| "Find every moment I show the canvas from above" | Searches scene descriptions and lists timestamps |
| "Add 3-5 word captions, bold white, lower third" | Places phrase captions in that style |
| "Cut the montage to the beat of this track" | Lands cuts on the beats |
| "Animate the three tool names as I say them" | Builds a motion graphic timed to your speech |
| "Match the pacing and captions of the reference I attached" | Applies the reference's rhythm and text style to your footage |
| "Make a 9:16 version that keeps me centered" | Reframes with a tracked mask |

## Prompts to paste

```
Cut this raw footage down to a 60-second vertical video for Instagram Reels. Keep the strongest takes, remove pauses, retakes, and filler words. Open on the line "nobody tells you this". No captions yet, straight cuts only.
```

```
Add captions to the whole video as 3-5 word phrases, bold white text with a thin black outline, centered in the lower third. Make the words "eighty percent" bigger and yellow.
```

```
Add a calm lo-fi track at about 25% while I speak and 70% during b-roll. Fade out over the last 2 seconds. Then export 1080x1920 for TikTok.
```

## Compared to the usual way

| | Traditional editor | Template AI tool | Vyra |
| --- | --- | --- | --- |
| Starting point | Empty timeline | Pick a template | Describe the video |
| Knows your footage | No | No | Transcript and scene descriptions of every clip |
| Uses your real clips | Yes | Often stock or generated | Yes, only your footage |
| Fine control | Full | Limited | Full timeline when you want it |
| Time to first cut | Hours | Minutes, but generic | Minutes, from your own footage |

We ran the same 35-minute file through Vyra and CapCut. Vyra indexed it in under 2 minutes. CapCut timed out after 4. In July 2026 Buffer tested 11 AI video editors on the same footage and put Vyra first.

## Limits

- Vyra edits footage you already have. It does not generate video.
- It runs in the browser. There is no mobile app yet.
- The agent gets you most of the way. Frame-accurate polish is faster on the timeline.

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
No. "Show the product while I'm still talking about it" works as well as "J-cut."

**Does it work on footage with no speech?**
Yes. Scene analysis works on silent clips too.

**Can I use my own Claude or ChatGPT instead of Vyra's AI?**
Yes. The MCP plans connect your assistant to the editor, and it gets the actual editing tools.

## Related

- /pricing
- /prompts/how-to-prompt-vyra
- /features/footage-understanding
- /compare/vyra-vs-descript
