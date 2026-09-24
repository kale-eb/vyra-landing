import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Comparison posts moved out of the blog into /compare. Old URLs keep working.
      { source: "/blog/vyra-vs-capcut", destination: "/compare/vyra-vs-capcut", permanent: true },
      { source: "/blog/vyra-vs-descript", destination: "/compare/vyra-vs-descript", permanent: true },
      { source: "/blog/vyra-vs-veed", destination: "/compare/vyra-vs-veed", permanent: true },
    ];
  },
};

export default nextConfig;
