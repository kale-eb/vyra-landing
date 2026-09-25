---
title: Does scene detection work on poorly lit footage?
description: "Scene detection works on low-light footage as long as there is visible contrast. It degrades when the image is near-black, very noisy, or flickering."
updated: 2026-09-24
category: answers
---

**Yes, as long as there's visible contrast in the frame. Scene detection looks for changes in composition, color, and motion between frames, and a night street or a candle-lit room still has those. It degrades when the image is near-black, heavily noisy from a high ISO, or lit by one flickering source, because frame-to-frame differences turn into noise. Transcription doesn't care about light, so dialogue-driven edits still work when the picture analysis is weaker. (TODO: replace with Vyra's measured result on the night-vlog test set.)**

## Why

- A cut is a large sudden change between two frames. Low light lowers the difference, but a real cut is still much bigger than noise until the image is nearly black.
- High-ISO grain shifts every frame slightly, which can look like a scene change to a sensitive detector.
- Describing "a person holding a canvas" needs visible edges. In deep shadow it becomes "a dark interior with a figure."
- LED lights and screens flicker at a different rate than the camera, which reads as motion.
- The transcript comes from audio, so "find the part where I talk about the deadline" works no matter how dark the shot is.

## What to do about it

1. **Expose for the subject.** A face at proper exposure against a dark background detects fine.
2. **Lock exposure on the phone.** Auto-exposure hunting in low light creates fake scene changes.
3. **Use what light there is.** A street lamp, a lamp, a screen. One soft source beats none.
4. **Lean on the transcript.** For night vlogs, prompt by what was said.
5. **Check the analysis.** Ask the agent what it sees in the dark clips. If it's vague, give it the context yourself.

## Do it in Vyra

```
These clips were shot at night on a phone. Summarize what you can see in each one and flag any where the picture analysis is uncertain. For those, I'll tell you what's in them.
```

```
Build a 40-second night walk montage. Use the transcript to place the moments where I talk to camera, and fill between them with the best-lit exterior shots. Skip any clip that's mostly black.
```

## FAQ

**Will captions still work on dark footage?**
Yes. Captions come from audio.

**Can the editor brighten dark clips?**
It can apply exposure and contrast adjustments, but underexposed footage gains noise when lifted. Shoot as bright as you can.

**Does it detect scene changes in one long dark clip?**
It detects visible changes. If the whole clip is one dark room with no movement, there's nothing to detect.

## Related

- /features/footage-understanding
- /answers/can-ai-understand-raw-footage
- /how-to/light-a-talking-head
- /formats/vlog
