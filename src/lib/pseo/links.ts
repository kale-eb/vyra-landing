import { getEntries, type Entry } from "@/lib/content";
import { CROSSING, taskForBase } from "./prompt-crossings";
import { pairsFor } from "./head-to-head";
import type { Link } from "./entry";

/* Links from written pages down to the generated pages built from them. Without these the
   generated pages would only be reachable from their own family, and pages that are only
   linked from a sitemap get crawled once and dropped. */

export type LinkGroup = { heading: string; links: Link[] };

const toLink = (e: Entry): Link => ({ url: e.url, title: e.title, description: e.description });

export function childLinks(entry: Entry): LinkGroup[] {
  if (entry.generated) return [];
  const groups: LinkGroup[] = [];

  if (entry.section === "formats" || entry.section === "prompts") {
    const prompts = getEntries("prompts");
    const hubs = prompts.filter((e) => e.generated === CROSSING && e.data.kind === "format-hub");

    if (entry.section === "formats") {
      const hub = hubs.find((h) => h.data.format === entry.slug);
      if (hub) {
        const steps = (hub.data.steps as string[])
          .map((u) => prompts.find((p) => p.url === u))
          .filter((p): p is Entry => !!p);
        groups.push({ heading: "Prompts for this format, step by step", links: [toLink(hub), ...steps.map(toLink)] });
      }
    }

    if (entry.section === "prompts") {
      const task = taskForBase(entry.url);
      if (task) {
        const byFormat = prompts.filter((p) => p.generated === CROSSING && p.data.task === task.key);
        if (byFormat.length) groups.push({ heading: `${task.label} prompts by format`, links: byFormat.map(toLink) });
      }
      const hub = hubs.find((h) => (h.data.steps as string[]).includes(entry.url));
      if (hub) groups.push({ heading: "More prompts for this format", links: [toLink(hub)] });
    }
  }

  if (entry.section === "compare" && entry.slug.startsWith("vyra-vs-")) {
    const pairs = pairsFor(getEntries("compare"), entry.slug.replace(/^vyra-vs-/, ""));
    if (pairs.length) groups.push({ heading: "Compared head to head with other editors", links: pairs.map(toLink) });
  }

  return groups;
}
