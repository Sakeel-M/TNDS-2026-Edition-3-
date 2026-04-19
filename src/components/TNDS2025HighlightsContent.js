import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { tnds2025Photos } from "../Pages/_tnds2025Photos";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "../common/motionVariants";
import TicketWhite from "../assets/images/ticket-white.webp";
import TicketBlack from "../assets/images/ticket-black.webp";

const encode = (name) => encodeURIComponent(name);

const TNDS2025HighlightsContent = () => {
  const navigate = useNavigate();
  return (
    <div className="margin-top-part">
      <section className="gallery-bg">
        <div className="container pt-5">
          <motion.div
            className="core-commite-heading d-flex Gallery-head Gallery-heading-section py-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <img
              className="Gallery-design-img"
              src={require("../assets/images/recap/recap-design.webp")}
              alt=""
            />
            <h2 className="recap-heading">TNDS 2025 — The Recap</h2>
          </motion.div>
          <motion.div
            className="d-flex Gallery-head1 pt-3 pb-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="Gallery-border font-bold-clash">
              500+ entrepreneurs. 25+ experts. 13 sessions. One unforgettable edition.
            </div>
          </motion.div>
        </div>

        <div className="container pb-5">
          <motion.div
            className="row g-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {tnds2025Photos.map((file, i) => (
              <motion.div
                className="col-lg-4 col-md-6 col-6"
                key={file}
                variants={scaleIn}
              >
                <img
                  className="Gallery-img"
                  src={`${process.env.PUBLIC_URL}/tnds-2025-highlights/${encode(file)}`}
                  alt={`TNDS 2025 highlight ${i + 1}`}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="container py-5">
          <motion.div
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h3 className="recap-heading mb-4">Ready for 2026?</h3>
            <motion.button
              onClick={() => navigate("/Ticket")}
              className="btn banner-btn big-btn"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <div className="figure">
                <img className="ticket-white" src={TicketWhite} alt="" />
                <img className="ticket-black" src={TicketBlack} alt="" />
              </div>
              <span>Buy Tickets</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TNDS2025HighlightsContent;
