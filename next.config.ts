import type { NextConfig } from "next";
import { promptOverrideRedirects } from "./src/lib/pseo/overrides";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Canonical host is www. Make the bare-domain redirect permanent (308).
      {
        source: "/:path*",
        has: [{ type: "host", value: "usevyra.com" }],
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
