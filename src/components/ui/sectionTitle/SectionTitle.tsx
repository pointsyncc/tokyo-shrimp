import FadeUp from '@/components/common/animations/FadeUp';
import React, { useRef } from 'react';

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  const titleRef = useRef(null);
  return (
    <FadeUp>
      <h3 className='sec-title title-anim' ref={titleRef}>
        {children}
      </h3>
    </FadeUp>
  );
};

export default SectionTitle;
