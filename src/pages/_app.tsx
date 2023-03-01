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

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const {i18n} = useTranslation()
  const getLayout = Component.getLayout || ((page) => page);
  return (
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
        <ThemeProvider attribute='class' enableSystem={true}>
          {getLayout(<Component {...pageProps} />)}
          <PSToaster />
        </ThemeProvider>
      </main>
    </GoogleReCaptchaProvider>
  );
};

export default appWithTranslation(App);
