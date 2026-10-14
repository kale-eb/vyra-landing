import { posts as structuredPosts, type Post as StructuredPost } from "@/app/blog/[slug]/data";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "@/lib/supabase";

export type BlogKind = "update" | "writing" | "guide";

export const KIND_LABEL: Record<BlogKind, string> = {
  update: "Update",
  writing: "Writing",
  guide: "Guide",
};

/** How long a published change takes to reach the site. */
export const BLOG_REVALIDATE_SECONDS = 60;

type BlogMeta = {
  slug: string;
  url: string;
  title: string;
  description: string;
  /** ISO date or timestamp of first publication. */
  date: string;
  /** YYYY-MM-DD of the last change, for the sitemap. */
  updated: string;
  kind: BlogKind;
  author?: string;
  cover?: string;
  /** Off the /blog page and "More from the blog". The URL still works and stays in the sitemap. */
  hidden: boolean;
};

export type BlogPost =
  | (BlogMeta & { source: "editor"; html: string })
  | (BlogMeta & { source: "structured"; post: StructuredPost });

type PublishedRow = {
  slug: string;
  title: string;
  description: string;
  kind: BlogKind;
  hidden: boolean;
  cover_url: string | null;
  author_name: string | null;
  html: string;
  published_at: string;
  updated_at: string;
};

/* Posts written in Admin → Blog (app.usevyra.com/admin?tab=blog). Row-level
   security returns only published posts to the publishable key. A failed read
   throws: during a refresh Next keeps serving the last good page. */
async function readPublishedPosts(): Promise<BlogPost[]> {
  const columns = "slug,title,description,kind,hidden,cover_url,author_name,html,published_at,updated_at";
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/blog_posts?select=${columns}&status=eq.published&order=published_at.desc&limit=1000`,
    { headers: { apikey: SUPABASE_PUBLISHABLE_KEY }, next: { revalidate: BLOG_REVALIDATE_SECONDS, tags: ["blog"] } },
  );
  if (!res.ok) throw new Error(`Blog posts could not be read (${res.status})`);
  const rows = (await res.json()) as PublishedRow[];
  return rows.map((row) => ({
    source: "editor",
    slug: row.slug,
    url: `/blog/${row.slug}`,
    title: row.title,
    description: row.description,
    date: row.published_at,
    updated: row.updated_at.slice(0, 10),
    kind: row.kind,
    author: row.author_name ?? undefined,
    cover: row.cover_url ?? undefined,
    hidden: row.hidden,
    html: row.html,
  }));
}

/** Every post, newest first, including hidden ones. */
export async function getBlogPosts(): Promise<BlogPost[]> {
  const structured: BlogPost[] = structuredPosts.map((post) => ({
    source: "structured",
    slug: post.slug,
    url: `/blog/${post.slug}`,
    title: post.title,
    description: post.description,
    date: post.publishedAt,
    updated: post.publishedAt,
    kind: "guide",
    hidden: post.hidden === true,
    post,
  }));
  // The editor refuses the code-defined slugs; if one slips through, the code post keeps its URL.
  const taken = new Set(structured.map((p) => p.slug));
  const published = (await readPublishedPosts()).filter((p) => !taken.has(p.slug));
  return [...published, ...structured].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

/** Posts shown on /blog, newest first. */
export async function getListedPosts(): Promise<BlogPost[]> {
  return (await getBlogPosts()).filter((p) => !p.hidden);
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  return (await getBlogPosts()).find((p) => p.slug === slug);
}

export function formatDate(date: string): string {
  // Date-only values are calendar days; timestamps read as the day in San Francisco.
  const dateOnly = date.length === 10;
  return new Date(dateOnly ? `${date}T00:00:00Z` : date).toLocaleDateString("en-US", {
    timeZone: dateOnly ? "UTC" : "America/Los_Angeles",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
