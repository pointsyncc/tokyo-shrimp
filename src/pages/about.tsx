import { TeamSlider} from '@/components/common/Team';
import Counter from '@/components/common/Counter';
import CTA from '@/components/common/CTA';
import Testimonial from '@/components/about/Testimonial';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import React from 'react';
import { NextPageWithLayout } from './_app';

const About:NextPageWithLayout = () => {
  return (
      <>
      <section className='hero__about'>
        <div className='container g-0 line'>
          <span className='line-3'></span>
          <div className='row'>
            <div className='col-xxl-12'>
              <div className='hero__about-content'>
                <h1 className='hero-title animation__word_come'>
                  We’re a full service creative and digital agency, working globally with leargest
                  brands.
                </h1>
                <div className='hero__about-info'>
                  <div className='hero__about-btn'>
                    <div className='btn_wrapper'>
                      <a href='service.html' className='wc-btn-primary btn-hover btn-item'>
                        <span></span> Trends & <br />
                        technology
                        <i className='fa-solid fa-arrow-right'></i>
                      </a>
                    </div>
                  </div>
                  <div className='hero__about-text title-anim'>
                    <p>
                      Think of the world&apos;s most iconica and successful brands easily findable,
                      impactful. Interactional and exceptional designs. Our story takes beginning in
                      2013
                    </p>
                  </div>
                  <div className='hero__about-award'>
                    <img src='/imgs/about/award.png' alt='Best Studio Award' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row hero__about-row'>
            <div className='col-xxl-12'>
              <div className='hero__about-video'>
                <video loop={true} muted={true} autoPlay={true} playsInline={true}>
                  <source src='/video/video.mp4' type='video/mp4' />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='story__area'>
        <div className='container g-0 line pt-140'>
          <span className='line-3'></span>
          <div className='sec-title-wrapper'>
            <div className='from-text'>
              from <span>1990</span>
            </div>

            <div className='row'>
              <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
                <h2 className='sec-sub-title title-anim'>Digital Studio</h2>
                <h3 className='sec-title title-anim'>Our story</h3>
              </div>
              <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-7'>
                <div className='story__text'>
                  <p>
                    Your brand is the most important asset in your company let our team of
                    professionals help you with a good strategy took the runway next with an edgy
                    collection featuring dyed denim pieces. The collection included patchwork denim,
                    a trend that has recently exploded in younger generations. Playing on aspects of
                    sustainability, the pieces appeared to be upcycled to establish dimension and
                    flair. This take on grunge and streetwear took sustainable fashion to an
                    entirely new level.
                  </p>
                  <p>
                    ur specialized team of researchers, strategists, designers, developers, and
                    project managers work with streamlined processes to break through organizational
                    roadblocks. We translate research into solutions, crafting thoughtful and
                    unified brands.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>
              <div className='story__img-wrapper'>
                <img src='/imgs/story/1.jpg' alt='Story Thumbnail' className='w-100' />
              </div>
            </div>
            <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
              <div className='story__img-wrapper img-anim'>
                <img src='/imgs/story/2.jpg' alt='Story Thumbnail' data-speed='auto' />
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
              <div className='story__img-wrapper'>
                <img src='/imgs/story/3.jpg' alt='Story Thumbnail' />
                <img src='/imgs/story/4.jpg' alt='Story Thumbnail' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Counter/>
      <TeamSlider/>

      <section className='brand__area'>
        <div className='container g-0 line pt-140 pb-140'>
          <span className='line-3'></span>
          <div className='row g-0'>
            <div className='col-xxl-12'>
              <div className='sec-title-wrapper'>
                <h2 className='sec-sub-title title-anim'>Internation Brands</h2>
                <h3 className='sec-title title-anim'>
                  We are happy to work with global <br />
                  largest brands
                </h3>
              </div>
            </div>

            <div className='brand__list'>
              <div className='brand__item fade_bottom'>
                <img src='/imgs/brand/1.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='/imgs/brand/2.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='/imgs/brand/3.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='/imgs/brand/4.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='/imgs/brand/5.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='/imgs/brand/6.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='/imgs/brand/3.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='/imgs/brand/4.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='/imgs/brand/5.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='/imgs/brand/6.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='/imgs/brand/1.png' alt='Brand Logo' />
              </div>
              <div className='brand__item fade_bottom'>
                <img src='/imgs/brand/2.png' alt='Brand Logo' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='testimonial__area-2'>
        <div className='container g-0 line pb-140'>
          <span className='line-3'></span>

          <div className='row g-0'>
            <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
              <div className='testimonial__video'>
                <video autoPlay={true} muted loop>
                  <source src='/video/testimonial.mp4' type='video/mp4' />
                </video>
              </div>
            </div>

            <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-7'>
              <Testimonial/>
              {/* <div className='testimonial__slider-wrapper-2'>
                <div className='swiper testimonial__slider'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide testimonial__slide'>
                      <div className='testimonial__inner-2'>
                        <h2 className='testimonial__title-2'>Amazing digital service</h2>
                        <p className='testimonial__text-2'>
                          We were there right at the beginning just when the concept for search
                          engine optimisation taking office and the full of internet. So wewe’ve
                          grown to employ than 50 talented specialists with diverse experiences and
                          broad skill sets of huge markers.
                        </p>
                        <h3 className='testimonial__author'>Adam Syndera</h3>
                        <h4 className='testimonial__role'>CEO, Agency</h4>
                      </div>
                    </div>

                    <div className='swiper-slide testimonial__slide'>
                      <div className='testimonial__inner-2'>
                        <h2 className='testimonial__title-2'>Amazing digital service</h2>
                        <p className='testimonial__text-2'>
                          We were there right at the beginning just when the concept for search
                          engine optimisation taking office and the full of internet. So wewe’ve
                          grown to employ than 50 talented specialists with diverse experiences and
                          broad skill sets of huge markers.
                        </p>
                        <h3 className='testimonial__author'>Adam Syndera</h3>
                        <h4 className='testimonial__role'>CEO, Agency</h4>
                      </div>
                    </div>

                    <div className='swiper-slide testimonial__slide'>
                      <div className='testimonial__inner-2'>
                        <h2 className='testimonial__title-2'>Amazing digital service</h2>
                        <p className='testimonial__text-2'>
                          We were there right at the beginning just when the concept for search
                          engine optimisation taking office and the full of internet. So wewe’ve
                          grown to employ than 50 talented specialists with diverse experiences and
                          broad skill sets of huge markers.
                        </p>
                        <h3 className='testimonial__author'>Adam Syndera</h3>
                        <h4 className='testimonial__role'>CEO, Agency</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='testimonial__pagination'>
                  <div className='prev-button'>
                    <i className='fa-solid fa-arrow-right'></i>
                  </div>
                  <div className='next-button'>
                    <i className='fa-solid fa-arrow-left'></i>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      </>
  );
};


About.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export default About;
