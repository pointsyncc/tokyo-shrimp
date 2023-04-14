import { BlogDetail, BlogDetailProps } from '@/components/blog/blogDetail/BlogDetail';
import RelatedBlog from '@/components/blog/relatedBlog/RelatedBlog';
import CTA from '@/components/common/CTA';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import { getStoryblokApi } from '@storyblok/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextPageWithLayout } from '../_app';
import { NextSeo } from 'next-seo';

const SingleBlog: NextPageWithLayout = (props: any) => {
  const { title, author, content, image, teaser  }: BlogDetailProps = props.story.content;

  //format to locale date
  const formatDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  };

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
        author={author}
        content={content}
        image={image}
        date={formatDate(props.story.first_published_at)}
      />
      <RelatedBlog />
      <CTA />
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

  if (!data) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    };
  }

  // console.log(data);

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
