/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/tools/inventorysystem',
        destination: 'https://management-system-coder-vedanshs-projects.vercel.app', 
      },
      {
        source: '/tools/inventorysystem/:path*',
        destination: 'https://management-system-coder-vedanshs-projects.vercel.app/:path*', 
      },
      {
        source: '/assets/:path*',
        destination: 'https://management-system-coder-vedanshs-projects.vercel.app/assets/:path*', 
      },
    ];
  },
};

module.exports = nextConfig;
