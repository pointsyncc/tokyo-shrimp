import {
  COMPANY_ADDRESS,
  COMPANY_CONTACT_EMAIL,
  COMPANY_CONTACT_PHONE_NUMBER,
  COMPANY_INSTAGRAM,
  COMPANY_LINKEDIN,
} from '@/utils/contants';
import gsap from 'gsap';
import { useTranslation } from 'next-i18next';
import { Link as RouteTranslateLink } from 'next-translate-routes';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaInstagram, FaLinkedinIn, FaTimes } from 'react-icons/fa';
import LocaleSwitcher from '../common/localeSwitcher/LocaleSwitcher';
import classes from './menu.module.scss';
import Image from '../ui/image/Image';
import { Logo } from '../ui/logo/Logo';
import { classNames } from '@/utils/classNames';
import { RxCross2 } from 'react-icons/rx';

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
      const targets = document.querySelectorAll('.mobile-menu-anim li');
      gsap.set(targets, { x: 40, opacity: 0 });
      const tl = gsap
        .timeline({
          paused: true,
          reversed: true,
        })
        .to(
          targets,
          {
            duration: 0.6,
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

  //on open true add body overflow hidden
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  const links = [
    {
      id: 1,
      href: '/',
      langPaths: {
        hr: '',
        en: '/en',
        de: '/de',
      },
      text: `${t('dictionary.home')}`,
    },
    {
      id: 2,
      href: '/about',
      langPaths: {
        hr: '/o-nama',
        en: '/en/about-us',
        de: '/de/uber-uns',
      },
      text: `${t('dictionary.about')}`,
    },
    {
      id: 3,
      href: '/services',
      langPaths: {
        hr: 'naše-usluge',
        en: '/en/services',
        de: '/de/dienstleistungen',
      },
      text: `${t('dictionary.services')}`,
    },
    // {
    //   href: '/portfolio',
    //   text: `${t('dictionary.portfolio')}`,
    // },
    {
      id: 4,
      href: '/team',
      text: `${t('dictionary.team')}`,
    },
    {
      id: 5,
      href: '/contact',
      langPaths: {
        hr: 'kontakt',
        en: '/en/contact',
        de: '/de/kontakt',
      },
      text: `${t('dictionary.contact')}`,
    },
    {
      id: 6,
      href: '/blog',
      langPaths: {
        hr: 'blog',
        en: '/en/blog',
        de: '/de/blog',
      },
      text: `${t('dictionary.blog')}`,
    },
  ];

  const currentRoute = router.asPath;
  return (
    <>
      <div
        className={`offcanvas__area ${classes.offcanvas}`}
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
        }}
      >
        {/* Desktop and tablet menu */}
        <div className='offcanvas__body desktop__tablet__offcanvas__body'>
          <div className='offcanvas__left'>
            <div className='offcanvas__logo'>
              {/* <Link href='/'> */}
              <Logo version='icon' className='logo' type='secondary' width={70} />
              {/* <img
                width={180}
                src='imgs/pointsyncc/logo/desktop/transparent.png'
                alt='PointSync logo'
              /> */}
              {/* </Link> */}
            </div>
            <div className='offcanvas__social'>
              {/* <h3 className='social-title'>{t('menu.social.follow-us')}</h3>
              <ul className='d-flex gap-3'>
                <li>
                  <Link className='d-flex align-items-center gap-3' href={COMPANY_INSTAGRAM} target={'_blank'} aria-label='Visit Pointsyncc Instagram profile page'>
                  <FaInstagram fontSize={'1.35rem'} className='icon__social icon__header' />
                  </Link>
                </li>
                <li>
                  <Link className='d-flex align-items-center gap-3' href={COMPANY_LINKEDIN} target={'_blank'} aria-label='Visit Pointsyncc LinkedIn profile page'>
                  <FaLinkedinIn fontSize={'1.35rem'} className='icon__social icon__header' />
                  </Link>
                </li>
              </ul> */}
              {/*  <h3>{t('menu.get-in-touch')}</h3>
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
              </ul> */}
            </div>
            <div className='offcanvas__links'>
              <h6 className='social-title font-weight-bold'>{t('menu.social.follow-us')}</h6>
              <ul className='d-flex gap-2'>
                <li>
                  <Link
                    className='d-flex align-items-center gap-3'
                    href={COMPANY_INSTAGRAM}
                    target={'_blank'}
                    aria-label='Visit Pointsyncc Instagram profile page'
                  >
                    <FaInstagram fontSize={'1.25rem'} className='icon__social icon__header' />
                  </Link>
                </li>
                {/* <li>
                  <Link href='https://www.facebook.com/pointsyncc/' target={'_blank'}>
                    Facebook
                  </Link>
                </li> */}
                <li>
                  <Link
                    className='d-flex align-items-center gap-3'
                    href={COMPANY_LINKEDIN}
                    target={'_blank'}
                    aria-label='Visit Pointsyncc LinkedIn profile page'
                  >
                    <FaLinkedinIn fontSize={'1.25rem'} className='icon__social icon__header' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='offcanvas__mid d-flex justify-content-center flex-column'>
            <div className='offcanvas__menu-wrapper'>
              <nav className={`offcanvas__menu ${classes['offcanvas__menu']}`}>
                <ul className='menu-anim d-flex align-items-stretch flex-column justify-content-start text-left gap-2'>
                  {links.map((link) => (
                    <li key={link.href} className=''>
                      <RouteTranslateLink
                        href={link.href}
                        data-current-route={currentRoute === link.href ? true : false}
                        data-route={currentRoute}
                      >
                        {link.text}
                      </RouteTranslateLink>
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

        {/* Mobile menu */}
        <div className='offcanvas__close'>
          <button type='button' id='close_offcanvas' onClick={setOpen.bind(null, false)}>
            <RxCross2 fontSize={'1.85rem'} className='text-white icon__social' />
          </button>
        </div>

        <div className='mobile__offcanvas__wrapper d-flex flex-column justify-content-between'>
          <div className='mobile__offcanvas__menu mt-4'>
            <nav className={`mobile_offcanvas__menu__items`}>
              <ul className='mobile_offcanvas__menu__items__primary mobile-menu-anim d-flex flex-column'>
                {links.slice(0, 3).map((link) => (
                  <li key={link.id + link.text}>
                    <RouteTranslateLink
                      href={link.href}
                      data-current-route={currentRoute === link.href ? true : false}
                      data-route={currentRoute}
                    >
                      {link.text}
                    </RouteTranslateLink>
                  </li>
                ))}
              </ul>
              <ul className='mobile_offcanvas__menu__items__secondary mobile-menu-anim d-flex flex-column gap-1 mt-2'>
                {links.slice(3, 6).map((link) => (
                  <li key={link.id + link.text}>
                    <RouteTranslateLink
                      href={link.href}
                      data-current-route={currentRoute === link.href.toLowerCase() ? true : false}
                    >
                      {link.text}
                    </RouteTranslateLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className='pt-4'>
            <div className='mobile__offcanvas__contact'>
              <ul className='d-flex flex-column gap-1'>
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
            <div className='mobile__offcanvas__footer d-flex flex-row justify-content-between align-items-center mt-4 flex-wrap'>
              <div className='d-flex flex-row gap-3'>
                <Link
                  href={COMPANY_INSTAGRAM}
                  target='_blank'
                  aria-label='Visit Pointsyncc Instagram profile page'
                >
                  <FaInstagram fontSize={'1.35rem'} className='icon__social icon__header' />
                </Link>
                <Link
                  href={COMPANY_LINKEDIN}
                  target='_blank'
                  aria-label='Visit Pointsyncc LinkedIn profile page'
                >
                  <FaLinkedinIn fontSize={'1.35rem'} className='icon__social icon__header' />
                </Link>
              </div>
              <div>{showLangSwitcher ? <LocaleSwitcher contentZIndex={10000} /> : null}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
