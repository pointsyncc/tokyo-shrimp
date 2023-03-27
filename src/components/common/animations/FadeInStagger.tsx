import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';
import React, { useRef } from 'react';
import gsap from 'gsap';
interface IProps {
  vars?: gsap.TweenVars;
  children: React.ReactNode;
  className?: string;
  distance?: number;
  direction?: 'x' | 'y';
}
export const FadeInStagger = ({ children }: IProps) => {
  const comp = useRef(null);
  useIsomorphicLayoutEffect(() => {
    let device_width = window.innerWidth;
    const ctx = gsap.context(() => {


      // if (device_width < 1023) {
      //   gsap.set(".item", { y: -20, opacity: 0, })
      //   gsap.to(".item", {
      //     scrollTrigger: {
      //       trigger: ".item",
      //       start: "top center+=300",
      //     },
      //     y: 0,
      //     opacity: 1,
      //     ease: "power2.out",
      //     duration: 1,
      //     stagger: {
      //       each: 0.2,
      //     }
      //   })
      // } else {
        gsap.set(".item", { x: -20, opacity: 0, })
        gsap.to(".item", {
          scrollTrigger: {
            trigger: ".item",
            start: "top center+=300",
          },
          x: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
          stagger: {
            each: 0.2,
          }
        })
        // gsap.set('.item', { x: -20, opacity: 0 });
        // gsap.to('.item', {
        //   scrollTrigger: {
        //     trigger: '.item',
        //     start: 'top center+=300',
        //   },
        //   x: 0,
        //   opacity: 1,
        //   ease: 'power2.out',
        //   duration: 1,
        //   stagger: {
        //     each: 0.2,
        //   }
        // });
      // }
    }, comp);
    return () => ctx.revert();
  }, []);
  return <div ref={comp}>{children}</div>;
};
