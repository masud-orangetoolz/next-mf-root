const NextFederationPlugin = require('@module-federation/nextjs-mf');


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  //   https://next-app-lhvy.vercel.app/
  //   http://localhost:3001

  webpack(config, options) {
    const { isServer } = options;
    console.log("process.env.NEXT_PUBLIC_REMOTE_APP", process.env.NEXT_PUBLIC_REMOTE_APP);

    config.plugins.push(
        new NextFederationPlugin({
          name: 'root',
          remotes: {
              remoteApp: `remoteApp@${process.env.NEXT_PUBLIC_REMOTE_APP}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
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
