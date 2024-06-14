import React, { useEffect, useState, useLayoutEffect } from 'react';
import 'asset/styles/main.scss';
import { history } from 'CustomHook/History';
import Navbar from 'Components/Navigator/navbar';
import ResponsiveMenu from 'Components/Navigator/MobileResponsive/ResponsiveMenu';
import Project from 'Components/About/Project';
import ScrollToTop from 'CustomHook/ScrollToTop';
import Loading from 'CustomHook/Loading';
import Footer from '../Components/Footer/Footer';
import Technology from '../Components/About/Technology';
import Contact from '../Components/Contact/Contact';
import Developer from '../Components/About/Developer';
import Banner from '../Components/Banner/Banner';

function Main() {
  const [loading, setLoading] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState<number>(0);

  const body = document.querySelector('body');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      if (body) {
        body.style.removeProperty('overflow');
      }
    }, 1000);
  }, []);

  useEffect(() => {
    if (history.action === 'POP') {
      setScrollY(Number(sessionStorage.getItem('scrollY')));
      setLoading(true);
      if (body) {
        body.style.overflow = 'hidden';
      }
    }
  }, [history]);

  useLayoutEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, scrollY);
      sessionStorage.removeItem('scrollY');
    }, 1000);
  }, [scrollY]);

  return (
    <>
      <ScrollToTop />

      {loading ? <Loading /> : null}
      <header>
        <Navbar />
      </header>

      <ResponsiveMenu />
      <main>
        <div className="container" id="container">
          <div id="Banner">
            <Banner loading={loading} />
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
