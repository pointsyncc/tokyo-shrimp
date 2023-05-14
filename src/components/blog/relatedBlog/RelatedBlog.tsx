import { BlogCard } from '@/components/common/blogCard/BlogCard';
import { useSlideInSection } from '@/hooks/useSlideInSection';
import { useTranslation } from 'next-i18next';

type relatedArticle = {
  id: number;
  preview_image: string;
  image: string;
  category?: string;
  title: string;
  published_at: string;
};

export interface RelatedBlogProps {
  articles: relatedArticle[];
}

const RelatedBlog = ({ blogs }: any) => {
  const { t } = useTranslation(['blog']);

  const { comp } = useSlideInSection('.blog__animation .blog__item');

  // const blogs = [
  //   {
  //     id: 1,
  //     imgSrc: '/imgs/pointsyncc/footer.jpg',
  //     category: 'UI Design',
  //     title: 'Ways of lying to yourself about your new relationship.',
  //     date: '02 May 2019',
  //   },
  //   {
  //     id: 2,
  //     imgSrc: '/imgs/pointsyncc/footer.jpg',
  //     category: 'UI Design',
  //     title: 'How to manage a talented and successful de sign team.',
  //     date: '02 May 2019',
  //   },
  //   {
  //     id: 3,
  //     imgSrc: '/imgs/pointsyncc/footer.jpg',
  //     category: 'UI Design',
  //     title: 'How to bring fold to your startup company with Axtra.',
  //     date: '02 May 2019',
  //   },
  // ];


  const articles = blogs.map((blog: any) => {
    return {
      id: blog.uuid,
      slug: blog.slug,
      preview_image: blog.content.article_preview_image ? blog.content.article_preview_image : blog.content.image,
      image: blog.content.image,
      category: blog.content.categories[0],
      title: blog.content.title,
      description: blog.content.teaser,
      published_at: blog.published_at,
    };
  }
  );
  return (
    <>
      {Array.isArray(articles) && articles.length > 0 && (
        <section ref={comp} className='blog__related blog__animation'>
          <div className='container g-0 line pt-5 pb-140'>
            <span className='line-3'></span>
            <div className='row'>
              <div className='col-xxl-12'>
                <div className='sec-title-wrapper'>
                  <h2 className='sec-title title-anim'>
                    {t('blog.section.related-articles.title')}
                  </h2>
                </div>
              </div>
            </div>

            <div className='row reset-grid'>
              {Array.isArray(articles) && articles.length &&
                articles.map((article: any) => {
                  return (
                    <div key={article.id} className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
                      <BlogCard {...article} />
                    </div>
                  );
                })}
              {/* {blogs.map((blog) => {
            return (
              <div key={blog.id} className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
                <BlogItem {...blog} />
              </div>
            );
          })} */}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default RelatedBlog;
