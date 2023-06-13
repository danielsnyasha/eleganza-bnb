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
    // Increase the quality value to maintain better image quality
  },
  env:{
    mapbox_key:'pk.eyJ1IjoiZGFuaWVsc255YXNoYSIsImEiOiJjbDNlNTlncnowOHExM2pwNmRzYXpoemY2In0.wG33nAXsCYCgemlQCWZK5w'
  }
};
