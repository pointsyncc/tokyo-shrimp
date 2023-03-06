import React from 'react';
import SectionTitle from '../ui/sectionTitle/SectionTitle';

const Brand = () => {
  return (
    <section className='brand__area'>
      <div className='container g-0 line pt-140 pb-140'>
        <span className='line-3'></span>
        <div className='row g-0'>
          <div className='col-xxl-12'>
            <div className='sec-title-wrapper'>
              <h2 className='sec-sub-title title-anim'>Internation Brands</h2>
              {/* <h3 className='sec-title title-anim'>
              We are happy to work with global <br />
              largest brands
            </h3> */}
              <SectionTitle>
                {' '}
                We are happy to work with global <br />
                largest brands
              </SectionTitle>
            </div>
          </div>

          <div className='brand__list'>
            <div className='brand__item fade_bottom'>
              <img src='/imgs/brand/1.png' alt='Brand Logo' />
            </div>
            <div className='brand__item fade_bottom'>
              <img src='/imgs/brand/2.png' alt='Brand Logo' />
            </div>
            <div className='brand__item fade_bottom'>
              <img src='/imgs/brand/3.png' alt='Brand Logo' />
            </div>
            <div className='brand__item fade_bottom'>
              <img src='/imgs/brand/4.png' alt='Brand Logo' />
            </div>
            <div className='brand__item fade_bottom'>
              <img src='/imgs/brand/5.png' alt='Brand Logo' />
            </div>
            <div className='brand__item fade_bottom'>
              <img src='/imgs/brand/6.png' alt='Brand Logo' />
            </div>
            <div className='brand__item fade_bottom'>
              <img src='/imgs/brand/3.png' alt='Brand Logo' />
            </div>
            <div className='brand__item fade_bottom'>
              <img src='/imgs/brand/4.png' alt='Brand Logo' />
            </div>
            <div className='brand__item fade_bottom'>
              <img src='/imgs/brand/5.png' alt='Brand Logo' />
            </div>
            <div className='brand__item fade_bottom'>
              <img src='/imgs/brand/6.png' alt='Brand Logo' />
            </div>
            <div className='brand__item fade_bottom'>
              <img src='/imgs/brand/1.png' alt='Brand Logo' />
            </div>
            <div className='brand__item fade_bottom'>
              <img src='/imgs/brand/2.png' alt='Brand Logo' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
