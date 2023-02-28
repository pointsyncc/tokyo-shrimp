import gsap from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import DropdownMenuDemo from '../ui/dropdown/Dropdown';
import classes from './menu.module.scss';

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
export default function Menu({ open, setOpen }: IProps) {
  const router = useRouter();
  const comp = useRef(null);
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
  }, [router.events,setOpen]);

  const links = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/about',
      text: 'About',
    },
    {
      href: '/service',
      text: 'Service',
    },
    {
      href: '/blog',
      text: 'Blog',
    },
    {
      href: '/contact',
      text: 'Contact',
    },
  ];
  return (
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
            <Link href='/'>
              <img
                width={180}
                src='imgs/pointsyncc/logo/desktop/transparent.png'
                alt='PointSync logo'
              />
            </Link>
          </div>
          <div className='offcanvas__social'>
            <h3 className='social-title'>Follow Us</h3>
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
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
              <li>
                <Link href='/career'>Career</Link>
              </li>
              <li>
                <Link href='/blog'>Blog</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='offcanvas__mid d-flex justify-content-center align-items-center'>
          <div className='offcanvas__menu-wrapper' style={{ flex: 1 }}>
            <nav className={`offcanvas__menu ${classes['offcanvas__menu']}`}>
              <ul className='menu-anim d-flex align-items-stretch flex-column text-center'>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className='offcanvas__right'>
          <div className='offcanvas__search'>
      
            <form action='#'>
              <input type='text' name='search' placeholder='Search keyword' />
              <button>
                <i className='fa-solid fa-magnifying-glass'></i>
              </button>
            </form>

          </div>
          <div className='offcanvas__contact'>
            <h3>Get in touch</h3>
            <ul>
              <li>
                <a href='tel:02094980547'>+385 99 2144 802</a>
              </li>
              <li>
                <a href='mailto:info@pointsyncc.com'>info@pointsyncc.com</a>
              </li>
              <li>Ulica Mokrice 12, 10382 Donja Zelina, Croatia</li>
            </ul>
          </div>
          <img src='/imgs/shape/11.png' alt='shape' className='shape-1' />
          <img src='/imgs/shape/12.png' alt='shape' className='shape-2' />
        </div>
        <div className='offcanvas__close'>
          <button type='button' id='close_offcanvas' onClick={setOpen.bind(null, false)}>
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
}
