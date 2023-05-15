import CTA from '@/components/common/CTA';
import { TeamSlider } from '@/components/common/Team';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import HybridTeam from '@/components/team/memberDetails/hybridTeam/HybridTeam';
import { Link } from '@/components/ui/link/Link';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import { NextPageWithLayout } from '../_app';

const ns = ['common', 'footer', 'cookie-consent', 'team', 'homepage', 'seo'];

const Team: NextPageWithLayout = () => {
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
        title={`${t('pages.our-team.title', { ns: 'seo' })} | Pointsyncc`}
        description={`${t('pages.our-team.meta_description', { ns: 'seo' })}`}
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/team`,
          title: `${t('pages.homepage.title', { ns: 'seo' })}`,
          description: `${t('pages.homepage.meta_description', { ns: 'seo' })}`,
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
      <section className='team__area-6'>
        <div className='container line pt-120'>
          <span className='line-3'></span>

          <div className='row'>
            <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-8 offset-xxl-4 offset-xl-4'>
              <div className='sec-title-wrapper  pb-0 pb-xl-5'>
                <h2 className='sec-title animation__char_come'>
                  {t('page.title', { ns: 'team' })}
                </h2>
                <p>{t('page.subtitle', { ns: 'team' })}</p>
                <br />
                <p>{t('page.subtitle2', { ns: 'team' })}</p>
              </div>
            </div>
          </div>
        </div>

        <TeamSlider alt={true} />

        <div className='container line pt-150'>
          <div className='line-3'></div>
        </div>

        <div className='team__join-btn'>
          <div className='btn_wrapper'>
            <Link href='/contact' className='wc-btn-primary btn-item btn-hover'>
              <Trans i18nKey='page.call-to-action' t={t} ns='team'>
                <span></span> Join our <br />
                talented team
                <i className='fa-solid fa-arrow-right'></i>
              </Trans>
            </Link>
          </div>
        </div>
      </section>

      <HybridTeam />

      {/* <Counter /> */}

      <CTA />
    </>
  );
};

Team.getLayout = function getLayout(page) {
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

export default Team;
