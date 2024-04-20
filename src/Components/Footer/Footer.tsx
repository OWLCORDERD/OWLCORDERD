import React from 'react';
import '../../asset/styles/footer.scss';
import { SiGithub, SiNotion, SiGmail, SiInstagram } from 'react-icons/si';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-subMenu">
        <div className="footer-copyright">
          <h2>© 2022. Owlcoderd All rights reserved.</h2>
        </div>
        <ul className="social-menu">
          <li>
            <a href="https://github.com/OWLCORDERD" target="_blank" rel="noreferrer">
              <SiGithub />
            </a>
          </li>
          <li>
            <a href="https://owlcoderd.notion.site/eec4489447c4429ab6fa963e5fc7b344" target="_blank" rel="noreferrer">
              <SiNotion />
            </a>
          </li>
          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=kim461577@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <SiGmail />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
