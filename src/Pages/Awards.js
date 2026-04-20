import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TimerSection from "../common/TimerSection";
import { fadeUp, viewportOnce } from "../common/motionVariants";

const EagleTrophy = `${process.env.PUBLIC_URL}/eagle-trophy.png`;

const Awards = () => {
  const location = useLocation();
  useEffect(() => {
    const { search } = location;
    if (!search) {
      window.scroll(0, 0);
    }
  }, []);
  return (
    <div className="">
      <Navbar />
      <div className="margin-top-part">
        <div className="awards-hero-section">
          <div className="container position-relative">
            <div className="row align-items-center justify-content-center g-5">
              <motion.div
                className="col-lg-5 col-md-6 awards-trophy-wrap"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                <img
                  src={EagleTrophy}
                  alt="Eagle Award Trophy"
                  className="img-fluid awards-trophy"
                />
              </motion.div>
              <motion.div
                className="col-lg-6 col-md-6 text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                <h2 className="awards-hero-heading">
                  Eagle Award Application
                </h2>
                <div className="d-flex justify-content-center">
                  <a
                    href="https://forms.gle/EKEi1RLJSyctbsP17"
                    target="_blank"
                    rel="noreferrer"
                    className="btn banner-btn apply-now-btn awards-apply-btn"
                  >
                    <span>Apply Now</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <TimerSection />
    </div>
  );
};

export default Awards;
