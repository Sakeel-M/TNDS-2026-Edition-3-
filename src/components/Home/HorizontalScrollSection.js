"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HorizontalScrollSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-180%"]); // Adjust based on number of cards
  const scrollOrganizer = [
    {
      img: require("../../assets/images/o1.webp"),
      name: "G D Dharaneetharan",
      pos: "Founder - Social Eagle & 21DC Community",
      insta: "...",
      facebook: "...",
      linkedin: "...",
    },
    {
      img: require("../../assets/images/o1.webp"),
      name: "G D Dharaneetharan",
      pos: "Founder - Social Eagle & 21DC Community",
      insta: "...",
      facebook: "...",
      linkedin: "...",
    },
    {
      img: require("../../assets/images/o1.webp"),
      name: "G D Dharaneetharan",
      pos: "Founder - Social Eagle & 21DC Community",
      insta: "...",
      facebook: "...",
      linkedin: "...",
    },
    {
      img: require("../../assets/images/o1.webp"),
      name: "G D Dharaneetharan",
      pos: "Founder - Social Eagle & 21DC Community",
      insta: "...",
      facebook: "...",
      linkedin: "...",
    },
    {
      img: require("../../assets/images/o1.webp"),
      name: "G D Dharaneetharan",
      pos: "Founder - Social Eagle & 21DC Community",
      insta: "...",
      facebook: "...",
      linkedin: "...",
    },
  ];
  return (
    <div
      className="bg-blue-gradient py-3"
      ref={containerRef}
      style={{ height: "160vh" }}
    >
      <div
        className="container"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="row w-100">
          <div className="col-lg-5 my-auto">
            <h2 className="get-ready-df-text font-regular">Event</h2>
            <div className="significance-heading-section text-start ms-0 me-auto">
              <img
                className="significance-design-img"
                src={require("../../assets/images/recap/recap-design.webp")}
                alt=""
              />
              <h2 className="get-ready-df-text">
                ORGANI<span className="bottom-border-gradient">SERS</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div style={{ overflow: "hidden" }}>
              <motion.div
                style={{
                  display: "flex",
                  x,
                  width: "300%",
                  gap: "1rem",
                }}
              >
                {scrollOrganizer.map((item, index) => {
                  return (
                    <div
                      className=""
                      key={index}
                      style={{
                        width: "230px",
                        height: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="">
                        <img
                          className="team-open-card-modal"
                          src={item?.img}
                          alt={""}
                        />
                        <div className="modal-bg-speaker-card">
                          <h6 className="core-card-text text-dark ">
                            {item?.name}
                          </h6>
                          <p className="core-card-subtext h-auto text-dark text-small">
                            {item?.pos}
                          </p>
                          <div>
                            <div className="d-flex justify-content-center gap-3">
                              {item.insta && (
                                <div>
                                  <a
                                    className="our-team-sm-redirect"
                                    href={item.insta}
                                    target="_blank"
                                  >
                                    <i class="fa-brands small fa-instagram"></i>
                                  </a>
                                </div>
                              )}
                              {item.facebook && (
                                <div>
                                  <a
                                    className="our-team-sm-redirect"
                                    href={item.facebook}
                                    target="_blank"
                                  >
                                    <i class="fa-brands small fa-facebook"></i>
                                  </a>
                                </div>
                              )}
                              {item.linkedin && (
                                <div>
                                  <a
                                    className="our-team-sm-redirect"
                                    href={item.linkedin}
                                    target="_blank"
                                  >
                                    <i class="fa-brands small fa-linkedin-in"></i>
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
