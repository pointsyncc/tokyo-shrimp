import React from "react";
import Footer from "./footer/Footer";
import { Header } from "./header/Header";

interface IProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export const MainLayout = ({ children, showFooter}: IProps) => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>{children}</main>
        </div>
      </div>
      {showFooter && <Footer />}
    </>
  );
};
