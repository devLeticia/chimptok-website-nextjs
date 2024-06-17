/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, 
    swcMinify: true, 
    output:'export',
    images: {
        unoptimized: true
      },
    swcMinify: true,
    // fastRefresh: true,
    // concurrentFeatures: true,
    productionBrowserSourceMaps: false, // Disable source maps in development
    optimizeFonts: false, // Disable font optimization
    // minify: false, // Disable minification
};

export default nextConfig;
