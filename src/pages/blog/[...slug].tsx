import { BlogDetail, BlogDetailProps } from '@/components/blog/blogDetail/BlogDetail';
import RelatedBlog, { RelatedBlogProps } from '@/components/blog/relatedBlog/RelatedBlog';
import CTA from '@/components/common/CTA';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import { getStoryblokApi } from '@storyblok/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextPageWithLayout } from '../_app';
import { NextSeo } from 'next-seo';

const SingleBlog: NextPageWithLayout = (props: any) => {
  const { title,categories, author, content, image, teaser, tags }: BlogDetailProps = props.story.content;

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
        tags={tags}
      />
      {props.numberOfArticles > 0 && <RelatedBlog blogs={props.relatedArticles} />}
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
  let { data } = await storyblokApi.get(`cdn/stories/articles/${slug}`, {
    version: 'published', // or 'published'
    language: locale,
  });

  const articles = await storyblokApi.get(`cdn/stories`, {
    version: 'draft', // or 'published'
    language: locale,
    starts_with: 'articles',
  });

  if (!data) {
    return {
      redirect: {
        permanent: false,
        destination: "/blog",
      },
      props:{},
    };
  }

  //find articles that have at least one same category as the current article
  const relatedArticles: RelatedBlogProps | null = articles.data.stories.filter((article: any) => {
    const articleCategories = article.content.categories;
    const currentArticleCategories = data.story.content.categories;
    if (article.id !== data.story.id) {
      return articleCategories.some((category: any) => currentArticleCategories.includes(category));
    }
    return null;
  });

  console.log("RELATED ARTICLES", relatedArticles);

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
}

// pages/blog/[slug].js
// export async function getStaticPaths() {

//   const storyblokApi = getStoryblokApi();
//   let {data} = await storyblokApi.get(`cdn/stories`, {
//     version: "draft", //or 'published'
//   });

//   const paths = data.stories.map((story: any) => ({
//     params: { slug: story.slug },
//   }))

//   return {
//     paths: [{ params: { slug: 'test'.split('/') } }],
//     fallback: true, // can also be true or 'blocking'
//   };
// }

export default SingleBlog;
