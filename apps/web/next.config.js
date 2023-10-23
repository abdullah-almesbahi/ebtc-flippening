module.exports = {
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
