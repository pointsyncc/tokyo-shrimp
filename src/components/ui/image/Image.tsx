import React from 'react';
import NextImage, { ImageProps } from 'next/image';
import classes from './image.module.scss';



interface IProps extends ImageProps {
  containerClasses?: string;
  raw?: boolean;
}
const Image = ({ raw = false, className, containerClasses, ...rest }: IProps) => {
  return raw ? (
    <NextImage
      placeholder='blur'
      blurDataURL={'/imgs/pointsyncc/loader.gif'}
      className={className}
      {...rest}

    />
  ) : (
    <div className={`${classes['img-container']} position-relative ${containerClasses}`}>
      <NextImage
        fill
        placeholder='blur'
        blurDataURL={'/imgs/pointsyncc/loader.gif'}
        {...rest}
      />
    </div>
  );
};

export default Image;
