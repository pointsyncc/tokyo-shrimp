import { BlogDetail, BlogDetailProps } from '@/components/blog/blogDetail/BlogDetail';
import RelatedBlog from '@/components/blog/relatedBlog/RelatedBlog';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import { Article } from '@/types/article';
import { getStoryblokApi } from '@storyblok/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { NextPageWithLayout } from '../_app';


const SingleBlog: NextPageWithLayout = (props: any) => {
  const { title, categories, author, content, image, teaser,scale_article_cover_image, tags }: BlogDetailProps =
    props.story.content;

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
          siteName: 'Pointsyncc',
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

export async function getServerSideProps({ params, locale }: any) {
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

    const relatedArticles: any = articles.data.stories.filter(
      (article: any) => {
        const articleCategories = article.content.categories;
        const currentArticleCategories = data.story.content.categories;
        if (article.id !== data.story.id) {
          return articleCategories.some((category: any) =>
            currentArticleCategories.includes(category),
          );
        }
        return null;
      },
    );

    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
          'footer',
          'cookie-consent',
          'blog',
          'homepage',
        ])),
        story: data ? data.story : false,
        key: data ? data.story.id : false,
        numberOfArticles: articles.data.stories.length,
        relatedArticles: relatedArticles,
      },
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: `/${locale}/404`,
      },
      props: {},
    };
  }
}

export default SingleBlog;
