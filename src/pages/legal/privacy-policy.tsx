import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import { NextPageWithLayout } from '../_app';
import Hero from '@/components/privacy-policy/Hero';
import { getPage } from '@/service/StoryblokAPI';
import { render } from 'storyblok-rich-text-react-renderer';
import { getStoryblokApi } from '@storyblok/react';

const ns = ['common', 'footer', 'cookie-consent', 'homepage', 'seo', 'privacy-policy'];

const PrivacyPolicy: NextPageWithLayout = (props: any) => {
  const { t, i18n } = useTranslation(ns, {
    bindI18n: 'languageChanged loaded',
  });
  // bindI18n: loaded is needed because of the reloadResources call
  // if all pages use the reloadResources mechanism, the bindI18n option can also be defined in next-i18next.config.js
  useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, ns);
  }, []);

  const { title, content } = props.story.content;

  return (
    <>
      <NextSeo
        title={`${t('pages.privacy-policy.title', { ns: 'seo' })} | Pointsyncc`}
        description={`${t('pages.privacy-policy.meta_description', { ns: 'seo' })}`}
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/legal/privacy-policy`,
          title: `${t('pages.privacy-policy.title', { ns: 'seo' })}`,
          description: `${t('pages.privacy-policy.meta_description', { ns: 'seo' })}`,
          images: [
            {
              url: `https://www.pointsyncc.com/api/page-og-1200x630?title=${t('pages.privacy-policy.title', { ns: 'seo' })}&description=${t('pages.privacy-policy.meta_description', { ns: 'seo' })}`,
              width: 1200,
              height: 630,
              alt: `${t('pages.privacy-policy.title', { ns: 'seo' })}`,
              type: 'image/jpeg',
            }
          ],
          siteName: 'POINTSYNCC',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Hero title={props.story.content.title} />
      <section className='blog__detail'>
        <div className='container g-0 line'>
        <div className='row'>
          <div className='col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1 pb-5'>
            <div className='blog__detail-content'>{render(props.story.content.content)}</div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

PrivacyPolicy.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export const getServerSideProps = async ({ locale }: any) => {
  const props = await serverSideTranslations(locale, ns);

  try {
    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get(`cdn/stories/pages/privacy-policy`, {
      version: 'published',
      language: locale,
      cv: Date.now(),
      resolve_relations: 'author',
    });
    return {
      props: {
        ...props,
        story: data ? data.story : false,
      },
      // if using the approach with the live translation download, meaning using i18next-locize-backend on server side,
      // there is a reloadInterval for i18next-locize-backend that can be used to reload resources in a specific interval: https://github.com/locize/i18next-locize-backend#backend-options
      // doing so it is suggested to also use the revalidate option, here:
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every hour
      //revalidate: 60 * 60, // in seconds
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
};

export default PrivacyPolicy;
