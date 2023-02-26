import '../scss/master.scss';
import { Kanit } from "next/font/google";

import { NextPage } from 'next';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import '../scss/master.scss';
import { PSToaster } from '@/components/common/toast/Toast';
<<<<<<< HEAD
<<<<<<< HEAD
import { setLocale } from 'yup';


setLocale({
  mixed: {
    required: ({path})=>`${path} is required`,
  },
  string: {
    // min: ({ min }) => `validations.min|${JSON.stringify({ min })}`,
    // max: ({ max }) => `validations.max|${JSON.stringify({ max })}`,
    email:'Please provide a valid email address',
  },

});

=======
>>>>>>> 8546a24e01805ae28144cccc778912bc6e7202b4
=======
>>>>>>> 8546a24e01805ae28144cccc778912bc6e7202b4
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

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <main className={kanit.className}>
      <ThemeProvider attribute='class' enableSystem={true}>
        {getLayout(<Component {...pageProps} />)}
        <PSToaster/>
      </ThemeProvider>
    </main>
  );
}
