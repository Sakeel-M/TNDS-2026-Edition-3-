import React from "react";
import { motion } from "framer-motion";
import DesignImg from "../assets/images/design-img.webp";
import { fadeUp, viewportOnce } from "../common/motionVariants";

const ComingSoon = ({ title }) => {
  return (
    <div className="margin-top-part">
      <div className="partner-with-us">
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
              <img className="design-what-you-learn" src={DesignImg} alt="" />
              <h2 className="text-significance-heading core-commite-heading">
                COMING SOON
              </h2>
            </div>
            <p className="text-dark mt-4 mb-0" style={{ fontSize: "1.1rem" }}>
              We're lining this up for TNDS 2026. Stay tuned - full details drop
              closer to May 23 & 24, 2026.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
