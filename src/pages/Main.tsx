import React, { useState, useEffect, useContext } from 'react';
import 'asset/styles/main.scss';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ScrollToTop from 'CustomHook/ScrollToTop';
import Loading from 'CustomHook/Loading';
import { main } from 'reducer/nextIndex';
import ResponsiveNav from 'Components/Navigator/ResponsiveNav';
import MainNav from 'Components/Navigator/MainNav';
import ResponsiveMenu from 'Components/ResponsiveMenu/ResponsiveMenu';
import { MenuActiveContext } from 'App';
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
    <>
      <ScrollToTop />
      {loading ? (
        <>
          <header>
            <ResponsiveNav />
          </header>

          <ResponsiveMenu />

          <main>
            <div className="container" id="container">
              <Loading />
            </div>
          </main>
        </>
      ) : (
        <>
          <header>
            <ResponsiveNav />
            <MainNav />
          </header>

          <ResponsiveMenu />

          <main>
            <div className="container" id="container">
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
            </div>
            <Footer />
          </main>
        </>
      )}
    </>
  );
}

export default Main;
