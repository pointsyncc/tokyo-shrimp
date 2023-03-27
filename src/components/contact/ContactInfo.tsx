import { COMPANY_ADDRESS } from '@/utils/contants';
import { Trans, useTranslation } from 'next-i18next';

const ContactInfo = () => {
  const { t } = useTranslation('contact');

  return (
    <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
      <div className='contact__info'>
        <h3 className='sub-title-anim-top animation__word_come'>
          <Trans i18nKey='page.text' t={t}>
            Don&apos;t be afraid man ! <br />
            say hello
          </Trans>
        </h3>
        <ul>
          <li>
            <a className='d-inline' href='tel:+(2)578365379'>
              +385 99 2144 802
            </a>
          </li>
          <li>
            <a className='d-inline' href='mailto:hello@example.com'>
              info@pointsyncc.com
            </a>
          </li>
          <li>
            <span>{COMPANY_ADDRESS}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
