/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  assetPrefix: isProd ? "/result-summary/" : "",
  experimental: {
    appDir: true,
  },
  output: "export",
  reactStrictMode: true,
}
module.exports = nextConfig;
