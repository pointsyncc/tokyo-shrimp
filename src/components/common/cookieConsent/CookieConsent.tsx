import { classNames } from '@/utils/classNames';
import React from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import classes from './cookieConsent.module.scss';

export const CookieBanner = () => {
  return (
    <CookieConsent
      enableDeclineButton
      acceptOnScroll={true}
      acceptOnScrollPercentage={10}
      debug={false}
      style={{
        background: 'red',
        maxWidth: '430px',
      }}
      contentStyle={{ margin: 0, flexBasis: 'auto' }}
      containerClasses={classNames(
        classes['cookie-consent'],
        'p-3 flex-column border border-white rounded text-light bg-black',
      )}
      buttonClasses='btn btn-outline-light bg-transparent m-0 border border-white text-white rounded d-block ms-auto'
      declineButtonText='Opt-out'
      buttonWrapperClasses='d-flex w-100'
      declineButtonClasses='btn-link bg-transparent m-0 p-0 text-white'
      buttonStyle={{
        width: '120px',
      }}
    >
      <div className='d-flex mb-4'>
      <p className='text-white mb-2'>
        This site uses cookies to measure and improve your experience.
        Read our privacy:
      </p>
      <div className='d-flex text-white'>
        <p className='text-white'> </p>
   
      </div>
      </div>
    </CookieConsent>
  );
};
