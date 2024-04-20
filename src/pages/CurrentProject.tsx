import React, { useEffect, useState } from 'react';
import 'asset/styles/project.scss';
import { ScrollTrigger, gsap } from 'gsap/all';
import { useLocation } from 'react-router-dom';
import ProjectInfo from 'Components/CurrentProject/ProjectInfo/ProjectInfo';
import Navbar from 'Components/Navigator/navbar';
import ResponsiveMenu from 'Components/Navigator/MobileResponsive/ResponsiveMenu';
import { Helmet } from 'react-helmet-async';
import { ProjectType } from 'api/CommonService';
import Footer from 'Components/Footer/Footer';
import Loading from 'CustomHook/Loading';
import ProjectBoard from '../Components/CurrentProject/ProjectBoard/ProjectBoard';

gsap.registerPlugin(ScrollTrigger);

function DevelopProject() {
  const location = useLocation();

  const projectDB: ProjectType = location.state ? location.state.projectDB : undefined;

  const [loading, setLoading] = useState<boolean>(true);

  const [openVideo, setOpenVideo] = useState<boolean>(false);

  useEffect(() => {
    if (projectDB !== undefined) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [projectDB]);

  useEffect(() => {
    const body = document.querySelector('body');

    if (openVideo === true && body) {
      body.style.overflow = 'hidden';
    }

    if (openVideo === false && body) {
      body.style.removeProperty('overflow');
    }
  }, [openVideo]);

  const closeVideo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setOpenVideo(!openVideo);
  };

  return (
    <div className="container">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`${projectDB?.title} 프로젝트는 ${projectDB?.subTitle}입니다. 해당 프로젝트의 소개 및 구현된 페이지들을 상세히 확인하실 수 있습니다.`}
        />
        <meta
          name="keywords"
          content="Front-end, developer, 프론트엔드 개발자, 웹 개발자, Publisher, Publishing, 포트폴리오, 웹 사이트"
        />

        <title>{`${projectDB?.title} Project`}</title>
      </Helmet>
      <header>
        <Navbar />
      </header>

      <ResponsiveMenu />

      {!loading ? (
        <main>
          <div className="currentProject-container">
            {openVideo === true ? (
              <div className="video-popup">
                <button type="button" className="close-button" onClick={closeVideo}>
                  close
                </button>

                <div className="project-video">
                  <video controls src={projectDB.video} autoPlay muted loop />
                </div>
              </div>
            ) : null}

            <div className="project-banner">
              <ProjectInfo currentData={projectDB} setOpen={setOpenVideo} open={openVideo} />
            </div>

            <ProjectBoard currentData={projectDB} />
          </div>

          <Footer />
        </main>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default DevelopProject;
