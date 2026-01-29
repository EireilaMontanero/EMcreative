const isProd = process.env.NODE_ENV === 'production';
const repoName = 'EMcreative';

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'EMcreative';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
} as any;

export default nextConfig;
