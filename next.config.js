module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/my-account/**",
        search: "",
      },
    ],
  },
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'], // Cloudinary を許可
  },
};
 // 開発インジケーターを無効化
// experimental: { appDir: true }, // appDir を有効化 
module.exports = nextConfig;