const { PrismaPlugin } = require('@prisma/nextjs-monorepo-workaround-plugin')

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()]
    }

    return config
  },
  reactStrictMode: true,
  transpilePackages: ['ui'],
  images: {
    domains: ['pbs.twimg.com', 'abs.twimg.com'],
  },
  // TODO: Remove this once we have a proper ESLint config
  eslint: {
    ignoreDuringBuilds: true,
  },
}
