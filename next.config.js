/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dc-cloud/image/upload/**", 
      },
    ],
  },
};

module.exports = nextConfig;
