import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import Head from 'next/head';
import { FieldValues } from 'react-hook-form';
import { NextPageWithLayout } from './_app';

import { ContactForm } from '@/components/contact/ContactForm';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactInfo from '@/components/contact/ContactInfo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title='Pointsyncc - Contact'
        description='Contact'
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

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
