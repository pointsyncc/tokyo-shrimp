import Link from 'next/link';
import React from 'react';
import SectionTitle from '../ui/sectionTitle/SectionTitle';
import { useTranslation } from 'next-i18next';

export default function CTA() {

  const {t} = useTranslation('homepage');

  return (
    <section className='cta__area'>
      <div className='container line pb-110'>
        <div className='line-3'></div>
        <div className='row'>
          <div className='col-xxl-12'>
            <div className='cta__content'>
              <p className='cta__sub-title'>{t('cta.work-with-us', {ns: 'homepage' })}</p>
              <SectionTitle className='cta__title'>
              {t('cta.title', {ns: 'homepage' })}
              </SectionTitle>

              <div className='btn_wrapper'>
                <Link href='/contact' className='wc-btn-primary btn-hover btn-item'>
                  <span></span> {t('cta.button-text', {ns: 'homepage' })} <i className='fa-solid fa-arrow-right'></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
