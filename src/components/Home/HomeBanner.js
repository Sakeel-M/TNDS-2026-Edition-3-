import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Video from "../../assets/videos/banner-video.mp4";
import Location from "../../assets/images/location.webp";
import TicketWhite from "../../assets/images/ticket-white.webp";
import TicketBlack from "../../assets/images/ticket-black.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../../common/utills";
import TimerSection from "../../common/TimerSection";
import BannerTimer from "../../common/BannerTimer";

const BannerLogo = `${process.env.PUBLIC_URL}/${encodeURIComponent("TNDS 2026 Logo White.png")}`;
const EASE = [0.22, 0.61, 0.36, 1];
const bannerItem = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: EASE } },
});
const HomeBanner = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const { search } = location;
    if (!search) {
      window.scroll(0, 0);
    }
  }, []);
  return (
    <>
      <div className="home-banner-section">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="home-video-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11">
                <motion.div className="text-center" {...bannerItem(0)}>
                  <img className="banner-logo" src={BannerLogo} alt=""></img>
                </motion.div>
                <motion.h1
                  className="banner-heading text-center mb-3"
                  {...bannerItem(0.15)}
                >
                  The Future is Here. <br />
                  <span className="gradient-banner-heading">
                    Build with AI.
                  </span>
                </motion.h1>
                <motion.p
                  className="banner-rounded-content"
                  {...bannerItem(0.3)}
                >
                  <span>May 23 & May 24, 2026 &nbsp; | </span>{" "}
                  <img
                    className="location-img ms-2"
                    src={Location}
                    alt=""
                  ></img>
                  <span>Hilton, Chennai </span>
                </motion.p>
                <motion.div {...bannerItem(0.45)}>
                  <BannerTimer />
                </motion.div>
                <motion.div
                  className="d-flex justify-content-center gap-5 items-center  "
                  {...bannerItem(0.6)}
                >
                  <div className="nav-btn-container">
                    <motion.button
                      onClick={() => navigate("/Ticket")}
                      className="btn banner-btn"
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="figure">
                        <img
                          className="ticket-white"
                          src={TicketWhite}
                          alt=""
                        />
                        <img
                          className="ticket-black"
                          src={TicketBlack}
                          alt=""
                        />
                      </div>
                      <span>Buy Tickets</span>
                    </motion.button>
                  </div>
                  <a
                    href="#/#Speakers"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("Speakers");
                    }}
                  >
                    <motion.button
                      className="speaker-btn"
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                    >
                      Speakers
                    </motion.button>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TimerSection />
    </>
  );
};

export default HomeBanner;
