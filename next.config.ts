import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.freebiesupply.com",
      },
    ],
  },
};

module.exports = nextConfig;
