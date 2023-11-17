import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { TfiMouse } from 'react-icons/tfi';

function MobileBanner() {
  const ImgBoxAnimation = {
    initial: {
      y: '-50%',
    },

    animate: {
      y: 0,
      transition: {
        delay: 1,
        duration: 2,
      },
    },
  };

  const TxtBoxAnimation = {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 3,
        duration: 2,
        delay: 3,
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

  const typingRef = useRef<number>(0);

  const DynamicRef = useRef<HTMLDivElement>(null);

  const typing = useCallback(() => {
    const dynamicTxts = ['Front-End', 'Publishing'];

    const dynamicTxt = dynamicTxts[typingRef.current].split('');

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

    stillRun();

    setTimeout(() => {
      const dynamicTxt = dynamicTxts[typingRef.current].split('');

      function removeWord() {
        if (DynamicRef.current?.innerHTML !== undefined) {
          dynamicTxt.pop();

          DynamicRef.current.innerHTML = dynamicTxt.join('');
        }
        if (dynamicTxt.length) {
          setTimeout(() => {
            removeWord();
          }, 200);
        }
      }
      removeWord();

      if (typingRef.current === 0) {
        typingRef.current += 1;
      } else {
        typingRef.current = 0;
      }

      setTimeout(() => {
        typing();
      }, 2000);
    }, 2000);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      typing();
    }, 2500);

    return () => clearTimeout(timer);
  }, [typing]);

  return (
    <div className="Mobile_MainBanner">
      <div className="Banner-Index">
        <motion.div className="Index-contentBox" variants={TxtBoxAnimation} animate="animate" initial="initial">
          <motion.div className="Index-title" variants={TxtAnimation}>
            <h2>Min Hyeok PORTFOLIO</h2>
          </motion.div>

          <motion.div className="Dynamic-TxtBox" variants={TxtAnimation}>
            <h1 className="Dynamic-txt" ref={DynamicRef}>
              {}
            </h1>

            <div className="Static-txt">
              <h2>개발자를 소개합니다.</h2>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="Banner-img" variants={ImgBoxAnimation} animate="animate" initial="initial">
          <div className="circle-txtBox">
            <img src={`${process.env.PUBLIC_URL}/Image/Circle/Banner-CircleTxtBox.png`} alt="BannerImg" />
          </div>

          <div className="owl-icon">
            <img src={`${process.env.PUBLIC_URL}/Image/logo/logo.png`} alt="올빼미 로고 아이콘" />
          </div>
        </motion.div>
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

export default MobileBanner;
