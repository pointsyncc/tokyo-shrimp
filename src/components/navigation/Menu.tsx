import {
  COMPANY_ADDRESS,
  COMPANY_CONTACT_EMAIL,
  COMPANY_CONTACT_PHONE_NUMBER,
} from '@/utils/contants';
import gsap from 'gsap';
import { Link as RouteTranslateLink } from 'next-translate-routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { FaTimes } from 'react-icons/fa';
import LocaleSwitcher from '../common/localeSwitcher/LocaleSwitcher';
import Image from '../ui/image/Image';
import { Logo } from '../ui/logo/Logo';
import classes from './menu.module.scss';
import { classNames } from '@/utils/classNames';

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  showLangSwitcher: boolean;
}
export default function Menu({ open, setOpen, showLangSwitcher }: IProps) {
  const router = useRouter();
  const comp = useRef(null);

  const { t } = useTranslation('common');

  useEffect(() => {
    let ctx = gsap.context(() => {
      const targets = document.querySelectorAll('.menu-anim li');
      gsap.set(targets, { x: 30, opacity: 0 });
      const tl = gsap
        .timeline({
          paused: true,
          reversed: true,
        })
        .to(
          targets,
          {
            duration: 1,
            x: 0,
            opacity: 1,

            stagger: 0.2,
          },
          0.2,
        );

      if (tl.reversed()) {
        tl.play();
      } else {
        tl.reverse();
      }
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, [open]);

  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events, setOpen]);

  const links = [
    {
      href: '/',
      text: `${t('dictionary.home')}`,
    },
    {
      href: '/about',
      text: `${t('dictionary.about')}`,
    },
    {
      href: '/services',
      text: `${t('dictionary.services')}`,
    },
    // {
    //   href: '/portfolio',
    //   text: `${t('dictionary.portfolio')}`,
    // },
    {
      href: '/team',
      text: `${t('dictionary.team')}`,
    },
    {
      href: '/contact',
      text: `${t('dictionary.contact')}`,
    },
  ];
  return (
    <>
      <div
        className={`offcanvas__area ${classes.offcanvas}`}
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
        }}
      >
        <div className='offcanvas__body'>
          <div className='offcanvas__left'>
            <div className='offcanvas__logo'>
              {/* <Link href='/'> */}
              <Logo className='logo' type='secondary' width={180} />
              {/* <img
                width={180}
                src='imgs/pointsyncc/logo/desktop/transparent.png'
                alt='PointSync logo'
              /> */}
              {/* </Link> */}
            </div>
            <div className='offcanvas__social'>
              <h3 className='social-title'>{t('menu.social.follow-us')}</h3>
              <ul>
                <li>
                  <Link href='https://www.instagram.com/pointsyncc/' target={'_blank'}>
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href='https://www.facebook.com/pointsyncc/' target={'_blank'}>
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/pointsyncc/' target={'_blank'}>
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div className='offcanvas__links'>
              {/* <h3 className='social-title'>Trending</h3> */}
              <ul>
                {/* <li>
                <RouteTranslateLink href='/about'>{t('dictionary.about')}</RouteTranslateLink>
              </li> */}
                <li>
                  <RouteTranslateLink href='/contact'>{t('dictionary.contact')}</RouteTranslateLink>
                </li>
                <li>
                  <RouteTranslateLink href='/career'>{t('dictionary.career')}</RouteTranslateLink>
                </li>
                <li>
                  <RouteTranslateLink href='/blog'>{t('dictionary.blog')}</RouteTranslateLink>
                </li>
              </ul>
            </div>
          </div>
          <div className='offcanvas__mid d-flex justify-content-center  flex-column'>
            <div className='offcanvas__menu-wrapper'>
              <nav className={`offcanvas__menu ${classes['offcanvas__menu']}`}>
                <ul className='menu-anim d-flex align-items-stretch flex-column justify-content-center text-center gap-2'>
                  {links.map((link) => (
                    <li key={link.href}>
                      <RouteTranslateLink href={link.href}>{link.text}</RouteTranslateLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            {showLangSwitcher ? (
              <LocaleSwitcher
                className={classNames('align-self-center mt-5', 'd-flex d-xl-none')}
                contentZIndex={10000}
              />
            ) : null}
          </div>
          <div className='offcanvas__right'>
            <div className='offcanvas__search'>
              {/* WE NEED TO MAKE THIS WORK LATER ON WITH REAL FUNCTIONALITY */}
              {/* <form action='#'>
              <input type='text' name='search' placeholder='Search keyword' />
              <button>
                <i className='fa-solid fa-magnifying-glass'></i>
              </button>
            </form> */}
            </div>
            <div className='offcanvas__contact'>
              <h3>{t('menu.get-in-touch')}</h3>
              <ul>
                <li>
                  <a href={`tel:${COMPANY_CONTACT_PHONE_NUMBER}`}>{COMPANY_CONTACT_PHONE_NUMBER}</a>
                </li>
                <li>
                  <a href={`mailto:${COMPANY_CONTACT_EMAIL}`}>{COMPANY_CONTACT_EMAIL}</a>
                </li>
                <li>
                  <a href={`https://goo.gl/maps/fRA3HnsYcRCNwjd28`} target='_blank'>
                    {COMPANY_ADDRESS}
                  </a>
                </li>
              </ul>
            </div>
            <Image
              style={{ height: 'auto' }}
              raw={true}
              src='/imgs/shape/11.png'
              alt='shape'
              className='shape-1'
              width={189}
              height={94}
            />
            {/* <img src='/imgs/shape/11.png' alt='shape' className='shape-1' /> */}
            <Image
              raw={true}
              width={81}
              height={80}
              style={{ height: 'auto' }}
              src='/imgs/shape/12.png'
              alt='shape'
              className='shape-2'
            />
            {/* <img src='/imgs/shape/12.png' alt='shape' className='shape-2' /> */}
          </div>
          <div className='offcanvas__close'>
            <button type='button' id='close_offcanvas' onClick={setOpen.bind(null, false)}>
              <FaTimes />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
