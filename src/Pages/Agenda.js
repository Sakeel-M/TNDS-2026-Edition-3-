import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AgendaContent from "../components/AgendaContent";
import TimerSection from "../common/TimerSection";

const Agenda = () => {
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
      <AgendaContent />
      <Footer />
      <TimerSection/>
    </div>
  );
};

export default Agenda;
