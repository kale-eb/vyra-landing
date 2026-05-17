export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "What is Vyra?",
    answer:
      "Vyra is the AI video editor for agents. It's a full timeline-based editor that AI assistants like Claude, ChatGPT, Codex, and any MCP-compatible client control directly through the Model Context Protocol (MCP). You describe the edit in natural language and the agent handles cuts, captions, motion graphics, effects, and exports using your real footage.",
  },
  {
    question: "What is MCP?",
    answer:
      "MCP (Model Context Protocol) is an open standard from Anthropic that lets AI assistants connect to external tools and applications. Vyra ships an MCP server, which means Claude, ChatGPT, Codex, or any compatible client can plug into the Vyra editor and operate it as a first-class agent tool — viewing the timeline, adding media, applying effects, and exporting video.",
  },
  {
    question: "Which AI clients work with Vyra?",
    answer:
      "Any MCP-compatible client works with Vyra. We officially support Claude (Anthropic), ChatGPT (OpenAI), Claude Code, Codex, and Cursor. If your client supports MCP, it can control Vyra.",
  },
  {
    question: "Do I need editing experience?",
    answer:
      "No. The agent handles the technical work — cuts, captions, effects, motion graphics, exports. Most users go from upload to finished export in under five minutes by describing what they want in plain English. The full timeline editor is always there if you want fine-grained control.",
  },
  {
    question: "How is Vyra different from other AI video tools?",
    answer:
      "Most AI video tools generate synthetic content from prompts. Vyra is the AI video editor for agents — a real timeline editor that AI assistants operate on your actual footage. Vyra understands what's in your clips (scenes, speech, objects, people) and the agent makes editing decisions based on real content, not templates.",
  },
  {
    question: "What does the free plan include?",
    answer:
      "The free plan includes 600 processing credits per month, 720p exports, 2 GB of storage, 5 projects, and full MCP access — enough to connect your AI client of choice and ship real videos.",
  },
];
