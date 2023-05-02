import {
  COMPANY_ADDRESS,
  COMPANY_CONTACT_EMAIL,
  COMPANY_CONTACT_PHONE_NUMBER,
} from '@/utils/constants';
import { Trans, useTranslation } from 'next-i18next';

const ContactInfo = () => {
  const { t } = useTranslation('contact');

  return (
    <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
      <div className='contact__info p-0 p-md-3'>
        {/* <h3 className='sub-title-anim-top animation__word_come'>
          <Trans i18nKey='page.text' t={t}>
            Don&apos;t be afraid man ! <br />
            say hello
          </Trans>
        </h3> */}
        <ul className=''>
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
        <div className='mt-3' style={{'borderRadius': '20px', 'width': '420px', 'height': '320px'}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.1827892300153!2d15.997304076672927!3d45.80759751046059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7887a674c31%3A0x122bf13c968e9cd5!2sZavrtnica%2017!5e0!3m2!1sen!2shr!4v1682034127984!5m2!1sen!2shr" width="100%" height="100%" style={{'border': '0'}} loading="lazy"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
