---
title: "Edit video by typing what you want"
description: In Vyra you type the edit in plain words. An agent that has already transcribed every word and looked at every scene does it on a real timeline.
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

**You type what you want in your own words and get a cut on the timeline. The agent has the transcript and a description of every scene, so "open on the shot where I hold up the canvas" and "cut every pause over half a second" both work.**

## How it works

1. Upload footage. Vyra transcribes it and looks at every scene.
2. Type what you're making. Length, platform, what to keep, what to cut, captions, music.
3. The agent builds the edit. Transcript for the lines, scene descriptions for the shots.
4. Fix one thing at a time. "Tighter." "Swap the intro clip." "Move the title under my chin."
5. Open the timeline for anything manual. Export.

## What you can control

| Setting | Options |
| --- | --- |
| Selection | Best takes, a line you quote, a shot you describe |
| Cuts | Pause threshold, filler removal, retakes, straight cuts or transitions |
| Structure | Your order, hook first, chronological, or whatever you describe |
| Text | Caption style, titles, lower thirds, emphasis words |
| Sound | Music, ducking, sound effects, original audio |
| Look | Effects (Color, Stylize, Distort, Generate), reference style matching |
| Templates | Short Talking Head, Long Podcast, or Vlog, plus a style like Cinematic Film or Vyra Default |

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

- You want footage you didn't shoot. Vyra edits real footage only. Runway makes new clips.
- You already have a finished timeline in a desktop editor and just need a grade. Finish it there.
- You want to do every cut by hand. Vyra has a timeline, but the point of typing is handing off the bulk of it.

## FAQ

**Do I need to know editing terms?**
No. "Show the brushes while I talk about them" works as well as "J-cut."

**How does it pick the best take?**
It reads the transcript for restarts and stumbles. You can override with "use the take around 2:10."

**It says it made a change but I can't see it. Now what?**
Ask for the list of cuts with timestamps, or scrub the timeline.

## Related

- /ai-video-editor
- /prompts/rough-cut
- /features/footage-understanding
- /tools/remove-silence-from-video
