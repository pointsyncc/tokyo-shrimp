import Menu from "@/components/navigation/Menu";
import React from "react";
import AnchorButton from "./anchor/AnchorButton";
import Footer from "./footer/Footer";
import { Header } from "./header/Header";

interface IProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export const MainLayout = ({ children, showFooter }: IProps) => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <>
      {openMenu && <Menu />}
      <Header openMenu={() => setOpenMenu(!openMenu)} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>{children}</main>
        </div>
      </div>
      {showFooter && <Footer />}
      <AnchorButton />
    </>
  );
};
