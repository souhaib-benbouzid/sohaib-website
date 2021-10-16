/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

module.exports = {
  target: "experimental-serverless-trace",
  reactStrictMode: true,
  i18n,
};
