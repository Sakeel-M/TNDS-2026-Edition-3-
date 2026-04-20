import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { tnds2025Photos } from "../Pages/_tnds2025Photos";
import { fadeUp, scaleIn, viewportOnce } from "../common/motionVariants";
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
            <h2 className="recap-heading">TNDS 2025 - The Recap</h2>
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
            className="highlights-video-wrap mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <iframe
              src="https://www.youtube-nocookie.com/embed/BJykdUpIslc?rel=0"
              title="TNDS 2025 Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>

        <div className="container pb-5">
          <div className="bento-wrapper">
            {(() => {
              const chunks = [];
              for (let i = 0; i < tnds2025Photos.length; i += 6) {
                chunks.push(tnds2025Photos.slice(i, i + 6));
              }
              const Tile = ({ file, idx }) => (
                <motion.div
                  className="bento-tile"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/tnds-2025-highlights/${encode(file)}`}
                    alt={`TNDS 2025 highlight ${idx + 1}`}
                    loading="lazy"
                  />
                </motion.div>
              );
              return chunks.map((chunk, ci) => (
                <div className="bento-cycle" key={ci}>
                  {(chunk[0] || chunk[1] || chunk[2]) && (
                    <div className="bento-row bento-row-a">
                      <div className="bento-stack">
                        {chunk[0] && <Tile file={chunk[0]} idx={ci * 6} />}
                        {chunk[1] && <Tile file={chunk[1]} idx={ci * 6 + 1} />}
                      </div>
                      {chunk[2] && (
                        <div className="bento-col-big">
                          <Tile file={chunk[2]} idx={ci * 6 + 2} />
                        </div>
                      )}
                    </div>
                  )}
                  {(chunk[3] || chunk[4] || chunk[5]) && (
                    <div className="bento-row bento-row-b">
                      {chunk[3] && (
                        <div className="bento-col-big">
                          <Tile file={chunk[3]} idx={ci * 6 + 3} />
                        </div>
                      )}
                      {(chunk[4] || chunk[5]) && (
                        <div className="bento-stack">
                          {chunk[4] && <Tile file={chunk[4]} idx={ci * 6 + 4} />}
                          {chunk[5] && <Tile file={chunk[5]} idx={ci * 6 + 5} />}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ));
            })()}
          </div>
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
