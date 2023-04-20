import { BlogCard } from '@/components/common/blogCard/BlogCard';
import { useSlideInSection } from '@/hooks/useSlideInSection';
import { Trans, useTranslation } from 'next-i18next';

// interface ArticlesProps{
//   articles:
// }

export const Articles = ({ blogs }: any) => {
  const { t } = useTranslation(['blog', 'common']);

  const { comp } = useSlideInSection('.blog__animation .blog__item');

  const articles = blogs.map((blog: any) => {
    return {
      id: blog.uuid,
      slug: blog.slug,
      image: blog.content.image,
      category: Array.isArray(blog.content.categories) && blog.content.categories.length ? blog.content.categories[0] : '',
      title: blog.content.title,
      published_at: blog.published_at,
    };
  });

  return (
    <section className='blog__area-6 blog__animation' ref={comp}>
      <div className='container g-0 line pt-110 pb-110'>
        <span className='line-3'></span>
        <div className='row pb-130'>
          <div className='col-xxl-8 col-xl-7 col-lg-6 col-md-6'>
            <div className='sec-title-wrapper'>
              <h1 className='hero-title animation__word_come'>
                <Trans i18nKey={'blog.page.title-new'} t={t} ns={'blog'}>
                  We think <br />
                  <del>traditional</del> digital
                </Trans>
              </h1>
            </div>
          </div>
          <div className='col-xxl-4 col-xl-5 col-lg-6 col-md-6'>
            <div className='blog__text'>
              <p>{t('blog.page.subtitle', { ns: 'blog' })}</p>
            </div>
          </div>
        </div>

        <div className='row reset-grid'>
          {articles.map((article: any) => (
            <div key={article.id} className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
              <BlogCard {...article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
