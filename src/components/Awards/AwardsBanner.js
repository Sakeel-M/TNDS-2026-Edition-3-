import React from "react";
import { motion } from "framer-motion";
import Location from "../../assets/images/blue-location.webp";
import { fadeUp, viewportOnce } from "../../common/motionVariants";
const AwardsBanner = () => {
  return (
    <div className="margin-top-part">
      <section className="position-relative">
        <div className="awards-page">
          <div className="container">
            <motion.div
              className=""
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <h2 className="text-the-heading text-dark">Eagle</h2>
              <div className="significance-heading-section mb-4 ">
                <img
                  className="significance-design-img"
                  src={require("../../assets/images/recap/recap-design.webp")}
                  alt=""
                />
                <h2 className="text-significance-heading core-commite-heading">
                  Awards
                </h2>
              </div>
              <div className="pb-5">
                <p className="banner-rounded-content text-dark border-dark mb-5">
                  <img className="location-img" src={Location} alt=""></img>
                  <span>Venue TBD | May 23 & 24, 2026</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="">
          <img
            src={require("../../assets/images/Awards/Eagle Awards PNG 1.webp")}
            alt=""
            className="award-img"
          />
          <div className="d-flex award-best">Best Influencers Categories</div>
        </div>
        <div className="gradient-border"></div>
      </section>
    </div>
  );
};

export default AwardsBanner;
