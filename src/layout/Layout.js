import React from 'react';
import { motion } from 'framer-motion';
import {useRouter} from 'next/router';

import {Container} from './LayoutStyles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import MobileNav from '../components/MobileNav/MobileNav';
import MobileScreens from '../components/MobileScreens/MobileScreens';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export const Layout = ({children}) => {
  const {route} = useRouter();
  const hasMobileScreens = route === '/' || route === '/all-projects';

  return (
    <Container>
      <Header />
      <motion.main
        className={hasMobileScreens ? 'mobile-app-web-content' : undefined}
        initial={false}
        animate='enter'
        exit="exit"
        variants={variants}
        transition={{ type: 'linear', duration: 0.8 }}
      >
        {children}
      </motion.main>
      <MobileScreens />
      <Footer />
      <ScrollToTop />
      <MobileNav />
    </Container>
  )
}
