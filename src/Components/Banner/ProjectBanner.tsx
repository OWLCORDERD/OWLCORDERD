/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { projectDB } from 'pages/Project';
import MainNav from '../Navigator/MainNav';
import '../../asset/styles/slick/slick.css';
import '../../asset/styles/slick/slick-theme.css';
import NextArrow from '../Project/slideButton/NextArrow';
import PrevArrow from '../Project/slideButton/PrevArrow';

interface propsDBType {
  projectDB: projectDB[];
}

function ProjectBanner({ projectDB }: propsDBType) {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slideToShow: 3,
    slidesToScroll: 1,
    centerPadding: '50px',
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="Project-Banner">
      <MainNav />
      <div className="Project-Index">
        <div className="bg-video">
          <video src={`${process.env.PUBLIC_URL}/video/Project-Banner.mp4`} autoPlay muted loop />
        </div>

        <div className="Index-infoBox">
          <h2 className="Index-subTitle">Project</h2>
          <h1 className="Index-title">Portfolio site</h1>
        </div>
      </div>

      <div className="Slider-wrap">
        <div className="Slider-title">
          <h2>Develop Project</h2>
        </div>
        <Slider {...settings}>
          {projectDB.map((item, index) => (
            <div className="Project-item" key={item.id}>
              <Link to="/CurrentProject" state={{ projectData: item }}>
                <div className="Project-ImgBox">
                  <img src={item.mainImg} alt="" />
                </div>
              </Link>

              <div className="Project-infoBox">
                <h2 className="Project-type">{item.useTech1} Project</h2>

                <div className="title-category">
                  <h1 className="title">{item.siteTitle}</h1>
                  <span className="category">{item.siteSubTitle}</span>
                </div>
              </div>
              <div className="slide-status">
                <div className="status-bar" style={{ left: `calc(${index} * 25%)` }} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProjectBanner;
