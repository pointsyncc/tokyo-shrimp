import React, { useEffect, useRef } from 'react';

import CountUp from 'react-countup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Counter() {
  const comp = useRef(null);
  const container = useRef(null);

  const counterItems = [
    {
      value: 25,
      suffix: 'k+',
      text1: 'Project',
      text2: 'completed',
      duration: 3,
    },
    {
      value: 8,
      suffix: 'k+',
      text1: 'Happy',
      text2: 'customers',
      duration: 1,
    },
    {
      value: 15,
      text1: 'Years',
      text2: 'experience',
      duration: 2,
    },
    {
      value: 98,
      text1: 'Awards',
      text2: 'acheivement',
      duration: 2,
    },
  ];
  useEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      let device_width = window.innerWidth;
      const counterArray = gsap.utils.toArray('.counter_animation .counter__anim');
      gsap.set('.counter_animation .counter__anim', { y: -100, opacity: 0 });
      if (device_width < 1023) {
        counterArray.forEach((item: any, i) => {
          let counterTl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: 'top center+=200',
            },
          });
          counterTl.to(item, {
            y: 0,
            opacity: 1,
            ease: 'bounce',
            duration: 1.5,
          });
        });
      } else {
        gsap.to('.counter_animation .counter__anim', {
          scrollTrigger: {
            trigger: container.current,
            start: 'top center+=300',
          },
          y: 0,
          opacity: 1,
          ease: 'bounce',
          duration: 1.5,
          stagger: {
            each: 0.3,
          },
        });
      }
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <section className='counter__area' ref={comp}>
      <div className='container g-0 line pt-150'>
        <span className='line-3'></span>

        <div className='row'>
          <div className='col-xxl-12'>
            <div className='counter__wrapper counter_animation' ref={container}>
              {counterItems.map((item, i) => {
                return (
                  <div className='counter__item counter__anim' key={item.value}>
                    <h2 className='counter__number'>
                      <CountUp
                        end={item.value}
                        duration={item.duration}
                        suffix={item.suffix ?? ''}
                        enableScrollSpy={true}
                        scrollSpyDelay={1}
                      />
                    </h2>
                    <p>
                      {item.text1} <br />
                      {item.text2}
                    </p>
                    <span className='counter__border'></span>
                  </div>
                );
              })}
              {/* <div className='counter__item counter__anim'>
                <h2 className='counter__number'>
                  <CountUp end={25} duration={3} suffix='k+' enableScrollSpy={true} scrollSpyDelay={1} />
                </h2>
                <p>
                  Project <br />
                  completed
                </p>
                <span className='counter__border'></span>
              </div>
              <div className='counter__item counter__anim'>
                <h2 className='counter__number'>
                  <CountUp end={8} duration={1} suffix='k+' enableScrollSpy={true} scrollSpyDelay={1}  />
                </h2>
                <p>
                  Happy <br />
                  customers
                </p>
                <span className='counter__border'></span>
              </div>
              <div className='counter__item counter__anim'>
                <h2 className='counter__number'>
                  <CountUp end={15} duration={2} enableScrollSpy={true} scrollSpyDelay={1}  />
                </h2>
                <p>
                  Years <br />
                  experiences
                </p>
                <span className='counter__border'></span>
              </div>
              <div className='counter__item counter__anim'>
                <h2 className='counter__number'>
                  <CountUp end={98} duration={4} enableScrollSpy={true} scrollSpyDelay={1} />
                </h2>
                <p>
                  Awards <br />
                  achievement
                </p>
                <span className='counter__border'></span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
