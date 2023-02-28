import '../scss/master.scss';
import { Kanit } from 'next/font/google';

import { NextPage } from 'next';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import '../scss/master.scss';
import { PSToaster } from '@/components/common/toast/Toast';
import { appWithTranslation } from 'next-i18next'
import { setLocale } from 'yup';

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

const App = ({ Component, pageProps }: AppPropsWithLayout)=> {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <NextNProgress color='#e94f23' />
      <main className={kanit.className}>
        <ThemeProvider attribute='class' enableSystem={true}>
          {getLayout(<Component {...pageProps} />)}
          <PSToaster />
        </ThemeProvider>
      </main>
    </>
  );
}

export default appWithTranslation(App);