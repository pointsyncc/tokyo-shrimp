// POSSIBILITY 1: locize live download usage on client side only
const LocizeBackend = require('i18next-locize-backend/cjs');
const ChainedBackend = require('i18next-chained-backend').default;
const LocalStorageBackend = require('i18next-localstorage-backend').default;

// If you've configured caching for your locize version, you may not need the i18next-localstorage-backend and i18next-chained-backend plugin.
// https://docs.locize.com/more/caching

const isBrowser = typeof window !== 'undefined';

module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'hr',
    locales: ['hr', 'en', 'de'],
  },
  backend: {
    backendOptions: [
      {
        projectId: 'b59ed47c-3553-4983-923f-e48008c88b26',
        apiKey: 'b3599cee-943c-4184-8e7d-952fce9f0199',
        version: 'dev',
      },
    ],
    backends: isBrowser ? [LocalStorageBackend, LocizeBackend] : [],
  },
  serializeConfig: false,
  use: isBrowser
    ? [ChainedBackend /*, require('locize').locizePlugin, require('locize-lastused')*/]
    : [],
  // locizeLastUsed: {
  //   projectId: 'd3b405cf-2532-46ae-adb8-99e88d876733',
  //   apiKey: 'myApiKey', // to not add the api-key in production
  //   version: 'latest',
  //   debounceSubmit: 10000
  // },
  saveMissing: process.env.NODE_ENV === 'development' && isBrowser, // do not set saveMissing to true for production and also not when using the chained backend
};
