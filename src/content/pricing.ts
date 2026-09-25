export type Plan = {
  name: string;
  price: number;
  group: "mcp" | "vyra-ai";
  ai: string;
  credits: string;
  storage: string;
  exports: string;
  quality: string;
  highlight?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "MCP Starter",
    price: 24,
    group: "mcp",
    ai: "Bring your own AI (Claude, ChatGPT, Cursor)",
    credits: "6,000 processing credits",
    storage: "100 GB storage",
    exports: "1,000 exports / month",
    quality: "Export up to 1440p",
  },
  {
    name: "MCP Pro",
    price: 65,
    group: "mcp",
    ai: "Bring your own AI (Claude, ChatGPT, Cursor)",
    credits: "20,000 processing credits",
    storage: "500 GB storage",
    exports: "1,000 exports / month",
    quality: "Export up to 4K",
  },
  {
    name: "Vyra AI Starter",
    price: 54,
    group: "vyra-ai",
    ai: "Built-in AI editor, no other subscription needed",
    credits: "6,000 processing credits",
    storage: "100 GB storage",
    exports: "1,000 exports / month",
    quality: "Export up to 1440p",
    highlight: true,
  },
  {
    name: "Vyra AI Pro",
    price: 129,
    group: "vyra-ai",
    ai: "Built-in AI editor, no other subscription needed",
    credits: "20,000 processing credits",
    storage: "500 GB storage",
    exports: "1,000 exports / month",
    quality: "Export up to 4K",
  },
];

export const PRICING_FAQ = [
  {
    q: "Which plan should I pick?",
    a: "If you already pay for Claude, ChatGPT, or Cursor, get an MCP plan. It is cheaper and uses the AI you have. If you want it all in one app, get a Vyra AI plan. Pro tiers add 4K export, more credits, and more storage.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. You can upload footage and try an edit before picking a plan. Cancel anytime.",
  },
  {
    q: "What are processing credits?",
    a: "Credits pay for the work Vyra does on your footage, like transcribing, analyzing scenes, and each editing turn. Longer footage uses more.",
  },
  {
    q: "Do MCP plans include Vyra's built-in AI chat?",
    a: "MCP plans are for driving Vyra from your own assistant. Vyra AI plans include the built-in chat, so you don't need another subscription.",
  },
];
