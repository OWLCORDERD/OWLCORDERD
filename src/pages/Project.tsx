import React, { useEffect, useState } from 'react';
import { CommonService } from 'api';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { project } from 'reducer/counter';
import ResponsiveNav from 'Components/Navigator/ResponsiveNav';
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

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="container" id="container">
      <header>
        <ResponsiveNav />
      </header>
      {loading === false ? (
        <>
          <section id="project-banner">
            <ProjectBanner projectDB={projectData} />
          </section>

          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Project;
