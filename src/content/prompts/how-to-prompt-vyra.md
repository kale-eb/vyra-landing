---
title: How to prompt an AI video editor (Vyra prompting 101)
description: >-
  A good Vyra prompt states the target (length, platform, purpose), what to keep
  and cut, how captions and music should behave, and whether to follow a
  reference. Descriptive beats technical.
updated: '2026-09-24'
category: prompts
level: beginner
reading_time: 6 min
---

**A good prompt tells the editor five things: what you are making, how long and for where, what to keep, what to cut, and how text and sound should behave. You do not need editor vocabulary. Plain, specific description works better than jargon.**

This guide exists because the most common question in user calls is some version of "how good do I have to be at prompting to get a good result?" The answer: not very, if you cover the five things below. One creator's successful first prompt was: "Take this 8-minute, 30-second raw video down to 60 seconds for social media. Use the best takes, cut the pauses and me checking my notes. Don't worry about captions or on-screen copy." That is the bar.

## What the agent already knows before you type

When you upload footage, Vyra transcribes every word with timestamps and analyzes every scene visually. So the agent can already:

- find any spoken phrase
- tell which take is cleanest
- see what is on screen (a product, a whiteboard, a street)
- detect pauses, retakes, and filler words

You do not have to describe your footage to it. You have to describe the outcome.

## The five-part prompt

| Part | What to say | Example |
| --- | --- | --- |
| 1. Target | Format, length, platform, purpose | "a 45-second Reel for my art account" |
| 2. Keep | The moments or takes that must survive | "keep the part where I explain the underpainting" |
| 3. Cut | What to remove | "cut pauses, retakes, and anything where I look at my notes" |
| 4. Text | Caption style or none | "word-by-word captions, bold, centered low" |
| 5. Sound | Music, ducking, original audio | "add upbeat lo-fi under it, keep my voice on top" |

Optional sixth part: a reference. "Match the pacing and caption style of the reference video I attached." The agent does not automatically apply a reference just because it is attached. Say so.

## Weak to strong

Weak: "Edit this."

Better: "Make a short version of this for TikTok."

Strong: "Cut this 6-minute studio vlog into a 40-second TikTok. Open on the shot where I pull the canvas out of the box, then jump to the three best painting moments. Cut all the talking except the line 'this is the part everyone skips'. Add 3-word captions in white, and put a calm piano track underneath at low volume."

Every extra sentence in the strong prompt removes a guess the agent would otherwise make.

## Iterate in small moves

After the first result, do not restart. Give one correction at a time:

- "Tighter. Lose another 10 seconds from the middle."
- "The caption at 0:12 is wrong, it should say 'gesso'."
- "Swap the intro clip for the one where I'm outside."
- "Make the title bigger and put it under my chin, not over my face."

One user found iteration slower than editing by hand. That happens when the corrections are vague ("make it better") or bundled ("fix the captions, change the music, and re-cut the middle"). One change per message keeps the agent accurate and lets you check each step.

## Verify, do not trust the summary

If the agent says it removed repetition, scrub the timeline or ask: "List every cut you made with timestamps." Users have caught the agent reporting a change it did not fully make. Asking for the list is faster than re-watching.

## When the result is off

| Symptom | Add to your next message |
| --- | --- |
| Too long | "Target is 45 seconds, not 70. Cut from the middle section first." |
| Wrong takes | "Use the take where I say X without stumbling. There is one around 2:10." |
| Captions look generic | "Match the caption style in the reference: blocky, all caps, with a drop shadow." |
| Music fights the voice | "Duck the music to about 20% whenever I am speaking." |
| Ignored the reference | "Look at the attached reference video and copy its pacing and text placement." |
| Too many effects | "Remove all zooms and transitions. Straight cuts only." |

## Prompts you can paste right now

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
Match the attached reference video: same cut rhythm, same caption font weight and placement, same kind of music energy. Use my footage only.
```

## FAQ

**Do I need to know editing terms like J-cut or punch-in?**
No. "Show the product while I'm still talking about it" works as well as "J-cut". Use editor terms if you know them; describe the effect if you do not.

**Should I write the prompt with ChatGPT first?**
You can, but the prompts that work best are short and specific to your footage. A long, generic "professional cinematic" prompt usually performs worse than five plain sentences about this video.

**Does the agent see the reference video automatically?**
It has access to it, but you should say what to take from it: pacing, captions, music, color, or all of it.

## Related

- /prompts/rough-cut
- /prompts/captions
- /prompts/reference-style
- /how-to/cut-a-talking-head
