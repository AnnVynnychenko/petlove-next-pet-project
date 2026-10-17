const isProd = process.env.NODE_ENV === 'production';

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
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/petlove-next-pet-project' : '',
  assetPrefix: isProd ? '/petlove-next-pet-project/' : '',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.1.125'],
};

export default nextConfig;
