import React, { useRef } from 'react';
import gsap from 'gsap';
import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';

interface IProps {
  vars?: gsap.TweenVars;
  children: React.ReactNode;
  className?: string;
}
export const RotateIn = ({ vars, children, className }: IProps) => {
  const el = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          start: 'top center+=200',
        },
      });
      tl.set(el.current, { perspective: 600 });
      tl.set('.anim-rotate-in', { transformStyle: 'preserve-3d', transformOrigin: 'bottom' });
      tl.from('.anim-rotate-in', { rotationX: 30, opacity: 0 });
      tl.to('.anim-rotate-in', {
        rotationX: 0,
        opacity: 1,
        duration: 1.4,
        // ease: 'power2.out',
      });
    });
    return () => ctx.revert();
  }, [vars]);

  return (
    <div className={className} ref={el}>
      {children}
    </div>
  );
};
