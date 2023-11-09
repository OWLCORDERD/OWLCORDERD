import React, { useEffect, useState, useContext } from 'react';
import { CommonService } from 'api';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { project } from 'reducer/nextIndex';
import ResponsiveNav from 'Components/MobileResponsive/ResponsiveNav';
import ResponsiveMenu from 'Components/MobileResponsive/ResponsiveMenu';
import ScrollToTop from 'CustomHook/ScrollToTop';
import MainNav from 'Components/Navigator/MainNav';
import { Helmet } from 'react-helmet-async';
import ProjectBanner from '../Components/Banner/ProjectBanner';
import Footer from '../Components/Footer/Footer';
import Loading from '../CustomHook/Loading';

export interface projectDB {
  id: number;
  siteTitle: string;
  siteSubTitle: string;
  siteInfo: string;
  mainImg?: string;
  mainImg2?: string;
  mainImg3?: string;
  subImg?: string;
  subImg2?: string;
  subImg3?: string;
  subImg4?: string;
  siteUrl: string;
  useTech1: string;
  useTech2: string;
  useTech3: string;
  useTech4: string;
  useTech5: string;
  madeState: string;
  type: string;
  figmaUrl: string;
}

function Project() {
  const [loading, setLoading] = useState<boolean>(true);
  const [projectData, setProjectData] = useState<projectDB[]>([]);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    CommonService.getWorkSiteList().then(res => setProjectData(res));

    if (location.pathname === '/Project') {
      dispatch(project('Project'));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [projectData]);

  return (
    <>
      <ScrollToTop />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="다양한 언어와 라이브러리, 프레임워크를 활용하여 지난 프로젝트 제작 기간동안 개발 중인 프로젝트들을 확인하실 수 있습니다."
        />
        <meta
          name="keywords"
          content="Front-end, developer, 프론트엔드 개발자, 웹 개발자, Publisher, Publishing, 포트폴리오, 웹 사이트"
        />

        <title>OWLCODERD DEVELOP PROJECT</title>
      </Helmet>
      {loading ? (
        <>
          <header>
            <ResponsiveNav />
          </header>

          <main>
            <div className="container" id="container">
              <Loading />
            </div>
          </main>
        </>
      ) : (
        <>
          <header>
            <MainNav />
            <ResponsiveNav />
          </header>

          <ResponsiveMenu />
          <main>
            <div className="container" id="container">
              <section id="project-banner">
                <ProjectBanner projectDB={projectData} />
              </section>
            </div>

            <Footer />
          </main>
        </>
      )}
    </>
  );
}

export default Project;
