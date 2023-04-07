import { DefaultSeoProps } from 'next-seo';
import { useRouter } from 'next-translate-routes';


const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'hr_HR',
    url: 'https://www.pointsyncc.com/',
    siteName: 'Pointsyncc',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default config;