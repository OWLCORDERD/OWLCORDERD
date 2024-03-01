import React, { useContext } from 'react';
import 'asset/styles/navbar.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { SiGithub, SiNotion, SiInstagram, SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { MenuActiveContext } from 'App';

function ResponsiveMenu() {
  const { responsiveMenuActive, clickMenuActive } = useContext(MenuActiveContext);
  return (
    <div className={responsiveMenuActive ? `Responsive-Menu active` : 'Responsive-Menu'}>
      <div className="menu-header">
        <div className="menu-closeBox">
          <AiOutlineClose fontSize="1.2rem" color="#fff" cursor="pointer" onClick={clickMenuActive} />
        </div>
      </div>

      <nav className="menu-navigator">
        <ul>
          <li>
            <Link to="/" onClick={clickMenuActive}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Project" onClick={clickMenuActive}>
              Project
            </Link>
          </li>
          <li>
            <Link to="/WorkSpace" onClick={clickMenuActive}>
              WorkSpace
            </Link>
          </li>
        </ul>
      </nav>

      <div className="sub-menu">
        <ul className="social-menu">
          <li>
            <a href="https://github.com/OWLCORDERD" target="_blank" rel="noreferrer">
              <SiGithub fontSize="16px" />
            </a>
          </li>
          <li>
            <a href="https://owlcoderd.notion.site/eec4489447c4429ab6fa963e5fc7b344" target="_blank" rel="noreferrer">
              <SiNotion fontSize="16px" />
            </a>
          </li>
          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=kim461577@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <SiGmail fontSize="16px" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/min_telligent/" target="_blank" rel="noreferrer">
              <SiInstagram fontSize="16px" />
            </a>
          </li>
        </ul>

        <div className="copyright">
          <h2>© 2022. Owlcoderd All rights reserved.</h2>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveMenu;
