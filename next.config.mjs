/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const repositoryName = 'seansakamoto'
const nextConfig = {
  reactStrictMode: isProd,
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(isProd
    ? {
        basePath: `/${repositoryName}`,
        assetPrefix: `/${repositoryName}/`,
      }
    : {}),
  poweredByHeader: false,
  turbopack: {},
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }
    return webpackConfig
  },
}

export default nextConfig
