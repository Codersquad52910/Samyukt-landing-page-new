/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/tools/management-system',
        destination: 'https://management-system-coder-vedanshs-projects.vercel.app', // Base route
      },
      {
        source: '/tools/management-system/:path*',
        destination: 'https://management-system-coder-vedanshs-projects.vercel.app/:path*', // All sub-routes
      },
    ];
  },
};

module.exports = nextConfig;
