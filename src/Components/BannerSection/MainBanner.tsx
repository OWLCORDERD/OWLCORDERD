import React from 'react';
import '../../asset/styles/banner.scss';
import { TfiMouse } from 'react-icons/tfi';
import { motion } from 'framer-motion';
import MainNav from '../Navigator/MainNav';
import BannerImg from '../../asset/Image/coder.gif';

function Banner() {
  const ImgAnimation = {
    initial: {
      width: '0%',
    },

    animate: {
      width: '100%',
    },
  };

  const TxtBoxAnimation = {
    initial: {
      display: 'none',
      opacity: 0,
    },

    animate: {
      display: 'flex',
      opacity: 1,
      transition: {
        delay: 4.5,
        staggerChildren: 0.8,
        delayChildren: 5,
        duration: 2,
      },
    },
  };

  const TxtAnimation = {
    initial: {
      opacity: 0,
      y: 50,
    },

    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="Main-Banner">
      <MainNav />
      <div className="Banner-Index">
        <motion.div className="Index-contentBox" variants={TxtBoxAnimation} initial="initial" animate="animate">
          <motion.div className="Index-title" variants={TxtAnimation}>
            <h2>PORTFOLIO</h2>
          </motion.div>

          <motion.div className="Dynamic-TxtBox" variants={TxtAnimation}>
            <ul className="Dynamic-txt">
              <li>FRONT END</li>
              <li>PUBLISHING</li>
            </ul>

            <div className="Static-txt">
              <h2>개발자를 소개합니다.</h2>
            </div>
          </motion.div>
        </motion.div>

        <div className="Banner-img">
          <motion.img
            src={BannerImg}
            alt="BannerImg"
            variants={ImgAnimation}
            initial="initial"
            animate="animate"
            transition={{ opacity: 0, duration: 2, delay: 2 }}
          />
        </div>
      </div>

      <motion.div
        className="scroll-down"
        initial={{ y: 50, opacity: 0, x: '-50%' }}
        animate={{ y: 0, opacity: 1, x: '-50%' }}
        transition={{ duration: 1, delay: 6 }}
      >
        <TfiMouse className="scroll-icon" />
        <h2>Scroll Down</h2>
      </motion.div>
    </div>
  );
}

export default Banner;
