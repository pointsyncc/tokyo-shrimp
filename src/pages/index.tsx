import Counter from '@/components/common/Counter';
import CTA from '@/components/common/CTA';
import About from '@/components/home/About';
import Blog from '@/components/home/Blog';
import Brand from '@/components/home/Brand';
import Counter from '@/components/common/Counter';
import { Hero } from '@/components/home/Hero';
import Portifolio from '@/components/home/Portifolio';
import { Roll } from '@/components/home/Roll';
import Service from '@/components/home/Service';
import Testimonial from '@/components/home/Testimonial';
import Workflow from '@/components/home/Workflow';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import { NextPageWithLayout } from './_app';
import Blog from '@/components/home/Blog';
import Testimonial from '@/components/home/Testimonial';
import CTA from '@/components/common/CTA';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Head from 'next/head';
import { useLayoutEffect, useRef } from 'react';
import { NextPageWithLayout } from './_app';

gsap.registerPlugin(ScrollTrigger);

const Home: NextPageWithLayout = () => {
  const comp = useRef(null);
  useLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      gsap.set('.title-anim', { y: 50, opacity: 0 });
      let splitTitleLines = gsap.utils.toArray('.title-anim');
      splitTitleLines.forEach((item: any) => {
        let counterTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,

            start: 'top center+=200',
          },
        });
        counterTl.to(item, {
          y: 0,
          opacity: 1,

          duration: 1.5,
        });
      });
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div ref={comp}>
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

export default Home;
