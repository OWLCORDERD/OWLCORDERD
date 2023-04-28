import React, { useState } from 'react';
import '../../asset/styles/navigator.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { SiGmail, SiGithub, SiInstagram, SiNotion } from 'react-icons/si';
import logo from '../../asset/Image/logo/logo.png';

function SideNav() {
  const [navToggle, setNavToggle] = useState<boolean>(false);

  const navClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setNavToggle(!navToggle);
  };

  return (
    <div className="SideNav-container">
      <div className="toggle-menu">
        <button type="button" className="Hamburger-button" onClick={e => navClick(e)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="SideNav-txt">
        <h2>Portfolio site</h2>
      </div>

      <div className="Nav-menuBox" id={navToggle === true ? 'active' : ''}>
        <div className="menu-header">
          <button className="close-btn" type="button" onClick={e => navClick(e)}>
            <AiOutlineClose className="close-icon" />
          </button>

          <img src={logo} alt="Menulogo" className="Menulogo" />
        </div>

        <ul className="Nav-menu">
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Project</a>
          </li>

          <li>
            <a href="#">Workspace</a>
          </li>
        </ul>

        <ul className="social-menu">
          <li>
            <a href="https://github.com/OWLCORDERD">
              <SiGithub />
            </a>
          </li>
          <li>
            <a href="https://owlcoderd.notion.site/eec4489447c4429ab6fa963e5fc7b344">
              <SiNotion />
            </a>
          </li>
          <li>
            <a href="#">
              <SiGmail />
            </a>
          </li>
          <li>
            <a href="#">
              <SiInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
