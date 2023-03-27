import Counter from '@/components/common/Counter';
import CTA from '@/components/common/CTA';
import { TeamSlider } from '@/components/common/Team';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import HybridTeam from '@/components/team/memberDetails/hybridTeam/HybridTeam';
import { NextSeo } from 'next-seo';
import React from 'react';
import { NextPageWithLayout } from '../_app';

const Team: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title='Pointsyncc - Team'
        description='Team'
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
      <section className='team__area-6'>
        <div className='container line pt-120'>
          <span className='line-3'></span>

          <div className='row'>
            <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-8 offset-xxl-4 offset-xl-4'>
              <div className='sec-title-wrapper  pb-0 pb-xl-5'>
                <h2 className='sec-title animation__char_come'>Talented team </h2>
                <p>
                  We’re a diverse team that works as fancies attention to details, enjoys beers on
                  Friday nights and aspires to design the dent in the universe.
                </p>
              </div>
            </div>
          </div>
        </div>

        <TeamSlider alt={true} />

        <div className='container line pt-150'>
          <div className='line-3'></div>
        </div>

        <div className='team__join-btn'>
          <div className='btn_wrapper'>
            <a href='contact.html' className='wc-btn-primary btn-item btn-hover'>
              <span></span> Join our <br />
              talented team
              <i className='fa-solid fa-arrow-right'></i>
            </a>
          </div>
        </div>
      </section>

      <HybridTeam />

      <Counter />

      <CTA />
    </>
  );
};

Team.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export default Team;
