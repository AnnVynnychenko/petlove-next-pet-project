/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.1.125'],
};

export default nextConfig;
