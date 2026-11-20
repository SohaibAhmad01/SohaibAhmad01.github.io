/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep the dev server's chunks separate from production builds in `.next`.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
