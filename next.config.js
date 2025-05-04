/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname,
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ap-northeast-1.graphassets.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        pathname: '/**',
      },
    ],
  },
  // Port configuration should be set in package.json scripts instead
}

module.exports = nextConfig 