import React from 'react';
import '../../asset/styles/main.scss';
import Introduce from '../About/Introduce';
import SideNav from '../Navigator/SideNav';
import Footer from '../Footer/Footer';
import MainBanner from '../BannerSection/MainBanner';
import Technology from '../About/Technology';
import Contact from '../Contact/Contact';
import ProjectSlide from '../Project/ProjectSlide';

function Main() {
  return (
    <div className="container" id="container">
      <SideNav />
      <section id="main-banner">
        <MainBanner />
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
    </div>
  );
}

export default Main;
