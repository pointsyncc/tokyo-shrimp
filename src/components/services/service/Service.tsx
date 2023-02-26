import { Link } from '@/components/ui/link/Link';
import { ComponentAttrs } from '@/types/general';
import React from 'react';

interface IProps extends ComponentAttrs {
  id:string;
  imgSrc: string;
  title: string;
  description: string;
  subServices: string[];
}

export const Service = ({ id,title, imgSrc, description, subServices }: IProps) => {
  return (
    <div className='service__item-6' id='service_2' data-secid='2'>
      <div className='image-tab'>
        <img src={imgSrc} alt='Service Image' />
      </div>

      <div className='animation__service_page'>
        <h2 className='service__title-6'>{title}</h2>
        <p>{description}</p>
        <ul>
          {subServices.map((service) => (
            <li key={service}>+ {service}</li>
          ))}
        </ul>
        <div className='btn_wrapper'>
          <Link href={`/services/${id}`} className='wc-btn-secondary btn-item btn-hover'>
            <span></span>Get free
            <br />
            qoutes <i className='fa-solid fa-arrow-right'></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

