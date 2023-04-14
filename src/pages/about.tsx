import { TeamSlider } from '@/components/common/Team';
import Counter from '@/components/common/Counter';
import CTA from '@/components/common/CTA';
import Testimonial from '@/components/about/Testimonial';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import { NextPageWithLayout } from './_app';
import Hero from '@/components/about/Hero';
import Story from '@/components/about/Story';
import Brand from '@/components/common/Brand';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';

const About: NextPageWithLayout = () => {

  const { t, i18n } = useTranslation([
    'common',
    'footer',
    'cookie-consent',
    'about',
    'homepage'
  ], { bindI18n: 'languageChanged loaded' });
  // bindI18n: loaded is needed because of the reloadResources call
  // if all pages use the reloadResources mechanism, the bindI18n option can also be defined in next-i18next.config.js
  useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, [
      'common',
      'footer',
      'cookie-consent',
      'about',
      'homepage'
    ]);
  }, []);

  return (
    <>
      <NextSeo
        title='About | Pointsyncc'
        description='About'
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Hero />
      <Story />
      {/* <Counter /> */}
      <TeamSlider />
      <Brand />
      <Testimonial />
      <CTA />
    </>
  );
};

About.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export const getStaticProps = async ({ locale }: any) => {
  const props = await serverSideTranslations(locale, [
    'common',
    'footer',
    'cookie-consent',
    'about',
    'homepage'
  ]);
  return {
    props,
    // if using the approach with the live translation download, meaning using i18next-locize-backend on server side,
    // there is a reloadInterval for i18next-locize-backend that can be used to reload resources in a specific interval: https://github.com/locize/i18next-locize-backend#backend-options
    // doing so it is suggested to also use the revalidate option, here:
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every hour
    //revalidate: 60 * 60, // in seconds
  };
};


export default About;
