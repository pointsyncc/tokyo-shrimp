/** @type {import('next-sitemap').IConfig} */

const baseUrl = process.env.SITE_URL || 'https://pointsyncc.com';
module.exports = {
  siteUrl: baseUrl,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  alternateRefs: [
    {
      href: baseUrl + '/en',
      hreflang: 'en',
    },
    {
      href: baseUrl + '/de',
      hreflang: 'de',
    },
    {
      href: baseUrl + '/hr',
      hreflang: 'hr',
    },
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'test-bot',
        allow: ['/path', '/path-2'],
      },
      {
        userAgent: 'black-listed-bot',
        disallow: ['/sub-path-1', '/path-2'],
      },
    ],
    additionalSitemaps: [`${baseUrl}/server-sitemap.xml`],
  },
};
