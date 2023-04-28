import CTA from '@/components/common/CTA';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import Brands from '@/components/services/brands/Brands';
import ServiceArea from '@/components/services/servicesArea/ServiceArea';
import Solution from '@/components/services/solution/Solution';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { NextPageWithLayout } from '../_app';

const ns = ['common', 'footer', 'cookie-consent', 'homepage', 'seo'];

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

  const { t, i18n } = useTranslation(ns, {
    bindI18n: 'languageChanged loaded',
  });
  // bindI18n: loaded is needed because of the reloadResources call
  // if all pages use the reloadResources mechanism, the bindI18n option can also be defined in next-i18next.config.js
  useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, ns);
  }, []);

  return (
    <>
      <NextSeo
        title={`${t('pages.services.title', { ns: 'seo' })} | Pointsyncc`}
        description={`${t('pages.services.meta_description', { ns: 'seo' })}`}
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

export default Services;
