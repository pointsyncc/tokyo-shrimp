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

const About: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title='Pointsyncc - About'
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
      <Counter />
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

export default About;
