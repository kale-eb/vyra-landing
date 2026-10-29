# Vyra

> AI-controllable video editor via the Model Context Protocol (MCP). Your AI client opens projects, reads timelines, edits clips, applies effects, exports renders — using the same tools a human editor would.

The AI client (Claude Code, Claude Desktop, claude.ai, the Claude mobile app, ChatGPT, Codex, Cursor, or any MCP-compatible client) drives Vyra over MCP. Since October 2026 the server is headless: each agent gets its own editing container on Vyra's servers, so no browser tab needs to be open and the user's computer can be off. Agents can create projects, access the user's library, work on several projects at once, and generate voiceovers, images, sound effects, and music. Every project stays editable in the Vyra web and iPhone apps.

## MCP Server

- URL: `https://api.usevyra.com/mcp`
- Transport: Streamable HTTP (POST + optional GET SSE notification stream)
- Auth: OAuth 2.1 with PKCE — the client opens an authorization URL in the user's browser; the user signs into Vyra and approves the connection.

## Setting up an MCP client

The exact command differs by client. Here are the common ones:

### Claude Code (CLI)

```
claude mcp add --transport http Vyra https://api.usevyra.com/mcp
claude mcp login Vyra
```

`claude mcp login Vyra` opens the OAuth authorization URL in the user's browser. Inside a Claude Code session, `/mcp` → Vyra → Authenticate does the same. Keep `--transport http`: without it, Claude Code treats the URL as a stdio command. The server is added for the current project by default; add `--scope user` to make it available in every project.

### Claude Desktop and claude.ai

Remote servers are added as a custom connector in the user's Claude account, not in `claude_desktop_config.json`. The same connector works in Claude Desktop and claude.ai.

1. Go to Customize → Connectors.
2. Click "+ Add", then "Add custom connector".
3. Enter the name `Vyra` and the URL `https://api.usevyra.com/mcp`, then click "Continue".
4. Review the detected sign-in and click "Continue".
5. Under Authentication, choose "Sign in now", then click "Add". The user signs into Vyra and approves the connection.

To use it in a conversation: click "+" in the chat input → Connectors → toggle Vyra on.

On Team and Enterprise plans, an Owner adds the connector first in Organization settings → Connectors; members then find it in Customize → Connectors and click "Connect". Free plans allow one custom connector.

### OpenAI Codex (CLI, IDE extension, ChatGPT desktop app)

```
codex mcp add vyra --url https://api.usevyra.com/mcp
codex mcp login vyra
```

`codex mcp login vyra` opens the OAuth flow in the user's browser. Or add it to `~/.codex/config.toml` by hand:

```toml
[mcp_servers.vyra]
url = "https://api.usevyra.com/mcp"
```

In the ChatGPT desktop app: Settings → MCP servers → Add server. Enter the name `vyra`, choose Streamable HTTP, enter the URL, and save. Click Restart, then Authenticate on the vyra row. The desktop app, Codex CLI, and IDE extension share this configuration.

### ChatGPT (web)

ChatGPT on the web adds remote MCP servers as plugins; it doesn't read the Codex config.

1. Go to Plugins (`https://chatgpt.com/plugins`), click the plus button, then "Add custom MCP server".
2. Enter the name `Vyra` and, under Connection, the Server URL `https://api.usevyra.com/mcp`.
3. Set authentication to OAuth.
4. Select "I understand and want to continue", then "Create as a plugin".
5. Install the plugin and sign in to Vyra when prompted.

To use it in a conversation, type `@` in the prompt box and select Vyra. Workspace permissions apply to adding custom MCP servers.

### Cursor

Add the server to `.cursor/mcp.json` in the project (or `~/.cursor/mcp.json` for every project):

```json
{
  "mcpServers": {
    "Vyra": {
      "url": "https://api.usevyra.com/mcp"
    }
  }
}
```

Open Customize in Cursor's sidebar, make sure Vyra is turned on, and complete the OAuth sign-in in the browser when Cursor asks.

### Generic MCP client

Any client that implements the Streamable HTTP transport and OAuth 2.1 + PKCE can connect:

- Server URL: `https://api.usevyra.com/mcp`
- The OAuth metadata is at `https://api.usevyra.com/.well-known/oauth-authorization-server`
- After auth, POST JSON-RPC requests to the server URL. GET the same URL for a server-pushed notification SSE stream (optional).

## After setup

Once the client is authorized:

1. Ask the AI to list the user's projects or create a new one. No browser tab is required.
2. Ask the AI to do anything an editor would — "trim the dead air", "add captions in TikTok style", "color grade like a moody film", "export this in 1080p". The AI uses Vyra's MCP tools to make the changes on Vyra's servers.
3. The user can open the project in the Vyra web or iPhone app at any time to review or edit by hand.

If an agent still asks for a browser tab, it has the old tool list: refresh the tools, reconnect the Vyra connector, start a new session, and reload the AI app.

## Available tools (summary)

- View / search project assets, view timeline, view individual item details
- Add media, text, shapes, layouts, motion graphics, captions
- Edit visual / timing properties, move / split / clone / delete items
- Color grading, effects (WebGL + CSS), masking, transitions, keyframes
- Export the project to MP4 / WebM; poll export status
- Browse / apply templates, styles, presets
- Reference videos for stylistic inspiration

The full tool catalog is exposed via the standard MCP `tools/list` method. Each tool has a description and JSON-schema input.

## Help

If you get stuck: `searchHelpDocs(query)` searches the user-facing help library inside the MCP server.
