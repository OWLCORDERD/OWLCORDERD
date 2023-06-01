import React from 'react';
import '../../asset/styles/mainNav.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Hooks/index';
import { about, project } from '../reducer/counter';

function MainNav() {
  const dynamicTxt = useAppSelector(state => state.counter.value);

  const dispatch = useAppDispatch();

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
        <motion.li variants={menuAni} className={dynamicTxt === 'About' ? 'active' : ''}>
          <Link to="/" onClick={e => dispatch(about())}>
            About
          </Link>
          <div className="menu-info">
            <p>ABOUT DEVELOPER AND DEVELOPER SKILLS</p>
          </div>
        </motion.li>

        <motion.li variants={menuAni} className={dynamicTxt === 'Project' ? 'active' : ''}>
          <Link to="/Project" onClick={e => dispatch(project())}>
            Project
          </Link>
          <div className="menu-info">
            <p>USED MY PUBLISHING & FRONT END SKILLS TO MADE PROJECT SITE</p>
          </div>
        </motion.li>

        <motion.li variants={menuAni} className={dynamicTxt === 'WorkSpace' ? 'active' : ''}>
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
