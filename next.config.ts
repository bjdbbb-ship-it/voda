import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "cdn.webshopapp.com",
      },
      {
        protocol: "https",
        hostname: "cdn11.bigcommerce.com",
      },
      {
        protocol: "https",
        hostname: "static.whiskybase.com",
      },
      {
        protocol: "https",
        hostname: "img.thewhiskyexchange.com",
      },
      {
        protocol: "https",
        hostname: "www.thewhiskyexchange.com",
      },
      {
        protocol: "https",
        hostname: "dewinespot.co",
      },
      {
        protocol: "https",
        hostname: "seelbachs.com",
      },
      {
        protocol: "https",
        hostname: "mma.prnewswire.com",
      },
      {
        protocol: "https",
        hostname: "thewhiskeywash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "drinkhacker.com",
      },
      {
        protocol: "https",
        hostname: "www.bswliquor.com",
      },
      {
        protocol: "https",
        hostname: "www.masterofmalt.com",
      },
      {
        protocol: "https",
        hostname: "masterofmalt.com",
      },
      {
        protocol: "https",
        hostname: "cdn.masterofmalt.com",
      },
    ],
  },
};

export default nextConfig;
