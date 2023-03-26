import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import Head from 'next/head';
import { FieldValues } from 'react-hook-form';
import { NextPageWithLayout } from './_app';

import { ContactForm } from '@/components/contact/ContactForm';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactInfo from '@/components/contact/ContactInfo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Pointsyncc - Contact</title>
        <meta name='description' content='Contact' />
      </Head>

      <section className='contact__area-6'>
        <div className='container g-0 line pt-120 pb-110'>
          <span className='line-3'></span>
          <ContactHeader />
          <div className='row contact__btm'>
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

Contact.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer', 'cookie-consent'],)),
      // Will be passed to the page component as props
    },
  };
}


export default Contact;
