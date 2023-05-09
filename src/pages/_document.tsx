import { Html, Head, Main, NextScript } from 'next/document';
import i18nextConfig from '../../next-i18next.config';

export default function Document() {
  const currentLocale = i18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/favicon.svg' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta property='og:title' content='POINTSYNCC' />
        <meta property='og:description' content='Enter the digital world.' />
        <meta
          property='og:image'
          content='https://pointsyncc.com/imgs/pointsyncc/logo/desktop/color.png'
        />
        <meta property='og:url' content='https://pointsyncc.com' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='POINTSYNCC' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@pointsyncc' />
        <meta name='twitter:creator' content='@pointsyncc' />
        <meta name='twitter:title' content='Pointsyncc' />
        <meta name='twitter:description' content='Enter the digital world.' />
        <meta
          name='twitter:image'
          content='https://pointsyncc.com/imgs/pointsyncc/logo/desktop/color.png'
        />
        <meta name='twitter:image:alt' content='Pointsyncc logo' />
        <meta name='twitter:domain' content='pointsyncc.com' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
