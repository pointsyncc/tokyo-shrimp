import FadeUp from '@/components/common/animations/FadeUp';
import { ComponentAttrs } from '@/types/general';
import React, { useRef } from 'react';

const SectionTitle = ({ children,className = 'sec-title title-anim' }: ComponentAttrs) => {
  const titleRef = useRef(null);
  return (
    <FadeUp>
      <h3 className={className} ref={titleRef}>
        {children}
      </h3>
    </FadeUp>
  );
};

export default SectionTitle;
