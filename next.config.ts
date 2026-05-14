import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["swiper"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Cache successful upstream fetches for 1 year so flaky third-party CDNs
    // (e.g. Unsplash rate-limits) only need to succeed once per image.
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
