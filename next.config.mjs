/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    qualities: [75],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
