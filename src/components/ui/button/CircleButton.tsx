import React from 'react';
import Loader from '../loader/Loader';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const CircleButton = ({ isLoading = false, children, ...rest }: IProps) => {
  return (
    <div className='btn_wrapper'>
      <button className='wc-btn-primary btn-hover btn-item' {...rest}>
        {isLoading ? <Loader size='sm' /> : children}
      </button>
    </div>
  );
};

export default CircleButton;
