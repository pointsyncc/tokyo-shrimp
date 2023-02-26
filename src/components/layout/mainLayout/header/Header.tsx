import logoPrimary from '@/public/imgs/pointsyncc/logo/desktop/transparent-90.png';
import logoSecondary from '@/public/imgs/pointsyncc/logo/desktop/transparent.png';
import Image from 'next/image';
import Link from 'next/link';
import { CgMenuGridO } from 'react-icons/cg';

interface HeaderProps {
  openMenu: () => void;
}

export const Header = ({ openMenu }: HeaderProps) => {
  return (
    <header className='header__area'>
      <div className='header__inner'>
        <div className='header__logo'>
          <Link href='/'>
            <Image className='logo-primary' width={30} src={logoPrimary} alt='Pointsyncc Logo' />
            <Image
              className='logo-secondary'
              width={125}
              src={logoSecondary}
              alt='Pointsyncc Logo'
            />
          </Link>
        </div>
        <div className='header__nav-icon'>
          <button
            id='open_offcanvas'
            onClick={() => {
              openMenu();
            }}
          >
            <CgMenuGridO fontSize={'2rem'} className='text-white' />
          </button>
        </div>
        <div className='header__support'>
          <p>
            Contact us <a href='tel:+9587325902'>+385 99 2144 802</a>
          </p>
        </div>
      </div>
    </header>
  );
};
