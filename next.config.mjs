const isGithubPages = process.env.GITHUB_PAGES === 'true'
const basePath = isGithubPages ? '/portfolio' : ''

process.env.NEXT_PUBLIC_BASE_PATH = basePath

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
}

export default nextConfig
