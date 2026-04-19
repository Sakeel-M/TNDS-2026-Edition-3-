import React, { useEffect } from "react";
import TicketPage from "../components/TicketPage";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TimerSection from "../common/TimerSection";
const Ticket = () => {
  const location = useLocation();
  useEffect(() => {
    const { search } = location;
    if (!search) {
      window.scroll(0, 0);
    }
  }, []);
  return (
    <div className="ticket-page">
      <Navbar />
      <TicketPage />
      <Footer />
      <TimerSection/>
    </div>
  );
};

export default Ticket;
