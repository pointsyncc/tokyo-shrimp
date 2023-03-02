import React, { useRef } from 'react';
import FadeUp from '../common/animations/FadeUp';
import SectionTitle from '../ui/sectionTitle/SectionTitle';

export default function Workflow() {
  return (
    <section className='workflow__area'>
      <div className='container g-0 line pt-140 pb-140'>
        <div className='line-3'></div>
        <div className='row'>
          <div className='col-xxl-12'>
            <div className='sec-title-wrapper'>
              <h2 className='sec-sub-title title-anim'>Workflow</h2>

              <SectionTitle>How we work</SectionTitle>
            </div>
          </div>

          <div className='col-xxl-12'>
            <div className='swiper workflow__slider '>
              <div className='swiper-wrapper'>
                <div className='swiper-slide workflow__slide fade_left'>
                  <h4 className='workflow__step'>step 01</h4>
                  <h5 className='workflow__number'>01</h5>
                  <h6 className='workflow__title'>Audience</h6>
                  <p>Having these the marketplace to your business</p>
                </div>

                <div className='swiper-slide workflow__slide fade_left'>
                  <h4 className='workflow__step'>step 02</h4>
                  <h5 className='workflow__number'>02</h5>
                  <h6 className='workflow__title'>Plan & Sketch</h6>
                  <p>Delicate and long-lasting with vitamins and nutritions</p>
                </div>

                <div className='swiper-slide workflow__slide fade_left'>
                  <h4 className='workflow__step'>step 03</h4>
                  <h5 className='workflow__number'>03</h5>
                  <h6 className='workflow__title'>Customize</h6>
                  <p>Creating brand identities for the digital experiences</p>
                </div>

                <div className='swiper-slide workflow__slide fade_left'>
                  <h4 className='workflow__step'>step 04</h4>
                  <h5 className='workflow__number'>04</h5>
                  <h6 className='workflow__title'>User Testing</h6>
                  <p>We look forward to engage with beyond the conventional</p>
                </div>

                <div className='swiper-slide workflow__slide fade_left'>
                  <h4 className='workflow__step'>step 05</h4>
                  <h5 className='workflow__number'>05</h5>
                  <h6 className='workflow__title'>User Testing</h6>
                  <p>We look forward to engage with beyond the conventional</p>
                </div>

                <div className='swiper-slide workflow__slide fade_left'>
                  <h4 className='workflow__step'>step 06</h4>
                  <h5 className='workflow__number'>06</h5>
                  <h6 className='workflow__title'>User Testing</h6>
                  <p>We look forward to engage with beyond the conventional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
