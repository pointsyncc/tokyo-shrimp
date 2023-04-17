import Image from '@/components/ui/image/Image';
import { Link } from '@/components/ui/link/Link';
import { Article } from '@/types/article';
import { formatToLocaleDate } from '@/utils/formatToLocaleDate';
import { trimText } from '@/utils/trimText';
import { Trans, useTranslation } from 'next-i18next';
import { FaArrowRight } from 'react-icons/fa';

export const BlogCard = ({ id, slug, title, published_at, image, category }: Article) => {
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
              src={image}
              alt=''
            />
            <Image
              width={777}
              height={425}
              raw={true}
              className='image-box__item'
              src={image}
              alt=''
            />
          </div>
        </Link>
      </div>
      <h4 className='blog__meta'>
        <Link href={`/blog/category/${category.replaceAll(' ', '-').toLowerCase()}`}>
          {category}
        </Link>{' '}
        {formatToLocaleDate(published_at)}
      </h4>
      <h5 title={title}>
        <Link href={`/blog/${slug}`} className='blog__title'>
          {trimText(title, 35)}
        </Link>
      </h5>
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
