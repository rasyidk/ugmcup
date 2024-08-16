/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "images.pexels.com"], // Tambahkan hostname yang diperlukan
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
