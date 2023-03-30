import React from 'react';
import {FadeIn} from '../common/animations/FadeIn';
import { SplitCome } from '../common/animations/SplitCome';
import Image from '../ui/image/Image';
import { Trans, useTranslation } from 'next-i18next';
import { Link } from '../ui/link/Link';

const Hero = () => {

  const {t} = useTranslation('about')

  return (
    <section className='hero__about'>
      <div className='container g-0 line'>
        <span className='line-3'></span>
        <div className='row'>
          <div className='col-xxl-12'>
            <div className='hero__about-content'>
              <SplitCome type='words'>
                <h1 className='hero-title animation__word_come'>
                  {t('page.hero.title')}
                </h1>
              </SplitCome>

              <div className='hero__about-info'>
                <div className='hero__about-btn'>
                  <div className='btn_wrapper'>
                    <Link href='/services' className='wc-btn-primary btn-hover btn-item'>
                      <Trans i18nKey='page.hero.button' t={t}>
                      <span></span> Trends & <br />
                      technology
                      <i className='fa-solid fa-arrow-right'></i>
                      </Trans>
                    </Link>
                  </div>
                </div>
                <FadeIn className='hero__about-text'>
                  <p>
                  {t('page.hero.text')}
                  </p>
                </FadeIn>

                {/* <div className='hero__about-award'>
                  <Image
                    priority={true}
                    width={126}
                    height={82}
                    raw={true}
                    src='/imgs/about/award.png'
                    alt='Best Studio Award'
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className='row hero__about-row'>
          <div className='col-xxl-12'>
            <div className='hero__about-video'>
              {/* <video loop={true} muted={true} autoPlay={true} playsInline={true}>
                <source src='/video/video.mp4' type='video/mp4' />
              </video> */}
              <Image
                style={{ height: 'auto' }}
                width={1618}
                height={910}
                raw={true}
                src='https://tokyo.fra1.cdn.digitaloceanspaces.com/projects%2Ftokyo-shrimp%2Fabout-us%2Fabout-page-hero-image-1618x910-01.jpg'
                alt='Story Thumbnail'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
