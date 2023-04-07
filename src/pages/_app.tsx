import '../scss/master.scss';
import { Kanit } from 'next/font/google';
import { NextPage } from 'next';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import '../scss/master.scss';
import { PSToaster } from '@/components/common/toast/Toast';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { setLocale } from 'yup';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { fileUrlToUrl, useRouter, withTranslateRoutes } from 'next-translate-routes';
import nextI18NextConfig from '../../next-i18next.config.js';
import SEO from '../next-seo.config';
import React from 'react';
import { DefaultSeo } from 'next-seo';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ErrorBoundary } from 'react-error-boundary';
import error from './error';

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

  // const getAlternateURLs = (locale: string) => {
  //   const langAlternateArray = locales?.map((lang) => {
  //     if(lang !== locale) {
  //       return {
  //         hrefLang: lang,
  //         href: fileUrlToUrl({ pathname, query }, lang)
  //       }
  //     }

  //   })
  //   return langAlternateArray
  // }

  //DOES NOT WORK FOR 404 PAGE - NEED TO FIX!!!
  const getCurrentPageURL = (lang: string) => {
    if (pathname === '/404') return fileUrlToUrl({ pathname: '/', query }, lang);
    if (pathname === '/500') return fileUrlToUrl({ pathname: '/', query }, lang);
    if (pathname === '/de/500') return fileUrlToUrl({ pathname: '/', query }, lang);
    if (pathname === '/en/500') return fileUrlToUrl({ pathname: '/', query }, lang);
    if (pathname === '/hr/500') return fileUrlToUrl({ pathname: '/', query }, lang);
    //or if the pathname starts with /blog  return fileUrlToUrl({ pathname: '/', query }, lang)
    if (pathname.startsWith('/blog')) return fileUrlToUrl({ pathname: '/', query }, lang);
    if (pathname.startsWith('/services')) return fileUrlToUrl({ pathname: '/', query }, lang);
    if (pathname.startsWith('/portfolio')) return fileUrlToUrl({ pathname: '/', query }, lang);
    if (pathname.startsWith('/team')) return fileUrlToUrl({ pathname: '/', query }, lang);
    
    return fileUrlToUrl({ pathname, query }, lang);
  };

  return (
    <React.Fragment>
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
          defer: false, // optional, default to false
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
              <ThemeProvider attribute='class' enableSystem={true}>
                {getLayout(<Component {...pageProps} />)}
                <PSToaster />
              </ThemeProvider>
            </ParallaxProvider>
          </ErrorBoundary>
        </main>
      </GoogleReCaptchaProvider>
    </React.Fragment>
  );
};

// export async function getStaticProps({ locale }: any) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common', 'footer', 'cookie-consent'])),
//       // Will be passed to the page component as props
//     },
//   };
// }

export default withTranslateRoutes(appWithTranslation(App, nextI18NextConfig));
