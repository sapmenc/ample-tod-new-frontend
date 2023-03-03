/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["ik.imagekit.io", "cdni.iconscout.com"],
  },
};

module.exports = nextConfig;
