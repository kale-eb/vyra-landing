export type Section =
  | {
      kind: "prose";
      heading?: string;
      paragraphs: string[];
    }
  | {
      kind: "table";
      heading?: string;
      caption?: string;
      headers: string[];
      rows: string[][];
    }
  | {
      kind: "faq";
      heading?: string;
      items: { q: string; a: string }[];
    }
  | {
      kind: "list";
      heading?: string;
      ordered: boolean;
      items: string[];
    }
  | {
      kind: "featureList";
      heading?: string;
      items: { title: string; body: string; icon?: FeatureIcon }[];
    }
  | {
      kind: "steps";
      heading?: string;
      items: { title: string; body: string }[];
    }
  | {
      kind: "flowDiagram";
      caption?: string;
      sources: string[];
      via: string;
      target: string;
    }
  | {
      kind: "costCompare";
      heading?: string;
      caption?: string;
      columns: {
        label: string;
        price: string;
        breakdown: string[];
        note?: string;
        highlight?: boolean;
      }[];
    };

export type FeatureIcon =
  | "search"
  | "build"
  | "sparkles"
  | "reference"
  | "captions";

export type Post = {
  slug: string;
  kicker: string;
  title: string;
  description: string;
  publishedAt: string;
  intro: string[];
  sections: Section[];
};

