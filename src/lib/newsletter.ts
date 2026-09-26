import fs from "node:fs";
import path from "node:path";

export type NewsletterPost = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  issue: number;
  thumbnail: string;
  cover?: string;
  /** A few sentences in Sulan's own words, for cards on other pages. */
  excerpt?: string;
  original: string;
  html: string;
  words: number;
};

const DIR = path.join(process.cwd(), "src/content/newsletter");
let cache: NewsletterPost[] | null = null;

export function getNewsletterPosts(): NewsletterPost[] {
  if (cache) return cache;
  const meta = JSON.parse(fs.readFileSync(path.join(DIR, "meta.json"), "utf8")) as Omit<NewsletterPost, "html" | "words">[];
  cache = meta
    .map((m) => {
      const file = path.join(DIR, `${m.slug}.html`);
      const html = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
      const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
      return { ...m, html, words };
    })
    .filter((p) => p.html)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return cache;
}

export function getNewsletterPost(slug: string): NewsletterPost | undefined {
  return getNewsletterPosts().find((p) => p.slug === slug);
}
