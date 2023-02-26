
import { classNames } from '@/utils/classNames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLParagraphElement> {}
import classes from './error.module.scss'
const Error = ({ children,className = '', ...rest }: IProps) => {
  return (
    <p className={classNames('form__error__message mb-0',className,classes.error)} {...rest}>
      {children}
    </p>
  );
};

export default Error ;
