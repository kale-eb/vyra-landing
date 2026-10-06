---
title: How to connect Claude Desktop to Vyra
description: Add Vyra's MCP server to Claude Desktop so Claude can read your footage, plan an edit, and drive the timeline from a normal chat.
updated: 2026-09-24
category: tutorial
video: TODO
reels:
  - DZumPohtfW8
---

**Add the Vyra server to Claude Desktop, authorize it, open a project, and Claude can list assets, propose a cut, build the timeline, and capture frames to check its own work.**

## Before you start

- A Vyra account on an MCP plan (MCP Starter or MCP Pro).
- Claude Desktop installed, on a plan that supports connectors.
- At least one Vyra project with footage uploaded.
- The Vyra MCP server URL is `https://api.usevyra.com/mcp`. Details at /docs/mcp.

## Steps

1. **Open the config file.** macOS is `~/Library/Application Support/Claude/claude_desktop_config.json`. Windows is `%APPDATA%\Claude\claude_desktop_config.json`.
2. **Add the Vyra server and restart Claude Desktop.**

   ```json
   {
     "mcpServers": {
       "vyra": {
         "url": "https://api.usevyra.com/mcp"
       }
     }
   }
   ```

3. **Authorize.** The first time a session needs Vyra, Claude Desktop opens an OAuth URL in your browser. Sign in to Vyra and approve.
4. **Open a project in the browser.** Go to `https://app.usevyra.com`, sign in with the same account, open a project. The tab binds itself and a green indicator shows top-right. Keep at least one Vyra tab open.
5. **Start a chat and name the project**, or ask Claude to list them.
6. **Ask for a plan before an edit.** A footage summary and a structure with timestamps. Approve or correct it.
7. **Edit in steps.** Rough cut, captions, music. One message each.
8. **Verify with frames.** Ask Claude to capture frames at a few timestamps.

## The prompt to use

```
You're connected to my Vyra project "studio vlog sept". List the assets and summarize what is in the footage. Then propose a 45-second Reel structure with timestamps. Wait for my OK before editing anything.
```

## Check the result

- Claude's first reply names real clips from your project.
- After the edit, ask it to read the timeline back and compare to what it claimed.
- Capture frames at 0:03, 0:15, and 0:40 and check caption placement.

## FAQ

**Do I need to know Vyra's tool names?**
No. Describe the outcome. Claude picks the tools.

**Can I switch between Claude Desktop and the Vyra app?**
Yes. Same project.

## Related

- /docs/mcp
- /claude
- /prompts/using-claude-or-chatgpt-with-vyra
- /tutorials/connect-claude-code
