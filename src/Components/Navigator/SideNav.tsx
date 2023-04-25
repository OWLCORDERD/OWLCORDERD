import React, { useState } from 'react';
import '../../asset/styles/navigator.scss';
import { AiOutlineClose } from 'react-icons/ai';

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
        <button className="close-btn" type="button" onClick={e => navClick(e)}>
          <AiOutlineClose className="close-icon" />
        </button>

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
      </div>
    </div>
  );
}

export default SideNav;
