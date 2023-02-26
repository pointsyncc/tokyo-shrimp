import { classNames } from '@/utils/classNames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLParagraphElement> {}
<<<<<<< HEAD
import classes from './error.module.scss'
const Error = ({ children,className = '', ...rest }: IProps) => {
  return (
    <p className={classNames('form__error__message mb-0',className,classes.error)} {...rest}>
=======

const Error = ({ children, className = '', ...rest }: IProps) => {
  return (
    <p className={classNames('form__error__message mb-0', className)} {...rest}>
>>>>>>> 8546a24e01805ae28144cccc778912bc6e7202b4
      {children}
    </p>
  );
};

export default Error;
