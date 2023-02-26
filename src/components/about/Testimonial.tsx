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
        'We were there right at the beginning just when the concept for search engine optimisation taking office and the full of internet. So wewe’ve grown to employ than 50 talented specialists with diverse experiences and broad skill sets of huge markers.',
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
      {/* <div className='swiper testimonial__slider'>
        <div className='swiper-slide testimonial__slide'>
          <div className='testimonial__inner-2'>
            <h2 className='testimonial__title-2'>Amazing digital service</h2>
            <p className='testimonial__text-2'>
              We were there right at the beginning just when the concept for search engine
              optimisation taking office and the full of internet. So wewe’ve grown to employ than
              50 talented specialists with diverse experiences and broad skill sets of huge markers.
            </p>
            <h3 className='testimonial__author'>Adam Syndera</h3>
            <h4 className='testimonial__role'>CEO, Agency</h4>
          </div>
        </div>

        <div className='swiper-slide testimonial__slide'>
          <div className='testimonial__inner-2'>
            <h2 className='testimonial__title-2'>Amazing digital service</h2>
            <p className='testimonial__text-2'>
              We were there right at the beginning just when the concept for search engine
              optimisation taking office and the full of internet. So wewe’ve grown to employ than
              50 talented specialists with diverse experiences and broad skill sets of huge markers.
            </p>
            <h3 className='testimonial__author'>Adam Syndera</h3>
            <h4 className='testimonial__role'>CEO, Agency</h4>
          </div>
        </div>

        <div className='swiper-slide testimonial__slide'>
          <div className='testimonial__inner-2'>
            <h2 className='testimonial__title-2'>Amazing digital service</h2>
            <p className='testimonial__text-2'>
              We were there right at the beginning just when the concept for search engine
              optimisation taking office and the full of internet. So wewe’ve grown to employ than
              50 talented specialists with diverse experiences and broad skill sets of huge markers.
            </p>
            <h3 className='testimonial__author'>Adam Syndera</h3>
            <h4 className='testimonial__role'>CEO, Agency</h4>
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
      </div> */}
    </div>
  );
};

export default Testimonial;
