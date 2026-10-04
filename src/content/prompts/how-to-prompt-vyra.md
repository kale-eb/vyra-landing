---
title: How to prompt an AI video editor (Vyra prompting 101)
description: "A good Vyra prompt states the target (length, platform, purpose), what to keep and cut, how captions and music should behave, and whether to follow a reference."
updated: '2026-09-24'
category: prompts
level: beginner
reading_time: 6 min
reels:
  - DY4pVwtu3KD
  - DajEylHSiz8
---

**Tell it five things. What you're making, how long and for where, what to keep, what to cut, and how text and sound should behave. You don't need editor words. Plain and specific works better.**

People ask us "how good do I have to be at prompting?" Not very. One creator's first prompt was "Take this 8-minute raw video down to 60 seconds for social media. Use the best takes, cut the pauses and me checking my notes. Don't worry about captions." It worked first try.

## What the agent already knows

On upload, Vyra transcribes every word and looks at every scene. It can already find any line and see what's on screen. You don't describe your footage. You describe what you want out of it.

## The five parts

| Part | Say | Example |
| --- | --- | --- |
| Target | Format, length, platform | "a 45-second Reel for my art account" |
| Keep | What must survive | "keep the part where I explain the underpainting" |
| Cut | What to remove | "cut pauses, retakes, and me looking at notes" |
| Text | Caption style or none | "word-by-word captions, bold, centered low" |
| Sound | Music and levels | "lo-fi under it, my voice on top" |

If you attach a reference, say what to take from it. It won't apply a reference on its own.

## Weak to strong

Weak. "Edit this."

Better. "Make a short version of this for TikTok."

Strong. "Cut this 6-minute studio vlog into a 40-second TikTok. Open on the shot where I pull the canvas out of the box, then the three best painting moments. Cut all the talking except the line 'this is the part everyone skips'. Add 3-word captions in white and a calm piano track underneath at low volume."

## Fix one thing at a time

Don't start over after the first result. One correction per message. "Lose 10 seconds from the middle." "The caption at 0:12 should say gesso." Vague or bundled fixes are what make the back and forth slower than editing by hand.

## Check it

Ask "List every cut you made with timestamps." Users have caught the agent reporting a change it didn't fully make. The list is faster than re-watching.

## Paste these

Rough cut:
```
Cut this raw footage down to a 60-second vertical video for Reels. Keep the strongest takes, remove pauses, retakes, and filler words. No captions yet. Straight cuts only.
```

Captions:
```
Add captions to the whole video. Phrases of 3-5 words, bold white text, centered in the lower third, no animation. Keep them off my face.
```

Reference style:
```
Match the attached reference video. Same cut rhythm, same caption font weight and placement, same kind of music energy. Use my footage only.
```

## FAQ

**Do I need to know terms like J-cut?**
No. "Show the product while I'm still talking about it" works the same.

**Should I write the prompt with ChatGPT first?**
You can, but long generic prompts do worse than five plain sentences about your video.

## Related

- /prompts/rough-cut
- /prompts/captions
- /prompts/reference-style
- /how-to/cut-a-talking-head
