import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnerWithUsPage from "../components/PartnerWithUsPage";
import TimerSection from "../common/TimerSection";

const PartnerWithUs = () => {
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
      <PartnerWithUsPage />
      <Footer />
      <TimerSection/>
    </div>
  );
};

export default PartnerWithUs;
