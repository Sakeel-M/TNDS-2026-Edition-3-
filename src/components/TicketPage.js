import React from "react";
import { motion } from "framer-motion";
import TickRight from "../assets/images/ticket/tick-right.webp";
import TickWrong from "../assets/images/ticket/tick-wrong.webp";
import Img1 from "../assets/images/ticket/img1.webp";
import Img2 from "../assets/images/ticket/img2.webp";
import Img3 from "../assets/images/ticket/img3.webp";
import { Link } from "react-router-dom";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
  hoverLift,
} from "../common/motionVariants";

const TicketPage = () => {
  return (
    <div className="bg-dark">
      <div className="ticket-page">
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h1 className="ticket-page-heading">
              Event Ticket <br /> categories
            </h1>
          </motion.div>
        </div>
        <div className="ticket-se-logo-bg py-4 mb-5">
          <h5 className="exclusive-text-heading pt-2 mb-0">
            Exclusive Community offer price
          </h5>
        </div>
        <div className="container">
          <motion.div
            className="row justify-content-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div
              className="col-lg-4 col-md-6 mb-lg-0 mb-md-5 mb-5"
              variants={scaleIn}
              whileHover={hoverLift}
            >
              <div className="text-center mx-auto mb-2">
                <img className="crown-width" src={Img1} alt="" />
              </div>
              <div className="position-soldout">
                <div className="opacity-sold-ticket">
                  <div className="silver-section">
                    <div className="text-center  pb-2">
                      <h2 className="ticket-heading pt-2 mb-1">SILVER</h2>
                      <p className="text-light small-text mb-3">Starter</p>
                      <div className="border-bottom-ticket bg-ticket-amount">
                        <div className="d-flex justify-content-center align-items-center">
                          <div className="position-relative">
                            <h6 className="mb-0 text-light line-through">
                              Rs.20,000
                            </h6>
                            <span className="line-through-text"></span>
                          </div>
                          <h6 className="mb-0 text-light ">( Actual )</h6>
                        </div>
                        <div className="d-flex justify-content-center mb-1 align-items-center">
                          <div className="position-relative">
                            <h5 className="mb-0 text-light line-through">Rs.11,999</h5>
                            <span className="line-through-text"></span>
                          </div>
                          <h6 className="mb-0 text-light ">( Offer )</h6>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                          <h2 className="ticket-amount-heading mb-2">
                            Rs.9,999{" "}
                          </h2>
                          <h2 className="ticket-amount-heading mb-2 fs-6">
                            ( Early Bird )
                          </h2>
                        </div>
                        <p className="mb-0 text-light">+18% GST</p>
                        <span className="text-light small-text">
                          Save ₹10,000
                        </span>
                      </div>
                    </div>
                    <div className="silver-ticket-padding pt-3">
                      <div className="padding-bottom-ticket">
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Full 2-Day Event Access</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Conference Kit</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Seating – <em>Standard</em></p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Day 1 – Lunch</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Day 1 – Dinner</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Day 2 – Lunch</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Awards Night Access</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Event Resources</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">5 Days Session – What's Working with Meta Ads in 2026 (₹5,000) by Vishnuhari</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">5 Days Session – How to Create AI Employee (₹5,000) by Manoj (The AI Dude)</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickWrong} alt="" />
                          <p className="mb-0">Personal Mastery Course by Dharaneetharan (₹10,000)</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickWrong} alt="" />
                          <p className="mb-0">Video Replay Access</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickWrong} alt="" />
                          <p className="mb-0">Photo Opportunity at Diamond Arena</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickWrong} alt="" />
                          <p className="mb-0">Exclusive Networking Access</p>
                        </div>
                      </div>
                      <div className="btn-container">
                        <Link to="https://rzp.io/rzp/kjp1elsV" target="_blank" rel="noreferrer">
                          <button className="btn btn-buy-ticket">
                            BUY TICKETS
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-4 col-md-6 mb-lg-0 mb-md-5 mb-5" variants={scaleIn} whileHover={hoverLift}>
              <div className="text-center mx-auto mb-2">
                <img className="crown-width" src={Img2} alt="" />
              </div>
              <div className="position-soldout">
              <div className="opacity-sold-ticket">
              <div className="gold-section">
                <div className="text-center pb-2">
                  <h2 className="ticket-heading pt-2 mb-1">GOLD</h2>
                  <p className="text-light small-text mb-3">Most Popular</p>
                  <div className="border-bottom-ticket bg-ticket-amount">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="position-relative">
                        <h6 className="mb-0 text-light line-through">
                          Rs.41,000
                        </h6>
                        <span className="line-through-text"></span>
                      </div>
                      <h6 className="mb-0 text-light ">( Actual )</h6>
                    </div>
                    <div className="d-flex justify-content-center mb-1 align-items-center">
                      <div className="position-relative">
                        <h5 className="mb-0 text-light line-through">Rs.15,999</h5>
                        <span className="line-through-text"></span>
                      </div>
                      <h6 className="mb-0 text-light ">( Offer )</h6>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <h2 className="ticket-amount-heading mb-2">Rs.13,999 </h2>
                      <h2 className="ticket-amount-heading mb-2 fs-6">
                        ( Early Bird )
                      </h2>
                    </div>
                    <p className="mb-0 text-light">+18% GST</p>
                    <span className="text-light small-text">
                      Save ₹27,000
                    </span>
                  </div>
                </div>
                <div className="silver-ticket-padding pt-3">
                  <div className="padding-bottom-ticket">
                    <div className="silver-ticket-flex">
                      <img className="ticket-buy-icon" src={TickRight} alt="" />
                      <p className="mb-0">Full 2-Day Event Access</p>
                    </div>
                    <div className="silver-ticket-flex">
                      <img className="ticket-buy-icon" src={TickRight} alt="" />
                      <p className="mb-0">Conference Kit</p>
                    </div>
                    <div className="silver-ticket-flex">
                      <img className="ticket-buy-icon" src={TickRight} alt="" />
                      <p className="mb-0">Seating – <em>Gold Priority Seating</em></p>
                    </div>
                    <div className="silver-ticket-flex">
                      <img className="ticket-buy-icon" src={TickRight} alt="" />
                      <p className="mb-0">Day 1 – Lunch</p>
                    </div>
                    <div className="silver-ticket-flex">
                      <img className="ticket-buy-icon" src={TickRight} alt="" />
                      <p className="mb-0">Day 1 – Dinner</p>
                    </div>
                    <div className="silver-ticket-flex">
                      <img className="ticket-buy-icon" src={TickRight} alt="" />
                      <p className="mb-0">Day 2 – Lunch</p>
                    </div>
                    <div className="silver-ticket-flex">
                      <img className="ticket-buy-icon" src={TickRight} alt="" />
                      <p className="mb-0">Awards Night Access</p>
                    </div>
                    <div className="silver-ticket-flex">
                      <img className="ticket-buy-icon" src={TickRight} alt="" />
                      <p className="mb-0">Event Resources</p>
                    </div>
                    <div className="silver-ticket-flex">
                      <img className="ticket-buy-icon" src={TickRight} alt="" />
                      <p className="mb-0">5 Days Session – What's Working with Meta Ads in 2026 (₹5,000) by Vishnuhari</p>
                    </div>
                    <div className="silver-ticket-flex">
                      <img className="ticket-buy-icon" src={TickRight} alt="" />
                      <p className="mb-0">5 Days Session – How to Create AI Employee (₹5,000) by Manoj (The AI Dude)</p>
                    </div>
                    <div className="silver-ticket-flex">
                      <img className="ticket-buy-icon" src={TickRight} alt="" />
                      <p className="mb-0">Personal Mastery Course by Dharaneetharan (₹10,000)</p>
                    </div>
                    <div className="silver-ticket-flex">
                      <img className="ticket-buy-icon" src={TickRight} alt="" />
                      <p className="mb-0">Video Replay Access – <em>60 Days Access</em></p>
                    </div>
                    <div className="silver-ticket-flex">
                      <img className="ticket-buy-icon" src={TickWrong} alt="" />
                      <p className="mb-0">Photo Opportunity at Diamond Arena</p>
                    </div>
                    <div className="silver-ticket-flex">
                      <img className="ticket-buy-icon" src={TickWrong} alt="" />
                      <p className="mb-0">Exclusive Networking Access</p>
                    </div>
                  </div>
                  <div className="btn-container">
                    <Link to="https://rzp.io/rzp/nPV3t5dX" target="_blank" rel="noreferrer">
                      <button className="btn btn-buy-ticket">
                        BUY TICKETS
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-4 col-md-6 mb-lg-0 mb-md-5 mb-5" variants={scaleIn} whileHover={hoverLift}>
              <div className="text-center mx-auto mb-2">
                <img className="crown-width" src={Img3} alt="" />
              </div>
              <div className="position-soldout">
                <div className="opacity-sold-ticket">
                  <div className="diamond-section">
                    <div className="text-center  pb-2">
                      <h2 className="ticket-heading text-white pt-2 mb-1">
                        DIAMOND
                      </h2>
                      <p className="text-light small-text mb-3">Exclusive VIP</p>
                      <div className="border-bottom-ticket bg-ticket-amount">
                        <div className="d-flex justify-content-center align-items-center">
                          <div className="position-relative">
                            <h6 className="mb-0 text-light line-through">
                              Rs.59,999
                            </h6>
                            <span className="line-through-text"></span>
                          </div>
                          <h6 className="mb-0 text-light ">( Actual )</h6>
                        </div>
                        <div className="d-flex justify-content-center mb-1 align-items-center">
                          <div className="position-relative">
                            <h5 className="mb-0 text-light line-through">Rs.34,999</h5>
                            <span className="line-through-text"></span>
                          </div>
                          <h6 className="mb-0 text-light ">( Offer )</h6>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                          <h2 className="ticket-amount-heading mb-2">
                            Rs.29,999{" "}
                          </h2>
                          <h2 className="ticket-amount-heading mb-2 fs-6">
                            ( Early Bird )
                          </h2>
                        </div>
                        <p className="mb-0 text-light">+18% GST</p>
                        <span className="text-light small-text">
                          Save ₹30,000
                        </span>
                      </div>
                    </div>
                    <div className="silver-ticket-padding pt-3">
                      <div className="padding-bottom-ticket">
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Full 2-Day Event Access</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Conference Kit</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Seating – <em>VIP Special Seating</em></p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Day 1 – Lunch</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Day 1 – Dinner</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Day 2 – Lunch</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Awards Night Access</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Event Resources</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">5 Days Session – What's Working with Meta Ads in 2026 (₹5,000) by Vishnuhari</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">5 Days Session – How to Create AI Employee (₹5,000) by Manoj (The AI Dude)</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Personal Mastery Course by Dharaneetharan (₹10,000)</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Video Replay Access – <em>1 Year Access</em></p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Photo Opportunity at Diamond Arena</p>
                        </div>
                        <div className="silver-ticket-flex">
                          <img className="ticket-buy-icon" src={TickRight} alt="" />
                          <p className="mb-0">Exclusive Networking Access – <em>Diamond Arena</em></p>
                        </div>
                      </div>
                      <div className="btn-container">
                        <Link to="https://rzp.io/rzp/XyFioKT" target="_blank" rel="noreferrer">
                          <button className="btn btn-buy-ticket">
                            BUY TICKETS
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="faq-section">
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <h1 className="ticket-page-heading">FAQ’s</h1>
          </motion.div>
          <div className="accordion" id="accordionExample">
            <motion.div
              className="row justify-content-center gap-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <motion.div className="col-lg-5" variants={fadeUp}>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What are the dates for the TN Digital Summit 2026?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      May 23 & 24, 2026, Hilton, Chennai, Tamilnadu, India...
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-lg-5" variants={fadeUp}>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Can I get a refund if I can’t attend the Live Event?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      The tickets purchased are non refundable. However the
                      ticket can be transferred to your friends or family.
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-lg-5" variants={fadeUp}>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      For Whom?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li className="mb-2">
                          <span>Business Owners building with AI</span>
                        </li>
                        <li className="mb-2">
                          <span>Founders moving into scalable systems</span>
                        </li>
                        <li className="mb-2">
                          <span>Coaches & Consultants going digital-first</span>
                        </li>
                        <li className="mb-2">
                          <span>Content Creators building a business leveraging AI</span>
                        </li>
                        <li className="mb-2">
                          <span>Community Members ready to level up using AI</span>
                        </li>
                        <li className="mb-2">
                          <span>Agency Owners integrating AI into services</span>
                        </li>
                        <li className="mb-2">
                          <span>E-Commerce Owners optimising with AI</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-lg-5" variants={fadeUp}>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      What do I need to bring?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      A smile, a good attitude, and a passion for your own
                      offer, that’s it. Rest, I’ve got you covered :)
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-lg-5" variants={fadeUp}>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What Is The Schedule?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      May 23 - 09:00 am to 08:00 pm & May 24 - 09:30 am to
                      04:30 pm
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-lg-5" variants={fadeUp}>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      Where Is The Venue For The Event?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      It’s In Hilton, Chennai.
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-lg-5" variants={fadeUp}>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Can I bring a spouse or business partner?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Absolutely, but everyone needs their own ticket!
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-lg-5" variants={fadeUp}>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingNine">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseNine"
                      aria-expanded="false"
                      aria-controls="collapseNine"
                    >
                      Have other questions?
                    </button>
                  </h2>
                  <div
                    id="collapseNine"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingNine"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Contact us at{" "}
                      <a
                        className="text-light"
                        href="mailto:flyhigh@socialeagle.in"
                        target="_blank"
                        rel="noreferrer"
                      >
                        flyhigh@socialeagle.in
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <div className="ticket-footer">
        <div className="container">
          <div className="text-center mx-auto">
            <img className="ticket-tnds-logo" src={TndsLogo} alt="" />
            <h5 className="text-light pb-4">Concept Created & Curated By</h5>
          </div>
        </div>
        <div className="ticket-se-logo-bg">
          <img className="ticket-tnds-logo mb-0" src={SELogo} alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 pt-3">
              <ul className="list-unstyled ticket-list-footer p-3 border-bottom-0">
                <li>
                  <a
                    className="d-flex justify-content-start items-center text-decoration-none gap-2"
                    href="tel:+918428421222"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "tel:+918428421222";
                    }}
                  >
                    <img
                      className="footer-icon-social-redirect"
                      src={CallIcon}
                      alt=""
                    />
                    <h6 className="ticket-footer-link lh-base mb-0">
                      +91 8428421222
                    </h6>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex justify-content-start items-center text-decoration-none gap-2"
                    href="mailto:flyhigh@socialeagle.in"
                  >
                    <img
                      className="footer-icon-social-redirect"
                      src={EnvelopIcon}
                      alt=""
                    />
                    <h6 className="ticket-footer-link lh-base mb-0">
                      flyhigh@socialeagle.in
                    </h6>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TicketPage;
