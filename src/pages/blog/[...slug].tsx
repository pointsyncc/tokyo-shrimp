import { BlogDetail, BlogDetailProps } from '@/components/blog/blogDetail/BlogDetail';
import RelatedBlog from '@/components/blog/relatedBlog/RelatedBlog';
import CTA from '@/components/common/CTA';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';
import { getStoryblokApi } from '@storyblok/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextPageWithLayout } from '../_app';

const SingleBlog: NextPageWithLayout = (props: any) => {
  const { title, author, content, image }: BlogDetailProps = props.story.content;

  //format to locale date
  const formatDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  };

  return (
    <>
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
  //fetch slug from route
  // const router = useRouter()

  // const {pid} = router.query

  // load the draft version
  // const router = useRouter();
  // const lang = router.locale;
  const { slug } = params;

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/articles/${slug}`, {
    version: 'published', // or 'published'
    language: locale,
  });

  const test = true

  if (!data) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    }
  }

  // console.log(data);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer', 'cookie-consent', 'blog', 'homepage'])),
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    }
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
