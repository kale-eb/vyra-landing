---
title: How accurate is AI speech transcription for captions?
description: "Modern AI transcription is typically 95 to 98 percent accurate on clean single-speaker audio and 85 to 92 percent with noise, accents, or crosstalk."
updated: 2026-09-24
category: answers
---

**Modern AI transcription is typically 95 to 98 percent word-accurate on clean, single-speaker audio recorded close to the mic. That's one or two wrong words per hundred. It typically drops to 85 to 92 percent with background noise, heavy accents, overlapping speakers, or a phone mic across the room. Names, brand terms, and jargon are the most common misses. (TODO: replace with Vyra's measured number from the 20-clip test.)**

## Why

- Audio quality is the biggest factor. A lav mic 15 cm from the mouth beats a phone across a kitchen.
- Words the model hasn't seen get replaced with the nearest common word. "Gesso" becomes "guess so."
- Two people talking at once produces merged or dropped words.
- Very fast speech and mumbled endings lose word boundaries.
- Even when the words are right, caption timing can drift if phrases are grouped loosely. Word-level timestamps fix this.

## What to do about it

1. **Record closer.** Halving mic distance helps more than any setting.
2. **Kill the noise before you shoot.** Fans, traffic, music in the room.
3. **Tell the agent your vocabulary.** "My product is called Vyra, spelled V-Y-R-A."
4. **Proofread names and numbers only.** That's where most errors are.
5. **Fix by pointing.** "At 0:12 the caption should say gesso."

## Do it in Vyra

Vyra transcribes every word with word-level timestamps on upload. Captions come from that transcript.

```
Caption the whole video in 3-5 word phrases, bold white, lower third. Spellings to use are Vyra, sulansart, gesso, underpainting. Flag any word you were unsure about with a list of timestamps.
```

```
At 0:12 the caption should say "gesso" not "guess so". At 0:41 it should say "Vyra". Fix those and show me frames at both timestamps.
```

## FAQ

**Is 95 percent good enough?**
For most social video, yes, after a 2-minute proofread of names and numbers. For legal or medical content, have a person review every line.

**Do accents lower accuracy?**
Somewhat. Clear audio matters more. A well-recorded accented speaker transcribes better than a native speaker across a noisy room.

**Can I edit the transcript directly?**
Yes. Tell the agent the timestamp and the right word, or edit the caption on the timeline.

## Related

- /features/ai-captions
- /how-to/record-clean-audio
- /how-to/choose-captions
- /prompts/captions