export const posts: Post[] = [
  {
    slug: "use-your-ai-subscription",
    kicker: "Workflow",
    title: "Use Your Existing AI Subscription to Edit Video",
    description:
      "Already paying for Claude, ChatGPT, or Cursor? Connect that AI subscription to Vyra through MCP and your agent can search, edit, and build video.",
    publishedAt: "2026-05-26",
    intro: [
      "You're already paying for an AI tool. Maybe it's Claude, maybe it's ChatGPT, maybe it's Cursor. You use it every day for writing, coding, research, whatever. It's good at what it does.",
      "But right now, none of those tools can edit video. You can ask Claude to write a script, but you can't ask it to cut your footage. You can ask ChatGPT to brainstorm a video concept, but you can't ask it to find the best take and build the edit.",
      "Vyra changes that. Connect any AI agent you already use, and it can edit video.",
    ],
    sections: [
      {
        kind: "flowDiagram",
        caption: "Your existing AI agent connects to Vyra through MCP - it gets eyes on your footage and hands on the timeline.",
        sources: ["Claude", "ChatGPT", "Cursor"],
        via: "MCP",
        target: "Vyra",
      },
      {
        kind: "prose",
        heading: "You don't need another AI subscription",
        paragraphs: [
          "Most video editors that advertise AI features are building their own models internally. Descript has Underlord. CapCut has its own built-in AI tools. VEED has its own generation models. Each one is a walled garden. You pay for their subscription, you use their AI, and none of it talks to anything else.",
          "Vyra doesn't work that way. Instead of building a competing AI model, Vyra connects to the ones you already have through MCP (Model Context Protocol). Your Claude subscription, your ChatGPT subscription, your Cursor subscription. Those tools already understand natural language, already know how to reason through complex tasks, and already know your preferences from months of conversations.",
          "Vyra gives them the ability to see and edit video. That's it.",
          "You're not paying for Vyra's AI. You're paying for the editing tools and the video understanding layer that makes your existing AI useful for video work.",
        ],
      },
      {
        kind: "prose",
        heading: "You already know how to use it",
        paragraphs: [
          "There's no new interface to learn. If you know how to talk to Claude, you know how to edit video with Vyra. The same prompt style you use for everything else works here.",
          '"Find the three best moments from this interview and cut them into a 60-second highlight reel."',
          '"Add lower thirds with the speaker\'s name every time a new person talks."',
          '"Make this look like that reference video I uploaded."',
          "You're not learning a new tool. You're giving a tool you already know a new skill.",
        ],
      },
      {
        kind: "steps",
        heading: "How it works",
        items: [
          {
            title: "Connect your agent",
            body: "Connect your AI agent to Vyra through MCP. Setup takes a few minutes - once it's wired up, every conversation has access to the editor.",
          },
          {
            title: "Index your footage",
            body: "Upload or point to your footage. Vyra creates visual descriptions and searchable embeddings of every scene so the agent can actually see what's there.",
          },
          {
            title: "Talk to your agent",
            body: "Describe what you want in the chat you already use. The agent searches, cuts, animates, and assembles the edit - you watch it happen in real time.",
          },
        ],
      },
      {
        kind: "prose",
        paragraphs: [
          "The agent can see your footage. It knows what's happening in every scene. It can search for specific moments, build edits, create motion graphics, and match the style of reference videos. All through the same chat interface you already use.",
        ],
      },
      {
        kind: "featureList",
        heading: "What your AI agent can do through Vyra",
        items: [
          {
            icon: "search",
            title: "Search and understand footage",
            body: 'The agent can look through hours of footage and find specific scenes based on what\'s visually happening, not just what someone said. "Find every shot of the product on the table" works even if nobody mentioned the product out loud.',
          },
          {
            icon: "build",
            title: "Build edits",
            body: "The agent can cut clips, arrange them on a timeline, add transitions, and assemble a complete edit. You describe the structure you want, and it builds it.",
          },
          {
            icon: "sparkles",
            title: "Create motion graphics",
            body: "Custom animated titles, lower thirds, overlays. Not templates. The agent designs and builds them based on your description or a reference video.",
          },
          {
            icon: "reference",
            title: "Match a reference video",
            body: "Upload a video with a style you like, and the agent replicates the pacing, transitions, and visual approach on your footage.",
          },
          {
            icon: "captions",
            title: "Add captions and effects",
            body: "Subtitles, background removal, color adjustments. The standard editing toolkit, all accessible through natural language.",
          },
        ],
      },
      {
        kind: "prose",
        heading: "The math",
        paragraphs: [
          "Say you're paying $20/month for Claude Pro. That subscription already covers writing, research, coding, analysis, and whatever else you throw at it. With Vyra, that same subscription now also covers video editing.",
          "Compare that to paying $24/month for Descript Pro or $30/month for VEED Pro, on top of whatever you're already paying for your main AI tool. Those subscriptions only do video, and their AI only works inside their own editor.",
          "Vyra's MCP Starter plan is $24/month. Combined with an AI subscription you already have, you get a more capable editing setup for about what a standalone AI video editor charges on its own, and the AI you pay for does more than video.",
        ],
      },
      {
        kind: "costCompare",
        caption: "Monthly cost when you already pay for Claude Pro ($20/mo).",
        columns: [
          {
            label: "Vyra",
            price: "$44.00",
            breakdown: ["Claude Pro: $20", "Vyra MCP Starter: $24"],
            note: "Your AI works across every task - writing, code, editing.",
            highlight: true,
          },
          {
            label: "Descript",
            price: "$44.00",
            breakdown: ["Claude Pro: $20", "Descript Pro: $24"],
            note: "Descript's AI is locked inside Descript.",
          },
          {
            label: "VEED",
            price: "$50.00",
            breakdown: ["Claude Pro: $20", "VEED Pro: $30"],
            note: "VEED's AI is locked inside VEED.",
          },
        ],
      },
      {
        kind: "prose",
        heading: "Who this is for",
        paragraphs: [
          "This isn't for everyone. If you don't use AI tools today and you just want a simple editor with templates, CapCut is fine. If you edit podcasts and want transcript-based editing, Descript is solid.",
          "This is for people who already live inside an AI tool and want to extend what it can do. Creators who use Claude or ChatGPT daily and want their AI to handle video editing too. Developers who use Cursor and want to build video workflows programmatically. Teams that have standardized on one AI platform and want video editing to be part of that same workflow.",
          "If you're already paying for AI, Vyra lets you get more out of that investment instead of paying for another one.",
        ],
      },
      {
        kind: "faq",
        heading: "FAQ",
        items: [
          {
            q: "Which AI tools work with Vyra?",
            a: "Any AI agent that supports MCP. Right now that includes Claude, ChatGPT, Cursor, and a growing list of others. If your tool supports MCP, it works with Vyra.",
          },
          {
            q: "Do I still need to pay for Vyra if I have an AI subscription?",
            a: "Yes. Vyra provides the video editing tools and the video understanding layer. Your AI subscription provides the intelligence. You need both, the same way you need both a car and a driver.",
          },
          {
            q: "What does Vyra cost?",
            a: "Plans start at $24/month. See the pricing page on usevyra.com for what's included at each tier.",
          },
          {
            q: "Is there a learning curve?",
            a: "If you know how to prompt an AI agent, you already know the basics. The main thing to learn is what Vyra's tools can do so you can ask for the right things. The documentation covers that.",
          },
          {
            q: "Can I still edit manually?",
            a: "Yes. Vyra has a full editing interface on top of the agent tools. You can let the AI do the heavy lifting and then fine-tune things manually, or go fully manual if you prefer.",
          },
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
