import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomModal from "../../common/CustomModal";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
  hoverLift,
} from "../../common/motionVariants";

const PLACEHOLDER_AVATAR =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 400'>
       <rect width='320' height='400' fill='#1a2a6c'/>
       <circle cx='160' cy='150' r='60' fill='#5a6275'/>
       <path d='M60 380 C60 280, 260 280, 260 380 Z' fill='#5a6275'/>
       <text x='160' y='370' text-anchor='middle' fill='#ffffff'
             font-size='14' font-family='sans-serif'>Photo coming soon</text>
     </svg>`
  );

const SpeakersLineup = () => {
  const [activeCard, setActiveCard] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [currentMemberId, setCurrentMemberId] = useState("");
  const [currentItem, setCurrentItem] = useState({});

  const coreCommittee = [
    {
      id: 1,
      img: require("../../assets/images/speakers/s2.webp"),
      name: "Dr. A. Velumani, PhD.",
      pos: "Creator, Thyrocare",
      para: "From ₹500 to a billion-dollar brand - he transformed India's diagnostics landscape.<br/><br/>His bold bet on low-cost, high-quality testing made preventive healthcare accessible for all.",
      insta: "https://www.instagram.com/drvelumani/?hl=en",
      facebook: "https://www.facebook.com/velumania1/",
      linkedin: "",
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/Speakers/${encodeURIComponent("C K Ranganathan.png")}`,
      name: "C K Ranganathan",
      pos: "Managing Director, CavinKare",
      para: "",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL}/Speakers/${encodeURIComponent("K T Srinivasa Raja.png")}`,
      name: "K T Srinivasa Raja",
      pos: "Managing Director,<br/> Adyar Ananda Bhavan (A2B)",
      para: "",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      id: 4,
      img: require("../../assets/images/speakers/s3.webp"),
      name: "C K Kumaravel",
      pos: "Co-founder, Naturals",
      para: "Architect of India’s salon revolution with 700+ outlets and a mission to create 1,000+ women entrepreneurs.<br/><br/>His vision? A “housewife-free” India powered by empowered women.",
      insta: "https://www.instagram.com/ckkumaravel/?hl=en",
      facebook: "https://www.facebook.com/kumaravel.ck",
      linkedin: "https://www.linkedin.com/in/ckknaturals",
    },
    {
      id: 25,
      img: `${process.env.PUBLIC_URL}/${encodeURIComponent("Anandh Srinivas.png")}`,
      name: "Anand Srinivasan",
      pos: "Politician, Economist,<br/> Author & Value Investor",
      para: "",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      id: 5,
      img: `${process.env.PUBLIC_URL}/${encodeURIComponent("Derby Vijay Kapoor.png")}`,
      name: "Vijay Kapoor",
      pos: "Founder & MD,<br/> Derby Jeans Community",
      para: "",
      insta: "https://www.instagram.com/derby_vijay?igsh=MXR3b3puN2xyMGR5cQ==",
      facebook: "",
      linkedin: "https://www.linkedin.com/in/vijay-kapoor-42a42116/",
    },
    {
      id: 6,
      img: `${process.env.PUBLIC_URL}/erode-mahesh.png`,
      name: "Erode Mahesh",
      pos: "Anchor, Educator &<br/> Motivational Speaker",
      para: "",
      insta: "https://www.instagram.com/erode_mahesh?igsh=MWVodTUzc2g2bmNtYQ==",
      facebook: "",
      linkedin: "",
    },
    {
      id: 7,
      img: `${process.env.PUBLIC_URL}/Speakers/Devanand.png`,
      name: "Devanand Balasubramanian",
      pos: "Business Strategist,<br/> Navyug Global Ventures",
      para: "",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      id: 8,
      img: `${process.env.PUBLIC_URL}/Khantini.png`,
      name: "Khanthini Vijayakumar",
      pos: "Co-founder, The Old Mirchi Biryani",
      para: "",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      id: 9,
      img: `${process.env.PUBLIC_URL}/Arthi.png`,
      name: "Arthi Raguram",
      pos: "Founder, Deyga Organics",
      para: "",
      insta: "https://www.instagram.com/arthiraguram/",
      facebook: "",
      linkedin: "https://in.linkedin.com/in/arthi-raguram-73150a312",
    },
    {
      id: 10,
      img: require("../../assets/images/ticket/004.Preethi Shashikumar.png"),
      name: "Preethi Shashikumar",
      pos: "Founder, Preethiwear",
      para: "",
      insta: "https://www.instagram.com/preethi__shashikumar?igsh=aTFqNnE0bjdjdWNr",
      facebook: "",
      linkedin: "https://www.linkedin.com/in/preethishashikumar/",
    },
    {
      id: 11,
      img: `${process.env.PUBLIC_URL}/Speakers/${encodeURIComponent("Nivetha Muralidharan.png")}`,
      name: "Nivetha Muralidharan",
      pos: "Founder, Newgenmax",
      para: "",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      id: 12,
      img: require("../../assets/images/ticket/Niveda R profile.png"),
      name: "Niveda Ravikumar",
      pos: "Co-Founder & CEO, Bliss Natural",
      para: "",
      insta: "https://www.instagram.com/niveda_ravikumar/",
      facebook: "",
      linkedin: "https://www.linkedin.com/in/niveda-ravikumar-50a39a145/",
    },
    {
      id: 13,
      img: require("../../assets/images/speakers/s11.webp"),
      name: "Dr. Kannan Gireesh",
      pos: "Founder & CEO,<br/> Live Life Education Pvt. Ltd.",
      para: "Psychiatrist turned education warrior - he’s pioneered emotional learning in India’s schools.<br/><br/>On a mission to shape resilient, emotionally intelligent future leaders.",
      insta: "https://www.instagram.com/kannangireeshpsychiatrist/?hl=en",
      facebook: "https://www.facebook.com/KannanGireeshPsychiatrist/",
      linkedin: "https://in.linkedin.com/in/dr-kannan-gireesh-7ba74415",
    },
    {
      id: 14,
      img: `${process.env.PUBLIC_URL}/Speakers/${encodeURIComponent("S. Selvakumar.png")}`,
      name: "S. Selvakumar",
      pos: "Founder, Anandham Youth Foundation",
      para: "",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      id: 15,
      img: require("../../assets/images/ticket/007.Aathitiyan V S.png"),
      name: "Aathitiyan V S",
      pos: "Founder & CEO, Cookd",
      para: "",
      insta: "https://www.instagram.com/aathitiyan?igsh=MXBzdHgybDh2Nmpsaw==",
      facebook: "",
      linkedin: "https://www.linkedin.com/in/aathitiyan/",
    },
    {
      id: 16,
      img: require("../../assets/images/speakers/s23.webp"),
      name: "Arun Titan",
      pos: "Founder & CEO, SILAII",
      para: "Arun Titan is the Founder & CEO of Silaii, a pioneering brand bringing Indian heritage to life through handcrafted sculptures.<br/><br/>With a bold vision to blend tradition with modern entrepreneurship, he has transformed Silaii into a symbol of cultural pride and creative innovation.",
      insta: "https://www.instagram.com/aruntitan/",
      facebook: "https://www.facebook.com/aruntitan/",
      linkedin: "https://in.linkedin.com/in/arun-titan",
    },
    {
      id: 17,
      img: `${process.env.PUBLIC_URL}/sudharsanan.webp`,
      name: "Sudharsanan Ganapathy",
      pos: "Founder, SGI Collective",
      para: "",
      insta: "https://www.instagram.com/sudharsananganapathy/?hl=en",
      facebook: "https://www.facebook.com/sudharsananganapathy",
      linkedin: "https://www.linkedin.com/in/sudharsananganapathy/?originalSubdomain=in",
    },
    {
      id: 18,
      img: `${process.env.PUBLIC_URL}/Speakers/Karthikramani.png`,
      name: "Karthik Ramani",
      pos: "Co-founder, Flexifunnels",
      para: "",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      id: 19,
      img: require("../../assets/images/organisers/Organisers_Dharaneetharan.png"),
      name: "Dharaneetharan G D",
      pos: "Founder & CEO, Social Eagle",
      para: "",
      insta: "https://www.instagram.com/dharaneetharan/?hl=en",
      facebook: "https://www.facebook.com/dharaneetharangd/",
      linkedin: "https://www.linkedin.com/in/dharaneetharan/?originalSubdomain=in",
    },
    {
      id: 20,
      img: require("../../assets/images/organisers/Organisers_Vishnu Hari.png"),
      name: "Vishnu Hari",
      pos: "Co-founder, Social Eagle",
      para: "",
      insta: "https://www.instagram.com/imvishnuhari/",
      facebook: "https://www.facebook.com/imvishnuhari?mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/vishnuhari-harikumar/",
    },
    {
      id: 21,
      img: `${process.env.PUBLIC_URL}/${encodeURIComponent("Hema Rakesh.png")}`,
      name: "Hema Rakesh",
      pos: "Digital Journalist, Anchor",
      para: "",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      id: 22,
      img: require("../../assets/images/organisers/Manoj.png"),
      name: "Manoj Kumar",
      pos: "Director, Social Eagle",
      para: "",
      insta: "https://www.instagram.com/the_ai_dude?igsh=cXgwM3VzYjRhd3g5",
      facebook: "",
      linkedin: "https://www.linkedin.com/in/manojkumar-vasudevan-6369b1131?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      id: 23,
      img: `${process.env.PUBLIC_URL}/Speakers/Archana.png`,
      name: "Archana",
      pos: "Head of New Initiatives, Social Eagle",
      para: "",
      insta: "",
      facebook: "",
      linkedin: "",
    },
    {
      id: 24,
      img: `${process.env.PUBLIC_URL}/Speakers/${encodeURIComponent("Antony Wilbert.png")}`,
      name: "Antony Willbert",
      pos: "Chief Conversion Strategist, Social Eagle",
      para: "",
      insta: "",
      facebook: "",
      linkedin: "",
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
