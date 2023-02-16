import React from "react";
import { Header } from "./header/Header";

interface IProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IProps) => {
  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};
