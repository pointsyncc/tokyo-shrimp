import React from 'react';
import { useTranslation } from 'react-i18next';

const privacyLink = () => {
  const { t } = useTranslation();

  return (
    <a href='https://policies.google.com/privacy' target='_blank'>
      {t('google-recaptcha.privacy-policy')}
    </a>
  );
};

const termsLink = () => {
  const { t } = useTranslation();
  return (
    <a href='https://policies.google.com/terms' target='_blank'>
      {t('google-recaptcha.terms-of-service')}
    </a>
  );
};

const GoogleRecaptchaText = () => {
  const { t } = useTranslation();

  return (
    <p className='text-muted fs-sm'>
      {t('google-recaptcha.info-text', { privacyLink: 'Politika privatnosti', termsLink: 'Uvjeti korištenja usluge.' })}
    </p>
  );
};

export default GoogleRecaptchaText;
