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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
 

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
