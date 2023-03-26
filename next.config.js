/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')
const withTranslateRoutes = require('next-translate-routes/plugin')

const nextConfig = {
  reactStrictMode: true,
  env: {
    WEBSITE_NAME: process.env.WEBSITE_NAME,
  },
  i18n,
  images: {
    domains: ['tokyo.fra1.cdn.digitaloceanspaces.com'],
  },
};

module.exports = withTranslateRoutes(nextConfig);
