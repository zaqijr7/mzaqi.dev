/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "img.freepik.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
