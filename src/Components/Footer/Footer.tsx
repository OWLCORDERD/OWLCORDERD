import React from 'react';
import '../../asset/styles/footer.scss';

function Footer() {
  return (
    <div className="footer-container">
      <div className="Next-Chapter">
        <div className="NextChapter-Index">
          <p>Next - Chapter 2</p>
        </div>

        <div className="NextChapter-title">
          <h2>Project</h2>
          <p>Click to Next !</p>
        </div>

        <div className="NextChapter-info">
          <span>
            used my front-End skills
            <br />
            with publishing skills to made project site
          </span>
        </div>
      </div>

      <div className="footer-copyright">
        <h2>© 2022. Owlcoderd All rights reserved.</h2>
      </div>
    </div>
  );
}

export default Footer;
