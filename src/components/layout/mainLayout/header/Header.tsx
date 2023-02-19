import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import logo from '@/public/imgs/pointsyncc/logo/desktop/transparent-90.png';

interface HeaderProps {
  openMenu: () => void;
}

export const Header = ({ openMenu }: HeaderProps) => {
  // const boxRef = useRef();

  // useLayoutEffect(() => {
  //   // Refs allow you to access DOM nodes
  //   console.log(boxRef); // { current: div.box }
  //   // then we can animate them like so...
  //   if (boxRef.current) {
  //     gsap.to(boxRef.current, {
  //       rotation: "+=360",
  //     });
  //   }
  // });

  return (
    <header className='header__area'>
      <div className='header__inner'>
        <div className='header__logo'>
          <Link href='/'>
            <img
              className='logo-primary'
              width={35}
              src='/imgs/pointsyncc/logo/desktop/transparent-90.png'
              alt='Site Logo'
            />
            {/* <Image src={"/imgs/pointsyncc/logo/desktop/transparent-90.png"} fill  className="logo-primary"  alt="Site Logo" /> */}
            <Image className='logo-secondary' width={125} src={logo} alt='Moibile Logo' />
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
