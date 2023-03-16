import CTA from '@/components/common/CTA';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import Head from 'next/head';
import React, { useLayoutEffect, useRef } from 'react';
import { NextPageWithLayout } from '../_app';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { Service } from '@/components/services/service/Service';
import Solution from '@/components/services/solution/Solution';
import Brands from '@/components/services/brands/Brands';
import ServiceArea from '@/components/services/servicesArea/ServiceArea';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const Services: NextPageWithLayout = () => {
  const comp = useRef(null);
  useLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      gsap.to('.service__list-6', {
        scrollTrigger: {
          trigger: '.service__area-6',
          pin: '.service__list-6',
          pinSpacing: true,
          start: 'top top',
          end: 'bottom bottom',
        },
      });

      gsap.to('.service__image-wrap', {
        scrollTrigger: {
          trigger: '.service__area-6',
          pin: '.mid-content',
          pinSpacing: true,
          start: 'top top',
          end: 'bottom bottom',
          markers: false,
        },
      });

      let service_images: HTMLImageElement[] = gsap.utils.toArray('.service__image');
      let service_imagess: HTMLImageElement[] = gsap.utils.toArray('.service__image img');
      let service_items: HTMLImageElement[] = gsap.utils.toArray('.service__item-6');

      if (service_items) {
        service_items.forEach((image, i: number) => {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: image,
              scrub: 1,
              start: 'top top-=600',
              markers: false,
            },
          });
          tl.to(service_images[i], {
            zIndex: '1',
          });
          tl.to(
            service_imagess[i],
            {
              opacity: 0,
              duration: 1,
              scale: 1.2,
              ease: 'power4.out',
            },
            '-=1',
          );
        });
      }

      let navItems: HTMLAnchorElement[] = gsap.utils.toArray('.service__list-6 li a');
      if (navItems) {
        navItems.forEach((nav) => {
          nav.addEventListener('click', (e) => {
            e.preventDefault();
            const ids = nav.getAttribute('href');
            gsap.to(window, { duration: 0.5, scrollTo: ids!, ease: 'power4.out' });
          });
        });
      }
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <>
      <Head>
        <title>Pointsyncc - Services</title>
        <meta name='description' content='Services' />
      </Head>
      <div ref={comp}>
        <Solution />
        <ServiceArea />
        <Brands />
        <CTA />
      </div>
    </>
  );
};

Services.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export default Services;
