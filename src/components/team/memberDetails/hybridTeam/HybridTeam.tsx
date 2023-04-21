import SectionTitle from '@/components/ui/sectionTitle/SectionTitle';
import React from 'react';
import { useTranslation } from 'next-i18next';

const HybridTeam = () => {

  const {t} = useTranslation('team')

  return (
    <section className='team__btm mb-5'>
      <div className='container g-0 line'>
        <span className='line-3'></span>
        <div className='row'>
          <div className='col-xxl-12'>
            <div className='sec-title-wrapper pt-130 pb-140 text-anim'>
              <SectionTitle>
               {t('page.section.hybrid-team.title')}
              </SectionTitle>
              {/* <h2 className='sec-title title-anim'>
              Your digital products & services ensured by our talented team
            </h2> */}
              <p>
              {t('page.section.hybrid-team.text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridTeam;
