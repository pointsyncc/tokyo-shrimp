import { Trans, useTranslation } from 'next-i18next';

const GoogleRecaptchaText = () => {
  const { t } = useTranslation('common');

  return (
    <p className='text-muted fs-xs'>
      <Trans i18nKey='google-recaptcha.legal' t={t}>
        This site is protected by reCAPTCHA and the Google{' '}
        <a href='https://policies.google.com/privacy'>Privacy Policy</a> and{' '}
        <a href='https://policies.google.com/terms'>Terms of Service</a> apply.
      </Trans>
    </p>
  );
};

export default GoogleRecaptchaText;
