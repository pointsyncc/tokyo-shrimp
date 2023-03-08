import Image from '@/components/ui/image/Image';
import SectionTitle from '@/components/ui/sectionTitle/SectionTitle';
import React from 'react';

const Brands = () => {
  return (
    <section className='brand__area'>
      <div className='container line pt-140 pb-100'>
        <span className='line-3'></span>
        <div className='row'>
          <div className='col-xxl-12'>
            <SectionTitle className='brand__title-3 title-anim'>
              We are happy to work with global largest brands
            </SectionTitle>
            <div className='brand__list brand-gap'>
              {[1, 2, 3, 4, 5, 6].map((imgNum) => (
                <div className='brand__item-2 fade_bottom' key={imgNum}>
                  <Image
                    style={{ height: 'auto', width: 'auto' }}
                    raw={true}
                    width={100}
                    height={100}
                    src={`/imgs/brand/${imgNum}.png`}
                    alt='Brand Logo'
                  />
                </div>
              ))}
              {/* <div className='brand__item-2 fade_bottom'>
                <img src='/imgs/brand/1.png' alt='Brand Logo' />
              </div>
              <div className='brand__item-2 fade_bottom'>
                <img src='/imgs/brand/2.png' alt='Brand Logo' />
              </div>
              <div className='brand__item-2 fade_bottom'>
                <img src='/imgs/brand/3.png' alt='Brand Logo' />
              </div>
              <div className='brand__item-2 fade_bottom'>
                <img src='/imgs/brand/4.png' alt='Brand Logo' />
              </div>
              <div className='brand__item-2 fade_bottom'>
                <img src='/imgs/brand/5.png' alt='Brand Logo' />
              </div>
              <div className='brand__item-2 fade_bottom'>
                <img src='/imgs/brand/6.png' alt='Brand Logo' />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
