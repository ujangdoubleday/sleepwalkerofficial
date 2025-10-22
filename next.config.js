/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    outputFileTracingIncludes: {
      "/api/search/documentation": ["./content/**/*"],
    },
  },
  async headers() {
    const isDev = process.env.NODE_ENV === "development"

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Content-Security-Policy",
            value: `
script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://vercel.live https://network.us20.list-manage.com;
object-src 'none';
base-uri 'self';
form-action 'self';
frame-ancestors 'none';
${isDev ? '' : 'upgrade-insecure-requests;'}
            `.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/tentang-kami",
        destination: "/tentang-kami/sejarah-kami",
        permanent: true,
      },
      {
        source: "/portofolio",
        destination: "/portofolio/portofolio-kami",
        permanent: true,
      },
      {
        source: "/layanan",
        destination: "/layanan/pengembangan-produk",
        permanent: true,
      },
      {
        source: "/produk",
        destination: "/produk/jersey",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
