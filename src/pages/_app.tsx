import { PSToaster } from '@/components/common/toast/Toast';
import { apiPlugin, storyblokInit } from '@storyblok/react';
import { Analytics } from '@vercel/analytics/react';
import { NextPage } from 'next';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { fileUrlToUrl, useRouter, withTranslateRoutes } from 'next-translate-routes';
import type { AppProps } from 'next/app';
import { Kanit } from 'next/font/google';
import NextNProgress from 'nextjs-progressbar';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { ParallaxProvider } from 'react-scroll-parallax';
import { setLocale } from 'yup';
import nextI18NextConfig from '../../next-i18next.config.js';
import '../scss/master.scss';
import error from './error';
import Head from 'next/head.js';

storyblokInit({
  accessToken: 'ATAfmKPqVQixXSpP9dFntgtt',
  use: [apiPlugin],
});

setLocale({
  mixed: {
    required: ({ path }) => `${path} is required`,
  },
  string: {
    // min: ({ min }) => `validations.min|${JSON.stringify({ min })}`,
    // max: ({ max }) => `validations.max|${JSON.stringify({ max })}`,
    email: 'Please provide a valid email address',
  },
});

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

type LangAlternateProps = {
  hrefLang: string;
  href: string;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const { i18n } = useTranslation();
  const getLayout = Component.getLayout || ((page) => page);

  const { pathname, query, locale, locales } = useRouter();

  const getCurrentPageURL = (lang: string) => {
    try {
/*       console.log("PATHNAME", pathname)
      console.log("QUERY", query)
      console.log("LOCALE", locale) */
      return fileUrlToUrl(pathname, lang);
    } catch (error) {
      console.log('fileUrlToUrl Conversion error: ', error);
      return fileUrlToUrl({ pathname: '/', query }, lang);
    }
  };

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: `${locale}`,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}${getCurrentPageURL(locale!)}`,
          siteName: 'Pointsyncc',
        }}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}${getCurrentPageURL(locale!)}`}
        languageAlternates={[
          //The reserved x-default value is used when no other language/region matches the user's browser setting.
          //This value is recommended for specifying the fallback page for users whose language settings don't match any of your site's localized versions.
          {
            hrefLang: 'x-default',
            href: `${process.env.NEXT_PUBLIC_BASE_URL}${getCurrentPageURL('en')}`,
          },
          {
            hrefLang: 'hr',
            href: `${process.env.NEXT_PUBLIC_BASE_URL}${getCurrentPageURL('hr')}`,
          },
          {
            hrefLang: 'en',
            href: `${process.env.NEXT_PUBLIC_BASE_URL}${getCurrentPageURL('en')}`,
          },
          {
            hrefLang: 'de',
            href: `${process.env.NEXT_PUBLIC_BASE_URL}${getCurrentPageURL('de')}`,
          },
        ]}
      />

      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA!}
        language={i18n.language}
        scriptProps={{
          async: false, // optional, default to false,
          defer: true, // optional, default to false
          nonce: undefined, // optional, default undefined
        }}
        container={{
          // optional to render inside custom element

          parameters: {
            theme: 'dark', // optional, default undefined
          },
        }}
      >
        <NextNProgress color='#e94f23' />
        <main className={kanit.className}>
          <ErrorBoundary FallbackComponent={error} onError={(error) => console.log(error.message)}>
            <ParallaxProvider>
              <ThemeProvider attribute='class' defaultTheme='light'>
                {getLayout(<Component {...pageProps} />)}
                <PSToaster />
              </ThemeProvider>
            </ParallaxProvider>
          </ErrorBoundary>
        </main>
      </GoogleReCaptchaProvider>
      <Analytics />
    </React.Fragment>
  );
};

export default withTranslateRoutes(appWithTranslation(App));
