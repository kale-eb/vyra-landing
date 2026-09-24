---
title: How to connect ChatGPT to Vyra
description: Add Vyra's MCP server to ChatGPT as a connector so ChatGPT can inspect your footage, propose a cut, and drive the Vyra timeline from a chat.
updated: 2026-09-24
category: tutorial
video: TODO
---

**ChatGPT supports MCP connectors. Add Vyra's server, authorize it, and ChatGPT can list your projects, read the footage index, build a cut, add captions and music, and export. The prompt style is the same as in Vyra's own chat, plus you can ask for a plan first.**

## Before you start

- A Vyra account on an MCP plan (MCP Starter or MCP Pro).
- A ChatGPT plan that supports custom connectors or MCP servers.
- Your Vyra MCP server URL from your account settings. Full details at /docs/mcp.
- A project with indexed footage.

## Steps

1. **Open ChatGPT's connector settings.** In settings, find connectors or apps and choose to add a new one.
2. **Add the Vyra server.** Paste the MCP server URL from your Vyra account and save.
3. **Authorize.** Sign in to Vyra in the window that opens and approve access.
4. **Enable Vyra in a chat.** Start a new conversation and turn on the Vyra connector for it.
5. **Name the project and ask for a plan.** Have ChatGPT summarize the footage and propose a structure before it edits.
6. **Edit in steps.** Rough cut, captions, music, export. One message each.
7. **Verify.** Ask it to read the timeline back and to capture frames at a few timestamps.

## The prompt to use

```
Using the Vyra connector, open my project "launch video" and summarize the footage. Propose a 30-second hook-and-demo structure: me stating the problem, screen recording of the fix, me showing the result. Wait for my OK, then build it with phrase captions and a lo-fi track ducked under my voice.
```

## Check the result

- The summary references actual clips and spoken lines from your project.
- After the build, the timeline read-back matches what ChatGPT said it did.
- Frames at the captioned moments show text in the lower third and clear of your face.

## FAQ

**ChatGPT said it made the edit but the timeline is unchanged.**
Ask it to read the timeline back. External models sometimes narrate an intent as done. Then say: "That is not what the timeline shows. Do X now."

**Can I use both ChatGPT and Claude on the same project?**
Yes. The project is the same regardless of which assistant drives it.

## Related

- /docs/mcp
- /chatgpt
- /for/chatgpt-users
- /prompts/troubleshooting
