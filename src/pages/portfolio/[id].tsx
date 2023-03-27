import { SplitCome } from '@/components/common/animations/SplitCome';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import Image from '@/components/ui/image/Image';
import SectionTitle from '@/components/ui/sectionTitle/SectionTitle';
import { NextSeo } from 'next-seo';
import React from 'react';
import { NextPageWithLayout } from '../_app';

const PortfolioDetails: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title='Pointsyncc - Portfolio Project'
        description='Portfolio Project'
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
      <section className='portfolio__detail'>
        <div className='portfolio__detail-top'>
          <div className='container g-0 line pt-110 pb-130'>
            <span className='line-3'></span>

            <div className='row'>
              <div className='col-xxl-8 col-xl-8 col-lg-7 col-md-7'>
                <div className='sec-title-wrapper'>
                  <SplitCome>
                    <h2 className='sec-title animation__char_come'>
                      Lionpro- <br />
                      Agency
                    </h2>
                  </SplitCome>
                </div>
              </div>

              <div className='col-xxl-4 col-xl-4 col-lg-5 col-md-5'>
                <div className='portfolio__detail-info'>
                  <ul>
                    <li>
                      Category <a href='category.html'>Development</a>
                    </li>
                    <li>
                      Client <span>Webflow</span>
                    </li>
                    <li>
                      Start Date <span>23 January 2021</span>
                    </li>
                    <li>
                      Handover <span>05 March 2021</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='portfolio__detail-thumb'> */}
        <Image
          containerClasses='portfolio__detail-thumb'
          src='/imgs/portfolio/detail/1.jpg'
          alt='Portfolio Thumbnail'
          data-speed='auto'
        />
        {/* </div> */}

        <div className='portfolio__detail-content'>
          <div className='container g-0 line pt-140'>
            <span className='line-3'></span>

            <div className='block-content'>
              <div className='row'>
                <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
                  <SectionTitle className='portfolio__detail-title title-anim'>
                    Build, streamline and evolve together with solution
                  </SectionTitle>
                </div>

                <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-7'>
                  <div className='portfolio__detail-text'>
                    <p>
                      Always ready to push the boundaries, especially when it comes to our own
                      platform, Our analytical eye to create a site that was visually engaging and
                      also optimised for maximum performance. It also perfectly reflects the journey
                      to help it tell a story to increase its understanding and drive action. To
                      create a site that was visually engaging for maximum performance.
                    </p>

                    <ul>
                      <li>+ Brand Development</li>
                      <li>+ UX/UI Design</li>
                      <li>+ Front-end Development</li>
                      <li>+ Copywriting</li>
                      <li>+ Shopify Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='block-thumb'>
              <Image src='/imgs/portfolio/detail/2.jpg' alt='Portfolio Image' data-speed='0.5' />
            </div>

            <div className='block-content  pt-140'>
              <div className='row'>
                <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
                  <SectionTitle className='portfolio__detail-title title-anim'>
                    Visual and typograpy hierarchy
                  </SectionTitle>
                </div>

                <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-7'>
                  <div className='portfolio__detail-text'>
                    <p>
                      Visual hierarchy is the principle of arranging elements to show their order of
                      importance. Designers structure visual characteristics—e.g., menu icons—so
                      users can understand information easily. By laying out elements logically and
                      strategically, designers influence users’ perceptions and guide them to
                      desired actions. Users notice larger elements more easily can convert.
                    </p>

                    <div className='fonts'>
                      <Image
                        style={{ height: 'auto' }}
                        raw={true}
                        width={253}
                        height={170}
                        src='/imgs/portfolio/detail/shape.png'
                        alt='Font Style'
                      />
                      <ul>
                        <li className='regular'>
                          <span>regular</span> This is text message
                        </li>
                        <li className='medium'>
                          <span>Medium</span> Medium typography
                        </li>
                        <li className='semibold'>
                          <span>SemiBold</span> Just Amazing
                        </li>
                        <li className='blod'>
                          <span>Blod</span> Awesome
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='block-gallery'>
              <Image
                className='position-relative'
                raw={true}
                fill
                src='/imgs/portfolio/detail/3.jpg'
                alt='Portfolio Image'
              />
              <Image
                className='position-relative'
                raw={true}
                fill
                src='/imgs/portfolio/detail/4.jpg'
                alt='Portfolio Image'
              />
            </div>

            <div className='block-thumb'>
              <Image
                className='position-relative'
                raw={true}
                fill
                src='/imgs/portfolio/detail/5.jpg'
                alt='Portfolio Image'
                data-speed='0.5'
              />
            </div>

            <div className='block-img-text'>
              <Image
                className='position-relative'
                raw={true}
                fill
                src='/imgs/portfolio/detail/6.jpg'
                alt='Portfolio Image'
              />
              <Image
                className='position-relative'
                raw={true}
                fill
                src='/imgs/portfolio/detail/7.jpg'
                alt='Portfolio Image'
              />
              <p>
                For those of us who are blessed with good sight. So we seldom consider it. That’s
                why going off to investigate the whys and hows involved is a little like trying to
                get behind the wind{' '}
              </p>
            </div>

            <div className='row'>
              <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                <div className='portfolio__detail-btns pt-150 pb-150'>
                  <a href='portfolio-details.html' className='wc-btn-primary btn-hover'>
                    <span></span> Prev Work
                  </a>
                  <a href='portfolio-details.html' className='wc-btn-primary btn-hover'>
                    <span></span> Next Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

PortfolioDetails.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export default PortfolioDetails;
