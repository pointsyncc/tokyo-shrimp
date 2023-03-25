import React from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

// import { Autoplay, FreeMode } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
export const Roll = () => {
  const categories = [
    'Development',
    'Studio',
    'Strategy',
    'Branding',
    'Agency',
    'typhography',
    'Design',
    'Interaction',
    'Element',
    'Digital Solution',
  ];

  return (
    <section className='roll__area'>
                {/* <DropdownMenuDemo/> */}
      <Splide
        className='roll__slider'
        extensions={{ AutoScroll }}
        options={{
          arrows: false,
          pagination: false,
          type: 'loop',
          drag: 'free',
          focus: 'center',
          autoWidth: true,
          gap: 80,
          perPage: 3,
          autoScroll: {
            speed: 0.5,
          },
          breakpoints: {
            640: {
              perPage: 3,
            },
            800: {
              perPage: 3,
            },
            1024: {
              perPage: 4,
            },
            1300: {
              perPage: 5,
            },
            1900: {
              perPage: 8,
            },
          },
        }}
      >
        {categories.map((category) => {
          return (
            <SplideSlide className='roll__slide' key={category}>
              <h2>{category}</h2>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};
