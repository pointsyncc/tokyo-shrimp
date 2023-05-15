import { Articles } from '@/components/blog/articles/Articles';
import CTA from '@/components/common/CTA';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import { getAllArticles } from '@/service/StoryblokAPI';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import { NextPageWithLayout } from '../_app';

const ns = ['common', 'footer', 'cookie-consent', 'blog', 'homepage', 'seo'];

const Blog: NextPageWithLayout = (props: any) => {
  const { t, i18n } = useTranslation(ns, { bindI18n: 'languageChanged loaded' });
  // bindI18n: loaded is needed because of the reloadResources call
  // if all pages use the reloadResources mechanism, the bindI18n option can also be defined in next-i18next.config.js
  useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, ns);
  }, []);

  return (
    <>
      <NextSeo
        title={`${t('pages.blog.title', { ns: 'seo' })} | Pointsyncc`}
        description={`${t('pages.blog.meta_description', { ns: 'seo' })}`}
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
          title: `${t('pages.blog.title', { ns: 'seo' })}`,
          description: `${t('pages.blog.meta_description', { ns: 'seo' })}`,
          images: [
            {
              url: `https://www.pointsyncc.com/api/page-og-1200x630?title=${t('pages.blog.title', { ns: 'seo' })}&description=${t('pages.blog.meta_description', { ns: 'seo' })}`,
              width: 1200,
              height: 630,
              alt: `${t('pages.blog.title', { ns: 'seo' })}`,
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
      <Articles blogs={props.articles} />
      <CTA />
    </>
  );
};

Blog.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => {
  const storyblokRes = await getAllArticles("hr");

  return {
    props: {
      ...(await serverSideTranslations(locale, ns)),
      articles:
        Array.isArray(storyblokRes.data.stories) && storyblokRes.data.stories.length
          ? storyblokRes.data.stories
          : [],
    },
  };
};

export default Blog;
