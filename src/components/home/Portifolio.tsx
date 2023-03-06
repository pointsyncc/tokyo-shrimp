import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';
import React, { useRef } from 'react';
import { Link } from '../ui/link/Link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from '../ui/image/Image';

gsap.registerPlugin(ScrollTrigger);
export default function Portifolio() {
  const portfolioItems = [
    {
      id: 1,
      imgSrc: '/imgs/portfolio/1/1.jpg',
      projectTitle: 'Arteck Lyon Conseil',
      date: '02 May 2021',
    },
    {
      id: 2,
      imgSrc: '/imgs/portfolio/1/2.jpg',
      title: 'Arteck Lyon Conseil',
      date: '02 May 2021',
    },
    {
      id: 3,
      imgSrc: '/imgs/portfolio/1/3.jpg',
      title: 'Arteck Lyon Conseil',
      date: '02 May 2021',
    },
    {
      id: 4,
      imgSrc: '/imgs/portfolio/1/4.jpg',
      title: 'Arteck Lyon Conseil',
      date: '02 May 2021',
    },
    {
      id: 5,
      imgSrc: '/imgs/portfolio/1/1.jpg',
      title: 'Arteck Lyon Conseil',
      date: '02 May 2021',
    },
    {
      id: 6,
      imgSrc: '/imgs/portfolio/1/2.jpg',
      title: 'Arteck Lyon Conseil',
      date: '02 May 2021',
    },
  ];
  const comp = useRef(null);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let device_width = window.innerWidth;

      if (device_width > 767) {
        let portfolioline = gsap.timeline({
          scrollTrigger: {
            trigger: '.portfolio__area',
            start: 'top center-=200',
            pin: '.portfolio__text',
            end: 'bottom bottom+=80',
            markers: false,
            pinSpacing: false,
            scrub: 1,
          },
        });

        portfolioline.to('.portfolio__text', {
          scale: 3,
          duration: 1,
        });
        portfolioline.to('.portfolio__text', {
          scale: 3,
          duration: 1,
        });
        portfolioline.to(
          '.portfolio__text',
          {
            scale: 1,
            duration: 1,
          },
          '+=2',
        );
      }

      let portfolio_lists = gsap.utils.toArray('.portfolio__item');
      portfolio_lists.forEach((portfolio, i) => {
        gsap.set(portfolio as any, { opacity: 0.7 });
        let t1 = gsap.timeline();

        t1.set(portfolio as any, {
          position: 'relative',
        });
        t1.to(portfolio as any, {
          scrollTrigger: {
            trigger: portfolio as any,
            scrub: 2,
       
            start: 'top bottom+=100',
            end: 'bottom center',
            markers: false,
          },
          scale: 1,
          opacity: 1,
          rotateX: 0,
        });
      });

      // gsap.to(".bg_image img", {
      //   xPercent: -18,
      //   scrollTrigger: {
      //     trigger: ".portfolio__area",
      //     start: "top top",
      //     end: "bottom center",
      //     pin: ".bg_image",
      //     scrub: 3
      //   }
      // });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className='portfolio__area pb-140'>
      <div className='container'>
        <div className='row top_row'>
          <h2 className='portfolio__text'>work</h2>
          <div className='portfolio__list-1'>
            {portfolioItems.map((item) => {
              return (
                <div key={item.id} className='portfolio__item'>
                  <Link href={`/portfolio/${item.id}`}>
                    <Image className='mover' src={item.imgSrc} alt='Portfolio Image' />
                
                  </Link>
                  <div className='portfolio__info'>
                    <h3 className='portfolio__title'>{item.title}</h3>
                    <p>{item.date}</p>
                  </div>
                </div>
              );
            })}
            {/* <div className='portfolio__item'>
              <a href='portfolio-details.html'>
                <img className='mover' src='imgs/portfolio/1/1.jpg' alt='Portfolio Image' />
              </a>
              <div className='portfolio__info'>
                <h3 className='portfolio__title'>Arteck Lyon Conseil</h3>
                <p>02 May 2021</p>
              </div>
            </div>
            <div className='portfolio__item'>
              <a href='portfolio-details.html'>
                <img src='imgs/portfolio/1/2.jpg' alt='Portfolio Image' />
              </a>
              <div className='portfolio__info'>
                <h3 className='portfolio__title'>Arteck Lyon Conseil</h3>
                <p>02 May 2021</p>
              </div>
            </div>
            <div className='portfolio__item'>
              <a href='portfolio-details.html'>
                <img src='imgs/portfolio/1/3.jpg' alt='Portfolio Image' />
              </a>
              <div className='portfolio__info'>
                <h3 className='portfolio__title'>Arteck Lyon Conseil</h3>
                <p>02 May 2021</p>
              </div>
            </div>
            <div className='portfolio__item'>
              <a href='portfolio-details.html'>
                <img src='imgs/portfolio/1/4.jpg' alt='Portfolio Image' />
              </a>
              <div className='portfolio__info'>
                <h3 className='portfolio__title'>Arteck Lyon Conseil</h3>
                <p>02 May 2021</p>
              </div>
            </div>
            <div className='portfolio__item'>
              <a href='portfolio-details.html'>
                <img src='imgs/portfolio/1/1.jpg' alt='Portfolio Image' />
              </a>
              <div className='portfolio__info'>
                <h3 className='portfolio__title'>Arteck Lyon Conseil</h3>
                <p>02 May 2021</p>
              </div>
            </div>
            <div className='portfolio__item'>
              <a href='portfolio-details.html'>
                <img src='imgs/portfolio/1/2.jpg' alt='Portfolio Image' />
              </a>
              <div className='portfolio__info'>
                <h3 className='portfolio__title'>Arteck Lyon Conseil</h3>
                <p>02 May 2021</p>
              </div>
            </div> */}
          </div>
        </div>

        <div className='row row_bottom'>
          <div className='col-xxl-12'>
            <div className='portfolio__btn btn_wrapper'>
              <Link
                href='/portfolio'
                className='wc-btn-secondary btn-hover btn-item'
                applyLinkStyles={false}
              >
                <span></span>View <br />
                all projects <i className='fa-solid fa-arrow-right'></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
