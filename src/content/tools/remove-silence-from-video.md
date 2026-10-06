---
title: "Remove silence, pauses, and filler words from a video"
description: Vyra finds pauses, ums, and repeated takes in the transcript and cuts them at a threshold you set. Small breaths stay so it still sounds like you.
updated: 2026-09-24
category: tools
facts:
  - "Best for: Talking head, tutorial, podcast, and course recordings"
  - "Input: Any video with speech"
  - "Output: MP4 up to 4K, or WebM up to 1080p"
  - "Time: Minutes for a 10-minute recording once processed (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
reels:
  - DM6RiJPJtYf
---

**Cut the dead air, the ums, and the false starts so the recording sounds like the version you meant to say. Vyra does it from the transcript with a pause threshold you pick, and keeps the small breaths.**

## How it works

1. Upload the recording. Transcription runs on its own.
2. Tell the chat what to remove. Pauses over a threshold, filler words, retakes, or all three.
3. The agent cuts those parts and closes the gaps.
4. Ask for a list of cuts with timestamps and check any you're unsure about.
5. Hide rough jump cuts with a punch-in or b-roll if you want, then export.

## What you can control

| Setting | Options |
| --- | --- |
| Pause threshold | Any value. 0.3, 0.5, 1 second |
| Filler words | um, uh, like, you know, or your own list |
| Retakes | Keep the last attempt, the first, or one you name |
| Protected regions | Timestamps it must not touch |
| Cut treatment | Jump cut, punch-in on the second clip, or cover with b-roll |
| Range | Whole recording or a section |

## Prompts to paste

```
Clean up this talking head. Remove ums, uhs, pauses longer than half a second, and any sentence I restart. Keep the best version of each sentence. Leave small natural pauses so it doesn't feel robotic.
```

```
Cut every pause over 0.4 seconds. Where a cut is jarring, punch in 10 percent on the second clip instead of a jump cut. Don't touch 1:20 to 1:35, that pause is on purpose.
```

```
Remove "like" only when it's filler, not when I mean it. Then list every cut with timestamps.
```

## When to use something else

- You need the cleanup inside Premiere, Final Cut, or Resolve. Gling and similar plugins hand off to those.
- The recording is mostly music or ambient sound. This is a speech tool.
- Two people talking over each other the whole time. Separate the tracks first.

## FAQ

**Will it make me sound choppy?**
Not if you pick a sensible threshold and ask it to keep natural pauses. Half a second is a good start.

**How do I check what it removed?**
Ask for the list of cuts with timestamps. Takes ten seconds to compare.

**Can it remove one specific repeated line?**
Yes. Quote it. "Remove the repeated 'so basically' at 2:14."

## Related

- /prompts/talking-head-cleanup
- /prompts/remove-filler
- /how-to/cut-a-talking-head
- /tools/edit-video-by-typing
