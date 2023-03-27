import { Logo } from '@/components/ui/logo/Logo';
import { useTranslation } from 'next-i18next';
import { CgMenuGridO } from 'react-icons/cg';


interface HeaderProps {
  openMenu: () => void;
}

export const Header = ({ openMenu }: HeaderProps) => {

  const {t} = useTranslation(['common']);

  return (
    <header className='header__area'>
      <div className='header__inner'>
        <div className='header__logo'>
          {/* <Link href='/'> */}
            <Logo/>
            {/* <Image className='logo-primary' width={30} src={logoPrimary} alt='Pointsyncc Logo' /> */}
            <Logo type="secondary"/>
            {/* <Image
              className='logo-secondary'
              width={125}
              src={logoSecondary}
              alt='Pointsyncc Logo'
            /> */}
           {/* </Link> */}
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
            {t('dictionary.contact-us')} <a href='tel:+9587325902'>+385 99 2144 802</a>
          </p>
        </div>
      </div>
    </header>
  );
};
