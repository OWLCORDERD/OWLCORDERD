import React from 'react';
import '../../asset/styles/footer.scss';
import { SiGithub, SiNotion, SiGmail, SiInstagram } from 'react-icons/si';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Footer() {
  const currentChapter: any = useSelector(state => state);

  const chapterTitle = currentChapter.counter.value;

  const chapter = [
    {
      id: 1,
      currentChapter: 'About',
      index: 'Next - Chapter 2',
      nextChapter: 'Project',
      info: 'used my front-End skills',
      info2: 'with publishing to made project site',
    },
    {
      id: 2,
      currentChapter: 'Project',
      index: 'Next - Chapter 3',
      nextChapter: 'WorkSpace',
      info: 'introduce my full-stack skills',
      info2: 'for made web site project',
    },
  ];

  const NextIndex = chapter.filter(item => item.currentChapter === chapterTitle);

  return (
    <footer className="footer-container">
      <div className="Next-Chapter">
        <div className="NextChapter-Index">
          <p>{NextIndex[0]?.index}</p>
        </div>

        <div className="NextChapter-title">
          <Link to="/Project">
            <h2>{NextIndex[0]?.nextChapter}</h2>
          </Link>
          <p>Click to Next !</p>
        </div>

        <div className="NextChapter-info">
          <span>
            {NextIndex[0]?.info}
            <br />
            {NextIndex[0]?.info2}
          </span>
        </div>
      </div>

      <div className="footer-subMenu">
        <div className="footer-copyright">
          <h2>© 2022. Owlcoderd All rights reserved.</h2>
        </div>
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
    </footer>
  );
}

export default Footer;
