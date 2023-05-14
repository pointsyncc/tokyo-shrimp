import { BlogDetail, BlogDetailProps } from '@/components/blog/blogDetail/BlogDetail';
import RelatedBlog from '@/components/blog/relatedBlog/RelatedBlog';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import { getStoryblokApi } from '@storyblok/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import { NextPageWithLayout } from '../_app';
import { useRouter } from 'next/router';

const locizeNamespaces = ['common', 'footer', 'cookie-consent', 'blog', 'seo', 'homepage'];

const SingleBlog: NextPageWithLayout = (props: any) => {
  const { t, i18n } = useTranslation(locizeNamespaces, {
    bindI18n: 'languageChanged loaded',
  });
  // bindI18n: loaded is needed because of the reloadResources call
  // if all pages use the reloadResources mechanism, the bindI18n option can also be defined in next-i18next.config.js
  useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, locizeNamespaces);
  }, []);
  const {
    title,
    categories,
    author,
    content,
    image,
    teaser,
    scale_article_cover_image,
    tags,
  }: BlogDetailProps = props.story.content;

  const requestedLocale = props.requestedLocale;
  const showNotAvailableInRequestedLocale = props.showNotAvailableInRequestedLocale;

  const currentURL = `${process.env.NEXT_PUBLIC_SITE_URL}${useRouter().asPath}`;
  const shareTitle =
    'POINTSYNCC: ' + '"' + title + '" ' + `${t('blog.share.written-by', { ns: 'blog' })}` + ' ' + author;

  return (
    <>
      <NextSeo
        title={`${title} | Pointsyncc`}
        description={teaser}
        openGraph={{
          url: `https://www.pointsyncc.com/blog/${props.story.slug}`,
          title: title,
          description: teaser,
          images: [
            {
              url: image,
              width: 800,
              height: 600,
              alt: `Blog about ${title} written by ${author}`,
              type: 'image/jpeg',
            },
            {
              url: image,
              width: 900,
              height: 800,
              alt: `Blog about ${title} written by ${author}`,
              type: 'image/jpeg',
            },
            { url: image },
            { url: image },
          ],
          siteName: 'POINTSYNCC',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <BlogDetail
        title={title}
        categories={categories}
        author={author}
        content={content}
        image={image}
        publishedAt={props.story.published_at}
        firstPublishedAt={props.story.first_published_at}
        scale_article_cover_image={scale_article_cover_image}
        showNotAvailableInRequestedLocale={showNotAvailableInRequestedLocale ? true : false}
        requestedLocale={requestedLocale && requestedLocale}
        currentURL={currentURL}
        shareTitle={shareTitle}
        tags={tags}
      />
      <section className='mb-5'>
        {props.numberOfArticles > 0 && <RelatedBlog blogs={props.relatedArticles} />}
      </section>
      {/* <CTA /> */}
    </>
  );
};

SingleBlog.getLayout = function getLayout(page) {
  return <MainLayout showFooter>{page}</MainLayout>;
};

export async function getServerSideProps({ params, locale, query }: any) {
  const { slug } = params;

  const storyblokApi = getStoryblokApi();
  try {
    let { data } = await storyblokApi.get(`cdn/stories/articles/${slug}`, {
      version: 'published', // or 'published'
      language: locale,
    });

    const articles = await storyblokApi.get(`cdn/stories`, {
      version: 'published', // or 'published'
      language: locale,
      starts_with: 'articles',
    });

    const relatedArticles: any = articles.data.stories.filter((article: any) => {
      const articleCategories = article.content.categories;
      const currentArticleCategories = data.story.content.categories;
      if (article.id !== data.story.id) {
        return articleCategories.some((category: any) =>
          currentArticleCategories.includes(category),
        );
      }
      return null;
    });

    return {
      props: {
        ...(await serverSideTranslations(locale, locizeNamespaces)),
        story: data ? data.story : false,
        key: data ? data.story.id : false,
        numberOfArticles: articles.data.stories.length,
        relatedArticles: relatedArticles,
        showNotAvailableInRequestedLocale: query.showNotAvailableInRequestedLocale ? true : false,
        requestedLocale: query.requestedLocale ? query.requestedLocale : null,
      },
    };
  } catch (error: any) {
    return {
      redirect: {
        destination: `/blog/${slug}?requestedLocale=${locale}&showNotAvailableInRequestedLocale=true`,
        permanent: false,
      },
    };
  }
}

export default SingleBlog;
