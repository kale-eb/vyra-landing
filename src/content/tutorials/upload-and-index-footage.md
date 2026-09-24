---
title: How to upload and index footage in Vyra
description: Upload raw clips to a Vyra project and let it transcribe every word, analyze every scene, and generate thumbnails so the agent can search and cut your footage.
updated: 2026-09-24
category: tutorial
video: TODO
---

**Upload everything from the shoot into one project. Vyra transcribes all speech with timestamps, analyzes every scene visually, and generates thumbnails, so by the time you type your first prompt the agent already knows what is in each clip.**

## Before you start

- Keep the original files from your phone or camera. Do not pre-trim or re-encode.
- Put one shoot or one video idea in one project. Mixing unrelated footage makes selection worse.
- Have your reference video ready if you plan to match a style; it is attached separately from footage.
- On a slow connection, upload the longest clips first.

## Steps

1. **Create a project.** From the dashboard, choose New project and give it a name you will recognize later, such as "studio vlog sept 24".
2. **Drag your clips into the footage library.** The library tab sits next to the agent chat. Drop all files at once; MP4, MOV, HEVC, H.264, and ProRes are accepted.
3. **Wait for processing.** Each clip shows an upload status and then a processing status. Processing transcribes speech, describes scenes, and builds thumbnails. A 35-minute file finished in under 2 minutes in a test (TODO verify current timing).
4. **Open a clip in the library.** Read the summary Vyra wrote and scrub the thumbnails. This is what the agent sees.
5. **Ask for a map.** In the agent chat, ask it to summarize the footage before you edit anything. Correct anything it got wrong, such as who is who.
6. **Attach a reference, if you have one.** Add it in the reference area, not the footage library, so the agent does not put it on the timeline.

## The prompt to use

```
Summarize what is in my footage: how many clips, where they were shot, who is in them, which ones have me talking to camera, and the three strongest moments with timestamps. Do not edit anything yet.
```

## Check the result

- Every clip shows a ready status and a thumbnail strip.
- The summary names the right people, places, and topics. Fix names now so captions spell them correctly later.
- Search the library by content, such as "canvas" or "night street", and confirm the right clips come back.

## FAQ

**Can I add more footage later?**
Yes. New clips are processed the same way and become searchable as soon as they finish.

**Does silent b-roll get analyzed?**
Yes. Scene analysis runs on the picture. Transcription is skipped for clips with no speech.

## Related

- /tutorials/first-rough-cut
- /features/footage-understanding
- /answers/can-ai-understand-raw-footage
- /docs/first-project
