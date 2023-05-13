import Image from '@/components/ui/image/Image';
import { Link } from '@/components/ui/link/Link';
import { Article } from '@/types/article';
import { formatToLocaleDate } from '@/utils/formatToLocaleDate';
import { trimText } from '@/utils/trimText';
import { Trans, useTranslation } from 'next-i18next';
import { FaArrowRight } from 'react-icons/fa';

export const BlogCard = ({ id, slug, title, description, published_at, preview_image, image, category }: Article) => {
  const { t } = useTranslation(['blog', 'common']);
  return (
    <article className='blog__item' key={id}>
      <div className='blog__img-wrapper'>
        <Link href={`/blog/${slug}`}>
          <div className='img-box'>
            <Image
              raw={true}
              width={777}
              height={425}
              className='image-box__item'
              src={preview_image}
              alt=''
            />
            <Image
              width={777}
              height={425}
              raw={true}
              className='image-box__item'
              src={preview_image}
              alt=''
            />
          </div>
        </Link>
      </div>
      <h4 className='blog__meta'>
        <span>
          {category}{category && ", "}
        </span>
        {t('blog.published-on', { ns: 'blog' })}: {formatToLocaleDate(published_at)}
      </h4>
      <h5 title={title}>
        <Link href={`/blog/${slug}`} className='blog__title'>
          {trimText(title, 32)}
        </Link>
      </h5>
      <p title={description} className='blog__description mb-2'>
          {trimText(description, 102)}
      </p>
      <Link href={`/blog/${slug}`} className='blog__btn'>
        <Trans i18nKey='blog.card.button.read-more' t={t} ns='blog'>
          Read more
          <span>
            <FaArrowRight />
          </span>
        </Trans>
      </Link>
    </article>
  );
};
