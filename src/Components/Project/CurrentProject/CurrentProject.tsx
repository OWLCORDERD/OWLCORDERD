import React from 'react';
import 'asset/styles/project.scss';
import { ScrollTrigger, gsap } from 'gsap/all';
import { useLocation } from 'react-router-dom';
import { projectDB } from 'pages/Project';
import CurrentInfo from 'Components/Project/CurrentProject/CurrentInfo/CurrentInfo';
import MainNav from 'Components/Navigator/MainNav';
import ResponsiveNav from 'Components/Navigator/ResponsiveNav';
import Footer from 'Components/Footer/Footer';
import ResponsiveMenu from 'Components/ResponsiveMenu/ResponsiveMenu';
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
      </main>

      <Footer />
    </div>
  );
}

export default DevelopProject;
