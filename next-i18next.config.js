/* const isBrowser = typeof window !== 'undefined';
 */

// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'hr',
    locales: ['hr','en', 'de'],
    localePath: path.resolve('./public/locales')
  },
/*   ns: ['common', 'footer', 'homepage', 'cookie-consent', 'contact', 'team', 'about', 'seo', 'blog', '404', '505', 'terms-and-conditions', 'privacy-policy'], // the namespaces needs to be listed here, to make sure they got preloaded
 *//*   backend: {
    projectId: process.env.NEXT_PUBLIC_LOCIZE_PROJECT_ID,
    version: process.env.NEXT_PUBLIC_LOCIZE_VERSION,
    apiKey: process.env.NEXT_PUBLIC_LOCIZE_API_KEY, // to not add the api-key in production, used for saveMissing feature
    referenceLng: 'hr'
  },
  
  use: [
    require('i18next-locize-backend/cjs')
  ],
  serializeConfig: false, // because of the custom use i18next plugin
  debug: process.env.NODE_ENV === 'development',
  saveMissing: process.env.NODE_ENV === 'development' && isBrowser, // to not saveMissing to true for production */
}