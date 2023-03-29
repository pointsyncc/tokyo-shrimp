import { CookieBanner } from '@/components/common/cookieConsent/CookieConsent';
import LocaleSwitcher from '@/components/common/localeSwitcher/LocaleSwitcher';
import Menu from '@/components/navigation/Menu';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';

import React from 'react';
import AnchorButton from './anchor/AnchorButton';
import Footer from './footer/Footer';
import { Header } from './header/Header';

import gsap from 'gsap';

interface IProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export const MainLayout = ({ children, showFooter }: IProps) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { matches } = useMatchMedia('(min-width: 1199px)');

  useIsomorphicLayoutEffect(() => {
    console.log(matches)
    if (matches) {
      const mouseHandler = (ev: MouseEvent) => {
        let tl = gsap.timeline({
          defaults: {
            x: ev.clientX,
            y: ev.clientY,
          },
        });

        tl.to('.cursor1', {
          ease: 'power2.out',
        }).to(
          '.cursor2',
          {
            ease: 'power2.out',
          },
          '-=0.4',
        );
      };
      document.addEventListener('mousemove', mouseHandler);

      return () => document.removeEventListener('mousemove', mouseHandler);
    }
  }, [matches]);
  return (
    <>
      <div className='cursor1'></div>
      <div className='cursor2'></div>
      {matches ? <LocaleSwitcher /> : null}
      <Menu open={openMenu} setOpen={setOpenMenu} showLangSwitcher={!matches} />
      <Header openMenu={() => setOpenMenu(!openMenu)} />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>{children}</div>
      </div>
      {showFooter && <Footer />}
      <AnchorButton />

      <CookieBanner />
    </>
  );
};
