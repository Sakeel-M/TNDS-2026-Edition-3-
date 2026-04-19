import React from "react";
import { motion } from "framer-motion";
import cardicon from "../../assets/images/Awards/cardicon.webp";
import cardiconwhite from "../../assets/images/Awards/cardicon-white.webp";
import {
  scaleIn,
  staggerContainer,
  viewportOnce,
  hoverLift,
} from "../../common/motionVariants";

const AwardCard = ({ img, children }) => (
  <motion.div
    className="col-lg-4 col-md-4 award-flex"
    variants={scaleIn}
    whileHover={hoverLift}
  >
    <div className="award-card">
      <img src={img} className="card-img" alt="" />
      <div className="cardpt">{children}</div>
    </div>
  </motion.div>
);

const AwardsContent = () => {
  return (
    <div>
      <section className="awards-page">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <motion.div
                className="row"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                <AwardCard img={require("../../assets/images/Awards/card9.webp")}>
                  BEST ENTREPRENEUR <br />
                  OF THE YEAR
                </AwardCard>
                <AwardCard img={require("../../assets/images/Awards/card1.webp")}>
                  DISRUPTOR OF THE <br />
                  YEAR
                </AwardCard>
                <AwardCard img={require("../../assets/images/Awards/card2.webp")}>
                  POSITIVE IMPACT <br />
                  CREATOR
                </AwardCard>
                <AwardCard img={require("../../assets/images/Awards/card12.webp")}>
                  BEST FITNESS <br /> INFLUENCER
                </AwardCard>
                <AwardCard img={require("../../assets/images/Awards/card3.webp")}>
                  BEST TRAVEL <br />
                  INFLUENCER
                </AwardCard>
                <AwardCard img={require("../../assets/images/Awards/card4.webp")}>
                  BEST FOOD <br /> INFLUENCER
                </AwardCard>
                <AwardCard img={require("../../assets/images/Awards/card4.webp")}>
                  BEST HEALTH <br /> INFLUENCER
                </AwardCard>
                <AwardCard img={require("../../assets/images/Awards/card10.webp")}>
                  MINDSET & PSYCHOLOGY <br /> INFLUENCER
                </AwardCard>
                <AwardCard img={require("../../assets/images/Awards/card5.webp")}>
                  EMERGING INFLUENCER <br />
                  OF THE YEAR
                </AwardCard>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <div className="d-flex justify-content-center gap-5 items-center mb-4">
            <a href="https://forms.gle/nwDJRXw5UYGa6tHCA" target="_blank" rel="noreferrer">
              <motion.button
                className="btn award-btn"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <div className="figure">
                  <img className="ticket-white" src={cardiconwhite} alt="" />
                  <img className="ticket-black" src={cardicon} alt="" />
                </div>
                <span>Nominate Yourself</span>
              </motion.button>
            </a>
          </div>
        </div>
        <div className="d-flex award-best px-0 ">
          Best Digital Agency Awards
        </div>
        <div className="gradient-border"></div>
        <div className="container pt-5 mt-5">
          <div className="row justify-content-center pt-5">
            <div className="col-lg-10">
              <motion.div
                className="row"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                <AwardCard img={require("../../assets/images/Awards/card11.webp")}>
                  BEST META <br /> CAMPAIGN
                </AwardCard>
                <AwardCard img={require("../../assets/images/Awards/card6.webp")}>
                  BEST GOOGLE <br /> CAMPAIGN
                </AwardCard>
                <AwardCard img={require("../../assets/images/Awards/card7.webp")}>
                  BEST DIGITAL AGENCY <br />
                  OF THE YEAR
                </AwardCard>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-5 items-center mb-3">
          <a href="https://forms.gle/nwDJRXw5UYGa6tHCA" target="_blank" rel="noreferrer">
            <motion.button
              className="btn award-btn"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <div className="figure">
                <img className="ticket-white" src={cardiconwhite} alt="" />
                <img className="ticket-black" src={cardicon} alt="" />
              </div>
              <span>Nominate Yourself</span>
            </motion.button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AwardsContent;
