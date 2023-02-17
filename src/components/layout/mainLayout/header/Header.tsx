import React from "react";

export const Header = () => {
  return (
    <header className="header__area">
      <div className="header__inner">
        <div className="header__logo">
          <a href="index.html">
            <img
              className="logo-primary"
              width={40}
              src="/imgs/pointsyncc/logo/desktop/transparent-90.png"
              alt="Site Logo"
            />
            <img
              className="logo-secondary"
              width={125}
              src="/imgs/pointsyncc/logo/desktop/transparent.png"
              alt="Moibile Logo"
            />
          </a>
        </div>
        <div className="header__nav-icon">
          <button id="open_offcanvas">
            <img src="/imgs/icon/menu-white.png" alt="Menubar Icon" />
          </button>
        </div>
        <div className="header__support">
          <p>
            Contact us <a href="tel:+9587325902">+385 99 2144 802</a>
          </p>
        </div>
      </div>
    </header>
  );
};
