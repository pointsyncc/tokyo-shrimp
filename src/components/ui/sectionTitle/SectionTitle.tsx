import {FadeIn} from '@/components/common/animations/FadeIn';
import { ComponentAttrs } from '@/types/general';
import React, { useRef } from 'react';

const SectionTitle = ({ children,className = 'sec-title title-anim' }: ComponentAttrs) => {
  const titleRef = useRef(null);
  return (
    <FadeIn>
      <h3 className={className} ref={titleRef}>
        {children}
      </h3>
    </FadeIn>
  );
};

export default SectionTitle;
