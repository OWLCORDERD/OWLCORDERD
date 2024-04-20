import React from 'react';
import '../../asset/styles/navbar.scss';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';

function MainNav() {
  const NavAniBox = {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.nav className="Main-Nav" variants={NavAniBox} initial="initial" animate="animate">
      <div className="Static-title">
        <img src={`${process.env.PUBLIC_URL}/Image/logo/logo.png`} alt="페이지 로고" />

        <h2>Lim Min Hyeok, Owlcoderd</h2>
      </div>

      <GiHamburgerMenu color="#fff" cursor="pointer" className="menu-svgIcon" />
    </motion.nav>
  );
}

export default MainNav;
