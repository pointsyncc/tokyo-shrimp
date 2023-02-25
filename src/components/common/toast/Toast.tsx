import React from 'react';
import { Toaster, ToasterProps } from 'react-hot-toast';
export const PSToaster = ({
  position = 'top-right',
  toastOptions = {
    duration: 2000,
    style: {
      background: '#363636',
      color: '#fff',
    },
    success: {
      duration: 2000,
      iconTheme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  },
}: ToasterProps) => {
  return (
    <Toaster
      position={position}
      reverseOrder={false}
      gutter={8}
      containerClassName=''
      containerStyle={{}}
      toastOptions={toastOptions}
    />
  );
};


