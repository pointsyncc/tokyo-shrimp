import { Size } from '@/types/general';
import { classNames } from '@/utils/classNames';
import React from 'react';
import classes from './loader.module.scss';

interface IProps {
  size?: Size;
}

const Loader = ({ size  = 'lg'}: IProps) => {
  const className = classNames(classes.loader, classes[size]);
  return (
    <div className={className}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
