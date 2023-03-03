import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import About from '@/components/home/About';

import Brand from '@/components/home/Brand';

import Counter from '@/components/common/Counter';

import { Hero } from '@/components/home/Hero';
import Portifolio from '@/components/home/Portifolio';
import { Roll } from '@/components/home/Roll';
import Service from '@/components/home/Service';

import Workflow from '@/components/home/Workflow';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';

import { NextPageWithLayout } from './_app';
import Blog from '@/components/home/Blog';
import Testimonial from '@/components/home/Testimonial';
import CTA from '@/components/common/CTA';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Head from 'next/head';

gsap.registerPlugin(ScrollTrigger);

const Home: NextPageWithLayout = () => {
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

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
