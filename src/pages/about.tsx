import { TeamSlider } from '@/components/common/Team';
import Counter from '@/components/common/Counter';
import CTA from '@/components/common/CTA';
import Testimonial from '@/components/about/Testimonial';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import React from 'react';
import { NextPageWithLayout } from './_app';
import Hero from '@/components/about/Hero';
import Story from '@/components/about/Story';
import Brand from '@/components/common/Brand';

const About: NextPageWithLayout = () => {
  return (
    <>
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
