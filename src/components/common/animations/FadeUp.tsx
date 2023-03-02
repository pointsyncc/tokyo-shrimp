import React, { useRef } from 'react';
import gsap from 'gsap';
import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';

interface IProps {
  vars?: gsap.TweenVars;
  children: React.ReactNode;
}
const FadeUp = ({ vars, children }: IProps) => {
  const el = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          start: 'top center+=300',
        },
      });
      tl.from(el.current, {  y: 50, opacity:0 });
      tl.to(el.current, {
        y: 0,
        opacity: 1,
        duration: 1.5,
      });
    });
    return () => ctx.revert();
  }, [vars]);

  return <div ref={el}>{children}</div>;
};

export default FadeUp;
