import Image from 'next/image';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FadeIn } from '../common/animations/FadeIn';
import { Link } from '../ui/link/Link';
import SectionTitle from '../ui/sectionTitle/SectionTitle';
import { Trans, useTranslation } from 'next-i18next';

export default function Service() {
  const [activeEl, setActiveEl] = useState(0);

  const { t } = useTranslation(['homepage']);

  return (
    <section className='service__area pt-110 pb-150'>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
            <div className='sec-title-wrapper wrap'>
              <h2 className='sec-sub-title title-anim'>{t('service.subtitle', 'Service')}</h2>

              <SectionTitle>
                <Trans i18nKey='service.title' t={t}>
                  Solution we <br />
                  provide
                </Trans>
              </SectionTitle>
            </div>
          </div>
          <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
            <FadeIn direction='x' className='service__top-text text-anim' distance={-50}>
              <p>
                <Trans i18nKey='service.text' t={t}>
                  With every single one of our clients we bring forth a deep passion for{' '}
                  <span>creative problem solving innovations</span> forward thinking brands
                  boundaries
                </Trans>
              </p>
            </FadeIn>
            {/* <div className='service__top-text text-anim'>
              <p>
                With every single one of our clients we bring forth a deep passion for{' '}
                <span>creative problem solving innovations</span> forward thinking brands boundaries
              </p>
            </div> */}
          </div>
          <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>
            <div className='service__top-btn'>
              <div className='btn_wrapper'>
                <Link href='/services' className='btn-item wc-btn-secondary btn-hover'>
                  <Trans i18nKey='service.button' t={t}>
                    <span></span> View <br />
                    all services <FaArrowRight rotate={-45} />
                  </Trans>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='service__list-wrapper'>
          <div className='row'>
            <div className='col-xxl-4 col-xl-4 col-lg-0 col-md-0'>
             {/*  <div className='service__img-wrapper'>
                <div className={'image-container'}>
                  <Image
                    src={'/imgs/pointsyncc/homepage/christopher-gower-m_HRfLhgABo-unsplash.jpg'}
                    width={280}
                    height={380}
                    alt='Service Image'
                    className={`service__img img-2 ${activeEl === 0 ? 'active' : ''}`}
                  />
                </div>

                <Image
                  src='/imgs/service/1/2.png'
                  width={280}
                  height={380}
                  alt='Service Image'
                  className={`service__img img-2 ${activeEl === 1 ? 'active' : ''}`}
                />
                <Image
                  src='/imgs/service/1/3.png'
                  width={280}
                  height={380}
                  alt='Service Image'
                  className={`service__img img-3 ${activeEl === 2 ? 'active' : ''}`}
                />

                <Image
                  src='/imgs/service/1/4.png'
                  width={280}
                  height={380}
                  alt='Service Image'
                  className={`service__img img-4 ${activeEl === 3 ? 'active' : ''}`}
                />

                <span className={`shape-box-1 ${activeEl === 0 ? 'current' : ''}`}></span>
                <span className={`shape-box-2 ${activeEl === 1 ? 'current' : ''}`}></span>
                <span className={`shape-box-3 ${activeEl === 2 ? 'current' : ''}`}></span>
                <span className={`shape-box-4 ${activeEl === 3 ? 'current' : ''}`}></span>
              </div> */}
            </div>
            <div className='col-xxl-8 col-xl-8 col-lg-12 col-md-12'>
              <div className='service__list'>
                <Link href='/' className={`${activeEl === 0 ? 'active' : ''}`}>
                  <div
                    className='service__item animation_home1_service'
                    data-service='1'
                    onMouseEnter={setActiveEl.bind(null, 0)}
                  >
                    <div className='service__number'>
                      <span>01</span>
                    </div>
                    <div className='service__title-wrapper'>
                      <h4 className='service__title'>Web & Mobile Development</h4>
                    </div>
                    <div className='service__text'>
                      <p>
                        We create, products, brands, apps & websites for the companies all around
                        the world className digital products
                      </p>
                    </div>
                    <div className='service__link'>
                      <p>
                        <FaArrowRight rotate={-45} />
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href='/' className={`${activeEl === 1 ? 'active' : ''}`}>
                  <div
                    className='service__item  animation_home1_service'
                    data-service='2'
                    onMouseEnter={setActiveEl.bind(null, 1)}
                  >
                    <div className='service__number'>
                      <span>02</span>
                    </div>
                    <div className='service__title-wrapper'>
                      <h4 className='service__title'>
                        Interaction <br />
                        Design
                      </h4>
                    </div>
                    <div className='service__text'>
                      <p>
                        We create, products, brands, apps & websites for the companies all around
                        the world className digital products
                      </p>
                    </div>
                    <div className='service__link'>
                      <p>
                        <FaArrowRight rotate={-45} />
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href='/' className={`${activeEl === 2 ? 'active' : ''}`}>
                  <div
                    className='service__item  animation_home1_service'
                    data-service='3'
                    onMouseEnter={setActiveEl.bind(null, 2)}
                  >
                    <div className='service__number'>
                      <span>03</span>
                    </div>
                    <div className='service__title-wrapper'>
                      <h4 className='service__title'>
                        Digital <br />
                        Maketing
                      </h4>
                    </div>
                    <div className='service__text'>
                      <p>
                        We create, products, brands, apps & websites for the companies all around
                        the world className digital products
                      </p>
                    </div>
                    <div className='service__link'>
                      <p>
                        <FaArrowRight rotate={-45} />
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href='/' className={`${activeEl === 3 ? 'active' : ''}`}>
                  <div
                    className='service__item  animation_home1_service'
                    data-service='4'
                    onMouseEnter={setActiveEl.bind(null, 3)}
                  >
                    <div className='service__number'>
                      <span>04</span>
                    </div>
                    <div className='service__title-wrapper'>
                      <h4 className='service__title'>Branding and Strategy</h4>
                    </div>
                    <div className='service__text'>
                      <p>
                        We create, products, brands, apps & websites for the companies all around
                        the world className digital products
                      </p>
                    </div>
                    <div className='service__link'>
                      <p>
                        <FaArrowRight rotate={-45} />
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
