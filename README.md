# Vyra landing page!!!

## Blog posts

Posts on [/blog](https://www.usevyra.com/blog) are written and published in **Admin → Blog** in the Vyra web app (`app.usevyra.com/admin?tab=blog`); see `v2/docs/admin/blog.md` in the app repository. This site reads published posts from Supabase with the publishable key and refreshes `/blog` and each post within a minute, so publishing needs no deploy. The sitemaps and `llms.txt` refresh on the same schedule.

- **Show on the blog** off (`hidden`) takes a published post off /blog and out of "More from the blog". Its URL still works and stays in the sitemap, so search traffic keeps landing.
- The older SEO guide lives in code in `src/app/blog/[slug]/data.ts` and uses the same `hidden` field. The editor refuses its URL.
- To build or run this site against the staging database, set `VYRA_SUPABASE_URL` and `VYRA_SUPABASE_PUBLISHABLE_KEY`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
