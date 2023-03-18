import { CookieBanner } from '@/components/common/cookieConsent/CookieConsent';
import LocaleSwitcher from '@/components/common/localeSwitcher/LocaleSwitcher';
import Menu from '@/components/navigation/Menu';
import { useMatchMedia } from '@/hooks/useMatchMedia';

import React from 'react';
import AnchorButton from './anchor/AnchorButton';
import Footer from './footer/Footer';
import { Header } from './header/Header';

interface IProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export const MainLayout = ({ children, showFooter }: IProps) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const {matches} = useMatchMedia("(min-width: 1199px)")
  return (
    <>
      {matches ? <LocaleSwitcher/> : null}
      <Menu open={openMenu} setOpen={setOpenMenu} showLangSwitcher={!matches} />
      <Header openMenu={() => setOpenMenu(!openMenu)} />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>{children}</div>
      </div>
      {showFooter && <Footer />}
      <AnchorButton />

      <CookieBanner/>


    </>
  );
};
