import { useSlideInSection } from '@/hooks/useSlideInSection';
import { useTranslation } from 'next-i18next';
import { BlogCard } from '../common/blogCard/BlogCard';
import SectionTitle from '../ui/sectionTitle/SectionTitle';

export default function Blog({blogs}: any) {
  const { t } = useTranslation('homepage');

  const { comp } = useSlideInSection('.blog__animation .blog__item');

  const articles = Array.isArray(blogs) && blogs.length > 0 && blogs.map((blog: any) => {
    return {
      id: blog.uuid,
      slug: blog.slug,
      preview_image: blog.content.article_preview_image ? blog.content.article_preview_image : blog.content.image,
      image: blog.content.image,
      category: Array.isArray(blog.content.categories) && blog.content.categories.length ? blog.content.categories[0].name : '',
      title: blog.content.title,
      description: blog.content.teaser,
      published_at: blog.published_at,
    };
  });

  return (
    <section ref={comp} className='blog__area no-pb blog__animation'>
      <div className='container g-0 line pt-150 pb-140'>
        <span className='line-3'></span>
        <div className='row'>
          <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
            <div className='sec-title-wrapper'>
              <h2 className='sec-sub-title'> {t('blog.subtitle', { ns: 'homepage' })}</h2>
              <SectionTitle>{t('blog.title', { ns: 'homepage' })}</SectionTitle>
            </div>
          </div>
          {/* SHOW ONLY FIRST THREE ARTICLES */}
          {Array.isArray(articles) && articles.length > 0 && articles.slice(0, 3).map((article: any) => {
            return (
              <div key={article.id} className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
                <BlogCard {...article} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
