import React from 'react';

export interface ILabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  htmlFor?: string;
}

const Label = ({ children, required, className = 'form-label', ...rest }: ILabelProps) => {
  return (
    <label className={className} {...rest}>
      {children} {required ? '*' : ''}
    </label>
  );
};

export default Label;
