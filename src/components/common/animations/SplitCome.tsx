import React, { useRef } from 'react';
import gsap from 'gsap';
import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';
import SplitType from 'split-type';

interface IProps {
  vars?: gsap.TweenVars;
  children: React.ReactNode;
  type?: 'words' | 'chars';
  className?:string
}
export const SplitCome = ({ className,vars, children, type = 'chars' }: IProps) => {
  const el = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (type === 'words') {
        let split_word_come = new SplitType('.animation__word_come', {
          types: 'words, chars',
          absolute: true,
        });
        gsap.from(split_word_come.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 });
      } else {
        const text = new SplitType('.animation__char_come', { types: 'words, chars' });
        gsap.from(text.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.05 });
      }

      //   });
    });
    return () => ctx.revert();
  }, [vars]);

  return <div className={className} ref={el}>{children}</div>;
};


