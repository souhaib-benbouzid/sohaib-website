/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    });
    return config;
  },

  reactStrictMode: true,
  i18n,
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/articles",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/development",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/",
        permanent: true,
      },
    ];
  },
  output: "standalone",
};
