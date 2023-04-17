import AnimatedImage from '../ui/image/AnimatedImage';

import { Trans, useTranslation } from 'next-i18next';
import SectionTitle from '../ui/sectionTitle/SectionTitle';

export default function Testimonial() {
  const { t } = useTranslation(['homepage']);

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'CEO, Company',
      image: '/imgs/testimonial/1/1.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 1,
      name: 'John Doe',
      designation: 'CEO, Company',
      image: '/imgs/testimonial/1/1.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 1,
      name: 'John Doe',
      designation: 'CEO, Company',
      image: '/imgs/testimonial/1/1.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    <section className='testimonial__area'>
      <div className='container g-0 line'>
        <span className='line-3'></span>
        <div className='row'>
          <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-8'>
            <div className='testimonial__wrapper'>
              <div className='testimonial__item item-1'>
                <div className='button modal-trigger'>
                  <AnimatedImage
                    containerClasses='testimonial__img b-right'
                    raw={true}
                    style={{ position: 'relative', height: 'auto' }}
                    width={330}
                    height={430}
                    src='/imgs/testimonial/1/1.png'
                    alt='Testimonial Image'
                  />
                  <h2 className='testimonial__title'>Suzana Sredić</h2>
                  <h3 className='testimonial__role'>Voditeljica postrojenja Bohor u Belovaru</h3>
                </div>
              </div>
              <div className='sec-title-wrapper text-anim'>
                <h4 className='sec-sub-title'>{t('testimonials.subtitle')}</h4>
                <SectionTitle>
                  <Trans i18nKey='testimonials.title' t={t}>
                    Clients <br />
                    feedback
                  </Trans>
                </SectionTitle>

                <p>{t('testimonials.text')}</p>
              </div>
            </div>

            <div className='testimonial__item item-2'>
              <div className='button modal-trigger-2'>
                <AnimatedImage
                  containerClasses='testimonial__img b-left'
                  raw={true}
                  style={{ position: 'relative', height: 'auto' }}
                  width={220}
                  height={300}
                  src='/imgs/testimonial/1/3.png'
                  alt='Testimonial Image'
                />

                <h2 className='testimonial__title'>Ivana Kurtov</h2>
                <h3 className='testimonial__role'>Osnivačica Kindwhenhard.com platforme</h3>
              </div>
            </div>
          </div>
          <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
            <div className='testimonial__item item-3 img-'>
              <div className='button modal-trigger-3'>
                <AnimatedImage
                  containerClasses='testimonial__img b-left'
                  raw={true}
                  style={{ position: 'relative', height: 'auto' }}
                  width={260}
                  height={360}
                  src='/imgs/testimonial/1/2.png'
                  alt='Testimonial Image'
                />

                <h2 className='testimonial__title'>Marijan Marković</h2>
                <h3 className='testimonial__role'>Predstavnik glazbene grupe Maheri</h3>
                {/* <p className='testimonial__text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
