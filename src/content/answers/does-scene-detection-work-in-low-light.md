---
title: Does scene detection work on poorly lit footage?
description: Scene detection works on low-light footage as long as there is visible contrast; it degrades when the image is near-black, heavily noisy, or lit by a single flickering source.
updated: 2026-09-24
category: answers
---

**Yes, as long as there is visible contrast in the frame. Scene detection looks for changes in composition, color, and motion between frames, and a night street scene or a candle-lit room still has those. It degrades when the image is near-black, heavily noisy from a high ISO, or lit by a single flickering source, because frame-to-frame differences become noise instead of signal. Speech transcription is unaffected by light, so dialogue-driven edits still work even when the picture analysis is weaker. (TODO: replace with Vyra's measured result on the night-vlog test set.)**

## Why

- **Detection compares frames.** A cut is a large sudden change between two frames. Low light lowers the difference, but a real cut is still much larger than noise until the image is nearly black.
- **Noise looks like change.** High-ISO grain shifts every frame slightly, which can create false scene changes if the detector is too sensitive.
- **Object recognition needs shape.** Describing "a person holding a canvas" requires visible edges. In deep shadow, the description becomes "a dark interior with a figure."
- **Flicker confuses it.** LED lights and screens cycling at a different rate than the camera produce banding that reads as motion.
- **Speech is a separate track.** The transcript is built from audio, so "find the part where I talk about the deadline" works regardless of how dark the shot is.

## What to do about it

1. **Expose for the subject, not the scene.** A face at proper exposure against a dark background detects fine. A face underexposed with a bright window behind it does not.
2. **Lock exposure on the phone.** Auto-exposure hunting in low light creates fake scene changes.
3. **Use available practicals.** Street lamps, a lamp, a screen. A single soft source beats no source.
4. **Lean on the transcript.** For night vlogs, prompt by what was said and let the picture follow.
5. **Check the analysis.** Ask the agent what it sees in the dark clips. If descriptions are vague, give it the context yourself.

## Do it in Vyra

```
These clips were shot at night on a phone. Summarize what you can see in each one and flag any where the picture analysis is uncertain. For those, I will tell you what is in them.
```

```
Build a 40-second night walk montage. Use the transcript to place the moments where I talk to camera, and fill between them with the best-lit exterior shots. Skip any clip that is mostly black.
```

## FAQ

**Will captions still work on dark footage?**
Yes. Captions come from audio. Light has no effect.

**Can the editor brighten dark clips?**
It can apply exposure and contrast adjustments, within the limits of the source. Underexposed footage gains noise when lifted, so shoot as bright as you can.

**Does it detect scene changes in a single long dark clip?**
It detects visible changes. If the whole clip is one dark room with no movement, there is nothing to detect, which is the correct result.

## Related

- /features/footage-understanding
- /answers/can-ai-understand-raw-footage
- /how-to/light-a-talking-head
- /formats/vlog
