/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')
const nextConfig = {
  reactStrictMode: true,
  env: {
    WEBSITE_NAME: process.env.WEBSITE_NAME,
  },
  i18n,
};

module.exports = nextConfig;
