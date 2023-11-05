import React from 'react';
import 'asset/styles/navbar.scss';

function ResponsiveNav() {
  return (
    <nav className="Responsive-navbar">
      <div className="navbar-logo">
        <img src={`${process.env.PUBLIC_URL}/Image/logo/logo.png`} alt="logo" />
      </div>
      <div className="menu-button">
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}

export default ResponsiveNav;
