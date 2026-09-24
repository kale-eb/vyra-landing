# Review guide for the aeo-directory branch

Nothing here is deployed. This branch adds the directory, sitemaps, schema, pricing, and author pages. Review order that makes sense:

## 1. Run it

```
git checkout aeo-directory
npm install
npm run dev
```

Then open http://localhost:3000/compare (or any hub) and use the footer "Directory" column to move around.

## 2. What changed in code

| Area | Files | What to check |
| --- | --- | --- |
| Content loader | src/lib/content.ts | Section registry (labels, hub copy, schema type per section). Edit hub titles and descriptions here. |
| Page template | src/components/directory/DirectoryPage.tsx | Header, author line, prompt blocks, FAQ schema, related cards, CTA copy. |
| Hub template | src/components/directory/DirectoryHub.tsx | Card grid, grouping by subcategory (formats only). |
| Markdown styling | src/components/directory/Markdown.tsx | Tables, lists, blockquotes and code fences render as copyable prompt blocks. |
| Routes | src/app/{section}/page.tsx and [slug]/page.tsx, src/app/[slug]/page.tsx | One folder per section. Product pages (/ai-video-editor, /mcp, /claude, /chatgpt, /cursor) come from src/content/product. |
| Sitemaps | src/lib/sitemaps.ts, src/app/sitemap.xml/route.ts, src/app/sitemaps/[name]/route.ts | Index at /sitemap.xml with 11 children. lastmod comes from each file's `updated`. Video sitemap appears automatically once any page has a real `video:` URL. |
| Pricing | src/app/pricing/page.tsx | Four plans with Product/Offer schema. Copy for credits/storage came from the existing SoftwareApplication schema in layout.tsx. |
| Author | src/app/author/sulan/page.tsx | Person schema. Bio is a placeholder; add a headshot. |
| About | src/app/about/page.tsx | Founder story and timeline (winter 2025 to YC). Needs Caleb's last name and bio, and a confirmed contact email. |
| Layout | src/app/layout.tsx | New title, canonical, Organization and WebSite schema. Existing SoftwareApplication schema untouched (note it carries an AggregateRating of 4.8 from 150 ratings; confirm that is real). |
| Redirects | next.config.ts | /blog/vyra-vs-* now 301 to /compare/vyra-vs-*. |
| Footer | src/components/Footer.tsx | Product and Directory columns. Directory is footer-only, as decided. |
| Homepage | src/app/page.tsx, src/components/ExploreDirectory.tsx, src/components/faq-data.ts | FAQPage schema for the existing FAQ, plus an "Explore" section above the final CTA that links every hub so crawlers reach the tree from the root. Remove the section if you want the homepage untouched; the schema can stay. |
| Blog | src/app/blog/[slug]/data.ts | $9.99 references replaced with current plan prices. |

## 3. What changed in content

248 markdown files under src/content, one per page (about 132,000 words). Frontmatter is `title`, `description` (the quotable sentence, also the meta description), `updated`, `category`, plus optional `video`, `example`, and format-specific fields. Edit the markdown directly; no code changes needed to change copy.

| Section | Count | Priority to read |
| --- | --- | --- |
| product | 5 | High. These carry the pricing tables and the biggest claims. |
| features | 6 | High. Feature claims must match the app today. |
| compare | 26 | High. 13 vyra-vs pages, 10 more vyra-vs (Final Cut, Riverside, Submagic, Vizard, ChatCut, Daydream, Rendley, Gling, Captions, InShot), 3 rival-vs-rival with a "Where Vyra fits" box. Competitor facts were checked against vendor sites. |
| best | 22 | High. Vyra's rank on each list is an editorial call. |
| answers | 21 | Medium. A few want first-party numbers (transcription accuracy, low-light, supported formats, card at signup). |
| prompts | 31 | Medium. 15 task pages plus 16 format-specific pages. These come from user calls; check they match how the agent behaves now. |
| tutorials | 8 | Medium. `video: TODO` on all eight. |
| alternatives | 14 | Medium. |
| for | 14 | Medium. |
| formats | 38 | Lower. Includes 9 art-and-process formats (speed paint, process video, studio tour, commission reveal, all-nighter painting vlog, semester recap). |
| how-to | 23 | Lower. Includes 9 growth guides (grow on TikTok/Reels/Shorts, niche, analytics, series, batching). |
| glossary | 40 | Low. |

Search for `TODO` across src/content to find every spot that needs a fact or an asset. All competitor claims marked "TODO verify" were checked against vendor sites and resolved; the remaining TODOs (26 files) are Vyra facts or assets only you can supply.

## 4. Things only you can decide

- Whether the AggregateRating in layout.tsx is backed by real reviews.
- Vyra's rank on each /best list.
- Which Vyra projects to pull frames or clips from for /formats and /features (the all-nighter painting content, the color wheel trend video, the UGC and storytelling reels).
- Which @sulansart reels to embed on which pages. Twenty pages now link a specific reel as the example (mapping in content-plan/instagram-map.md); the rest link the profile.

## 5. After you approve

- Merge to main, deploy.
- In Searchable: refresh_sitemap, trigger audits on the hubs, accept the 25 suggested prompts listed in 00-aeo-audit.md, and ask for a re-crawl of buffer.com/resources/ai-video-tools.
- Connect the Searchable tracker or a Vercel log drain so crawler hits become visible.
