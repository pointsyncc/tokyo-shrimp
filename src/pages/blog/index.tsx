import { Articles } from '@/components/blog/articles/Articles';
import CTA from '@/components/common/CTA';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextPageWithLayout } from '../_app';
import { getStoryblokApi } from '@storyblok/react';
import { GetServerSideProps, InferGetServerSidePropsType, InferGetStaticPropsType } from 'next';
import { getAllArticles } from '@/service/StoryblokAPI';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';

const Blog: NextPageWithLayout = (props: any) => {

  const {t} = useTranslation(['seo']);

  const title = t('pages.blog.title', {ns: 'seo'});

  return (
    <>
     <NextSeo
        title={`${title} | Pointsyncc`}
        description={`${t('pages.blog.description', {ns: 'seo'})} | Pointsyncc`}
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
      <Articles blogs={props.articles} />
      <CTA />
    </>
  );
};

Blog.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => {

  const storyblokRes = await getAllArticles(locale);

    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
          'footer',
          'cookie-consent',
          'blog',
          'homepage',
          'seo'
        ])),
        articles: Array.isArray(storyblokRes.data.stories) && storyblokRes.data.stories.length ? storyblokRes.data.stories : [],
      },
    };
};

export default Blog;
