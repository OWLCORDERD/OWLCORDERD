import React from 'react';
import '../../asset/styles/mainNav.scss';
import { motion } from 'framer-motion';

function MainNav() {
  const NavAniBox = {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 1,
        duration: 4,
      },
    },
  };

  const menuAni = {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
    },
  };
  return (
    <motion.nav className="Main-Nav" variants={NavAniBox} initial="initial" animate="animate">
      <div className="Static-title">
        <motion.h2 variants={menuAni}>
          Web Publishing <br /> Front End Developer
        </motion.h2>
      </div>

      <ul className="Nav-menu">
        <motion.li className="active" variants={menuAni}>
          <a href="#">About</a>
          <div className="menu-info">
            <p>ABOUT DEVELOPER AND DEVELOPER SKILLS</p>
          </div>
        </motion.li>

        <motion.li className="active" variants={menuAni}>
          <a href="#">Project</a>
          <div className="menu-info">
            <p>USED MY PUBLISHING & FRONT END SKILLS TO MADE PROJECT SITE</p>
          </div>
        </motion.li>

        <motion.li className="active" variants={menuAni}>
          <a href="#">Workspace</a>
          <div className="menu-info">
            <p>Introducing the curriculum of the skillsI studied.</p>
          </div>
        </motion.li>
      </ul>
    </motion.nav>
  );
}

export default MainNav;
