import { SplitCome } from '@/components/common/animations/SplitCome';
import Image from '@/components/ui/image/Image';
import { compareDesc } from 'date-fns';
import { useTranslation } from 'next-i18next';
import { render } from 'storyblok-rich-text-react-renderer';

export interface BlogDetailProps {
  title: string;
  categories: string[];
  publishedAt: string;
  firstPublishedAt: string;
  scale_article_cover_image: string;
  author: string;
  image: string;
  content: string;
  teaser?: string;
  tags: string[];
}

export const BlogDetail = ({
  title,
  categories,
  publishedAt,
  author,
  image,
  content,
  firstPublishedAt,
  scale_article_cover_image,
  tags,
}: BlogDetailProps) => {
  const { t } = useTranslation(['blog', 'common']);

  // const compareDates = compareDesc(new Date(publishedAt), new Date(updatedAt));
  let publishedDate = new Date(publishedAt);
  let firstPublishedDate = new Date(firstPublishedAt);

  const compareDates = compareDesc(publishedDate, firstPublishedDate);

  //format to locale date
  const formatDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  };

  const formatedCategories = categories.map((category) => {
    if (category !== categories[categories.length - 1]) {
      return `${category}, `;
    }
    return category;
  });

  const formattedTags = tags.map((tag) => {
    if (tag !== tags[tags.length - 1]) {
      return `${tag}, `;
    }
    return tag;
  });

  return (
    <section className='blog__detail'>
      <div className='container g-0 line pt-140'>
        <span className='line-3'></span>
        <div className='row'>
          <div className='col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1'>
            <div className='blog__detail-top'>
              <SplitCome type='words'>
                <h2 className='blog__detail-date animation__word_come d-none d-md-block'>
                  {formatedCategories}{' '}
                  {compareDates === -1 ? (
                    <span className='blog__detail-date-updated'>
                      {t('blog.updated-at', { ns: 'blog' })} {formatDate(publishedAt)}
                    </span>
                  ) : (
                    <span>
                      {t('blog.published-on', { ns: 'blog' })} {formatDate(firstPublishedAt)}
                    </span>
                  )}
                </h2>

                <h1 className='blog__detail-title animation__word_come'>{title}</h1>
                <h2 className='blog__detail-date animation__word_come d-block d-md-none'>
                  {formatedCategories}
                  {compareDates === -1 ? (
                    <span className='blog__detail-date-updated'>
                      {t('blog.updated-at', { ns: 'blog' })} {formatDate(publishedAt)}
                    </span>
                  ) : (
                    <span>
                      {t('blog.published-on', { ns: 'blog' })} {formatDate(firstPublishedAt)}
                    </span>
                  )}
                </h2>
              </SplitCome>
              <div className='blog__detail-metalist mt-3'>
                <div className='blog__detail-meta'>
                  <Image
                    className='rounded-circle'
                    priority={true}
                    raw={true}
                    width={50}
                    height={50}
                    src={`https://ui-avatars.com/api/?name=${author}&background=0D8ABC&color=fff`}
                    alt={`Blog about ${title} written by ${author}`}
                  />

                  <p>
                    {t('blog.written-by', { ns: 'blog' })}: <span>{author}</span>
                  </p>
                </div>
                {/* <div className='blog__detail-meta'>
                  <p>
                    {t('blog.read-time', { ns: 'blog' })}: <span>{stats.words} min</span>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          <div className='col-xxl-12'>
            <div className='blog__detail-thumb'>
              <Image
                src={image}
                alt={`Blog about "${title}" written by ${author}`}
                data-scale-image-on-mobile={scale_article_cover_image}
                data-speed='0.5'
              />
            </div>
          </div>
          <div className='col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1'>
            <div className='blog__detail-content'>{render(content)}</div>
            <div className='blog__detail-tags'>
              <p className='sub-title-anim'>
                {t('blog.tags', { ns: 'blog' })}:{' '}
                <span className='text-decoration-underline'>{formattedTags}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
