import type { NextConfig } from "next";
import { promptOverrideRedirects } from "./src/lib/pseo/overrides";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The API launch link: usevyra.com/api opens the app's sign-up with the API path chosen. First, so the
      // bare domain gets it in one hop. Exact path only: /docs/api and anything under /api/ are untouched.
      { source: "/api", destination: "https://app.usevyra.com/signup?for=api", statusCode: 302 },
      // Canonical host is www. Make the bare-domain redirect permanent (308).
      {
        source: "/:path*",
        has: [{ type: "host", value: "usevyra.com" }],
        destination: "https://www.usevyra.com/:path*",
        permanent: true,
      },
      // The production *.vercel.app alias gets crawled as a duplicate site.
      // Preview URLs (vyra-landing-git-*) have different hosts and stay reachable.
      {
        source: "/:path*",
        has: [{ type: "host", value: "vyra-landing-eta.vercel.app" }],
        destination: "https://www.usevyra.com/:path*",
        permanent: true,
      },
      // Comparison posts moved out of the blog into /compare. Old URLs keep working.
      { source: "/blog/vyra-vs-capcut", destination: "/compare/vyra-vs-capcut", permanent: true },
      { source: "/blog/vyra-vs-descript", destination: "/compare/vyra-vs-descript", permanent: true },
      { source: "/blog/vyra-vs-veed", destination: "/compare/vyra-vs-veed", permanent: true },
      // Format × task prompt pairs that already have a hand-written page.
      ...promptOverrideRedirects(),
    ];
  },
};

export default nextConfig;
