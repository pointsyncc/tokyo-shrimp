import { Logo } from '@/components/ui/logo/Logo';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { COMPANY_FACEBOOK, COMPANY_INSTAGRAM, COMPANY_LINKEDIN } from '@/utils/constants';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';

interface HeaderProps {
  openMenu: () => void;
}

export const Header = ({ openMenu }: HeaderProps) => {
  const { matches } = useMatchMedia('(max-width: 840px)');
  /* 
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 115 && window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setLastScrollY(window.scrollY);
        setShow(false);
      } else {
        // if scroll up show the navbar
        //delay the navbar show to avoid flickering
        setTimeout(() => {
          setShow(true);
        }
        , 350);
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
  }, [ matches]);
 */

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 68 && window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
 /*        setTimeout(() => {
          setShow(true);
        }, 200); */
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
              <Logo className='logo_rotated' />
              <Logo type='secondary'  />
            </div>
            <div className='header__nav-icon'>
              <button
                id='open_offcanvas'
                onClick={() => {
                  openMenu();
                }}
              >
                {matches ? (
                  <RxHamburgerMenu
                    fontSize={'1.5rem'}
                    className='text-white icon__social'
                    aria-label='Open menu'
                  />
                ) : (
                  <CgMenuGridO
                    fontSize={'1.85rem'}
                    className='text-white icon__social'
                    aria-label='Open menu'
                  />
                )}
              </button>
            </div>
            <div className='header__support d-none d-xl-flex flex-column justify-content-center gap-3 '>
              <Link
                href={COMPANY_INSTAGRAM}
                target='_blank'
                aria-label='Visit Pointsyncc Instagram profile page'
              >
                <FaInstagram fontSize={'1.35rem'} className='icon__header' />
              </Link>
              <Link
                href={COMPANY_LINKEDIN}
                target='_blank'
                aria-label='Visit Pointsyncc LinkedIn profile page'
              >
                <FaLinkedinIn fontSize={'1.35rem'} className='icon__header' />
              </Link>
              <Link
                href={COMPANY_FACEBOOK}
                target='_blank'
                aria-label='Visit Pointsyncc LinkedIn profile page'
              >
                <FaFacebook fontSize={'1.35rem'} className='icon__header' />
              </Link>
            </div>
          </div>
        </header>
      )}
    </>
  );
};
