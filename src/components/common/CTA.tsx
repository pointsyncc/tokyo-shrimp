import Link from 'next/link';
import React from 'react';
import SectionTitle from '../ui/sectionTitle/SectionTitle';

export default function CTA() {
  return (
    <section className='cta__area'>
      <div className='container line pb-110'>
        <div className='line-3'></div>
        <div className='row'>
          <div className='col-xxl-12'>
            <div className='cta__content'>
              <p className='cta__sub-title'>Work with us</p>
              <SectionTitle className='cta__title'>
              We would love to hear more about your project
              </SectionTitle>

              <div className='btn_wrapper'>
                <Link href='/contact' className='wc-btn-primary btn-hover btn-item'>
                  <span></span>Let’s talk us <i className='fa-solid fa-arrow-right'></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
