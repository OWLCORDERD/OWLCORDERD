import React from 'react';
import 'asset/styles/404Page.scss';
import { BsConeStriped } from 'react-icons/bs';
import { motion } from 'framer-motion';

function Page404() {
  return (
    <div className="Page404-container">
      <div className="Under-construction">
        <motion.div
          className="construction-icon"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <BsConeStriped className="icon-svg" />
        </motion.div>

        <motion.div
          className="construction-info"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <h1 className="construction-title">현재 페이지 작업중입니다.</h1>
          <p className="explanatory-text">This web site is currently under construction</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Page404;
