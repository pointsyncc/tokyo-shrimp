import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import gsap from 'gsap';

export const useSlideInSection = (selector: string) => {
  const comp = useRef(null);
  useIsomorphicLayoutEffect(() => {
    let device_width = window.innerWidth;
    const ctx = gsap.context(() => {
      gsap.set(selector, { x: 50, opacity: 0 });

      if (device_width < 1023) {
        const blogList = gsap.utils.toArray(selector);
        blogList.forEach((item, i) => {
          let blogTl = gsap.timeline({
            scrollTrigger: {
              trigger: item as any,
              start: 'top center+=200',
            },
          });
          blogTl.to(item as any, {
            x: 0,
            opacity: 1,
            ease: 'power2.out',
            duration: 1.5,
          });
        });
      } else {
        gsap.to(selector, {
          scrollTrigger: {
            trigger: selector,
            start: 'top center+=300',
            markers: false,
          },
          x: 0,
          opacity: 1,
          ease: 'power2.out',
          duration: 2,
          stagger: {
            each: 0.3,
          },
        });
      }
    }, comp);
    return () => ctx.revert();
  }, []);

  return { comp };
};
