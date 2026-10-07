/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'customer-assets.emergentagent.com',
      },
    ],
  },
};

export default nextConfig;
