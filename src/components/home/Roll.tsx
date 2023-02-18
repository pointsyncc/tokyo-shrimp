import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// import { Autoplay, FreeMode } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
export const Roll = () => {
  const categories = [
    "Development",
    "Studio",
    "Strategy",
    "Branding",
    "Agency",
    "typhography",
    "Design",
    "Interaction",
    "Element",
    "Digital Solution",
  ];

  return (
    <section className="roll__area">
      {/* <Swiper
      wrapperClass="roll__wrapper"
        modules={[Autoplay, FreeMode]}
        className="roll__slider"
        loop={true}
        freeMode={true}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        allowTouchMove={false}
        speed={2000}
        autoplay={{ delay: 1, disableOnInteraction: true }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1300: {
            slidesPerView: 5,
          },
          1900: {
            slidesPerView: 8,
          },
        }}
      >
        {categories.map((category) => {
          return (
            <SwiperSlide className="roll__slide" key={category}>
              <h2>{category}</h2>
            </SwiperSlide>
          );
        })}
      </Swiper> */}
      <Splide
        className="roll__slider"
        extensions={{AutoScroll}}
        options={{
          arrows:false,
          pagination:false,
          type   : 'loop',
          drag   : 'free',
          focus  : 'center',
          autoWidth:true,
          padding:100,
          perPage: 3,
          autoScroll: {
            speed: 2,
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
            <SplideSlide className="roll__slide" key={category}>
              <h2>{category}</h2>
            </SplideSlide>
          );
        })}
      </Splide>
      {/* <div className="swiper roll__slider">
        <div className="swiper-wrapper roll__wrapper">
          <div className="swiper-slide roll__slide">
            <h2>Development</h2>
          </div>
          <div className="swiper-slide roll__slide">
            <h2>Studio</h2>
          </div>
          <div className="swiper-slide roll__slide">
            <h2>Strategy</h2>
          </div>
          <div className="swiper-slide roll__slide">
            <h2>Branding</h2>
          </div>
          <div className="swiper-slide roll__slide">
            <h2>Agency</h2>
          </div>
          <div className="swiper-slide roll__slide">
            <h2>typhography</h2>
          </div>
          <div className="swiper-slide roll__slide">
            <h2>Design</h2>
          </div>
          <div className="swiper-slide roll__slide">
            <h2>Interaction</h2>
          </div>
          <div className="swiper-slide roll__slide">
            <h2>Element</h2>
          </div>
          <div className="swiper-slide roll__slide">
            <h2>DIgital SOlution</h2>
          </div>
          <div className="swiper-slide roll__slide">
            <h2>Strategy</h2>
          </div>
          <div className="swiper-slide roll__slide">
            <h2>Branding</h2>
          </div>
          <div className="swiper-slide roll__slide">
            <h2>Agency</h2>
          </div>
          <div className="swiper-slide roll__slide">
            <h2>Interaction</h2>
          </div>
          <div className="swiper-slide roll__slide">
            <h2>DIgital SOlution</h2>
          </div>
        </div>
      </div> */}
    </section>
  );
};
