import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        {/* <meta name='viewport' content='width=device-width, initial-scale=1' /> */}
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta property='og:title' content='Pointsyncc' />
        <meta property='og:description' content='Enter the digital world.' />
        <meta
          property='og:image'
          content='https://pointsyncc.com/imgs/pointsyncc/logo/desktop/color.png'
        />
        <meta property='og:url' content='https://pointsyncc.com' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Pointsyncc' />
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
