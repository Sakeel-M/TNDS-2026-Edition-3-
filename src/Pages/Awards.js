import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AwardsBanner from "../components/Awards/AwardsBanner";
import AwardsContent from "../components/Awards/AwardsContent";
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
      <AwardsBanner />
      <AwardsContent />
      <Footer />
      <TimerSection />
    </div>
  );
};

export default Awards;
