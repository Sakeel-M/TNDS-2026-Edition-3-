import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";
import TimerSection from "../common/TimerSection";

const Awards = () => {
  const location = useLocation();
  useEffect(() => {
    const { search } = location;
    if (!search) {
      window.scroll(0, 0);
    }
  }, []);
  return (
    <div className=''>
      <Navbar />
      <ComingSoon title="Eagle Awards" />
      <Footer />
      <TimerSection />
    </div>
  );
};

export default Awards;
