import { Logo } from '@/components/ui/logo/Logo';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { useTranslation } from 'next-i18next';
import { CgMenuGridO } from 'react-icons/cg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPaperPlane, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface HeaderProps {
  openMenu: () => void;
}

export const Header = ({ openMenu }: HeaderProps) => {
  const { t } = useTranslation('common');

  const { matches } = useMatchMedia('(max-width: 450px)');

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 100 && window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && matches) {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY, matches]);

  return (
    <>
      {show && (
        <header className='header__area'>
          <div className='header__inner'>
            <div className='header__logo'>
              {/* <Link href='/'> */}
              <Logo />
              {/* <Image className='logo-primary' width={30} src={logoPrimary} alt='Pointsyncc Logo' /> */}
              <Logo type='secondary' />
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
                {matches ? (
                  <RxHamburgerMenu fontSize={'1.75rem'} className='text-white icon__social' />
                ) : (
                  <CgMenuGridO fontSize={'2rem'} className='text-white icon__social' />
                )}
              </button>
            </div>
            <div className='header__support d-none d-xl-flex flex-column justify-content-center gap-3 '>
              {/* <p>
            {t('dictionary.contact-us')} <a href='tel:+9587325902'>+385 99 2144 802</a>
          </p> */}
              {/* <Link href='https://www.facebook.com/pointsyncc' target='_blank'>
            <FaFacebookF fontSize={'1.5rem'} className='text-white' />
          </Link> */}
              <Link href='https://www.instagram.com/pointsyncc/' target='_blank'>
                <FaInstagram fontSize={'1.35rem'} className='icon__social icon__header' />
              </Link>
              <Link href='https://www.linkedin.com/company/pointsyncc/' target='_blank'>
                <FaLinkedinIn fontSize={'1.35rem'} className='icon__social icon__header' />
              </Link>
              {/* <Link href='https://twitter.com/pointsyncc' target='_blank'>
            <FaTwitter fontSize={'1.5rem'} className='text-white' />
          </Link> */}
            </div>
          </div>
        </header>
      )}
    </>
  );
};
