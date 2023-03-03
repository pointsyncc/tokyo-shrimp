import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import React from 'react';
import '@splidejs/react-splide/css';
import { FaArrowLeft } from 'react-icons/fa';
const Testimonial = () => {
  const testimonials = [
    {
      title: 'Amazing digital service',
      description:
        'We were there right at the beginning just when the concept for search engine optimisation taking office and the full of internet. So wewe’ve grown to employ than 50 talented specialists with diverse experiences and broad skill sets of huge markers.',
      author: 'Adam Syndera',
      role: 'CEO, Agency',
    },
    {
      title: 'Amazing digital service',
      description:
        'We were there right at the beginning just when the concept for search engine optimisation taking office and the full of internet. So we’ve grown to employ than 50 talented specialists with diverse experiences and broad skill sets of huge markers.',
      author: 'Kristijan Vidovic',
      role: 'CEO, Agency',
    },
    {
      title: 'Amazing digital service',
      description:
        'We were there right at the beginning just when the concept for search engine optimisation taking office and the full of internet. So wewe’ve grown to employ than 50 talented specialists with diverse experiences and broad skill sets of huge markers.',
      author: 'Evan yu',
      role: 'CEO, Agency',
    },
  ];
  return (
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
