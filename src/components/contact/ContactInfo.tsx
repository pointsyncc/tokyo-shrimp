import {
  COMPANY_ADDRESS,
  COMPANY_CONTACT_EMAIL,
  COMPANY_CONTACT_PHONE_NUMBER,
} from '@/utils/contants';
import { Trans, useTranslation } from 'next-i18next';

const ContactInfo = () => {
  const { t } = useTranslation('contact');

  return (
    <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
      <div className='contact__info'>
        {/* <h3 className='sub-title-anim-top animation__word_come'>
          <Trans i18nKey='page.text' t={t}>
            Don&apos;t be afraid man ! <br />
            say hello
          </Trans>
        </h3> */}
        <ul className='p-2'>
          <li>
            <a className='d-inline' href={`tel:${COMPANY_CONTACT_PHONE_NUMBER}`}>
              {COMPANY_CONTACT_PHONE_NUMBER}
            </a>
          </li>
          <li>
            <a className='d-inline' href={`mailto:${COMPANY_CONTACT_EMAIL}`}>
              {COMPANY_CONTACT_EMAIL}
            </a>
          </li>
          <li>
            <a className='d-inline' href={`https://goo.gl/maps/fRA3HnsYcRCNwjd28`} target='_blank'>
              {COMPANY_ADDRESS}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
