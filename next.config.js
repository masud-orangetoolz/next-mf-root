const NextFederationPlugin = require('@module-federation/nextjs-mf');


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
        new NextFederationPlugin({
          name: 'root',
          remotes: {
              remoteApp: `remoteApp@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          },
          filename: 'static/chunks/remoteEntry.js',
          exposes: {},
          shared: {
            // whatever else
          },
        })
    );

    return config;
  },
}

module.exports = nextConfig
