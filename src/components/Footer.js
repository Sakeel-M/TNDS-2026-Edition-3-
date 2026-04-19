import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/images/tnds-2026-logo.png";
import TicketWhite from "../assets/images/ticket-white.webp";
import TicketBlack from "../assets/images/ticket-black.webp";
import SELogo from "../assets/images/SE-logo.webp";
import CallIcon from "../assets/images/ticket/call.webp";
import EnvelopIcon from "../assets/images/ticket/envelop.webp";
import FooterDesign1 from "../assets/images/footer-design1.webp";
import FooterDesign2 from "../assets/images/footer-design2.webp";
import { Link, useNavigate } from "react-router-dom";
import { fadeUp, viewportOnce } from "../common/motionVariants";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="gradient-border"></div>
      <div className="footer-section pt-5 pb-3">
        <div className="container">
          <div className="row justify-content-center ">
            <motion.div
              className="col-lg-10 position-relative"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <img className="footerdesign1" src={FooterDesign1} alt=""></img>
              <img className="footerdesign2" src={FooterDesign2} alt=""></img>
              <div>
                <h2 className="footer-heading mb-3">
                  Join the Digital Leaders of Tomorrow <br className="br-tag" />{" "}
                  Get Ready for the AI Future
                </h2>
                <p className="footer-para mb-4">
                  Be part of the movement shaping South Asia’s AI future.
                </p>
                <div className="d-flex justify-content-center gap-5 items-center mb-4 ">
                  <div className="nav-btn-container">
                    <motion.button
                      onClick={()=>navigate('/Ticket')}
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
                </div>
              </div>
            </motion.div>
          </div>
          <div className="row align-items-center pb-3 mb-4 border-bottom-light">
            <div className="col-lg-3 col-md-4 mb-lg-0 mb-md-4">
              <div className="mb-3">
                <img className="header-logo" src={Logo} alt="" />
              </div>
              <div className="">
                <ul className="list-unstyled footer-list mb-3">
                  <li>
                    <a
                      href="https://www.instagram.com/tndigitalsummit/"
                      target="_blank" rel="noreferrer"
                      className="social_media"
                    >
                      <motion.div className="" whileHover={{ scale: 1.15 }} transition={{ duration: 0.2 }}>
                        <i class="fa-brands fa-instagram"></i>
                      </motion.div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@socialeagleofficial1155"
                      target="_blank" rel="noreferrer"
                      className="social_media"
                    >
                      <motion.div className="" whileHover={{ scale: 1.15 }} transition={{ duration: 0.2 }}>
                        <i class="fa-brands fa-youtube"></i>
                      </motion.div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/socialeagle/"
                      target="_blank" rel="noreferrer"
                      className="social_media"
                    >
                      <motion.div className="" whileHover={{ scale: 1.15 }} transition={{ duration: 0.2 }}>
                        <i class="fa-brands fa-linkedin-in"></i>
                      </motion.div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 mb-lg-0 mb-md-4">
              <div>
                <ul className="list-unstyled footer-list justify-content-center ">
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
              {/* <div className="">
                <ul className="list-unstyled footer-list res-footer-list">
                  <li>
                    <Link
                      className="footer-redirect"
                      to="/"
                      onClick={scrollToTop}
                    >
                      <h6 className="ticket-footer-link">Home</h6>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-redirect"
                      to="/Agenda"
                      onClick={scrollToTop}
                    >
                      {" "}
                      <h6 className="ticket-footer-link">Agenda</h6>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-redirect"
                      to="/Awards"
                      onClick={scrollToTop}
                    >
                      <h6 className="ticket-footer-link">Awards</h6>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-redirect"
                      to="/PartnerWithUs"
                      onClick={scrollToTop}
                    >
                      <h6 className="ticket-footer-link">Partner With Us</h6>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-redirect"
                      to="/TNDS2024Highlights"
                      onClick={scrollToTop}
                    >
                      <h6 className="ticket-footer-link">TNDS 2024 Highlights</h6>
                    </Link>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer"
                      className="footer-redirect"
                      href="https://tndigitalsummit.com/2024"
                      onClick={scrollToTop}
                    >
                      {" "}
                      <h6 className="ticket-footer-link">TNDS 2024</h6>
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="col-lg-3">
              <div className="concept-created-text">
                <p className="text-light text-lg-end text-md-start me-2 mb-3">
                  Concept Created & Curated By
                </p>
                <div className="text-lg-end text-md-start">
                  <img className="ticket-tnds-logo mb-0" src={SELogo} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <p className="footer-copyright text-center">
                Copyright © TN Digital Summit 2026. All Rights Reserved
              </p>
            </div>
            {/* <div className="col-lg-4 ">
              <div className="privacy-terms">
                <Link className="text-decoration-none" to="/TermsandConditions">
                  <p className="footer-copyright">Terms & Conditions</p>
                </Link>
                <Link className="text-decoration-none" to="/PrivacyPolicy">
                  <p className="footer-copyright">Privacy Policy</p>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
