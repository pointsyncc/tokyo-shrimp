const path = require('path')

module.exports = {
    i18n: {
      localePath: path.resolve('./public/locales'),
      defaultLocale: 'en',
      locales: ['en', 'hr'],
    },
  }