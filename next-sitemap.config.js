/** @type {import('next-sitemap').IConfig} */

const baseUrl = process.env.SITE_URL || 'https://pointsyncc.com';
module.exports = {
  siteUrl: baseUrl,
  generateRobotsTxt: true,
  changefreq: 'monthly',
  exclude: ['/server-sitemap.xml', '/404', '/500'], // <= exclude here
  alternateRefs: [
    {
      href: baseUrl,
      hreflang: 'x-default',
    },
    {
      href: baseUrl,
      hreflang: 'hr',
    },
    {
      href: baseUrl + '/en',
      hreflang: 'en',
    },
    {
      href: baseUrl + '/de',
      hreflang: 'de',
    }
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        disallow: ['/404', '/500'],
      },
      // {
      //   userAgent: 'test-bot',
      //   allow: ['/path', '/path-2'],
      // },
      // {
      //   userAgent: 'black-listed-bot',
      //   disallow: ['/sub-path-1', '/path-2'],
      // },
    ],
    sitemapSize: 7000,
    additionalSitemaps: [`${baseUrl}/server-sitemap.xml`],
  },
};
