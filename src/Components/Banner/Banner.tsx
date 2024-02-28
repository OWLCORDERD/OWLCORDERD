import React, { useCallback, useEffect, useRef } from 'react';
import 'asset/styles/banner.scss';
import { TfiMouse } from 'react-icons/tfi';
import { motion } from 'framer-motion';

function Banner(): JSX.Element {
  const ImgBoxAnimation = {
    initial: {
      width: 0,
    },

    animate: {
      width: '100%',
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const TxtBoxAnimation = {
    initial: {
      display: 'none',
    },

    animate: {
      display: 'flex',
      transition: {
        staggerChildren: 0.5,
        delayChildren: 1,
        duration: 2,
        delay: 1,
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

    const stillRun = () => {
      if (DynamicRef.current?.innerHTML !== undefined) {
        DynamicRef.current.innerHTML += dynamicTxt.shift();
      }

      if (dynamicTxt.length) {
        setTimeout(() => {
          stillRun();
        }, 200);
      } else if (dynamicTxt.length === 0) {
        const removeTxt = dynamicTxts[typingRef.current].split('');

        const removeWord = () => {
          if (DynamicRef.current?.innerHTML !== undefined) {
            removeTxt.pop();

            DynamicRef.current.innerHTML = removeTxt.join('');
          }

          if (removeTxt.length) {
            setTimeout(() => {
              removeWord();
            }, 200);
          }

          if (removeTxt.length === 0) {
            if (typingRef.current === 0) {
              typingRef.current += 1;
            } else {
              typingRef.current = 0;
            }

            typing();
          }
        };

        setTimeout(() => {
          removeWord();
        }, 200);
      }
    };

    stillRun();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      typing();
    }, 1500);

    return () => clearTimeout(timer);
  }, [typing]);

  return (
    <div className="Main-Banner">
      <div className="Banner-Index">
        <motion.div className="Index-contentBox" variants={TxtBoxAnimation} animate="animate" initial="initial">
          <motion.div className="Index-title" variants={TxtAnimation}>
            <h1>Lim Min Hyeok PORTFOLIO</h1>
          </motion.div>

          <motion.div className="Dynamic-TxtBox" variants={TxtAnimation}>
            <h2 className="Dynamic-txt" ref={DynamicRef}>
              {}
            </h2>

            <div className="Static-txt">
              <h2>개발자를 소개합니다.</h2>
            </div>
          </motion.div>
        </motion.div>

        <div className="Banner-imgBox">
          <div className="Developer-imgBox">
            <motion.img
              src={`${process.env.PUBLIC_URL}/Image/프로필 사진.jpg`}
              alt="프로필 이미지"
              initial="initial"
              animate="animate"
              variants={ImgBoxAnimation}
            />
          </div>
        </div>
      </div>

      <div className="scroll-down">
        <TfiMouse className="scroll-icon" />
        <h2>Scroll Down</h2>
      </div>
    </div>
  );
}

export default Banner;
