/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    // --- TODO: Remove the 2 options if possible ---
    webpackBuildWorker: true,
    workerThreads: true,
    // ----------------------------------------------
  },
};

export default nextConfig;
