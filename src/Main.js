import React from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Ticket from "./Pages/Ticket";
import Home from "./Pages/Home";
import Awards from "./Pages/Awards";
import Agenda from "./Pages/Agenda";
import Gallery from "./Pages/Gallery";
import ThankYouPage from "./Pages/ThankYouPage";
import { pageTransition } from "./common/motionVariants";

const AnimatedPage = ({ children }) => (
  <motion.div
    initial={pageTransition.initial}
    animate={pageTransition.animate}
    exit={pageTransition.exit}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/Ticket" element={<AnimatedPage><Ticket /></AnimatedPage>} />
        <Route path="/Awards" element={<AnimatedPage><Awards /></AnimatedPage>} />
        <Route path="/Agenda" element={<AnimatedPage><Agenda /></AnimatedPage>} />
        <Route path="/TNDS2024Highlights" element={<AnimatedPage><Gallery /></AnimatedPage>} />
        <Route path="/ThankYouPage" element={<AnimatedPage><ThankYouPage /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
};

const Main = () => {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
};

export default Main;
