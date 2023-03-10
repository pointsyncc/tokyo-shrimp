import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
export const Team = () => {
  const slides = [
    {
      imgSrc: '/imgs/team/1.jpg',
      name: 'Kristijan Vidović',
      role: 'Founder & CEO',
    },
    {
      imgSrc: '/imgs/team/2.jpg',
      name: 'Muhammad Shumas',
      role: 'Lead Frontend Developer',
    },
    {
      imgSrc: '/imgs/team/3.jpg',
      name: 'Muhammad Musab',
      role: 'Lead Backend Developer',
    },
    {
      imgSrc: '/imgs/team/4.jpg',
      name: 'Vedran',
      role: 'Marketing Manager',
    },
    {
      imgSrc: '/imgs/team/5.jpg',
      name: 'Daniel',
      role: 'Project Manager',
    },
  ];
  return (
    <section className='team__area pt-140 pb-140'>
      <div className='sec-title-wrapper'>
        <h2 className='sec-sub-title title-anim'>Our Team</h2>
        <h3 className='sec-title title-anim'>How we work</h3>
      </div>

      <Splide
        className='team__slider'
        options={{
          arrows: false,
          pagination: false,
          gap: 30,
        //   focus: 'center',
          type: 'loop',
          drag: 'free',
          speed: 2000,
          perPage: 4,
          breakpoints: {
            640: {
              perPage: 2,
            },
            1000: {
              perPage: 3,
            },
            1200: {
              perPage: 4,
            },
          },
        }}
      >
        {slides.map((slide,i) => {
          return (
            <SplideSlide  key={slide.name}>
              <a href='team-details.html'>
                <img className='img-fluid' src={slide.imgSrc} alt='Team Member' />
                <div className='team__info'>
                  <h4 className='team__member-name'>{slide.name}</h4>
                  <h5 className='team__member-role'>{slide.role}</h5>
                </div>
              </a>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};
