/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['links.papareact.com', 'cdn.pixabay.com', 'images.unsplash.com'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: 'default',
    path: '/_next/image',
    quality: 90, // Increase the quality value to maintain better image quality
  },
};
