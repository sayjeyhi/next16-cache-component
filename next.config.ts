import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  cacheLife: {
    userCacheLife: {
      stale: 60 * 60 * 24 * 14, // 14 days
      revalidate: 10, // 10 second
      expire: 60 * 60 * 24 * 14, // 14 days
    },
  },
};

export default nextConfig;
