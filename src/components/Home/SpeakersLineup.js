import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomModal from "../../common/CustomModal";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
  hoverLift,
} from "../../common/motionVariants";

const SpeakersLineup = () => {
  const [activeCard, setActiveCard] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [currentMemberId, setCurrentMemberId] = useState("");
  const [currentItem, setCurrentItem] = useState({});

  const coreCommittee = [
    {
      id: 1,
      img: require("../../assets/images/speakers/s2.webp"),
      name: "Dr. A. Velumani, PhD",
      pos: "Creator, Thyrocare",
      para: "From ₹500 to a billion-dollar brand—he transformed India's diagnostics landscape.<br/><br/>His bold bet on low-cost, high-quality testing made preventive healthcare accessible for all.",
      insta: "https://www.instagram.com/drvelumani/?hl=en",
      facebook: "https://www.facebook.com/velumania1/",
      linkedin: "",
    },
    {
      id: 2,
      img: require("../../assets/images/speakers/s3.webp"),
      name: "C K Kumaravel",
      pos: "Co-Founder, Naturals",
      para: "Architect of India’s salon revolution with 700+ outlets and a mission to create 1,000+ women entrepreneurs.<br/><br/>His vision? A “housewife-free” India powered by empowered women.",
      insta: "https://www.instagram.com/ckkumaravel/?hl=en",
      facebook: "https://www.facebook.com/kumaravel.ck",
      linkedin: "https://www.linkedin.com/in/ckknaturals/",
    },
    {
      id: 3,
      img: require("../../assets/images/speakers/s1.webp"),
      name: "Erode Mahesh",
      pos: "Anchor, Educator &<br/> Motivational Speaker",
      para: "",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      id: 4,
      img: require("../../assets/images/speakers/s4.webp"),
      name: "Vijay Kapoor",
      pos: "Founder & MD,<br/> Derby Jeans Community",
      para: "",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      id: 5,
      img: require("../../assets/images/speakers/s5.webp"),
      name: "Preethi Shashikumar",
      pos: "Founder, Prrethiwear",
      para: "",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      id: 6,
      img: require("../../assets/images/speakers/s6.webp"),
      name: "Hema Rakesh",
      pos: "Digital Journalist, Anchor",
      para: "",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      id: 7,
      img: require("../../assets/images/speakers/s7.webp"),
      name: "Khantini Vijayakumar",
      pos: "Entrepreneur & Psychologist",
      para: "",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      id: 8,
      img: require("../../assets/images/speakers/s8.webp"),
      name: "Aathitiyan V S",
      pos: "Founder & CEO, Cookd",
      para: "",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      id: 9,
      img: require("../../assets/images/speakers/s23.webp"),
      name: "Arun Titan",
      pos: "Founder & CEO, SILAII",
      para: "Arun Titan is the Founder & CEO of Silaii, a pioneering brand bringing Indian heritage to life through handcrafted sculptures.<br/><br/>With a bold vision to blend tradition with modern entrepreneurship, he has transformed Silaii into a symbol of cultural pride and creative innovation.",
      insta: "https://www.instagram.com/aruntitan/",
      facebook: "https://www.facebook.com/aruntitan/",
      linkedin: "https://in.linkedin.com/in/arun-titan",
    },
    {
      id: 10,
      img: require("../../assets/images/speakers/s9.webp"),
      name: "Sudharsanan Ganapathy",
      pos: "Founder, SGI Collective",
      para: "",
      insta: "https://www.instagram.com/sudharsananganapathy/?hl=en",
      facebook: "https://www.facebook.com/sudharsananganapathy",
      linkedin: "https://www.linkedin.com/in/sudharsananganapathy/?originalSubdomain=in",
    },
    {
      id: 11,
      img: require("../../assets/images/speakers/s11.webp"),
      name: "Dr. Kannan Gireesh",
      pos: "Founder & CEO,<br/> Live life Education Pvt. Ltd.",
      para: "Psychiatrist turned education warrior—he’s pioneered emotional learning in India’s schools.<br/><br/>On a mission to shape resilient, emotionally intelligent future leaders.",
      insta: "https://www.instagram.com/kannangireeshpsychiatrist/?hl=en",
      facebook: "https://www.facebook.com/KannanGireeshPsychiatrist/",
      linkedin: "https://in.linkedin.com/in/dr-kannan-gireesh-7ba74415",
    },
  ];

  return (
    <div className="speakers-line-up-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <motion.div
              className="row  justify-content-center "
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {coreCommittee.map((item, index) => {
                return (
                  <motion.div
                    className="col-lg-3 col-md-6"
                    style={{ cursor: "pointer" }}
                    key={index + 1}
                    variants={fadeUp}
                    whileHover={hoverLift}
                    onClick={() => {
                      setOpenModal(true);
                      setCurrentMemberId(item.id);
                      setCurrentItem(item);
                    }}
                  >
                    <div className="core-com-card">
                      <div>
                        <img
                          className="w-100 h-auto px-2 img-top-team"
                          src={item?.img}
                          alt=""
                        />
                      </div>
                      <div className="core-com-inner-card">
                        <h6 className="core-card-text h-speakers-lineup-heading">
                          {item?.name}
                        </h6>
                        <div className="core-card-subtext-head">
                          <p
                            className="core-card-subtext h-speakers-lineup"
                            dangerouslySetInnerHTML={{ __html: item?.pos }}
                          ></p>
                        </div>

                        <div className="core-com-sm-card h-speakers-lineup">
                          <div className="core-com-sm">
                            {item?.insta?.length > 0 && (
                              <a
                                className="core-comi-redirect"
                                href={item?.insta}
                                target="_blank" rel="noreferrer"
                              >
                                <i class="fa-brands fs-6 fa-instagram"></i>
                              </a>
                            )}
                            {item?.facebook?.length > 0 && (
                              <a
                                className="core-comi-redirect"
                                href={item?.facebook}
                                target="_blank" rel="noreferrer"
                              >
                                <i class="fa-brands fs-6 fa-facebook"></i>
                              </a>
                            )}
                            {item?.linkedin?.length > 0 && (
                              <a
                                className="core-comi-redirect"
                                href={item?.linkedin}
                                target="_blank" rel="noreferrer"
                              >
                                <i class="fa-brands fs-6 fa-linkedin-in"></i>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
      <CustomModal
        open={openModal}
        onClickOutside={() => {
          setOpenModal(false);
          setCurrentMemberId(null);
        }}
      >
        <div className="modal-content contact-container m-auto">
          <div className="modal-body w-100 p-0 ">
            <div className="container">
              <div className="row row-reverse-mob">
                <div className="col-lg-7 col-md-8">
                  <div className="modal-bg-speaker-card border-top-radius">
                    <div className="d-flex justify-content-start gap-3 mb-2">
                      {currentItem.insta && (
                        <div>
                          <a
                            className="our-team-sm-redirect"
                            href={currentItem.insta}
                            target="_blank" rel="noreferrer"
                          >
                            <i class="fa-brands fs-5 fa-instagram"></i>
                          </a>
                        </div>
                      )}
                      {currentItem.facebook && (
                        <div>
                          <a
                            className="our-team-sm-redirect"
                            href={currentItem.facebook}
                            target="_blank" rel="noreferrer"
                          >
                            <i class="fa-brands fs-5 fa-facebook"></i>
                          </a>
                        </div>
                      )}
                      {currentItem.linkedin && (
                        <div>
                          <a
                            className="our-team-sm-redirect"
                            href={currentItem.linkedin}
                            target="_blank" rel="noreferrer"
                          >
                            <i class="fa-brands fs-5 fa-linkedin-in"></i>
                          </a>
                        </div>
                      )}
                    </div>
                    <p
                      className="speakers-modal-para"
                      dangerouslySetInnerHTML={{ __html: currentItem.para }}
                    ></p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-4">
                  <div className="">
                    <img
                      className="team-open-card-modal px-2 img-top-team"
                      src={currentItem.img}
                      alt={currentItem.name}
                    />
                    <div className="modal-bg-speaker-card border-bottom-radius">
                      <h6 className="core-card-text text-dark ">
                        {currentItem?.name}
                      </h6>
                      <p
                        className="core-card-subtext h-auto text-dark text-small"
                        dangerouslySetInnerHTML={{ __html: currentItem?.pos }}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default SpeakersLineup;
