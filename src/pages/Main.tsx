import React, { useState, useEffect } from 'react';
import 'asset/styles/main.scss';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ScrollToTop from 'CustomHook/ScrollToTop';
import Loading from 'CustomHook/Loading';
import { main } from 'reducer/counter';
import ResponsiveNav from 'Components/Navigator/ResponsiveNav';
import Footer from '../Components/Footer/Footer';
import MainBanner from '../Components/Banner/MainBanner';
import Technology from '../Components/About/Technology';
import Contact from '../Components/Contact/Contact';
import Developer from '../Components/About/Developer';

function Main() {
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === '/') {
      dispatch(main('About'));
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
      <ScrollToTop />
      {loading === false ? (
        <>
          <section id="main-banner">
            <MainBanner />
          </section>

          <section id="introduce">
            <Developer />
          </section>

          <section id="technology">
            <Technology />
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
