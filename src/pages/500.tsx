import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { Link as RouteLink } from 'next-translate-routes';
import { useEffect } from 'react';
import { NextPageWithLayout } from './_app';

const ns = ['common', 'footer', 'cookie-consent', '500', 'seo'];

const Custom500: NextPageWithLayout = () => {
  const { t, i18n } = useTranslation(ns, {
    bindI18n: 'languageChanged loaded',
  });
  // bindI18n: loaded is needed because of the reloadResources call
  // if all pages use the reloadResources mechanism, the bindI18n option can also be defined in next-i18next.config.js
  useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, ns);
  }, []);

  return (
    <>
      <NextSeo
        title={`${t('pages.500.title', { ns: 'seo' })} | Pointsyncc`}
        description={`${t('pages.500.meta_description', { ns: 'seo' })}`}
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
                      {/* <Image
                        raw={true}
                        width={384}
                        height={147}
                        style={{ height: 'auto' }}
                        src='/imgs/thumb/404.png'
                        alt='Page not found'
                      /> */}
                      <h1 className='server__error__title'>500</h1>
                      <h2>{t('page.title', { ns: '500' })}</h2>
                      <Trans t={t} i18nKey='page.subtitle-new' ns='500'>
                        <p>
                          It looks like something happend on our end. Please try again or
                          <RouteLink href='/contact'> contact us </RouteLink>
                          if the problem persists.
                        </p>
                      </Trans>
                      {/* <div className='btn_wrapper'>
                        <Link className='wc-btn-primary btn-hover btn-item' href='/'>
                        <Trans t={t} i18nKey='page.action-button.text' ns='500'>
                          <span></span> Back to <br />
                          Homepage <i className='fa-solid fa-arrow-right'></i>
                        </Trans>
                        </Link>
                      </div> */}
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

Custom500.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
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
    // revalidate: 60 * 60, // in seconds
  };
};

export default Custom500;
