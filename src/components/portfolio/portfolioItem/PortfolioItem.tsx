import Image from '@/components/ui/image/Image';
import { Link } from '@/components/ui/link/Link';
import React from 'react';
import { IntersectionOptions, useInView } from 'react-intersection-observer';
export interface IPortfolioItemProps {
  id: string;
  imgSrc: string;
  title: string;
  date: string;
  onVisibilityChange?: (inView: boolean, id: string) => void;
}
const PortfolioItem = ({ id, imgSrc, title, date, onVisibilityChange }: IPortfolioItemProps) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
    onChange: onVisibilityChange ? (inView: boolean) => onVisibilityChange(inView, id) : undefined,
  });
  return (
    <div className='portfolio__item-6' ref={ref}>
      <Link href={`/portfolio/${id}`}>
        <Image src={imgSrc} alt='Portfolio Image' />
        <div className='portfolio__content-6'>
          <h4 className='portfolio__title-6'>{title}</h4>
          <h5 className='portfolio__date'>{date}</h5>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioItem;
