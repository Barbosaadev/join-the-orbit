/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloudcfo.ph',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
