/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    unoptimized: process.env.NODE_ENV !== "production",
  },
};

export default nextConfig;

