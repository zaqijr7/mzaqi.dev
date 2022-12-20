/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "img.freepik.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
