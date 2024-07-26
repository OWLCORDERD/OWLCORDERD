import React, { useEffect, useState, useContext } from 'react';
import 'asset/styles/currentProject.scss';
import { useLocation } from 'react-router-dom';
import { ScrollYContext, scrollYContext } from 'context/ScrollYContext';
import { history } from 'CustomHook/History';
import ProjectInfo from 'Components/CurrentProject/ProjectInfo/ProjectInfo';
import Navbar from 'Components/Navigator/navbar';
import { Helmet } from 'react-helmet-async';
import Footer from 'Components/Footer/Footer';
import Loading from 'CustomHook/Loading';
import ScrollToTop from 'CustomHook/ScrollToTop';
import { ProjectType } from 'types/data';
import ProjectBoard from '../Components/CurrentProject/ProjectBoard/ProjectBoard';

function CurrentProject() {
  const { scrollY, updateScrollY } = ScrollYContext();
  const location = useLocation();

  const projectDB: ProjectType = location.state ? location.state.projectDB : undefined;

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (projectDB !== undefined) {
      setLoading(false);
    }
  }, [projectDB]);

  useEffect(() => {
    if (history.action === 'POP') {
      const beforeScrollY = Number(sessionStorage.getItem('scrollY'));
      updateScrollY(beforeScrollY);
    }
  }, [history.action]);

  return (
    <>
      <ScrollToTop />

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

        {!loading ? (
          <main>
            <div className="currentProject-container">
              <div className="project-banner">
                <ProjectInfo currentData={projectDB} />
              </div>

              <ProjectBoard currentData={projectDB} />
            </div>
          </main>
        ) : (
          <Loading />
        )}

        <Footer />
      </div>
    </>
  );
}

export default CurrentProject;
