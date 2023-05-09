/** @type {import('next-sitemap').IConfig} */

const baseUrl = process.env.SITE_URL || 'https://www.pointsyncc.com';
const locales = ['en', 'de', 'hr'];
const excludePaths = ['/404', '/500', '/configuration', '/status/coming-soon', '/error', '/portfolio'];

const crawlersAllow = [
  {
    userAgent: '*',
    allow: '/',
  },
  {
    disallow: excludePaths,
  },
]

const crawlersDisallow = [
  {
    userAgent: '*',
    disallow: '/',
  }
]

module.exports = {
  siteUrl: baseUrl,
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
    },
  ],
  generateRobotsTxt: true,
  changefreq: 'monthly',
  exclude: excludePaths,
  robotsTxtOptions: {
    policies: process.env.NODE_ENV === 'production' ? crawlersAllow : crawlersDisallow,
    sitemapSize: 7000,
    //additionalSitemaps: [`${baseUrl}/server-sitemap.xml`],
  },
  transform: async (config, path) => {
    const notExcluded = !excludePaths.some((pagePath) => path.includes(pagePath));
    if (notExcluded) {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs:
          config.alternateRefs.map((alternate) => {
            // Ex: try to find '/en-US/'
            const hasPathLocale = locales.some((locale) => path.startsWith(`/${locale}/`));

            //  Only fix alternateRefs if path has a locale
            return hasPathLocale
              ? {
                  ...alternate,
                  // Note: it should produce /en/about for /about
                  href: alternate.href + path.slice(3),
                  hrefIsAbsolute: true,
                }
              : alternate;
          }) ?? [],
      };
    }
  },
};
