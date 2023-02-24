import React from 'react';

export const CircleButton = ({ children }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className='btn_wrapper'>
      <button className='wc-btn-primary btn-hover btn-item'>{children}</button>
    </div>
  );
};

export default CircleButton;
