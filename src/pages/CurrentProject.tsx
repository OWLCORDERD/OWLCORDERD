import React, { useEffect, useState } from 'react';
import 'asset/styles/currentProject.scss';
import { motion } from 'framer-motion';
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

function CurrentProject() {
  const location = useLocation();

  const projectDB: ProjectType = location.state ? location.state.projectDB : undefined;

  const [loading, setLoading] = useState<boolean>(true);

  const [responsiveMatches, setResponsiveMatches] = useState<boolean>(false);

  const [openVideo, setOpenVideo] = useState<boolean>(false);

  useEffect(() => {
    if (projectDB !== undefined) {
      setLoading(false);
    }
  }, [projectDB]);

  useEffect(() => {
    const body = document.querySelector('body');

    if (openVideo && body) {
      body.style.overflow = 'hidden';
    }

    if (!openVideo && body) {
      body.style.removeProperty('overflow');
    }
  }, [openVideo]);

  useEffect(() => {
    /* 해상도가 768px 이상일 시, MediaQueryList 상태값 false로 업데이트하여
    이미지 배너 크기를 키우는 gsap scrollTrigger 이벤트 효과 부여 */
    const mql = window.matchMedia('screen and (max-width : 768px)');

    if (mql.matches) {
      setResponsiveMatches(mql.matches);
    }
  }, []);

  const closeVideo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setOpenVideo(!openVideo);
  };

  const videoContainerOpen = {
    initial: {
      width: responsiveMatches ? '100%' : 0,
      opacity: 0,
    },

    animate: {
      width: '100%',
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
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
              <motion.div className="video-popup" variants={videoContainerOpen} initial="initial" animate="animate">
                <button type="button" className="close-button" onClick={closeVideo}>
                  close
                </button>

                <motion.div
                  className="project-video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <video controls src={projectDB.video} autoPlay muted loop />
                </motion.div>
              </motion.div>
            ) : null}

            <div className="project-banner">
              <ProjectInfo
                currentData={projectDB}
                setOpen={setOpenVideo}
                open={openVideo}
                responsiveMatches={responsiveMatches}
              />
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

export default CurrentProject;
