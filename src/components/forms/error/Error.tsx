import { classNames } from '@/utils/classNames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const Error = ({ children, className = '', ...rest }: IProps) => {
  return (
    <p className={classNames('form__error__message mb-0', className)} {...rest}>
      {children}
    </p>
  );
};

export default Error;
