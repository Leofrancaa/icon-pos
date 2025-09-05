/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Importante para Vercel
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Configurações específicas para evitar problemas de build
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: false,
  // Otimizações de performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig