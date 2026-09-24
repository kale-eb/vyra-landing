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
- A ChatGPT plan that supports custom connectors or MCP servers. The ChatGPT desktop path uses the Codex-compatible MCP config.
- The Vyra MCP server URL: `https://api.usevyra.com/mcp`. Full details at /docs/mcp.
- A project with indexed footage.

## Steps

1. **Open the Codex MCP config.** ChatGPT's desktop path and other Codex-compatible clients read the same config.
2. **Add the Vyra server and restart.**

   ```toml
   [mcp_servers.vyra]
   url = "https://api.usevyra.com/mcp"
   ```

3. **Authorize.** On first use the OAuth 2.1 flow opens in your browser. Sign in to Vyra and approve access.
4. **Open a project in the browser.** Go to `https://app.usevyra.com`, sign in with the same account you authorized, and open a project. The tab auto-binds as the editor's dispatch target and a green indicator appears top-right. Keep at least one Vyra tab open.
5. **Enable Vyra in a chat.** Start a new conversation and make sure the Vyra tools are available to it.
6. **Name the project and ask for a plan.** Have ChatGPT summarize the footage and propose a structure before it edits.
7. **Edit in steps.** Rough cut, captions, music, export. One message each.
8. **Verify.** Ask it to read the timeline back and to capture frames at a few timestamps.

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
