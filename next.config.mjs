/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "priority.co.id",
      },
      {
        protocol: "https",
        hostname: "jqkrxekvjidbbvuuidyj.supabase.co",
      },
      {
        protocol: "https",
        hostname: "superlatif.id",
      },
    ],
  },
};

export default nextConfig;
