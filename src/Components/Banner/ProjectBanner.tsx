/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { projectDB } from 'pages/Project';
import { FaPlay } from 'react-icons/fa';
import MainNav from '../Navigator/MainNav';
import '../../asset/styles/slick/slick.css';
import '../../asset/styles/slick/slick-theme.css';
import NextArrow from '../Project/slideButton/NextArrow';
import PrevArrow from '../Project/slideButton/PrevArrow';

interface propsDBType {
  projectDB: projectDB[] | null;
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

  const AnimateBox = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,

      transition: {
        delayChildren: 0.5,
        delay: 1,
        duration: 2,
      },
    },
  };

  const SlideAnimate = {
    initial: {
      opacity: 0,
      y: 50,
    },

    animate: {
      opacity: 1,
      y: 0,

      transition: {
        delay: 2,
        duration: 2,
      },
    },
  };

  const navigate = useNavigate();

  return (
    <motion.div className="Project-Banner" variants={AnimateBox} initial="initial" animate="animate">
      <MainNav />
      <div className="Project-Index">
        <div className="bg-video">
          <img src={`${process.env.PUBLIC_URL}/Image/document.jpg`} alt="" />
        </div>

        <div className="Index-infoBox">
          <h2 className="Index-subTitle">Project</h2>
          <h1 className="Index-title">Portfolio site</h1>
        </div>
      </div>

      <motion.div className="Slider-wrap" variants={SlideAnimate} animate="animate" initial="initial">
        <div className="Slider-title">
          <h2>Develop Project</h2>
        </div>
        <Slider {...settings}>
          {projectDB?.map((project, index) => (
            <div className="Project-item" key={project.id}>
              <div className="Project-ImgBox">
                <img src={project.mainImg} alt="" />

                <div className="Project-viewButton">
                  <FaPlay
                    onClick={() =>
                      navigate('/CurrentProject', {
                        state: { projectDB: project },
                      })
                    }
                  />
                </div>
              </div>

              <div className="Project-infoBox">
                <h2 className="Project-type">{project.useTech1} Project</h2>

                <div className="title-category">
                  <h1 className="title">{project.siteTitle}</h1>
                  <span className="category">{project.siteSubTitle}</span>
                </div>
              </div>
              <div className="slide-status">
                <div className="status-bar" style={{ left: `calc(${index} * 25%)` }} />
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </motion.div>
  );
}

export default ProjectBanner;
