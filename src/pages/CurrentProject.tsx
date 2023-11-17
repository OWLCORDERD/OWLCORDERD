import React from 'react';
import 'asset/styles/project.scss';
import { ScrollTrigger, gsap } from 'gsap/all';
import { useLocation } from 'react-router-dom';
import { SiGithub, SiInstagram, SiNotion, SiGmail } from 'react-icons/si';
import { projectDB } from 'pages/Project';
import CurrentInfo from 'Components/Project/CurrentProject/CurrentInfo/CurrentInfo';
import MainNav from 'Components/Navigator/MainNav';
import ResponsiveNav from 'Components/MobileResponsive/ResponsiveNav';
import ResponsiveMenu from 'Components/MobileResponsive/ResponsiveMenu';
import { Helmet } from 'react-helmet-async';
import ProjectSkills from '../Components/Project/CurrentProject/ProjectSkills/ProjectSkills';
import CurrentBoard from '../Components/Project/CurrentProject/CurrentBoard/CurrentBoard';

function DevelopProject() {
  const location = useLocation();

  const projectDB: projectDB = location?.state?.projectDB;

  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="container">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`${projectDB?.siteTitle} 프로젝트는 ${projectDB?.siteSubTitle}입니다. 해당 프로젝트의 소개 및 구현된 페이지들을 상세히 확인하실 수 있습니다.`}
        />
        <meta
          name="keywords"
          content="Front-end, developer, 프론트엔드 개발자, 웹 개발자, Publisher, Publishing, 포트폴리오, 웹 사이트"
        />

        <title>{`${projectDB?.siteTitle} Project`}</title>
      </Helmet>
      <header>
        <MainNav />
        <ResponsiveNav />
      </header>

      <ResponsiveMenu />
      <main>
        <section className="CurrentProject-container">
          <div className="Current-Banner">
            <CurrentInfo currentData={projectDB} />
            <ProjectSkills currentData={projectDB} />
          </div>

          <CurrentBoard currentData={projectDB} />
        </section>

        <footer className="footer-subMenu">
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
                <SiGmail fontSize="16px" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/min_telligent/" target="_blank" rel="noreferrer">
                <SiInstagram fontSize="16px" />
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </div>
  );
}

export default DevelopProject;
