import React, { useEffect, useState } from 'react';
import ProjectBanner from '../BannerSection/ProjectBanner';
import SideNav from '../Navigator/SideNav';
import Footer from '../Footer/Footer';
import Loading from '../CustomHook/Loading';
import DevelopProject from '../Project/DevelopProject';

function Project() {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(!loading);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="container" id="container">
      <SideNav />
      {loading === false ? (
        <>
          <section id="project-banner">
            <ProjectBanner />
          </section>

          <section id="project-banner">
            <DevelopProject />
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
