---
title: "UGC hook and demo prompts: hook, problem, demo, result in 30 seconds"
description: "A UGC hook and demo prompt gives Vyra the four beats in order, the exact hook line, the demo footage to use, and the length, so the ad reads as a person showing a thing, not a commercial."
updated: '2026-09-24'
category: prompts
---

**A UGC hook and demo prompt gives Vyra four beats in order (hook, problem, demo, result), the exact hook line, which footage is the demo, and the target length. UGC works because it looks like a person, not a brand; the prompt keeps it that way by banning the things that make it look produced.**

Minimal:
```
Cut this into a 30-second UGC-style ad: hook, the problem, me showing the product, the result.
```

Standard:
```
Make a 30-second vertical UGC ad from this footage. Structure: open on the line "I edited this whole video by typing", then 5 seconds of me explaining the problem (editing takes hours), then 15 seconds of the screen recording where I type the prompt and the edit appears, then end on my face saying "that's it." Keep it handheld and unpolished. No music, no transitions, no logo.
```

Full:
```
Build a 30-second 9:16 UGC hook and demo from this footage. Beat 1, 0 to 2 seconds: my face, the line "editors, are we cooked?" as the hook, text on screen matching the words. Beat 2, 2 to 8 seconds: the problem, use the take where I say "I used to spend four hours on a two-minute video" and cut the rest. Beat 3, 8 to 24 seconds: the demo, the screen recording of typing the prompt and the timeline filling in, as a full-screen insert with my voice continuing over it; speed up any part of the recording where nothing changes for more than 2 seconds. Beat 4, 24 to 30 seconds: back to my face for "that's it, that's the whole edit," then a 1-second hold. Phrase captions throughout, white, lower third. No music, no zooms, no brand logo, no end card. It should look like I filmed it on my phone, because I did.
```

## What each part does

Timestamped beats are the whole prompt; UGC lives or dies on structure. The quoted hook line and the quoted problem line remove take selection from the agent's hands. "Full-screen insert with my voice continuing" is the demo mechanic that keeps the human present. "Speed up any part where nothing changes for more than 2 seconds" fixes the dead air every screen recording has. The ban list at the end is what keeps it UGC instead of an ad.

## Fixes

- Looks like a commercial: "Remove the music and the transition. Restore the handheld take for the opening."
- Demo too long: "Cut the demo to 12 seconds. Keep the moment the timeline fills in."
- Hook is slow: "Start on the word 'editors', cut everything before it."
- Screen recording is unreadable: "Crop the recording to the chat panel and the timeline. Drop the rest of the UI."
- Ends without a point: "End on the line 'that's the whole edit' and hold my face for 1 second after."

## FAQ

**Should the demo be picture-in-picture or full screen?**
Full screen for a product that lives on a screen; keep the voice going so the person is still there. Picture-in-picture only if the reaction on your face is part of the demo.

**How long should the hook be?**
Under 2 seconds. One line, ideally the first three words already state the tension.

**Can Vyra write the hook?**
It can suggest lines from your transcript, but the strongest UGC hooks are the ones you said on camera. Ask it to list your top five candidate lines and pick one.

## Related

- /formats/ugc-hook-and-demo
- /how-to/write-a-hook
- /prompts/product-demo-b-roll
- /for/marketers

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
