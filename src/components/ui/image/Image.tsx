import React from 'react';
import NextImage, { ImageProps } from 'next/image';
import classes from './image.module.scss';



export interface IImageProps extends ImageProps {
  containerClasses?: string;
  raw?: boolean;

}
const Image = ({ priority,raw = false, className, containerClasses, ...rest }: IImageProps) => {
  return raw ? (
    <NextImage
      placeholder={priority ? 'empty' : 'blur'}
      blurDataURL={'/imgs/pointsyncc/loader.gif'}
      className={className}
      {...rest}

    />
  ) : (
    
    <div className={`${classes['img-container']} position-relative ${containerClasses}`}>
      <NextImage
        fill
        placeholder={priority ? 'empty' : 'blur'}
        blurDataURL={'/imgs/pointsyncc/loader.gif'}
        {...rest}
      />
    </div>
  );
};

export default Image;
