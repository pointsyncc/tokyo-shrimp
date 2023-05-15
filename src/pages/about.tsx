import Hero from '@/components/about/Hero';
import Story from '@/components/about/Story';
import Testimonial from '@/components/about/Testimonial';
import CTA from '@/components/common/CTA';
import { TeamSlider } from '@/components/common/Team';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import { NextPageWithLayout } from './_app';

const ns = ['common', 'footer', 'cookie-consent', 'about', 'homepage', 'seo'];

const About: NextPageWithLayout = () => {
  const { t, i18n } = useTranslation(ns, { bindI18n: 'languageChanged loaded' });
  // bindI18n: loaded is needed because of the reloadResources call
  // if all pages use the reloadResources mechanism, the bindI18n option can also be defined in next-i18next.config.js
  useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, ns);
  }, []);

  return (
    <>
      <NextSeo
        title={`${t('pages.about.title', { ns: 'seo' })} | Pointsyncc`}
        description={`${t('pages.about.meta_description', { ns: 'seo' })}`}
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
          title: `${t('pages.homepage.title', { ns: 'seo' })}`,
          description: `${t('pages.homepage.meta_description', { ns: 'seo' })}`,
          images: [
            {
              url: 'https://tokyo.fra1.cdn.digitaloceanspaces.com/projects/tokyo-shrimp/assets/PSC-main-logo-accent-03.pngg',
              width: 800,
              height: 600,
              alt: 'POINTSYNCC Icon',
              type: 'image/jpeg',
            },
            {
              url: 'https://tokyo.fra1.cdn.digitaloceanspaces.com/projects/tokyo-shrimp/assets/PSC-main-logo-accent-03.png',
              width: 900,
              height: 800,
              alt: 'POINTSYNCC Icon',
              type: 'image/jpeg',
            },
            { url: 'https://tokyo.fra1.cdn.digitaloceanspaces.com/projects/tokyo-shrimp/assets/logo-icon-transparent-74x74-trimmed.png' },
            { url: 'https://tokyo.fra1.cdn.digitaloceanspaces.com/projects/tokyo-shrimp/assets/logo-icon-transparent-74x74-trimmed.png' },
          ],
          siteName: 'POINTSYNCC',
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
      {/* <Brand /> */}
      <Testimonial />
      <CTA />
    </>
  );
};

About.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export const getStaticProps = async ({ locale }: any) => {
  const props = await serverSideTranslations(locale, ns);
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
