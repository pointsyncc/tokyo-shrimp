import Brand from '@/components/common/Brand';
import CTA from '@/components/common/CTA';
import Counter from '@/components/common/Counter';
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
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { NextPageWithLayout } from './_app';

 

gsap.registerPlugin(ScrollTrigger);

const Home: NextPageWithLayout = () => {

  const router = useRouter()
  const { t, i18n } = useTranslation(['common', 'footer', 'homepage'], { bindI18n: 'languageChanged loaded' })
  // bindI18n: loaded is needed because of the reloadResources call
  // if all pages use the reloadResources mechanism, the bindI18n option can also be defined in next-i18next.config.js
  useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, ['common', 'footer', 'homepage'])
  }, [])

  return (
    <div>
      <Head>
        <title>Pointsyncc - Home</title>
        <meta name='description' content='Home' />
      </Head>
      <Hero />
      <Roll />
      <About />
      <Service />
      <Counter />
      <Workflow />
      <Portifolio />
      <Brand />
      <Testimonial />
      <Blog />
      <CTA />
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export const getStaticProps = async ({ locale }: any) => {
  const props = await serverSideTranslations(locale, ['common', 'footer', 'cookie-consent', 'homepage'])
  return {
    props,
    // if using the approach with the live translation download, meaning using i18next-locize-backend on server side,
    // there is a reloadInterval for i18next-locize-backend that can be used to reload resources in a specific interval: https://github.com/locize/i18next-locize-backend#backend-options
    // doing so it is suggested to also use the revalidate option, here:
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every hour
    // revalidate: 60 * 60, // in seconds
  }
}

export default Home;
