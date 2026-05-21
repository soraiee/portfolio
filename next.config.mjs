/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
    // Set these exactly to your repository name 'portfolio'
    basePath: '/portfolio',
    assetPrefix: '/portfolio/',
}

export default nextConfig