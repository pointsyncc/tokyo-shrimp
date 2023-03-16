import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';
import Image from '../ui/image/Image';
import SectionTitle from '../ui/sectionTitle/SectionTitle';
import { RotateIn } from '../common/animations/RotateIn';
import AnimatedImage from '../ui/image/AnimatedImage';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  // const comp = useRef(null);
  // const container = useRef(null);
  // const titleAnim = useRef(null);
  // const imgAnim1 = useRef(null);
  // const imgAnim2 = useRef(null);
  // const textAnim = useRef(null);
  // useIsomorphicLayoutEffect(() => {
  //   // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
  //   let ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: titleAnim.current,

  //         scrub: 1,
  //       }, // start the animation when ".box" enters the viewport (once)
  //     });
  //     // tl.fromTo(
  //     //   titleAnim.current,
  //     //   { opacity: 0, y: 50, delay: 1 },
  //     //   { opacity: 1, y: 0, duration: 1 },
  //     // );

  //     tl.fromTo(textAnim.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });

  //     tl.fromTo(imgAnim1.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 }, 1.25);
  //     tl.fromTo(imgAnim2.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 }, 1.5);

  //     // splitTitleLines.forEach(splitTextLine => {
  //     //   const tl = gsap.timeline({
  //     //     scrollTrigger: {
  //     //       trigger: splitTextLine,
  //     //       start: 'top 90%',
  //     //       end: 'bottom 60%',
  //     //       scrub: false,
  //     //       markers: false,
  //     //       toggleActions: 'play none none none'
  //     //     }
  //     //   });

  //     // const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
  //     // gsap.set(splitTextLine, { perspective: 400 });
  //     // itemSplitted.split({ type: "lines" })
  //     // tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
  //   }, comp); // <- IMPORTANT! Scopes selector text

  //   return () => ctx.revert(); // cleanup
  // }, []);
  return (
    <section className='about__area'>
      <div className='container line g-0 pt-140 pb-130'>
        <span className='line-3'></span>
        <div className='row'>
          <div className='col-xxl-12'>
            <div className='about__title-wrapper'>
              <SectionTitle>
                We unlock the potential of your business with creative design
              </SectionTitle>
              {/* <h3 className='sec-title title-anim'>
                We unlock the potential of your business with creative design
              </h3> */}
            </div>

            <div className='about__content-wrapper'>
              <div className='about__img'>
                <AnimatedImage
                  containerClasses={'img-anim bring-front'}
                  className='anim-rotate-in'
                  raw={true}
                  style={{ position: 'relative', height: 'auto' }}
                  width={440}
                  height={564}
                  src='/imgs/about/1/1.jpg'
                  alt='About Image'
                />

                {/* <div className='img-anim bring-front'>
                  <RotateIn>
                    <Image
                      className='anim-rotate-in'
                      raw={true}
                      style={{ position: 'relative', height: 'auto' }}
                      width={440}
                      height={564}
                      src='/imgs/about/1/1.jpg'
                      alt='About Image'
                    />
                  </RotateIn>


                </div> */}

                {/* <div className='about__img-right bring-front'> */}
                  <AnimatedImage
                    containerClasses='about__img-right bring-front'
                    className='anim-rotate-in'
                    raw={true}
                    style={{ position: 'relative', height: 'auto' }}
                    width={220}
                    height={250}
                    src='/imgs/about/1/2.jpg'
                    alt='About Image Right'
                  >
                    <div className='shape'>
                      <div className='secondary' data-speed='0.9'></div>
                      <div className='primary'></div>
                    </div>
                  </AnimatedImage>
                  {/* <RotateIn>
                    <Image
                      className='anim-rotate-in'
                      raw={true}
                      style={{ position: 'relative', height: 'auto' }}
                      width={220}
                      height={250}
                      src='/imgs/about/1/2.jpg'
                      alt='About Image Right'
                    />
                  </RotateIn> */}
                  {/* <img src='imgs/about/1/2.jpg' alt='About Image Right' data-speed='0.5' /> */}
                  {/* <div className='shape'>
                    <div className='secondary' data-speed='0.9'></div>
                    <div className='primary'></div>
                  </div>
                </div> */}
              </div>

              <div className='about__content text-anim'>
                <p>
                  From traditional PR and thought leadership campaigns to storytelling and creative
                  social media management we’ve got you covered. Something is not your average
                  order-taking vendor. We are proud to be the go-to partner for some of the world’s
                  biggest agencies and brands because they trust our expertise
                </p>

                <div className='cursor-btn btn_wrapper'>
                  <a className='btn-item wc-btn-primary btn-hover' href='about.html'>
                    <span></span> Explore Us <i className='fa-solid fa-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
