import React from 'react';
import Image from '../image/Image';
import { Link } from '../link/Link';

import logoPrimary from '@/public/imgs/pointsyncc/logo/desktop/transparent-90.png';
import logoSecondary from '@/public/imgs/pointsyncc/logo/desktop/transparent.png';
interface IProps {
  type?: 'primary' | 'secondary';
  width?: number;
  className?:string;
}
export const Logo = ({ className,type = 'primary', width }: IProps) => {
  const logoUrl = type === 'primary' ? logoPrimary : logoSecondary;
  const logoWidth = width ? width : type === 'primary' ? 30 : 125;
  const classes = className  ? className : type === 'primary' ? 'logo-primary' : 'logo-secondary';
  return (
    <Link href='/'>
      <Image
        priority={true}
        raw={true}
        className={classes}
        width={logoWidth}
        src={logoUrl}
        alt='Pointsyncc Logo'
      />
    </Link>
  );
};
