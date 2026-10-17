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
  output: 'export',
  basePath: '/petlove-next-pet-project',
  assetPrefix: '/petlove-next-pet-project/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
