import React from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../common/motionVariants";

const ComingSoon = ({ title, applyLabel, applyUrl }) => {
  return (
    <div className="margin-top-part">
      <div className="coming-soon-section">
        <div className="container">
          <motion.div
            className="position-relative mb-5 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h2 className="text-the-heading text-dark">{title}</h2>
            <div className="pb-4 position-relative d-inline-block">
              <h2 className="text-significance-heading core-commite-heading">
                COMING SOON
              </h2>
            </div>
            <p className="text-dark mt-4 mb-0" style={{ fontSize: "1.1rem" }}>
              We're lining this up for TNDS 2026. Stay tuned - full details drop
              closer to May 23 & 24, 2026.
            </p>
            {applyUrl && (
              <div className="mt-5">
                <h3 className="text-dark mb-3" style={{ fontSize: "1.6rem", fontFamily: "ClashDisplay-Semibold" }}>
                  {applyLabel}
                </h3>
                <a
                  href={applyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn banner-btn apply-now-btn"
                >
                  <span>Apply Now</span>
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
