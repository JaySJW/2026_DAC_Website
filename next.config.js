/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/2026_DAC_Website' : '',
  assetPrefix: isProd ? '/2026_DAC_Website/' : '',
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/2026_DAC_Website' : '',
  },
}

module.exports = nextConfig
