import React from 'react';
import CookieConsent from 'react-cookie-consent';
export const CookieBanner = () => {
  return (
    <CookieConsent
      enableDeclineButton
      overlay={true}
      acceptOnScroll={true}
      acceptOnScrollPercentage={10}
      debug={false}
      style={{
        background:'red',
        maxWidth: '430px',

        inset:'auto 10px 10px auto',
      }}
      contentStyle={{ margin: 0, flexBasis: 'auto' }}
      containerClasses='p-3 flex-column border border-white rounded text-light bg-black'
      buttonClasses='btn btn-outline-light bg-transparent m-0 border border-white text-white rounded d-block ms-auto'
      declineButtonText='Opt-out'
      buttonWrapperClasses='d-flex w-100'
      declineButtonClasses='bg-transparent text-decoration-underline m-0 p-0'
      buttonStyle={{
        width: '120px',
      }}
    >
      <p className='text-white mb-4'>This site uses cookies to measure and improve your experience.</p>
    </CookieConsent>
  );
};
