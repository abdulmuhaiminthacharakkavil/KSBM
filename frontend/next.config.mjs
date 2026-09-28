/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      }
    ],
  },
  async rewrites() {
    // Safely remove trailing '/api' or '/api/' without affecting subdomains
    const baseUrl = process.env.NEXT_PUBLIC_API_URL 
      ? process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/?$/, '') 
      : 'http://localhost:5000';

    return [
      {
        source: '/uploads/:path*',
        destination: `${baseUrl}/uploads/:path*`
      }
    ]
  },
};

export default nextConfig;
