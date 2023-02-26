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

      let service_images:HTMLImageElement[] = gsap.utils.toArray('.service__image');
      let service_imagess:HTMLImageElement[] = gsap.utils.toArray('.service__image img');
      let service_items:HTMLImageElement[] = gsap.utils.toArray('.service__item-6');

      if (service_items) {
        service_items.forEach((image, i:number) => {
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

      let navItems:HTMLAnchorElement[] = gsap.utils.toArray('.service__list-6 li a');
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

  const services = [
    {
      imgSrc: '/imgs/service/1.jpg',
      title: 'Interaction Design',
      description:
        'This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.',
      subServices: [
        'API Development',
        'WordPress',
        'Cloud Migration',
        'Front End Development',
        'JavaScript',
        'Fluter Framework',
      ],
    },
    {
      imgSrc: '/imgs/service/2.jpg',
      title: 'Web & Mobile Development',
      description:
        'This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.',
      subServices: [
        'API Development',
        'WordPress',
        'Cloud Migration',
        'Front End Development',
        'JavaScript',
        'Fluter Framework',
      ],
    },
    {
      imgSrc: '/imgs/service/3.jpg',
      title: 'Motion & Branding Design',
      description:
        'This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.',
      subServices: [
        'API Development',
        'WordPress',
        'Cloud Migration',
        'Front End Development',
        'JavaScript',
        'Fluter Framework',
      ],
    },
    {
      imgSrc: '/imgs/service/4.jpg',
      title: 'Digital Maketing',
      description:
        'This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.',
      subServices: [
        'API Development',
        'WordPress',
        'Cloud Migration',
        'Front End Development',
        'JavaScript',
        'Fluter Framework',
      ],
    },
    {
      imgSrc: '/imgs/service/5.jpg',
      title: 'Concept & Strategy',
      description:
        'This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.',
      subServices: [
        'API Development',
        'WordPress',
        'Cloud Migration',
        'Front End Development',
        'JavaScript',
        'Fluter Framework',
      ],
    },
    {
      imgSrc: '/imgs/service/6.jpg',
      title: 'Illustrations & Prototype',
      description:
        'This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.',
      subServices: [
        'API Development',
        'WordPress',
        'Cloud Migration',
        'Front End Development',
        'JavaScript',
        'Fluter Framework',
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>Pointsyncc - Services</title>
        <meta name='description' content='Services' />
      </Head>
      <div ref={comp}>
        <Solution/>

        <section className='service__area-6'>
          <div className='container'>
            <div className='row inherit-row'>
              <div className='col-xxl-12'>
                <div className='content-wrapper'>
                  <div className='left-content'>
                    <ul className='service__list-6'>
                      <li className='active'>
                        <a href='#service_1'>
                          Interaction <br />
                          Design
                        </a>
                      </li>
                      <li>
                        <a href='#service_2'>
                          Web & Mobile <br />
                          Development
                        </a>
                      </li>
                      <li>
                        <a href='#service_3'>
                          Motion & Branding <br />
                          Design
                        </a>
                      </li>
                      <li>
                        <a href='#service_4'>
                          Digital <br /> Maketing
                        </a>
                      </li>
                      <li>
                        <a href='#service_5'>
                          Concept and <br />
                          Strategy
                        </a>
                      </li>
                      <li>
                        <a href='#service_6'>
                          Illustrations & <br /> Prototype
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className='mid-content'>
                    <div className='service__image'>
                      <img src='/imgs/service/1.jpg' alt='Service Image' />
                    </div>
                    <div className='service__image'>
                      <img src='/imgs/service/2.jpg' alt='Service Image' />
                    </div>
                    <div className='service__image'>
                      <img src='/imgs/service/3.jpg' alt='Service Image' />
                    </div>
                    <div className='service__image'>
                      <img src='/imgs/service/4.jpg' alt='Service Image' />
                    </div>
                    <div className='service__image'>
                      <img src='/imgs/service/5.jpg' alt='Service Image' />
                    </div>
                    <div className='service__image'>
                      <img src='/imgs/service/4.jpg' alt='Service Image' />
                    </div>
                  </div>

                  <div className='right-content'>
                    <div className='service__items-6'>
                      {services.map((service, index) => {
                        return (
                          <Service id={(index + 1).toString()} key={service.title} {...service} />
                        );
                      })}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Brands/>

        <CTA />
      </div>
    </>
  );
};

Services.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export default Services;
