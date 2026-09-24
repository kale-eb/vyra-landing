---
title: How accurate is AI speech transcription for captions?
description: Modern AI transcription is typically 95 to 98 percent word-accurate on clean single-speaker audio and drops to 85 to 92 percent with noise, accents, or crosstalk.
updated: 2026-09-24
category: answers
---

**Modern AI speech transcription is typically 95 to 98 percent word-accurate on clean, single-speaker audio recorded close to the mic, which means one or two wrong words per hundred. Accuracy typically drops to 85 to 92 percent with background noise, heavy accents, overlapping speakers, or a phone mic across the room. Names, brand terms, and technical jargon are the most common misses. (TODO: replace with Vyra's measured number from the 20-clip test.)**

## Why

- **Audio quality is the biggest factor.** A lav mic 15 cm from the mouth beats a phone across a kitchen. Distance and echo cost more accuracy than any model difference.
- **Vocabulary the model has not seen.** Product names, handles, and slang get replaced with the nearest common word. "Gesso" becomes "guess so."
- **Overlap.** Two people talking at once produces merged or dropped words.
- **Pace.** Very fast speech and mumbled endings lose word boundaries.
- **Timestamps versus words.** Even when words are right, caption timing can drift if the model groups phrases loosely. Word-level timestamps fix this.

## What to do about it

1. **Record closer.** Halving mic distance improves accuracy more than any setting.
2. **Kill the noise before you shoot.** Fans, traffic, music playing in the room.
3. **Tell the agent your vocabulary.** "My product is called Vyra, spelled V-Y-R-A. My handle is sulansart."
4. **Proofread names only.** Skim for capitalized words and numbers. That is where 80 percent of errors sit.
5. **Fix by pointing.** "At 0:12 the caption should say gesso" is faster than re-reading everything.

## Do it in Vyra

Vyra transcribes every word with word-level timestamps on upload. Captions are generated from that transcript.

```
Caption the whole video in 3-5 word phrases, bold white, lower third. Spellings to use: Vyra, sulansart, gesso, underpainting. Flag any word you were unsure about with a list of timestamps.
```

```
At 0:12 the caption should say "gesso" not "guess so". At 0:41 it should say "Vyra". Fix those and show me frames at both timestamps.
```

## FAQ

**Is 95 percent good enough for captions?**
For most social video, yes, after a 2-minute proofread of names and numbers. For legal or medical content, have a human review every line.

**Do accents lower accuracy?**
Somewhat. Clear audio matters more than accent. A well-recorded accented speaker transcribes better than a native speaker across a noisy room.

**Can I edit the transcript directly?**
Yes. Correct a caption in Vyra by telling the agent the timestamp and the right word, or edit the caption item on the timeline.

## Related

- /features/ai-captions
- /how-to/record-clean-audio
- /how-to/choose-captions
- /prompts/captions
