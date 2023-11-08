import React from 'react';
import '../../asset/styles/navbar.scss';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

function MainNav() {
  const location = useLocation();

  const currentPath = location.pathname;

  const NavAniBox = {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
        duration: 3,
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
        <motion.li variants={menuAni} className={currentPath === '/' ? 'active' : ''}>
          <Link to="/">About</Link>
          <div className="menu-info">
            <p>ABOUT DEVELOPER AND DEVELOPER SKILLS</p>
          </div>
        </motion.li>

        <motion.li
          variants={menuAni}
          className={`${currentPath === '/Project' ? 'active' : ''} ${
            currentPath === '/CurrentProject' ? 'active' : ''
          }`}
        >
          <Link to="/Project">Project</Link>
          <div className="menu-info">
            <p>USED MY PUBLISHING & FRONT END SKILLS TO MADE PROJECT SITE</p>
          </div>
        </motion.li>

        <motion.li variants={menuAni} className={currentPath === '/WorkSpace' ? 'active' : ''}>
          <Link to="/WorkSpace">Workspace</Link>
          <div className="menu-info">
            <p>Introducing the curriculum of the skillsI studied.</p>
          </div>
        </motion.li>
      </ul>
    </motion.nav>
  );
}

export default MainNav;
