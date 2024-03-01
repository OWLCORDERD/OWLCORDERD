import React, { useEffect, useState } from 'react';
import 'asset/styles/main.scss';
import { useLocation } from 'react-router-dom';
import Navbar from 'Components/Navigator/navbar';
import ResponsiveMenu from 'Components/Navigator/MobileResponsive/ResponsiveMenu';
import { Helmet } from 'react-helmet-async';
import Project from 'Components/About/Project';
import Footer from '../Components/Footer/Footer';
import Technology from '../Components/About/Technology';
import Contact from '../Components/Contact/Contact';
import Developer from '../Components/About/Developer';
import Banner from '../Components/Banner/Banner';

function Main() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="퍼블리싱부터 프론트엔드 개발까지 html, css, scss, javascript, typescript 등 다양한 언어와 다양한 애니메이션 라이브러리를 활용한 퍼블리싱을 통해 인터렉티브한 페이지 구현을 매일 더 발전하기 위해 노력하는 개발자 OWLCODERD, 임민혁입니다. 현재 개발 중인 프로젝트들을 확인하실 수 있습니다."
        />
        <meta
          name="keywords"
          content="Front-end, developer, 프론트엔드 개발자, 웹 개발자, Publisher, Publishing, 포트폴리오, 웹 사이트"
        />

        <title>임민혁 · OWLCODERD · Front-end Developer</title>
      </Helmet>
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
