import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TimerSection from "../common/TimerSection";
import TNDS2025HighlightsContent from "../components/TNDS2025HighlightsContent";

const TNDS2025Highlights = () => {
  const location = useLocation();
  useEffect(() => {
    const { search } = location;
    if (!search) {
      window.scroll(0, 0);
    }
  }, []);
  return (
    <div>
      <Navbar />
      <TNDS2025HighlightsContent />
      <Footer />
      <TimerSection />
    </div>
  );
};

export default TNDS2025Highlights;
