/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false, // 開発インジケーターを無効化
  reactStrictMode: true, 
  swcMinify: true, 
  images: {
    domains: ["res.cloudinary.com"], // Cloudinary を許可
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/my-account/**",
        search: "",
      },
    ],
    unoptimized: true, // GitHub Pages 用 (最適化を無効化)
  },
  output: "export", // GitHub Pages 用 (static 出力)
};

module.exports = nextConfig;
