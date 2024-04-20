import React, { useCallback, useEffect, useRef } from 'react';
import 'asset/styles/banner.scss';
import { TfiMouse } from 'react-icons/tfi';
import { motion } from 'framer-motion';
import { Oval } from 'react-loader-spinner';

interface loadingState {
  loading: boolean;
}

function Banner({ loading }: loadingState): JSX.Element {
  const loadingAnimation = {
    initial: {
      opacity: 1,
    },

    animate: {
      opacity: 0,
      transition: {
        duration: 1.5,
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
        delayChildren: 0.5,
        duration: 1,
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
    <section className="Main-Banner">
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
            <img
              src={`${process.env.PUBLIC_URL}/Image/프로필 사진.webp`}
              alt="프로필 이미지"
              className={loading === false ? 'view' : ''}
            />
            <motion.div className="image-loading" initial="initial" animate="animate" variants={loadingAnimation}>
              <Oval
                width={50}
                height={50}
                color="#fff"
                visible
                ariaLabel="oval-loading"
                secondaryColor="rgba(255,255,255,0.3)"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <TfiMouse className="scroll-icon" />
        <h2>Scroll Down</h2>
      </motion.div>
    </section>
  );
}

export default Banner;
