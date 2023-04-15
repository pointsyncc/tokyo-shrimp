import Image from '@/components/ui/image/Image';
import { Link } from '@/components/ui/link/Link';
import { formatToLocaleDate } from '@/utils/formatToLocaleDate';
import { FaArrowRight } from 'react-icons/fa';

interface IProps {
  id: number;
  slug: string;
  image: string;
  title: string;
  published_at: string;
  category: string;
}

export const BlogItem = ({ id, slug, title, published_at, image, category }: IProps) => {
  return (
    <article className='blog__item'>
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
            {/* <img className='image-box__item' src='imgs/pointsyncc/footer.jpg' alt='' />
          <img className='image-box__item' src='imgs/pointsyncc/footer.jpg' alt='' /> */}
          </div>
        </Link>
      </div>
      <h4 className='blog__meta'>
        <Link href={`/blog/category/${category.replaceAll(' ', '-').toLowerCase()}`}>
          {category}
        </Link>{' '}
        . {formatToLocaleDate(published_at)}
      </h4>
      <h5>
        <Link href={`/blog/${slug}`} className='blog__title'>
          {title}
        </Link>
      </h5>
      <Link href={`/blog/${slug}`} className='blog__btn'>
        Read More{' '}
        <span>
          <FaArrowRight />
        </span>
      </Link>
    </article>
  );
};
