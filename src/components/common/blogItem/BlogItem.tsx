import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from '@/components/ui/image/Image';
import { Link } from '@/components/ui/link/Link';

interface IProps {
  imgSrc: string;
  title: string;
  date: string;
  category: string;
  id:number
}

export const BlogItem = ({ id,title, date, imgSrc, category }: IProps) => {
  return (
    <article className='blog__item'>
      <div className='blog__img-wrapper'>
        <Link href={`/blog/${id}`} >
          <div className='img-box'>
            <Image
              raw={true}
              width={777}
              height={425}
              className='image-box__item'
              src={imgSrc}
              alt=''
            />
            <Image
              width={777}
              height={425}
              raw={true}
              className='image-box__item'
              src={imgSrc}
              alt=''
            />
            {/* <img className='image-box__item' src='imgs/pointsyncc/footer.jpg' alt='' />
          <img className='image-box__item' src='imgs/pointsyncc/footer.jpg' alt='' /> */}
          </div>
        </Link>
      </div>
      <h4 className='blog__meta'>
        <Link href={`/blog/category/${category.replaceAll(' ','-').toLowerCase()}`}>{category}</Link> . {date}
      </h4>
      <h5>
        <Link href={`/blog/${id}`} className='blog__title'>
          {title}
        </Link>
      </h5>
      <Link href={`/blog/${id}`} className='blog__btn'>
        Read More{' '}
        <span>
          <FaArrowRight />
        </span>
      </Link>
    </article>
  );
};
