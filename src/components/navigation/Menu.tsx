import gsap from 'gsap';
import Link from 'next/link';
import React, { useLayoutEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
interface IProps {
  open:boolean;
  setOpen:(open:boolean)=>void;
}
import classes from './menu.module.scss';
export default function Menu({open,setOpen}:IProps) {
  const comp = useRef(null);
  useLayoutEffect(() => {

    let ctx = gsap.context(() => {
      const targets = document.querySelectorAll(".menu-anim li");
      gsap.set(targets,{x:30,opacity:0}); 
      const tl= gsap.timeline({
        paused:true,
        reversed:true
      })
      .to(targets, {
        duration: 1,
        x: 0,
        opacity:1,
   
        stagger: 0.2,

      },0.2)
      
      if (tl.reversed()) {

        tl.play();
    } else {
        tl.reverse();
    }

    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, [open]);

  const links = [
    {
      href:'/',
      text:"Home",

    },{
      href:'/about',
      text:"About",
    },
    {
      href:'/service',
      text:"Service",
    },
    {
      href:'/blog',
      text:"Blog",
    },
    {
      href:'/contact',
      text:"Contact",
    }
  ]
  return (
    
      <div className={`offcanvas__area ${classes.offcanvas}`} style={{
        opacity: open ? 1 : 0,
        visibility: open ? 'visible' : 'hidden',
      }}>
        <div className='offcanvas__body'>
          <div className='offcanvas__left'>
            <div className='offcanvas__logo'>
              <a href='index.html'>
                <img src='/imgs/logo/site-logo-white-2.png' alt='Offcanvas Logo' />
              </a>
            </div>
            <div className='offcanvas__social'>
              <h3 className='social-title'>Follow Us</h3>
              <ul>
                <li>
                  <a href='#'>Dribbble</a>
                </li>
                <li>
                  <a href='#'>Behance</a>
                </li>
                <li>
                  <a href='#'>Instagram</a>
                </li>
                <li>
                  <a href='#'>Facebook</a>
                </li>
                <li>
                  <a href='#'>Twitter</a>
                </li>
                <li>
                  <a href='#'>YouTube</a>
                </li>
              </ul>
            </div>
            <div className='offcanvas__links'>
              <ul>
                <li>
                  <a href='about.html'>About</a>
                </li>
                <li>
                  <a href='contact.html'>contact</a>
                </li>
                <li>
                  <a href='career.html'>Career</a>
                </li>
                <li>
                  <a href='blog.html'>blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='offcanvas__mid d-flex justify-content-center align-items-center'>
            <div className='offcanvas__menu-wrapper' style={{flex:1}}>
              <nav className={`offcanvas__menu ${classes['offcanvas__menu']}`}>
                <ul className='menu-anim d-flex align-items-stretch flex-column text-center'>
                  {links.map(link=>
                    <li key={link.href}>
                      <Link href={link.href}>
                        {link.text}
                      </Link>
                    </li>
                  )}
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
                  <a href='tel:02094980547'>+(02) - 094 980 547</a>
                </li>
                <li>
                  <a href='mailto:info@extradesign.com'>info@extradesign.com</a>
                </li>
                <li>230 Norman Street New York, QC (USA) H8R 1A1</li>
              </ul>
            </div>
            <img src='/imgs/shape/11.png' alt='shape' className='shape-1' />
            <img src='/imgs/shape/12.png' alt='shape' className='shape-2' />
          </div>
          <div className='offcanvas__close'>
            <button type='button' id='close_offcanvas' onClick={setOpen.bind(null,false)}>
              <FaTimes/>

            </button>
          </div>
        </div>
      </div>
  
  );
}
