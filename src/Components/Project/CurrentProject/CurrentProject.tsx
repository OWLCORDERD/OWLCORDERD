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
import ProjectSkills from './ProjectSkills/ProjectSkills';
import CurrentBoard from './CurrentBoard/CurrentBoard';

function DevelopProject() {
  const location = useLocation();

  const projectDB: projectDB = location.state.projectData;

  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="container">
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
        </footer>
      </main>
    </div>
  );
}

export default DevelopProject;
