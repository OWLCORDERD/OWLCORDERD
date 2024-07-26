import React, { useEffect, useState, useLayoutEffect } from 'react';
import 'asset/styles/main.scss';
import { ScrollYContext } from 'context/ScrollYContext';
import Loading from 'CustomHook/Loading';
import Navbar from 'Components/Navigator/navbar';
import Project from 'Components/About/Project';
import ScrollToTop from 'CustomHook/ScrollToTop';
import Footer from '../Components/Footer/Footer';
import Technology from '../Components/About/Technology';
import Contact from '../Components/Contact/Contact';
import Developer from '../Components/About/Developer';
import Banner from '../Components/Banner/Banner';

function Main() {
  const { scrollY } = ScrollYContext();

  useLayoutEffect(() => {
    if (scrollY) {
      window.scrollTo(0, scrollY);
      sessionStorage.removeItem('scrollY');
    }
  }, [scrollY]);

  return (
    <>
      <ScrollToTop />
      <header>
        <Navbar />
      </header>

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
      </main>

      <Footer />
    </>
  );
}

export default Main;
