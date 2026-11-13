import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true, // Disables default image optimization server
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jpbuizon.github.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;