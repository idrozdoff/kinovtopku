/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'geekville.ru',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'static.life.ru',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
