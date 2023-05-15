import { ContactForm } from '@/components/contact/ContactForm';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactInfo from '@/components/contact/ContactInfo';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import { NextPageWithLayout } from './_app';

const ns = ['common', 'footer', 'cookie-consent', 'contact', 'seo'];

const Contact: NextPageWithLayout = () => {
  const { t, i18n, ready } = useTranslation(ns, {
    bindI18n: 'languageChanged loaded',
  });
  // bindI18n: loaded is needed because of the reloadResources call
  // if all pages use the reloadResources mechanism, the bindI18n option can also be defined in next-i18next.config.js
  useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, ns);
  }, []);

  // const title = ready
  //   ? t('pages.contact.title', { ns: 'seo' })
  //   : `${process.env.NEXT_PUBLIC_BASE_URL}`;
  // const description = t('pages.contact.description', { ns: 'seo' });

  return (
    <>
      <NextSeo
        title={`${t('pages.contact.title', { ns: 'seo' })} | Pointsyncc`}
        description={`${t('pages.contact.meta_description', { ns: 'seo' })}`}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
          title: `${t('pages.homepage.title', { ns: 'seo' })}`,
          description: `${t('pages.homepage.meta_description', { ns: 'seo' })}`,
          images: [
            {
              url: 'https://tokyo.fra1.cdn.digitaloceanspaces.com/projects/tokyo-shrimp/assets/PSC-main-logo-accent-03.pngg',
              width: 800,
              height: 600,
              alt: 'POINTSYNCC Icon',
              type: 'image/jpeg',
            },
            {
              url: 'https://tokyo.fra1.cdn.digitaloceanspaces.com/projects/tokyo-shrimp/assets/PSC-main-logo-accent-03.png',
              width: 900,
              height: 800,
              alt: 'POINTSYNCC Icon',
              type: 'image/jpeg',
            },
            { url: 'https://tokyo.fra1.cdn.digitaloceanspaces.com/projects/tokyo-shrimp/assets/logo-icon-transparent-74x74-trimmed.png' },
            { url: 'https://tokyo.fra1.cdn.digitaloceanspaces.com/projects/tokyo-shrimp/assets/logo-icon-transparent-74x74-trimmed.png' },
          ],
          siteName: 'POINTSYNCC',
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
{/*           <div className='mt-3' style={{'borderRadius': '20px', 'width': '420px', 'height': '320px'}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.1827892300153!2d15.997304076672927!3d45.80759751046059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7887a674c31%3A0x122bf13c968e9cd5!2sZavrtnica%2017!5e0!3m2!1sen!2shr!4v1682034127984!5m2!1sen!2shr" width="100%" height="100%" style={{'border': '0'}} loading="lazy"></iframe>
        </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

Contact.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export const getStaticProps = async ({ locale }: any) => {
  const props = await serverSideTranslations(locale, ns);
  return {
    props,
    // if using the approach with the live translation download, meaning using i18next-locize-backend on server side,
    // there is a reloadInterval for i18next-locize-backend that can be used to reload resources in a specific interval: https://github.com/locize/i18next-locize-backend#backend-options
    // doing so it is suggested to also use the revalidate option, here:
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every hour
    //revalidate: 60 * 60, // in seconds
  };
};

export default Contact;
