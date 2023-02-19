import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
export const Hero = () => {
  const comp = useRef(null);
  const heroHeading = useRef(null);
  const heroText = useRef(null);
  const experience = useRef(null);

  useLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      // or we can use refs
      tl.fromTo(
        heroHeading.current,
        { opacity: 0, x: -100, delay: 1 },
        { opacity: 1, x: 0, duration: 1 },
      );
      tl.fromTo(
        heroText.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1.5 },
        '<+=.5',
      );
      tl.fromTo(experience.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, 1.25);
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <section className='hero__area' ref={comp}>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-12'>
            <div className='hero__content animation__hero_one'>
              <a href='service.html'>
                Strategy, Design, Solution Development{' '}
                <span>
                  <i className='fa-solid fa-arrow-right'></i>
                </span>
              </a>
              <div className='hero__title-wrapper'>
                <h1 className='hero__title' ref={heroHeading}>
                  Digital agency studio
                </h1>
                <p className='hero__sub-title' ref={heroText}>
                  With every single one of our clients, we bring forth deep passion for
                  <span> creative problem solving </span>
                  which is what we deliver.
                </p>
              </div>
              <img src='/imgs/icon/arrow-down-big.png' alt='Arrow Down Icon' />
              <div className='experience' ref={experience}>
                <h2 className='title'>25k+</h2>
                <p>
                  Projects completed <br />
                  successfully
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src='/imgs/hero/1/1-bg.png' alt='image' className='hero1_bg' />
    </section>
  );
};
