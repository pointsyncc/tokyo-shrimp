import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import Image from '@/components/ui/image/Image';
import Head from 'next/head';
import Link from 'next/link';
import { NextPageWithLayout } from './_app';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Trans, useTranslation } from 'next-i18next';
import { useEffect } from 'react';

const Custom404: NextPageWithLayout = () => {

  const { t, i18n } = useTranslation([
    'common',
    'footer',
    'cookie-consent',
    '404',
  ], { bindI18n: 'languageChanged loaded' });

  // bindI18n: loaded is needed because of the reloadResources call
  // if all pages use the reloadResources mechanism, the bindI18n option can also be defined in next-i18next.config.js
  useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, [
      'common',
      'footer',
      'cookie-consent',
      '404',
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>Pointsyncc - 404 Not found</title>
        <meta name='description' content='404 Not found' />
      </Head>
      <div className='has-smooth' id='has_smooth'></div>

      <button id='scroll_top' className='scroll-top'>
        <i className='fa-solid fa-arrow-up'></i>
      </button>

      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <main>
            <section className='error__page'>
              <div className='container line'>
                <span className='line-3'></span>
                <div className='row'>
                  <div className='col-xxl-12'>
                    <div className='error__content'>
                      <Image raw={true} width={384} height={147} style={{height:'auto'}}  src='/imgs/thumb/404.png' alt='Page not found' />
                      <h2>{t('page.title', {ns: '404'})}</h2>
                      <p>{t('page.subtitle', {ns: '404'})}</p>
                      <div className='btn_wrapper'>
                        <Link className='wc-btn-primary btn-hover btn-item' href='/'>
                          <Trans i18nKey='page.action-button.text' ns='404' t={t}>
                          <span></span> Back to <br />
                          Homepage <i className='fa-solid fa-arrow-right'></i>
                          </Trans>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

Custom404.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async ({ locale }: any) => {
  const props = await serverSideTranslations(locale, [
    'common',
    'footer',
    'cookie-consent',
    '404',
  ]);
  return {
    props,
    // if using the approach with the live translation download, meaning using i18next-locize-backend on server side,
    // there is a reloadInterval for i18next-locize-backend that can be used to reload resources in a specific interval: https://github.com/locize/i18next-locize-backend#backend-options
    // doing so it is suggested to also use the revalidate option, here:
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every hour
    // revalidate: 60 * 60, // in seconds
  };
};


export default Custom404;
