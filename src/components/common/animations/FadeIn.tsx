import React, { useRef } from 'react';
import gsap from 'gsap';
import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface IProps {
  vars?: gsap.TweenVars;
  children: React.ReactNode;
  className?:string
  distance?:number,
  direction?:'x' | 'y'
}

gsap.registerPlugin(ScrollTrigger);

export const FadeIn = ({ vars, children,className,distance=50,direction = 'y' }: IProps) => {
  const el = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          start: 'top center+=100',
        },
      });
      tl.from(el.current, {  [direction]: distance, opacity:0 });
      tl.to(el.current, {
        [direction]: 0,
        opacity: 1,
        duration: 1.5,
      });
    });
    return () => ctx.revert();
  }, [vars]);

  return <div className={className} ref={el}>{children}</div>;
};

