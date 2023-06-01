import React, { useEffect, useRef, useState } from 'react';
import '../../asset/styles/banner.scss';
import { TfiMouse } from 'react-icons/tfi';
import { motion } from 'framer-motion';
import MainNav from '../Navigator/MainNav';
import BannerImg from '../../asset/Image/coder.gif';

function Banner(): JSX.Element {
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
        staggerChildren: 0.5,
        delayChildren: 4,
        duration: 2,
        delay: 4,
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

  const dynamicTxts = ['Front-End', 'Publishing'];

  const typingRef = useRef<number>(0);

  const DynamicRef = useRef<HTMLDivElement>(null);

  const typing = async () => {
    const dynamicTxt = dynamicTxts[typingRef.current].split('');

    stillRun();

    function stillRun() {
      if (DynamicRef.current?.innerHTML !== undefined) {
        DynamicRef.current.innerHTML += dynamicTxt.shift();
      }

      if (dynamicTxt.length) {
        setTimeout(() => {
          stillRun();
        }, 200);
      }
    }

    setTimeout(() => {
      remove();
    }, 2000);
  };

  const remove = async () => {
    const dynamicTxt = dynamicTxts[typingRef.current].split('');

    stillRun2();

    function stillRun2() {
      if (DynamicRef.current?.innerHTML !== undefined) {
        dynamicTxt.pop();

        DynamicRef.current.innerHTML = dynamicTxt.join('');
      }

      if (dynamicTxt.length) {
        setTimeout(() => {
          stillRun2();
        }, 200);
      }
    }

    if (typingRef.current === 0) {
      typingRef.current += 1;
    } else {
      typingRef.current = 0;
    }

    setTimeout(() => {
      typing();
    }, 2000);
  };

  setTimeout(() => {
    typing();
  }, 4500);

  return (
    <div className="Main-Banner">
      <MainNav />
      <div className="Banner-Index">
        <motion.div className="Index-contentBox" variants={TxtBoxAnimation} animate="animate" initial="initial">
          <motion.div className="Index-title" variants={TxtAnimation}>
            <h2>PORTFOLIO</h2>
          </motion.div>

          <motion.div className="Dynamic-TxtBox" variants={TxtAnimation}>
            <h1 className="Dynamic-txt" ref={DynamicRef} />

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
        transition={{ duration: 1, delay: 4.5 }}
      >
        <TfiMouse className="scroll-icon" />
        <h2>Scroll Down</h2>
      </motion.div>
    </div>
  );
}

export default Banner;
