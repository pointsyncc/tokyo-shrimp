import SectionTitle from '@/components/ui/sectionTitle/SectionTitle';
import React from 'react';

interface IProps {
  currentProjectNumber: number;
}
const FeaturedWork = ({ currentProjectNumber }: IProps) => {
  return (
    <div className='sec-title-wrapper portfolio__title-wrap-6'>
      <div className=''>
        <h2 className='sec-sub-title animation__char_come'>Featured</h2>
        <SectionTitle>Work</SectionTitle>

        <p>
          View the full case study of our recent featured and awesome works that we created for our
          clients.
        </p>
      </div>
      <div className='portfolio__pagination-6'>
        <span className='portfolio__current'>0 {currentProjectNumber} </span> / 07
        <span className='portfolio__total'></span>
      </div>
    </div>
  );
};

export default FeaturedWork;
