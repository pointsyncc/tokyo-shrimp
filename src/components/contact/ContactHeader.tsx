import React from 'react';
import { SplitCome } from '../common/animations/SplitCome';
import { Trans, useTranslation } from 'next-i18next';

const ContactHeader = () => {
  const { t } = useTranslation('contact');

  return (
    <div className='row'>
      <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
        <SplitCome className='sec-title-wrapper'>
          <h2 className='sec-title-2 animation__char_come'>{t('page.title')}</h2>
        </SplitCome>
      </div>
      <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
        <div className='contact__text'>
          <p>
            <Trans i18nKey='page.subtitle' t={t}>
              Great! We&apos;re excited to hear from you and let&apos;s start something special
              togerter. call us for any inquery.
            </Trans>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
