import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jpbuizon.github.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;