import React, { useEffect, useState } from 'react';
import '../../asset/styles/main.scss';
import Introduce from '../About/Introduce';
import SideNav from '../Navigator/SideNav';
import Footer from '../Footer/Footer';
import Banner from '../BannerSection/Banner';
import Technology from '../About/Technology';
import Contact from '../Contact/Contact';
import Loading from '../CustomHook/Loading';
import ProjectSlide from '../ProjectSlide/ProjectSlide';

function Main() {
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
          <section id="banner">
            <Banner />
          </section>

          <section id="introduce">
            <Introduce />
          </section>

          <section id="technology">
            <Technology />
          </section>

          <section id="technology">
            <ProjectSlide />
          </section>

          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Main;
