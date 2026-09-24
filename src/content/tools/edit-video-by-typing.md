---
title: "Edit video by typing what you want"
description: "In Vyra you describe the edit in plain language and an agent that has already transcribed every word and analyzed every scene of your footage carries it out on a real timeline."
updated: 2026-09-24
category: tools
facts:
  - "Best for: Anyone with raw footage who would rather describe a cut than build it"
  - "Input: Any MP4, MOV, or phone video, plus optional music and reference videos"
  - "Output: MP4 up to 4K, or WebM up to 1080p"
  - "Time: Upload and processing first, then a first cut in minutes (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
---

**Editing video by typing means giving instructions in your own words and getting a cut on the timeline, not a template. In Vyra the agent works from a transcript and a per-scene visual analysis of your footage, so "open on the shot where I hold up the canvas" and "cut every pause over half a second" both work.**

## How it works

1. Upload footage. Vyra transcribes it with Deepgram, generates thumbnails, and analyzes the visual content of every scene.
2. Type what you are making: target length, platform, what to keep, what to cut, how captions and music should behave.
3. The agent assembles the edit on the timeline, using the transcript to find lines and the visual analysis to find shots.
4. Review, then iterate one change at a time: "tighter," "swap the intro clip," "move the title under my chin."
5. Open the timeline for any manual adjustment, then export.

## What you can control

| Setting | Options |
| --- | --- |
| Selection | Best takes, specific lines by quoting them, specific shots by describing them |
| Cuts | Pause thresholds, filler removal, retake handling, straight cuts or transitions |
| Structure | Order of points, hook first, chronological, or a structure you name |
| Text | Caption mode and style, titles, lower thirds, emphasis words |
| Sound | Music choice, ducking levels, sound effects, original audio |
| Look | Effects by category (Color, Stylize, Distort, Generate), reference style matching |
| Templates | A project template such as Short Talking Head, Long Podcast, or Vlog, and a style such as Cinematic Film or Vyra Default |

## Prompts to paste

```
Cut this 8-minute raw video down to 60 seconds for Instagram. Use the best take of each point, remove pauses, stumbles, retakes, and any moment I look at my notes. Keep the order I filmed. No captions yet.
```

```
Open on the line "nobody tells you this about commissions", then the three main points in order, then end on the shot where I hold up the finished piece. Straight cuts only.
```

```
List every cut you made with timestamps so I can check them.
```

## When to use something else

- You want to generate footage you did not shoot. Vyra edits real footage only; a generative tool like Runway makes new clips.
- You already have a finished timeline in a desktop NLE and only need a color grade. Finish it there.
- You need frame-by-frame manual work on every cut. Vyra has a full timeline, but the point of typing is to hand off the bulk of it.

## FAQ

**Do I need to know editing terms?**
No. "Show the brushes while I talk about them" works as well as "J-cut." Use either.

**How does it know which take is best?**
It reads the transcript for restarts and stumbles and compares takes. You can override with "use the take around 2:10."

**What if it says it made a change and I cannot see it?**
Ask for the list of cuts with timestamps, or scrub the timeline. Verify, then correct with one instruction.

**Can I type from Claude or ChatGPT instead of the built-in chat?**
Yes. Over MCP the assistant gets the same editing tools and the same transcript and scene data.

## Related

- /ai-video-editor
- /prompts/rough-cut
- /features/footage-understanding
- /tools/remove-silence-from-video
