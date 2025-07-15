/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'aicruitly.com' }],
        destination: 'https://www.aicruitly.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
