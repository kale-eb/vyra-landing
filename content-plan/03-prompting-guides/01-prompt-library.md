# Prompt library (drafts for /prompts/{task})

Each entry below becomes one page. Page structure: task definition, "what the agent needs to know", prompts from minimal to full, "what each part does", fixes, FAQ, related. Prompts are written the way successful users actually phrase them: descriptive, concrete, not editor-speak.

---

## /prompts/rough-cut

**A rough cut prompt tells Vyra the target length and platform, which takes to prefer, and what to strip out. Everything else can wait for a second pass.**

Minimal:
```
Cut this down to about 60 seconds for social. Best takes only.
```

Standard:
```
Take this 8-minute raw video down to 60 seconds for Instagram. Use the best takes of each point, cut pauses, stumbles, retakes, and any moment I look at my notes. Keep it in the order I filmed it. No captions or on-screen text yet.
```

Full:
```
Make a 60-second vertical rough cut for Reels from this footage. Structure: open on the line "nobody tells you this about commissions", then the three main points in order, then end on the shot where I hold up the finished piece. Prefer takes where I sound confident and do not restart a sentence. Remove pauses longer than half a second. Straight cuts only, no zooms or transitions. Leave captions and music for later.
```

What each part does: the opening line pins the hook; "in order" prevents restructuring; "prefer takes where" gives a selection rule; "pauses longer than half a second" sets a threshold; "straight cuts only" stops the agent decorating.

Fixes: too long, say which section to shorten; wrong opening, quote the exact line you want first; too choppy, "allow pauses up to one second".

---

## /prompts/captions

**A caption prompt sets grouping (word-by-word or phrases), font weight, color, position, and whether any words get emphasis.**

Minimal:
```
Add captions to the whole video.
```

Standard:
```
Add captions for all speech. Group them into 3-5 word phrases, bold white text with a thin black outline, centered in the lower third. No pop or bounce animation.
```

Full:
```
Caption the whole video word by word, TikTok style: each word appears as it is spoken, bold sans-serif, white, slightly above center so it clears the bottom UI. When I say "eighty percent" and "never again", make those words bigger and yellow. Turn captions off during the 5 seconds of b-roll at the end.
```

Style-copy variant (from a user who asked for "nice and blocky with glow and drop shadow" and did not get it the first time):
```
Copy the caption style from the reference video exactly: blocky all-caps font, soft glow, hard drop shadow, two lines max. Apply that to my whole video.
```

Fixes: captions over face, "move captions to the lower third"; wrong words, "at 0:12 the caption should say 'gesso', fix that"; too many words per screen, "max 3 words per caption".

---

## /prompts/reference-style

**A reference prompt names which properties to copy from the attached video: pacing, captions, music energy, color, text placement. Attaching a reference is not enough on its own.**

Minimal:
```
Match the reference video.
```

Standard:
```
Look at the attached reference. Copy its cut rhythm, caption style, and where the text sits on screen. Use only my footage.
```

Full:
```
Use the attached reference as the style guide. Match: the pace of cuts (roughly one every 1-2 seconds in the intro, slower in the middle), the caption font weight and placement, the way music drops out when the speaker makes a point, and the warm color grade. Do not match: its length or its content. My video should be 45 seconds and about my studio setup.
```

When two instructions conflict (a user asked whether their editing-style prompt "overrode" the reference): say which wins. "Where my instructions and the reference disagree, follow my instructions."

---

## /prompts/b-roll

**A b-roll prompt says what to cover, when, and how long the overlay should stay before returning to the speaker.**

Standard:
```
While I'm talking about the brush set, cut to the close-up footage of the brushes for 2-3 seconds, then come back to me. Do the same for the palette and the easel when I mention them.
```

Overlay-with-screen variant (from a user who wanted a ChatGPT UI shown while talking about a prompt):
```
When I talk about writing the prompt, show the screen recording of the chat UI as a picture-in-picture in the top right, about a third of the frame, for as long as I'm on that topic.
```

---

## /prompts/talking-head-cleanup

**A cleanup prompt removes filler, pauses, and retakes while keeping the delivery natural.**

Standard:
```
Clean up this talking head. Remove ums, uhs, long pauses, and any sentence I restart. Keep the best version of each sentence. Keep small natural pauses so it does not feel robotic.
```

Full:
```
Tighten this to a crisp talking head. Cut every pause over 0.4 seconds, every filler word, and every retake (keep the last attempt of each line unless an earlier one is clearly better). Where a cut is jarring, punch in 10% on the second clip instead of a jump cut. Do not touch the section from 1:20 to 1:35, that pause is intentional.
```

Verify: "List every cut you made with timestamps." Users have reported the agent claiming a cleanup it did not fully do. The list makes it checkable in 10 seconds.

---

## /prompts/beat-sync

```
Cut this montage to the beat of the attached track. One clip per beat in the chorus, one clip every two beats in the verses. Start on the first downbeat. End on the last hit, then hold the final shot for 1 second.
```

---

## /prompts/motion-graphics

```
When I list the three tools, animate the three names on screen one at a time as I say them, stacked on the left side, bold Montserrat, white on a dark bar. Keep them all on screen until I finish the list, then clear them together.
```

```
Add a lower third with my name and "@sulansart" for the first 4 seconds. Simple slide in from the left, small, bottom left corner.
```

---

## /prompts/reframe-to-vertical

```
This is 16:9. Make a 9:16 version that keeps me centered in frame the whole time. When the screen recording is showing, crop to the part of the screen I'm pointing at instead of the whole thing.
```

---

## /prompts/highlight-reel

```
Build a 30-second highlight reel from all the clips in this project. Pick the 8-10 most visually interesting moments, favor movement and faces over static shots, and order them fast to slow to fast. Beat-sync to the attached track.
```

---

## /prompts/remove-filler

```
Remove every "um", "uh", "like" used as filler, and "you know". Do not remove "like" when I mean it. Close the gaps so it sounds continuous.
```

---

## /prompts/add-music

```
Add a calm lo-fi track under the whole video. Music at about 25% whenever I'm speaking, up to 70% during the b-roll sections. Fade out over the last 2 seconds.
```

---

## /prompts/export-for-platform

```
Export a 9:16 version at 1080x1920 for TikTok, and a 1:1 version for the Instagram grid where you keep my face centered. Both at high quality.
```

---

## Cross-cutting rules to print on every prompt page

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.
