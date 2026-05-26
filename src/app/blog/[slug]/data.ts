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
    };

export type Comparison = {
  slug: string;
  competitor: string;
  title: string;
  description: string;
  publishedAt: string;
  intro: string[];
  sections: Section[];
};

export const comparisons: Comparison[] = [
  {
    slug: "vyra-vs-capcut",
    competitor: "CapCut",
    title: "Vyra vs CapCut: AI Video Editing Compared",
    description:
      "Vyra vs CapCut for AI video editing. Vyra connects any AI agent via MCP; CapCut doesn't. Compare features, motion graphics, and processing speed.",
    publishedAt: "2026-05-26",
    intro: [
      "CapCut is a solid editor. It's free, it's fast for short-form content, and its template library makes cranking out TikToks and Reels painless. If you're doing basic cuts, adding captions, or dropping in transitions, CapCut handles it.",
      "But CapCut wasn't built for AI agents. It was built for humans clicking buttons on a timeline. When you try to use AI to do anything beyond its built-in features, you hit a wall. There's no way for Claude, ChatGPT, Cursor, or any other AI tool to connect to CapCut and actually edit your video.",
      "Vyra was built from scratch to solve that problem.",
    ],
    sections: [
      {
        kind: "prose",
        heading: "The core difference",
        paragraphs: [
          "CapCut is a traditional video editor with some AI features sprinkled in (auto-captions, background removal, templates). You still do the editing yourself.",
          "Vyra is an agent-first video editor. Any AI agent can connect to Vyra through MCP (Model Context Protocol) and actually understand, search through, and edit your footage. You describe what you want in natural language, and the agent does the editing. The agent can see your footage, make decisions based on what's visually happening, and watch its own edits come together in real time.",
          "CapCut gave AI a few buttons to press. Vyra gave AI eyes and hands.",
        ],
      },
      {
        kind: "table",
        heading: "How they handle real footage",
        caption:
          "We ran a direct test on the same 35-minute video file, on the same wifi connection.",
        headers: ["", "CapCut", "Vyra"],
        rows: [
          ["Processing time", "Timed out after 4 minutes", "1 minute 50 seconds"],
          [
            "What it understood",
            "Nothing (failed to process)",
            "Full visual descriptions of every scene, searchable embeddings",
          ],
          ["Can an AI agent connect to it?", "No", "Yes, any agent via MCP"],
          [
            "How editing works",
            "You drag clips on a timeline",
            "You tell an AI agent what you want",
          ],
        ],
      },
      {
        kind: "prose",
        paragraphs: [
          "CapCut couldn't even finish processing the file. Vyra indexed the entire 35 minutes, understood what was in every scene, and made that information available to any AI agent that connects.",
        ],
      },
      {
        kind: "table",
        heading: "Feature comparison",
        headers: ["Feature", "CapCut", "Vyra"],
        rows: [
          ["Timeline editor", "Yes", "Yes"],
          ["AI captions", "Yes (built-in)", "Yes (via agent, 125+ languages)"],
          ["Templates", "Large library", "No templates (agent creates from scratch)"],
          [
            "Custom motion graphics",
            "No (templates only)",
            "Yes (agent creates custom animations)",
          ],
          [
            "Reference video styling",
            "No",
            "Yes (match the style of any reference video)",
          ],
          ["Background removal", "Yes", "Yes"],
          ["MCP support", "No", "Yes"],
          ["Works with Claude", "No", "Yes"],
          ["Works with ChatGPT", "No", "Yes"],
          ["Works with Cursor", "No", "Yes"],
          ["Understands video content", "No", "Yes (visual indexing + embeddings)"],
          ["Agent sees its own edits", "N/A", "Yes (visual feedback loop)"],
          ["Pricing", "Free / $19.99 Pro", "$9.99 / $24.99 per month"],
          ["Best for", "Quick social media edits", "AI-powered editing of any footage"],
        ],
      },
      {
        kind: "prose",
        heading: "Motion graphics",
        paragraphs: [
          "This is where the gap gets wide. CapCut has a library of pre-made motion graphics templates. You pick one, drop it in, maybe change the text. That's it.",
          "Vyra lets an AI agent create custom motion graphics from scratch. Animated titles, lower thirds, transitions, overlays. You describe what you want or give the agent a reference video to match, and it builds the animation. No template library to scroll through, no settling for something close enough.",
          "For creators who need branded or unique animations, this is the difference between picking from a menu and having a chef cook whatever you want.",
        ],
      },
      {
        kind: "prose",
        heading: "Reference video",
        paragraphs: [
          'Vyra lets you feed in a reference video and tell the agent "make it look like this." The agent studies the style, pacing, transitions, and visual language of your reference and applies that to your footage.',
          'CapCut has no equivalent. You can browse their template library and hope something matches what you\'re going for, but there\'s no way to point at an existing video and say "that one."',
        ],
      },
      {
        kind: "prose",
        heading: "When to use CapCut",
        paragraphs: [
          "CapCut is the right choice if you want to make quick edits to short clips using templates. It's great for creators who want to add trending effects, auto-captions, or transitions without thinking too hard. The template library is useful for cranking out daily social content.",
        ],
      },
      {
        kind: "prose",
        heading: "When to use Vyra",
        paragraphs: [
          "Vyra is the right choice if you want AI to actually do the editing for you. If you have long-form footage and you're tired of spending hours scrubbing through a timeline, Vyra lets any AI agent handle it. You describe what you want, the agent searches through your footage, finds the right moments, and builds the edit.",
          "It's also the right call if you need custom motion graphics, want to match the style of a reference video, or want to use AI tools you already pay for (Claude, ChatGPT, Cursor) to edit video. CapCut doesn't connect to any of them.",
        ],
      },
      {
        kind: "faq",
        heading: "FAQ",
        items: [
          {
            q: "Can I use CapCut with Claude or ChatGPT?",
            a: "No. CapCut doesn't support MCP or any protocol that lets external AI agents connect to it. You can only use CapCut's built-in AI features.",
          },
          {
            q: "Can I use Vyra for quick TikTok edits?",
            a: "Yes, but it's overkill for a 15-second clip where you just need a template. Vyra shines when you have longer footage and want an AI agent to handle the creative decisions.",
          },
          {
            q: "Does Vyra have templates like CapCut?",
            a: "No. Vyra takes a different approach. Instead of pre-made templates, you describe what you want to an AI agent and it creates the edit from scratch based on your actual footage. The result is more personalized but requires more direction.",
          },
          {
            q: "Can Vyra create motion graphics?",
            a: "Yes. Unlike CapCut's template-only approach, Vyra lets AI agents create custom motion graphics. Animated titles, lower thirds, transitions. You describe what you want or provide a reference video, and the agent builds it.",
          },
          {
            q: "Is CapCut really free?",
            a: "The basic version is free. CapCut Pro is $19.99/month and unlocks additional effects, storage, and removes watermarks.",
          },
          {
            q: "What is MCP?",
            a: "MCP (Model Context Protocol) is an open standard that lets AI agents connect to external tools. It's how Claude, ChatGPT, Cursor, and other AI tools can plug into Vyra and actually control the editing process. Think of it like USB for AI.",
          },
        ],
      },
    ],
  },
  {
    slug: "vyra-vs-descript",
    competitor: "Descript",
    title: "Vyra vs Descript: AI Video Editing Compared",
    description:
      "Vyra vs Descript for AI video editing. Vyra's MCP gives agents real editing tools; Descript's only passes prompts to Underlord. Compare both.",
    publishedAt: "2026-05-26",
    intro: [
      "Descript is a clever editor. The idea of editing video by editing a text transcript was a real innovation when they launched it, and it still works well for certain types of content. If you're cutting a podcast, cleaning up an interview, or removing filler words from a talking-head video, Descript is fast and intuitive. Studio Sound is legitimately great for cleaning up audio.",
      "But Descript's AI understands your words, not your footage. It can transcribe what someone said and let you edit around that transcript. It cannot look at your video and tell you what's visually happening in any given scene. And while Descript recently added MCP support, the way it works is not what you'd expect.",
    ],
    sections: [
      {
        kind: "prose",
        heading: "The core difference",
        paragraphs: [
          "Descript treats video like a text document. You get a transcript, you edit the words, the video follows. That works when the words are the content (podcasts, interviews, tutorials). It breaks down when the visuals are the content.",
          "Vyra treats video as visual media. It indexes your footage, understands what's happening in every scene, and exposes that understanding directly to any AI agent. The agent sees your footage, makes editing decisions, and watches its own edits come together.",
          'Descript asks "what did they say?" Vyra asks "what happened?"',
        ],
      },
      {
        kind: "prose",
        heading: "Descript's MCP vs Vyra's MCP",
        paragraphs: [
          "Descript has MCP support, but it works differently than you might think. When an AI agent connects to Descript's MCP, it doesn't get editing tools. It gets a way to send prompts to Descript's internal AI (Underlord), which does the actual editing on Descript's servers. Your agent is just a middleman passing instructions to someone else's AI. It can't see the footage, it can't see what's being edited, and it can't make its own decisions.",
          "Vyra's MCP gives the agent the actual tools. The agent can see your footage through visual indexing and embeddings. It can search through scenes, find specific moments, and build edits. It can see what it's making as it goes. The agent is the editor, not a messenger.",
        ],
      },
      {
        kind: "table",
        headers: ["", "Descript MCP", "Vyra MCP"],
        rows: [
          ["Agent gets editing tools", "No (sends prompts to Underlord)", "Yes (full tool access)"],
          ["Agent can see footage", "No", "Yes (visual indexing + embeddings)"],
          ["Agent sees its own edits", "No", "Yes (visual feedback loop)"],
          ["Agent makes editing decisions", "No (Underlord decides)", "Yes"],
          ["Who does the editing", "Descript's internal AI", "Your AI agent directly"],
        ],
      },
      {
        kind: "table",
        heading: "How they handle real footage",
        caption:
          "We ran a direct test on the same 35-minute video file, on the same wifi connection.",
        headers: ["", "Descript", "Vyra"],
        rows: [
          ["Processing time", "6 minutes", "1 minute 50 seconds"],
          [
            "What it understood",
            "Transcript only (zero visual descriptions)",
            "Full visual descriptions of every scene, searchable embeddings",
          ],
          [
            "Can an AI agent connect to it?",
            "Sort of (prompts to Underlord)",
            "Yes, any agent via MCP with full tool access",
          ],
          ["How editing works", "Edit a text transcript", "Tell an AI agent what you want"],
        ],
      },
      {
        kind: "prose",
        paragraphs: [
          "Descript took three times as long and came back with a transcript. Useful if you need to know what someone said. Useless if you need to know what was on screen. Vyra indexed every scene with full visual descriptions and made all of it searchable by any AI agent.",
        ],
      },
      {
        kind: "table",
        heading: "Feature comparison",
        headers: ["Feature", "Descript", "Vyra"],
        rows: [
          ["Timeline editor", "Yes (transcript-based)", "Yes"],
          ["Transcript editing", "Yes (core feature)", "Yes (via agent)"],
          ["Filler word removal", "Yes (built-in)", "Yes (via agent)"],
          ["Studio Sound (audio cleanup)", "Yes", "Audio cleanup via agent"],
          [
            "Custom motion graphics",
            "No (templates only)",
            "Yes (agent creates custom animations)",
          ],
          [
            "Reference video styling",
            "No",
            "Yes (match the style of any reference video)",
          ],
          ["AI captions", "Yes", "Yes (via agent, 125+ languages)"],
          ["Screen recording", "Yes", "No"],
          [
            "MCP support",
            "Yes (limited, prompts to Underlord)",
            "Yes (full tool access for any agent)",
          ],
          ["Works with Claude", "Partially (can prompt Underlord)", "Yes (agent edits directly)"],
          [
            "Works with ChatGPT",
            "Partially (can prompt Underlord)",
            "Yes (agent edits directly)",
          ],
          [
            "Understands video content visually",
            "No (transcript only)",
            "Yes (visual indexing + embeddings)",
          ],
          ["Agent sees its own edits", "No", "Yes"],
          ["Pricing", "Free / $24 Pro / $33 Business", "$9.99 / $24.99 per month"],
          ["Best for", "Podcast and interview editing", "AI-powered editing of any footage"],
        ],
      },
      {
        kind: "prose",
        heading: "Motion graphics",
        paragraphs: [
          "Descript offers basic text animations and a small set of pre-made title templates. You can pick a style, change the text, and drop it in. There's no support for custom motion graphics, keyframe animation, or building anything that isn't already in their template library.",
          'With Vyra, an AI agent can build motion graphics that don\'t exist in any template library. Need a branded lower third that matches your company\'s style? An animated intro that mirrors a reference video you liked? The agent designs and builds it. For creators and teams who need custom visuals, the difference between "pick from our templates" and "tell the agent what to make" saves hours of After Effects work.',
        ],
      },
      {
        kind: "prose",
        heading: "Reference video",
        paragraphs: [
          "Say you saw a YouTube video with a style you want to replicate. With Vyra, you drop that video in as a reference and the agent picks apart the pacing, transitions, and visual approach. Then it applies that style to your footage. Instead of trying to describe what you want in words, you just show the agent an example.",
          "Descript has nothing like this. You work with their built-in styles or you build it manually.",
        ],
      },
      {
        kind: "prose",
        heading: "When to use Descript",
        paragraphs: [
          "Descript is the right choice if most of your content is people talking. Podcasts, interviews, tutorial videos, meeting recordings. The transcript-based editing workflow is fast for that kind of footage, and Studio Sound does a great job cleaning up rough audio. If you don't need visual scene understanding and you're mostly cutting around dialogue, Descript works well.",
        ],
      },
      {
        kind: "prose",
        heading: "When to use Vyra",
        paragraphs: [
          "Vyra is the right choice if you need AI that can actually see your footage. If you're working with B-roll, product shots, event footage, vlogs, or anything where what's on screen matters more than what someone is saying, Vyra's visual understanding is the difference.",
          "It's also the right choice if you want your AI agent to actually do the editing. Descript's MCP passes your instructions to their internal AI. Vyra gives your agent the tools to edit directly, with full visibility into the footage and the edit.",
          "And if you need custom motion graphics or want to match the style of a reference video, Vyra handles both. Descript doesn't.",
        ],
      },
      {
        kind: "faq",
        heading: "FAQ",
        items: [
          {
            q: "Does Descript's MCP let AI agents edit video?",
            a: "Not directly. Descript's MCP lets an AI agent send prompts to Descript's internal AI (Underlord), which handles the editing. The external agent can't see the footage, can't see the edits, and doesn't have access to editing tools. It's more of an API than an agent integration.",
          },
          {
            q: "Can Descript understand what's visually in my video?",
            a: 'No. Descript processes audio and generates a transcript. It knows what was said but has no understanding of what\'s on screen. If you ask "find the scene where the dog runs across the park," Descript can\'t help unless someone said those words out loud.',
          },
          {
            q: "Is Descript better for podcasts?",
            a: "Yes. If your content is primarily audio with a static or simple visual component, Descript's transcript-based editing is hard to beat. It was designed for exactly that use case.",
          },
          {
            q: "Can Vyra create motion graphics?",
            a: "Yes. Unlike Descript's template-only approach, Vyra lets AI agents create custom motion graphics. Animated titles, lower thirds, transitions. You describe what you want or provide a reference video, and the agent builds it.",
          },
          {
            q: "What is MCP?",
            a: "MCP (Model Context Protocol) is an open standard that lets AI agents connect to external tools. Both Descript and Vyra support MCP, but the implementation is very different. Descript's MCP is a passthrough to their internal AI. Vyra's MCP gives your agent direct access to editing tools and visual understanding of your footage.",
          },
        ],
      },
    ],
  },
  {
    slug: "vyra-vs-veed",
    competitor: "VEED",
    title: "Vyra vs VEED: AI Video Editing Compared",
    description:
      "Vyra vs VEED for AI video editing. Vyra connects any AI agent for real edits; VEED's MCP only generates clips. Compare features and capabilities.",
    publishedAt: "2026-05-26",
    intro: [
      "VEED is a browser-based video editor that's easy to pick up. If you need to add subtitles, trim a clip, or drop in some text overlays without installing anything, VEED gets the job done from a browser tab. The auto-subtitle feature works well, and the interface is clean enough that anyone can figure it out in a few minutes.",
      "But VEED is a browser tool with browser limitations. No desktop app, no offline editing, and no advanced editing features like keyframing or custom animations. And while VEED has added AI features and even MCP support, neither one works the way you'd expect.",
    ],
    sections: [
      {
        kind: "prose",
        heading: "The core difference",
        paragraphs: [
          "VEED is a simplified browser editor with AI features bolted on. You still do the editing yourself in a web interface. The AI helps with subtitles, background removal, and generating short clips, but it doesn't understand your footage or make editing decisions.",
          "Vyra is an agent-first video editor. Any AI agent connects through MCP with full access to editing tools, visual understanding of your footage, and the ability to build edits from scratch. The agent is the editor.",
          "VEED put AI in a browser. Vyra put AI in the driver's seat.",
        ],
      },
      {
        kind: "prose",
        heading: "VEED's MCP vs Vyra's MCP",
        paragraphs: [
          "VEED has MCP support, but it's narrow. The MCP server connects to VEED's Fabric generative model, which creates short AI-generated video clips from text or image prompts. It doesn't connect to the editor. An AI agent can't use VEED's MCP to cut your footage, add effects, build a timeline, or do anything with video you've already shot. It can only generate new synthetic clips.",
          "Vyra's MCP gives the agent the actual editing tools. The agent can see your real footage through visual indexing, search through scenes, build edits on a timeline, create motion graphics, and watch its own edits as they come together.",
        ],
      },
      {
        kind: "table",
        headers: ["", "VEED MCP", "Vyra MCP"],
        rows: [
          [
            "What the agent can do",
            "Generate short AI video clips",
            "Edit real footage with full tool access",
          ],
          ["Agent can see footage", "No", "Yes (visual indexing + embeddings)"],
          ["Agent can edit a timeline", "No", "Yes"],
          ["Agent sees its own edits", "No", "Yes (visual feedback loop)"],
          ["Works with real footage", "No (generative only)", "Yes"],
        ],
      },
      {
        kind: "table",
        heading: "Feature comparison",
        headers: ["Feature", "VEED", "Vyra"],
        rows: [
          ["Timeline editor", "Yes (browser-based)", "Yes"],
          ["AI captions", "Yes (built-in, 125+ languages)", "Yes (via agent, 125+ languages)"],
          [
            "Custom motion graphics",
            "No (basic text animations only)",
            "Yes (agent creates custom animations)",
          ],
          [
            "Reference video styling",
            "No",
            "Yes (match the style of any reference video)",
          ],
          ["AI avatars", "Yes", "No"],
          ["Text-to-video generation", "Yes (Fabric model)", "No"],
          ["Background removal", "Yes", "Yes"],
          ["Filler word removal", "Yes", "Yes (via agent)"],
          [
            "MCP support",
            "Yes (generative clips only)",
            "Yes (full editing tool access)",
          ],
          ["Works with Claude", "Only for generating clips", "Yes (agent edits directly)"],
          ["Works with ChatGPT", "Only for generating clips", "Yes (agent edits directly)"],
          [
            "Understands video content visually",
            "No",
            "Yes (visual indexing + embeddings)",
          ],
          ["Agent sees its own edits", "No", "Yes"],
          [
            "Pricing",
            "Free / $18 Basic / $30 Pro / $59 Business",
            "$9.99 / $24.99 per month",
          ],
          [
            "Best for",
            "Quick browser-based edits with subtitles",
            "AI-powered editing of any footage",
          ],
        ],
      },
      {
        kind: "prose",
        heading: "Motion graphics",
        paragraphs: [
          "VEED offers basic text animations. Text can fade in, slide in, or bounce. That's about it. There's no keyframing, no custom animation paths, no lower third builder, no way to create anything that isn't already a preset.",
          'Vyra takes a completely different approach. Instead of picking from presets, you describe the animation you want to an AI agent and it builds it. Branded lower thirds, animated title sequences, custom transitions between scenes. You can also hand the agent a reference video and say "make the titles look like that." For anyone who\'s hit the ceiling of what a browser-based text animation can do, Vyra removes that ceiling entirely.',
        ],
      },
      {
        kind: "prose",
        heading: "Reference video",
        paragraphs: [
          'If you\'ve ever watched a video and thought "I want mine to feel like that," Vyra handles that. Drop in a reference video and the agent breaks down the style, pacing, and visual choices, then applies that approach to your footage. It\'s the difference between describing what you want and showing what you want.',
          "VEED doesn't have anything comparable. You get their templates and presets, and that's it.",
        ],
      },
      {
        kind: "prose",
        heading: "When to use VEED",
        paragraphs: [
          "VEED is the right choice if you need to make a quick edit from any computer without installing anything. It's useful for adding subtitles, trimming clips, or making simple social content when you don't have access to your usual setup. The AI avatar feature is also unique if you need synthetic talking-head videos. And if you want to generate short AI video clips from text prompts, VEED's Fabric model does that.",
        ],
      },
      {
        kind: "prose",
        heading: "When to use Vyra",
        paragraphs: [
          "Vyra is the right choice if you want AI to do the editing for you. If you have real footage and you want an AI agent to search through it, find the right moments, build edits, and create custom motion graphics, Vyra handles all of that.",
          "It's also the better choice if you care about editing quality. VEED's editing toolkit is constrained — basic text animations, no keyframing, and AI features locked to its own UI. Vyra has a full editing toolkit that any AI agent can drive.",
          "And at $9.99/month for Vyra's base tier vs $18/month for VEED's cheapest paid plan, Vyra costs less while offering significantly more editing capability.",
        ],
      },
      {
        kind: "faq",
        heading: "FAQ",
        items: [
          {
            q: "Does VEED's MCP let AI agents edit video?",
            a: "No. VEED's MCP connects to their Fabric generative model, which creates new AI-generated video clips from text or image prompts. It doesn't give an AI agent access to the editor or any editing tools. You can't use it to edit footage you've already shot.",
          },
          {
            q: "Can VEED understand what's visually in my video?",
            a: "No. VEED can detect faces (for background removal and eye contact correction) and transcribe audio for subtitles, but it doesn't understand scene content or what's visually happening in your footage.",
          },
          {
            q: "Is VEED really browser-only?",
            a: "Yes. VEED runs entirely in your web browser. There's no desktop app and no offline access. This means your editing experience depends on your internet connection and browser performance, which can be an issue with longer videos.",
          },
          {
            q: "Can Vyra create motion graphics?",
            a: "Yes. Unlike VEED's basic text animations, Vyra lets AI agents create custom motion graphics. Animated titles, lower thirds, transitions. You describe what you want or provide a reference video, and the agent builds it.",
          },
          {
            q: "What about VEED's AI avatars?",
            a: "VEED offers AI-generated avatar videos, which Vyra doesn't have. If you need synthetic talking-head videos without filming yourself, VEED's avatar feature handles that. The two tools serve different purposes here: VEED generates synthetic content, Vyra edits real footage.",
          },
          {
            q: "What is MCP?",
            a: "MCP (Model Context Protocol) is an open standard that lets AI agents connect to external tools. Both VEED and Vyra support MCP, but the implementation is very different. VEED's MCP is limited to generating AI video clips. Vyra's MCP gives your agent direct access to a full set of editing tools plus visual understanding of your footage.",
          },
        ],
      },
    ],
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
