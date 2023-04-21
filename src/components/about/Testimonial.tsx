import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useTranslation } from 'next-i18next';
import { FaArrowLeft } from 'react-icons/fa';
import Image from '../ui/image/Image';
const Testimonial = () => {
  const { t } = useTranslation('about');

  const testimonials = [
    {
      title: `${t('page.section.testimonial.title')}`,
      description: `${t('page.section.testimonial.text')}`,
      author: 'Kristijan Vidović',
      imgURL: 'https://tokyo.fra1.cdn.digitaloceanspaces.com/projects/tokyo-shrimp/team/team-kristijan-vidovic-432x550-upscaled.jpg',
      role: 'CEO & Software Developer',
    },
    {
      title: `${t('page.section.testimonial-2.title')}`,
      description: `${t('page.section.testimonial-2.text')}`,
      author: 'Kristijan Vidović',
      imgURL: 'https://tokyo.fra1.cdn.digitaloceanspaces.com/projects/tokyo-shrimp/team/team-kristijan-vidovic-432x550-upscaled.jpg',
      role: 'CEO & Software Developer',
    },
    {
      title: `${t('page.section.testimonial-3.title')}`,
      description: `${t('page.section.testimonial-3.text')}`,
      author: 'Kristijan Vidović',
      imgURL: 'https://tokyo.fra1.cdn.digitaloceanspaces.com/projects/tokyo-shrimp/team/team-kristijan-vidovic-432x550-upscaled.jpg',
      role: 'CEO & Software Developer',
    },
  ];
  return (
    <section className='testimonial__area-2 mt-5'>
      <div className='container g-0 line pb-140'>
        <span className='line-3'></span>

        <div className='row g-0'>
          <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
            <div className='testimonial__video'>
              {/* <video autoPlay={true} muted loop>
                <source src='/video/testimonial.mp4' type='video/mp4' />
              </video> */}
              <Image src='https://tokyo.fra1.cdn.digitaloceanspaces.com/projects/tokyo-shrimp/team/team-kristijan-vidovic-432x550-upscaled.jpg' alt='testimonial' />
            </div>
          </div>

          <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-7'>
            <div className='testimonial__slider-wrapper-2 position-relative'>
              <Splide
                hasTrack={false}
                className='z-index-1'
                options={{
                  gap: 0,
                  trimSpace: true,
                  type: 'loop',
                  drag: 'free',
                  perPage: 1,
                  speed: 2000,
                  pagination: false,
                }}
              >
                <div>
                  <SplideTrack>
                    {testimonials.map((testimonial) => (
                      <SplideSlide className='testimonial__slide' key={testimonial.author}>
                        <div className='testimonial__inner-2 me-0'>
                          <h2 className='testimonial__title-2'>{testimonial.title}</h2>
                          <p className='testimonial__text-2'>{testimonial.description}</p>
                          <h3 className='testimonial__author'>{testimonial.author}</h3>
                          <h4 className='testimonial__role'>{testimonial.role}</h4>
                        </div>
                      </SplideSlide>
                    ))}
                  </SplideTrack>
                  {testimonials.length > 1 && (
                    <div className='testimonial__pagination splide__arrows'>
                      <div
                        className='prev-button splide__arrow splide__arrow--prev bg-transparent'
                        style={{ left: 'unset' }}
                      >
                        <FaArrowLeft style={{ fill: 'var(--gray-7)' }} />
                      </div>
                      <div
                        className='next-button splide__arrow splide__arrow--next bg-transparent'
                        style={{ right: 'unset', fill: 'var(--gray-7)' }}
                      >
                        <FaArrowLeft style={{ fill: 'var(--gray-7)' }} />
                      </div>
                    </div>
                  )}
                </div>
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
