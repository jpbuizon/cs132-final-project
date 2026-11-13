import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Uncomment and change "my-repo" to your exact GitHub repository name 
  // (Skip this line only if using a username.github.io root domain repo)
  basePath: "/my-repo",
  assetPrefix: "/my-repo",

  // 2. Required for static hosting (GitHub Pages) since it lacks a Node.js server
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