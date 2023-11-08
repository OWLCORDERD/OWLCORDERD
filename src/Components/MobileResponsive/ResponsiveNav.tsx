import React, { useContext } from 'react';
import 'asset/styles/navbar.scss';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MenuActiveContext } from 'App';

function ResponsiveNav() {
  const { clickMenuActive } = useContext(MenuActiveContext);

  return (
    <nav className="Responsive-navbar">
      <div className="navbar-logo">
        <h1>Owlcoderd</h1>
      </div>
      <div className="menu-button">
        <RxHamburgerMenu onClick={clickMenuActive} />
      </div>
    </nav>
  );
}

export default ResponsiveNav;
