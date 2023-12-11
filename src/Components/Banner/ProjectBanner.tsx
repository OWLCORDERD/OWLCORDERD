/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { projectDB } from 'pages/Project';
import { FaPlay } from 'react-icons/fa';
import '../../asset/styles/slick/slick.css';
import '../../asset/styles/slick/slick-theme.css';
import NextArrow from '../Project/slideButton/NextArrow';
import PrevArrow from '../Project/slideButton/PrevArrow';

interface propsDBType {
  projectDB: projectDB[] | null;
}

function ProjectBanner({ projectDB }: propsDBType) {
  const settings = {
    centerMode: true,
    infinite: true,
    slideToShow: 3,
    slidesToScroll: 1,
    centerPadding: '25%',
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const SlideAnimate = {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,

      transition: {
        duration: 2,
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const itemAnimate = {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
    },
  };

  const navigate = useNavigate();

  return (
    <section className="Project-Banner">
      <motion.div className="Slider-wrap" variants={SlideAnimate} animate="animate" initial="initial">
        <motion.div className="Project-titleBox" variants={itemAnimate}>
          <div className="title">
            <h1>Develop project</h1>
          </div>

          <div className="sub-title">
            <p>현재 개발중인 프로젝트들을 소개합니다.</p>
          </div>
        </motion.div>

        <Slider {...settings}>
          {projectDB?.map(project => (
            <motion.div className="Project-item" key={project.id} variants={itemAnimate}>
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
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}

export default ProjectBanner;
