import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    DB_URL: process.env.DB_URL,
  },
};

export default nextConfig;
