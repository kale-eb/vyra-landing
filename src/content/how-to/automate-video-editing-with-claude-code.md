---
title: How to automate video editing with Claude Code
description: >-
  Connect Claude Code to Vyra over MCP, save your edit as one prompt, and run
  it on a whole folder of raw clips. Cuts, captions, music, and 9:16 exports
  for every video, from your real footage.
updated: '2026-10-30'
category: how-to
level: intermediate
reading_time: 4
example: 'https://www.instagram.com/sulansart'
reels:
  - DaAb0QFNvk0
  - DZumPohtfW8
---

**To automate video editing with Claude Code, connect it to Vyra over MCP and give it the edit you make every week as one prompt. Claude uploads each clip in a folder, Vyra transcribes it and describes every scene, and Claude cuts the pauses, adds captions and music, and exports a 9:16 MP4 for each video. Save the prompt as a slash command and the whole pipeline is one line.**

Most of my TikToks are the same edit with different footage. Hook first, cut the pauses, captions, a song under it, export vertical. That is the part worth automating. The creative calls, like which take is funnier, stay with you.

## What you can automate

| Step | What Claude does in Vyra |
| --- | --- |
| Import | Uploads every video in the folder and makes one project per video |
| Find the good parts | Reads the transcript and scene descriptions, keeps the last clean take of each line |
| Cut | Removes pauses, filler, and retakes |
| Captions | Adds captions from the speech in one style across every video |
| Music | Adds a track under your voice at the volume you set |
| Export | Renders each project as an MP4 at 720p up to 4K |

## Set it up

1. Install [Claude Code](https://claude.com/claude-code) if you don't have it.
2. Add Vyra with `claude mcp add --transport http Vyra https://api.usevyra.com/mcp`.
3. Run `claude mcp login Vyra` and sign in to your Vyra account.
4. Open Claude Code in the folder with your raw clips and ask "Use Vyra. List my projects." to check the connection.

Full setup with screenshots is in [connect Claude Code](/tutorials/connect-claude-code).

## Run it on a folder

Paste this with your own rules. One video file per finished video.

```
Use Vyra. For every video file in this folder, make a 1080x1920 project named after the file and upload the video. When it's ready, make it a 30 to 45 second TikTok. Open on the strongest line I say, cut pauses over 0.4 seconds, filler words, and retakes, and keep the last clean take of each line. Add word-by-word captions, bold white, three words max, slightly above center. Put a lo-fi track under it at 20% volume. Export each one as a 1080p MP4. Work through them one at a time and give me the download links at the end.
```

Check the first one before it does the rest. If the captions are too big or the open is wrong, say it once and Claude carries the fix to every video after it.

## Make it one command

Claude Code runs any prompt you save in `.claude/commands/` as a slash command. Save the prompt above as `.claude/commands/tiktok-batch.md`, then every editing day is one line in the folder you filmed into.

```
/tiktok-batch
```

Keep one command per format. A talking head, a process video, and a compilation each get their own.

## Templates or your own footage

Tools like Creatomate and Shotstack automate video by filling a template with text and images through an API, which suits ads and product videos made from data. Make, Zapier, and n8n connect apps so a new file can trigger the next step. Vyra edits the footage you filmed. It watches every clip, so Claude can find "the part where I hold up the finished painting" and cut around it, and every result opens as a normal project you can fix by hand.

## Common mistakes

- Running all 50 before checking one. Check the first video, then let it go.
- One giant prompt for every format. Save a separate command per format.
- Pre-trimming clips. Upload them raw. Vyra finds the takes from the transcript.
- Closing the laptop mid-run. Claude Code runs on your computer, so it needs to stay on while it uploads and works through the folder. Exports render on Vyra's servers.

## FAQ

**Do I have to keep the Vyra tab open?**
No. Each agent gets its own editing container on Vyra's servers, so no browser tab is needed.

**Can it do several videos at the same time?**
Yes. One or several agent sessions can work on different projects at once.

**Can I do this from ChatGPT or the Claude app instead?**
Yes, for videos already in your Vyra library. Only command-line clients like Claude Code, Codex CLI, and Cursor can send files from a folder on your computer.

**Can it post to TikTok for me?**
No. Vyra exports the MP4s. Post them from TikTok or a scheduler.

**What does it cost?**
Vyra has a 3-day free trial on the web, then MCP plans from $24 a month. You use your own Claude subscription for Claude Code.

## Related

- /tools/batch-caption-videos
- /answers/how-to-automate-a-tiktok-editing-workflow
- /tutorials/connect-claude-code
- /mcp
- /how-to/batch-film-a-week
