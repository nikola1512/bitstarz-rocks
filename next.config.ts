import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ["https://job-application.bitstarz.workers.dev"],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1sc13y7hrlskd.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
