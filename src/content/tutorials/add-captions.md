---
title: How to add captions in Vyra
description: Caption a whole video from the transcript in one prompt by setting grouping (word-by-word or phrases), weight, color, position, and any emphasis words.
updated: 2026-09-24
category: tutorial
video: TODO
---

**Captions come from the transcript Vyra built on upload, so adding them is one prompt: choose word-by-word or phrases, set weight, color, and position, and name any words that should get emphasis. Fix wrong words by pointing at the timestamp.**

## Before you start

- The rough cut is done. Caption after the cut, not before, or the timing shifts.
- Decide the style: word-by-word (TikTok energy) or 3-5 word phrases (calmer, easier to read).
- Know where the platform UI sits. On TikTok and Reels the bottom 15 percent of the frame is covered by buttons and text.
- List any names or product terms with their correct spelling.

## Steps

1. **Pick grouping.** Word-by-word for fast talking heads, phrases for explanations and vlogs.
2. **Set the look.** Bold, white, thin outline or none. Vyra's default caption face is Inter Bold.
3. **Set the position.** Lower third for phrases, slightly above center for word-by-word so it clears the bottom UI.
4. **Give spellings.** Names, handles, and jargon the transcript might miss.
5. **Name emphasis words.** One or two lines that should get a larger treatment, if any.
6. **Run the prompt.** Then scrub to three random points and read the captions.
7. **Fix by timestamp.** "At 0:12 it should say gesso." Repeat until clean.

## The prompt to use

```
Add captions to the whole video. Group them into 3-5 word phrases, bold white text with a thin black outline, centered in the lower third, no animation. Keep them off my face. Spellings: Vyra, sulansart, gesso. Make the line "you are not charging enough" a single large caption on its own.
```

## Check the result

- Capture frames at three timestamps and confirm captions sit clear of your face and the bottom UI.
- Read every caption that contains a name or a number. That is where errors cluster.
- Check the emphasized line appears once, larger, and the ordinary captions return after it.

## FAQ

**Can I turn captions off for a section?**
Yes. "No captions from 0:40 to 0:48 during the b-roll."

**Can I copy the caption style from another video?**
Attach it as a reference and say what to copy: "blocky all caps, glow, drop shadow, two lines max."

## Related

- /prompts/captions
- /how-to/choose-captions
- /features/ai-captions
- /answers/how-accurate-is-ai-transcription-for-captions
