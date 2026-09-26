---
title: "Highlight reel maker: the best 30 seconds from hours of footage"
description: Vyra reads every clip's scene description and transcript, picks the most interesting moments by the rules you give, and cuts them to music.
updated: 2026-09-24
category: tools
facts:
  - "Best for: Event recaps, travel, sports, weddings, product launches, semester or year reviews"
  - "Input: Many clips, from a phone or a camera, plus an optional track"
  - "Output: MP4 up to 4K, or WebM up to 1080p"
  - "Time: Minutes after the clips are processed (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
reels:
  - DS9JDZ-DE0l
---

**A highlight reel squeezes a day or a season into the moments that carry it. Vyra picks those from its scene descriptions of every clip, using rules you give in plain words, then cuts them to a track.**

## How it works

1. Upload all the clips. Each one gets a description of what's happening.
2. State the rules. Length, how many moments, what to favor (faces, movement, wide shots), what to skip.
3. The agent shortlists moments, orders them, and cuts to the beat if you gave a track.
4. Look at the list of chosen moments and swap any you disagree with.
5. Add a title card if you want, then export.

## What you can control

| Setting | Options |
| --- | --- |
| Length | Any target, usually 20 to 60 seconds |
| Moment count | How many clips to include |
| Selection rules | Favor faces, motion, wide shots, specific people, specific places |
| Rhythm | Fast-slow-fast, steady, or beat-driven |
| Sound | Music, original ambience, or both with ducking |
| Ending | Land on a hit, hold a final shot, or a title card |

## Prompts to paste

```
Build a 30-second highlight reel from everything in this project. Pick the 8 to 10 most visually interesting moments, favor movement and faces over static shots, order them fast to slow to fast, and beat-sync to the attached track.
```

```
Only use clips from the beach and the dinner. Skip anything with the car interior. Start with the widest shot you can find.
```

```
Show me the list of moments you picked with timestamps before you cut.
```

## When to use something else

- You want a fully automatic reel with zero input. Some phone apps do that from your camera roll. The result is generic. Vyra wants at least a length and a rule.
- One long static shot. There's nothing to pick. Make it a timelapse instead.
- You need licensed music included. Bring your own track.

## FAQ

**How does it know what's interesting?**
Every clip is described on upload. The agent compares moments by what they show and how much variety they add, then applies your rules.

**Can I change one moment?**
Yes. "Swap the third clip for the one where the cake comes out."

**Can it use my voice from the clips?**
Yes. Keep original audio on the moments with speech and duck the music under them.

## Related

- /prompts/highlight-reel
- /prompts/travel-recap-highlight-reel
- /formats/travel-recap
- /tools/beat-sync-video-editor
