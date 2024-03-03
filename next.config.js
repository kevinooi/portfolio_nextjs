/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
  eslint: {
    dirs: ["pages", "components"], // Specify directories to lint
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
