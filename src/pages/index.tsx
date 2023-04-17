import Brand from '@/components/common/Brand';
import CTA from '@/components/common/CTA';
import About from '@/components/home/About';
import Blog from '@/components/home/Blog';
import { Hero } from '@/components/home/Hero';
import Portifolio from '@/components/home/Portifolio';
import { Roll } from '@/components/home/Roll';
import Service from '@/components/home/Service';
import Testimonial from '@/components/home/Testimonial';
import Workflow from '@/components/home/Workflow';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { NextPageWithLayout } from './_app';
import { GetServerSideProps } from 'next';
import { getAllArticles } from '@/service/StoryblokAPI';

gsap.registerPlugin(ScrollTrigger);

const Home: NextPageWithLayout = (props: any) => {
  const router = useRouter();
  const { t, i18n } = useTranslation(['common', 'footer', 'cookie-consent', 'homepage', 'blog'], {
    bindI18n: 'languageChanged loaded',
  });
  // bindI18n: loaded is needed because of the reloadResources call
  // if all pages use the reloadResources mechanism, the bindI18n option can also be defined in next-i18next.config.js
  useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, ['common', 'footer', 'cookie-consent', 'homepage']);
  }, []);

  return (
    <>
      <NextSeo
        title={`${t('page.title', { ns: 'homepage' })} | Pointsyncc`}
        description='Home'
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
      {/* <Roll /> */}
      <About />
      <Service />
      {/* <Counter /> */}
      <Workflow />
      {/* <Portifolio /> */}
      {/* <Brand /> */}
      <Testimonial />
      <Blog blogs={props.articles} />
      <CTA />
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};


export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => {

  const storyblokRes = await getAllArticles(locale);

    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
          'footer',
          'cookie-consent',
          'homepage',
          'blog',
        ])),
        articles: storyblokRes.data.stories ? storyblokRes.data.stories : [],
      },
    };
};


export default Home;
