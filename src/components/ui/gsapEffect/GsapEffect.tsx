import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';
import gsap from 'gsap';
import { forwardRef, useEffect, useRef } from 'react';

interface IProps {
  children: React.ReactNode;
  effect: string;
  targetRef: React.RefObject<any>;
  vars?: gsap.TweenVars;
}

export const GsapEffect = forwardRef<any, IProps>(({ children, effect, targetRef, vars }, ref) => {
  const animation = useRef();
  const ctx = gsap.context(() => {});

  useEffect(() => {
    return () => ctx.revert();
  }, [ctx]);

  useIsomorphicLayoutEffect(() => {
    if (gsap.effects[effect]) {
      ctx.add(() => {
        animation.current = gsap.effects[effect](targetRef.current, vars);
      });
    }
  }, [ctx, effect, targetRef, vars]);

  useEffect(() => {
    // forward the animation instance if a ref is passed
    if (typeof ref === 'function') {
      ref(animation.current);
    } else if (ref) {
      ref.current = animation.current;
    }
  }, [ref]);

  return <>{children}</>;
});

GsapEffect.displayName = 'GsapEffect';
