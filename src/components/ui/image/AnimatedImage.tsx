import { RotateIn } from '@/components/common/animations/RotateIn';
import { classNames } from '@/utils/classNames';
import React from 'react';
import Image, { IImageProps } from './Image';

interface IProps  extends IImageProps{
    containerClasses?: string;
    children?: React.ReactNode;

}

const AnimatedImage = ({ children,containerClasses,className = '', ...rest }: IProps) => {
  const classes = classNames('anim-rotate-in', className);
  return (
    <RotateIn className={containerClasses}>
      <Image className={classes} {...rest} alt='' />
      {children}
    </RotateIn>
  );
};

export default AnimatedImage;
