---
title: "Podcast clip caption prompts"
description: "A podcast caption prompt sets the caption style, tells Vyra how to handle two speakers, and names the one line that should get a bigger treatment."
updated: '2026-09-24'
category: prompts
---

**A podcast caption prompt sets the style (word-by-word or phrases), tells Vyra how to handle two speakers, and names the one line that deserves a bigger treatment. Podcast clips are watched with sound off more than any other format, so the captions are the clip.**

Minimal:
```
Add captions to this clip. Phrases, white, bold, lower third.
```

Standard:
```
Caption the whole 45-second clip in 3 to 5 word phrases, bold white with a thin dark outline, centered in the lower third. When the speaker changes, start a new caption on the first word of the new speaker so lines never mix two people. Keep captions clear of both faces.
```

Full:
```
Caption this clip word by word, TikTok style, bold sans-serif, white, sitting just above the bottom safe zone. Never let a caption group span two speakers; break at every speaker change. When she says "nobody is going to read your newsletter", make those words larger, one word per beat, and drop the ordinary captions for that sentence, then resume. Add a small name label in the bottom left corner for the first 3 seconds each person is on screen: "Sulan" and "Caleb". No emojis, no pop animation.
```

## What each part does

"Break at every speaker change" is the rule that keeps captions readable in a conversation; without it, the agent groups by timing and ends up mixing two voices in one line. The bigger treatment for one quoted line is where the clip earns its stop. "Drop the ordinary captions for that sentence, then resume" prevents a double caption. Name labels solve the "who is this" problem for viewers who found the clip cold. "No emojis, no pop animation" saves a correction round.

## Fixes

- Two speakers in one caption: "Split every caption at the speaker change, even mid-sentence."
- Captions over a face: "Move captions to the lower third and shrink them 20%."
- Wrong word: "At 0:18 the caption should read 'newsletter', not 'newsletters'."
- Too many words on screen: "Max 4 words per caption."
- The emphasis line is not landing: "Make the emphasis words 2x the size and yellow, and hold them on screen until she finishes the sentence."

## FAQ

**Word-by-word or phrases for podcast clips?**
Phrases for calm conversation, word-by-word for punchy claims. If you are not sure, phrases. They are easier to read when two people trade lines quickly.

**Should I show speaker names?**
Yes, briefly, the first time each person appears. It answers the question a cold viewer has in the first two seconds.

**Can I copy a caption style from another podcast's clips?**
Attach one as a reference and say what to copy: "match the font weight, position, and the way they highlight key words."

## Related

- /prompts/podcast-clip-selection
- /prompts/captions
- /how-to/choose-captions
- /formats/podcast-clip

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
