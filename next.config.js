/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,  // Enable strict mode for better development experience

  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],  // Ensure Next.js recognizes TypeScript and JSX files

  // Setup redirects
  async redirects() {
    return [
      {
        source: '/old-route',   // Old URL
        destination: '/new-route',  // New URL
        permanent: true,  // Permanent redirect
      },
    ];
  },

  // Experimental settings with valid structure for Turbopack
  experimental: {
    turbo: {
      rules: {
        '*.mdx': ['mdx-loader']
      },
    },
  },


  eslint: {
    ignoreDuringBuilds: true,  // Ensure ESLint warnings don't block the build
  },

  env: {
    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
    CONVEX_DEPLOYMENT: process.env.CONVEX_DEPLOYMENT,
    STRIPE_URL_ENDPOINT: process.env.STRIPE_URL_ENDPOINT,
    GA_ID: process.env.GA_ID,
    MC_ID: process.env.MC_ID,
  },
};
