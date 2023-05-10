import React from 'react';
import Image from '../image/Image';
import { Link } from '../link/Link';

import logoPrimary from '@/public/imgs/pointsyncc/logo/desktop/transparent-90.png';
import logoSecondary from '@/public/imgs/pointsyncc/logo/desktop/transparent.png';
interface IProps {
  type?: 'primary' | 'secondary';
  width?: number;
  className?: string;
  version?: 'icon' | 'logo';
}
export const Logo = ({ className, type = 'primary', width, version }: IProps) => {
  const logoUrl = type === 'primary' ? logoPrimary : logoSecondary;
  const iconURL =
    'https://tokyo.fra1.cdn.digitaloceanspaces.com/projects/tokyo-shrimp/assets/PSC-pointsyncc-icon-logo-28x28-accent-03.webp';
  const logoWidth = width ? width : type === 'primary' ? 22 : 28;
  const classes = className ? className : type === 'primary' ? 'logo-primary' : 'logo-secondary';
  return (
    <Link href='/'>
      {version === 'icon' ? (
        <Image
          priority={true}
          raw={true}
          className={classes}
          height={logoWidth}
          width={logoWidth}
          src={iconURL}
          alt='POINTSYNCC Icon'
        />
      ) : (
        <Image
          priority={true}
          raw={true}
          className={classes}
          width={logoWidth}
          src={logoUrl}
          alt='POINTSYNCC Logo'
        />
      )}
    </Link>
  );
};
