import React from 'react';
import { useTranslation } from 'react-i18next';

const GoogleRecaptchaText = () => {

  const {t} = useTranslation();

  const privacyLink = (
    <a  href='https://policies.google.com/privacy' target='_blank'>
        {t('google-recaptcha.privacy-policy')}
    </a>
  );

  const termsLink = (
    <a  href='https://policies.google.com/terms' target='_blank'>
      {t('google-recaptcha.terms-of-service')}
    </a>
  );

  return (
    <p className='text-muted fs-sm'>
     {t('google-recaptcha.info-text', {privacyLink, termsLink})}
    </p>
  );
};

export default GoogleRecaptchaText;
