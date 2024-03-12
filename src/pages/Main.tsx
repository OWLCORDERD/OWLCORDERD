import React, { useEffect } from 'react';
import 'asset/styles/main.scss';
import Navbar from 'Components/Navigator/navbar';
import ResponsiveMenu from 'Components/Navigator/MobileResponsive/ResponsiveMenu';
import Project from 'Components/About/Project';
import ScrollToTop from 'CustomHook/ScrollToTop';
import Footer from '../Components/Footer/Footer';
import Technology from '../Components/About/Technology';
import Contact from '../Components/Contact/Contact';
import Developer from '../Components/About/Developer';
import Banner from '../Components/Banner/Banner';

function Main() {
  return (
    <>
      <ScrollToTop />
      <header>
        <Navbar />
      </header>

      <ResponsiveMenu />

      <main>
        <div className="container" id="container">
          <div id="Banner">
            <Banner />
          </div>

          <div id="About">
            <Developer />
          </div>

          <div id="Technology">
            <Technology />
          </div>

          <div id="Project">
            <Project />
          </div>

          <div id="Contact">
            <Contact />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Main;
