import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import DesignImg from "../../assets/images/design-img.webp";
import { useNavigate } from "react-router-dom";
import TicketWhite from "../../assets/images/ticket-white.webp";
import TicketBlack from "../../assets/images/ticket-black.webp";
import SpeakersLineup from "./SpeakersLineup";
import {
  fadeUp,
  fadeIn,
  scaleIn,
  staggerContainer,
  viewportOnce,
  hoverLift,
} from "../../common/motionVariants";
const HomeContent = () => {
  const navigate = useNavigate();

  // const options = {
  //   threshold: 0.5,
  // };
  // const [ref1, inView1] = useInView(options);
  // const [ref2, inView2] = useInView(options);
  // const [ref3, inView3] = useInView(options);
  // const [ref4, inView4] = useInView(options);
  // const [ref5, inView5] = useInView(options);

  const PUBLIC = process.env.PUBLIC_URL;
  const absImg = [
    { img: `${PUBLIC}/tnds-2025-highlights/_CP31499.jpg` },
    { img: `${PUBLIC}/tnds-2025-highlights/_TP11707.jpg` },
    { img: `${PUBLIC}/tnds-2025-highlights/TP200902.jpg` },
    { img: `${PUBLIC}/tnds-2025-highlights/TP201504.jpg` },
    { img: `${PUBLIC}/tnds-2025-highlights/TP201517.jpg` },
    { img: `${PUBLIC}/tnds-2025-highlights/TP201565.jpg` },
  ];

  const coreCommittee = [
    {
      img: require("../../assets/images/c1.webp"),
      name: "Manikandan",
      pos: "Creative Head",
      insta: "https://www.instagram.com/mani_feb?igsh=ZDB5Nml2bHB4dXM2",
      facebook: "https://www.facebook.com/share/1FDjEzTbwc/?mibextid=qi2Omg",
      linkedin:
        "https://www.linkedin.com/in/mani-kandan-2b4289129?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },

    {
      img: require("../../assets/images/c2.webp"),
      name: "Azhagarasan",
      pos: "Senior Video Editor",
      insta:
        "https://www.instagram.com/azhagarasan_r?igsh=MWo1cmFvaXk0M2dmbQ==",
      facebook: "https://www.facebook.com/share/1HZDhHQt2r/",
      linkedin:
        "https://www.linkedin.com/in/azhagarasan-ravi-3325a123a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: require("../../assets/images/c3.webp"),
      name: "Pradeep Kumar",
      pos: "Team Leader, Sales",
      insta:
        "https://www.instagram.com/anytime_entertainer?igsh=YTBiNGlmdm04bWM2",
      facebook: "",
      linkedin:
        "https://www.linkedin.com/in/pradeep-kumar-g-17a5a31b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: require("../../assets/images/Core Commitee_Anbarasan.png"),
      name: "Anbarasan V N",
      pos: "Business Development Executive",
      insta: "https://www.instagram.com/madeby.anbarasan/",
      facebook: "",
      linkedin: "https://www.linkedin.com/in/anbarasan-v-n-bb5180160/",
    },
    {
      img: require("../../assets/images/c4.webp"),
      name: "Arun Kumar M G",
      pos: "Founder, cr8ive.in",
      insta: "https://www.instagram.com/arunkumar_m_g/",
      facebook: "https://www.facebook.com/arunkumarmg8",
      linkedin:
        "https://www.linkedin.com/in/arunkumar-mg/?originalSubdomain=in",
    },
    {
      img: require("../../assets/images/c5.webp"),
      name: "Devapran Gopalakrishnan",
      pos: "Founder, The Marca Company",
      insta: "https://www.instagram.com/nithis_deva/",
      facebook: "https://www.facebook.com/nithisdeva.pran",
      linkedin:
        "https://www.linkedin.com/in/devapran-gopalakrishnan-782bb717a/",
    },
  ];

  const learnData = [
    {
      text: "<strong>AI-Powered Business Operations</strong> - Turn AI from a buzzword into a working layer inside your business",
    },
    {
      text: "<strong>The Meta Update</strong> - What's shifted in the ecosystem: new frameworks, new rules, new opportunities",
    },
    {
      text: "<strong>Visionary Thinking</strong> - Mental models that separate 10-year builders from 1-year operators",
    },
    {
      text: "<strong>Frameworks That Scale</strong> - Proven systems for growth, not theory",
    },
    {
      text: "<strong>Building Digital Teams with AI</strong> - Your next team member doesn't need a salary, it needs a prompt",
    },
    {
      text: "<strong>Real Business Transformations</strong> - Stories from people who were where you are",
    },
    {
      text: "<strong>Leadership in the AI Era</strong> - Lead teams, make decisions, stay relevant",
    },
    {
      text: "<strong>Revenue Models for the Next 3 Years</strong> - What's working, what's about to stop, where to bet",
    },
    {
      text: "<strong>Insights from Iconic Founders</strong> - Lessons from people who've built companies you respect",
    },
    {
      text: "<strong>The Power of Community</strong> - 600+ entrepreneurs building together",
    },
  ];

  const For_Whom_Array = [
    "Business Owners building with AI",
    "Digital Entrepreneurs scaling<br className='br-tag' /> to the next level",
    "Founders moving from hustle<br className='br-tag' /> to systems",
    "Coaches & Consultants<br className='br-tag' /> going digital-first",
    "Content Creators building a<br className='br-tag' /> business, not just an audience",
    "Community Members ready<br className='br-tag' /> to level up",
    "Agency Owners integrating AI<br className='br-tag' /> into services",
    "E-Commerce Owners<br className='br-tag' /> optimising with AI",
  ];
  const For_Whom = [...For_Whom_Array, ...For_Whom_Array, ...For_Whom_Array];

  const scrollOrganizer = [
    {
      img: require("../../assets/images/organisers/Organisers_Dharaneetharan.png"),
      img2: require("../../assets/images/organisers/Organisers_Dharaneetharan2.png"),
      name: "G D Dharaneetharan",
      pos: "Founder - Social Eagle & 21DC Community",
      insta: "https://www.instagram.com/dharaneetharan/?hl=en",
      youtube: "https://www.youtube.com/@dharaneetharan",
      facebook: "https://www.facebook.com/dharaneetharangd/",
      linkedin:
        "https://www.linkedin.com/in/dharaneetharan/?originalSubdomain=in",
    },
    {
      img: require("../../assets/images/organisers/Organisers_Vishnu Hari.png"),
      img2: require("../../assets/images/organisers/Organisers_Vishnu Hari2.png"),
      name: "Vishnuhari",
      pos: "Co-Founder - Social Eagle, EX AIRBNB",
      insta: "https://www.instagram.com/imvishnuhari/",
      facebook: "https://www.facebook.com/imvishnuhari?mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/vishnuhari-harikumar/",
    },
    {
      img: require("../../assets/images/organisers/Organisers_SathishS.png"),
      img2: require("../../assets/images/organisers/Organisers_SathishS2.png"),
      name: "Sathish S",
      pos: "Director of Operations, Social eagle",
      insta: "https://www.instagram.com/socialeagleofficial/?hl=en",
      facebook: "https://www.facebook.com/SocialEagleOfficial/",
      linkedin: "https://www.linkedin.com/company/socialeagle/",
    },
    {
      img: require("../../assets/images/organisers/Organisers_Shatheeshram.png"),
      img2: require("../../assets/images/organisers/Organisers_Shatheeshram2.png"),
      name: "Shatheeshram Ganapathy",
      pos: "Director of Sales, Social eagle",
      insta:
        "https://www.instagram.com/shatheeshramganapathy/?igsh=MW5nYzc4Nmh3OXJvdQ%3D%3D#",
      facebook: "https://www.facebook.com/shatheeshram?mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/shatheeshram-ganapathy-a7476473/",
    },
    {
      img: require("../../assets/images/organisers/Organisers_Akshaya.png"),
      img2: require("../../assets/images/organisers/Organisers_Akshaya2.png"),
      name: "Akshaya R",
      pos: "Manager - Systems and Processes, Social Eagle",
      insta: "https://www.instagram.com/akshaya.shatheeshram?igsh=MWg3YXZqcjE4bWlidw%3D%3D&utm_source=qr",
      facebook: "",
      linkedin: "https://www.linkedin.com/in/akshaya-shatheeshram-62a7a338/",
    },
    {
      img: require("../../assets/images/organisers/Organisers_Archana.png"),
      img2: require("../../assets/images/organisers/Organisers_Archana2.png"),
      name: "Archana",
      pos: "Head - New Initiatives, Social Eagle",
      insta: "https://www.instagram.com/edupreneur_archana?igsh=MWRxaHQ4bDVxcmI3bA==",
      facebook: "",
      linkedin: "https://www.linkedin.com/in/archana-053019375/",
    },
  ];
  const [selectedOrgIdx, setSelectedOrgIdx] = useState(0);

  return (
    <div>
      <div className="about-section">
        <div className="about-count-section py-5">
          <div className="container-fluid">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <h4 className="font-bold text-center text-light pt-2 pb-4">
                Tamil Nadu’s Biggest and Most Valuable Digital Summit
              </h4>
            </motion.div>
            <motion.div
              className="row pt-lg-0 pt-md-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <motion.div className="col-lg-2 col-md-4 col-6" variants={fadeUp}>
                <div className="count-home-sec">
                  <h4 className="count-heading">
                    <CountUp start={0} end={3} duration={2} delay={0} />
                  </h4>
                  <p className="mb-0 count-para">Editions</p>
                </div>
              </motion.div>
              <motion.div className="col-lg-2  col-md-4 col-6" variants={fadeUp}>
                <div className="count-home-sec">
                  <h4 className="count-heading">
                    <CountUp start={0} end={55} duration={2} delay={0} />
                    +
                  </h4>
                  <p className="mb-0 count-para">Total Speakers</p>
                </div>
              </motion.div>
              <motion.div className="col-lg-2  col-md-4 col-6" variants={fadeUp}>
                <div className="count-home-sec">
                  <h4 className="count-heading">
                    <CountUp start={0} end={600} duration={2} delay={0} />
                    +
                  </h4>
                  <p className="mb-0 count-para">Total Attendees</p>
                </div>
              </motion.div>
              <motion.div className="col-lg-2  col-md-4 col-6" variants={fadeUp}>
                <div className="count-home-sec">
                  <h4 className="count-heading">
                    <CountUp start={0} end={30} duration={2} delay={0} />
                    +
                  </h4>
                  <p className="mb-0 count-para">Awardees</p>
                </div>
              </motion.div>
              <motion.div className="col-lg-2  col-md-4 col-6" variants={fadeUp}>
                <div className="count-home-sec">
                  <h4 className="count-heading">
                    <CountUp start={0} end={2500} duration={2} delay={0} />
                    +
                  </h4>
                  <p className="mb-0 count-para">Community Wins</p>
                </div>
              </motion.div>
              <motion.div className="col-lg-2  col-md-4 col-6" variants={fadeUp}>
                <div className="count-home-sec">
                  <h4 className="count-heading ">∞</h4>
                  <p className="mb-0 count-para">Value</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="gradient-border"></div>
        <div className="about-content-section ">
          <div className="position-relative mb-5">
            <img className="design-img-pos" src={DesignImg} alt="" />
            <div className="container">
              <motion.div
                className="row"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                <motion.div className="col-lg-5 mb-lg-0 mb-md-0 mb-4" variants={fadeUp}>
                  <div className="px-lg-5 px-md-3 px-0 ">
                    <h2 className="about-small-heading">About</h2>
                    <h1 className="about-big-heading">TNDS 2026</h1>
                  </div>
                </motion.div>
                <motion.div className="col-lg-7 " variants={fadeUp}>
                  <div>
                    <p>
                      Tamil Nadu Digital Summit began as a movement - a gathering
                      of entrepreneurs, business leaders, and digital builders
                      committed to making Tamil Nadu a force in the digital economy.
                    </p>
                    <p>
                      Now in its third edition, TNDS 2026 goes deeper - into
                      visionary thinking and AI-native business building. 600+
                      handpicked entrepreneurs. High-signal speakers. The Eagle
                      Awards. And a community that's been building wins together
                      since 2020.
                    </p>
                    <p>
                      Expect battle-tested frameworks, real AI applications, and
                      conversations that challenge how you think about the next
                      decade of your business.
                    </p>
                    <p>
                      Because the entrepreneurs who'll define Tamil Nadu's next
                      decade are already in this room.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className="container ">
            <motion.div
              className="row"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {absImg.map((item, index) => {
                return (
                  <motion.div
                    className="col-lg-2 col-md-4 col-6 mb-lg-0 mb-md-4 mb-4 "
                    key={index}
                    variants={scaleIn}
                    whileHover={hoverLift}
                  >
                    <div className="position-relative">
                      <img className="ab-imgs" src={item?.img} alt="" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="quote">
        <div className="bg-blue-gradient">
          <div className="container">
            <div className="row justify-content-center">
              <motion.div
                className="col-lg-8 col-md-12"
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                <div className="position-relative">
                  <i class="quote-left fa-solid fa-quote-left"></i>
                  <i class="quote-right fa-solid fa-quote-right"></i>
                  <h5 className="quote-content">
                    Tamil Nadu's biggest and most valuable digital summit,{" "}
                    <br className="br-tag" />
                    built to make Tamil Nadu and its Entrepreneurs{" "}
                    <br className="br-tag" /> AI-ready for the next decade.
                  </h5>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="gradient-border"></div>
      </div>
      <div className="recape-section">
        <div className="container">
          <motion.div
            className="recap-heading-section"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <img
              className="recap-design-img"
              src={require("../../assets/images/recap/recap-design.webp")}
              alt=""
            />
            <h2 className="recap-heading">Recap TNDS 2025</h2>
          </motion.div>
          <motion.div
            className="row mb-70"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div className="col-lg-4 col-md-12" variants={fadeUp}>
              <div className="row g-3">
                <div className="col-lg-7 col-md-7 col-7">
                  <img
                    className="w-100 h-auto mb-3 recap25-photo"
                    src={`${process.env.PUBLIC_URL}/tnds-2025-highlights/TP201732.jpg`}
                    alt="TNDS 2025"
                  />
                  <img
                    className="w-100 h-auto recap25-photo"
                    src={`${process.env.PUBLIC_URL}/tnds-2025-highlights/CP200292.jpg`}
                    alt="TNDS 2025"
                  />
                </div>
                <div className="col-lg-5 col-md-5 col-5 mt-auto">
                  <img
                    className="w-100 h-auto recap25-photo"
                    src={`${process.env.PUBLIC_URL}/tnds-2025-highlights/_CP30362.jpg`}
                    alt="TNDS 2025"
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-12">
                  <img
                    className="w-100 h-auto recap25-photo"
                    src={`${process.env.PUBLIC_URL}/tnds-2025-highlights/TP109047.jpg`}
                    alt="TNDS 2025"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-4 col-md-12 mt-auto" variants={fadeUp}>
              <div className="d-flex">
                <img
                  className="recap-center-img"
                  src={require("../../assets/images/recap/eagle-trophy.png")}
                  alt="Social Eagle Trophy"
                />
              </div>
            </motion.div>
            <motion.div className="col-lg-4 col-md-12" variants={fadeUp}>
              <div className="row g-3">
                <div className="col-lg-5 col-md-5 col-5 mt-auto">
                  <img
                    className="w-100 h-auto recap25-photo"
                    src={`${process.env.PUBLIC_URL}/tnds-2025-highlights/CP205298.JPG`}
                    alt="TNDS 2025"
                  />
                </div>
                <div className="col-lg-7 col-md-7 col-7">
                  <img
                    className="w-100 h-auto mb-3 recap25-photo"
                    src={`${process.env.PUBLIC_URL}/tnds-2025-highlights/CP200744.jpg`}
                    alt="TNDS 2025"
                  />
                  <img
                    className="w-100 h-auto recap25-photo"
                    src={`${process.env.PUBLIC_URL}/tnds-2025-highlights/TP200647.jpg`}
                    alt="TNDS 2025"
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-12">
                  <img
                    className="w-100 h-auto recap25-photo"
                    src={`${process.env.PUBLIC_URL}/tnds-2025-highlights/TP200757.jpg`}
                    alt="TNDS 2025"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="row justify-content-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="col-lg-8">
              <h5 className="highlight-text">Highlights from TNDS 2025</h5>
              <iframe
                style={{ borderRadius: "20px" }}
                width="100%"
                height="460"
                src="https://www.youtube.com/embed/BJykdUpIslc?si=srrld3sAHoEyjhbv"
                title="Highlights from TNDS 2025"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="for-whom-section">
        <div className="container">
          <motion.div
            className="row justify-content-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div className="col-lg-5 pt-5" variants={fadeUp}>
              <div>
                <h2 className="text-the-heading text-dark text-start">For</h2>
                <div className="significance-heading-section ms-0 mb-3">
                  <h2 className="text-significance-heading core-commite-heading text-start">
                    WHOM?
                  </h2>
                </div>
                <div className="mb-4 px-5">
                  <img className="for-whom-design-img" src={DesignImg} alt="" />
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-5" variants={fadeUp}>
              <div className="vertical_marque blur">
                <div class="slider">
                  {For_Whom.map((item, index) => (
                    <div key={index}>
                      <div className="learn-left-content whom-ticket-section pb-4 mb-4">
                        <div className="bg-rounded-learn-num whom-ticket-round">
                          <img
                            className="whom-ticket-img tic-black"
                            src={require("../../assets/images/ticket-black.webp")}
                            alt=""
                          />
                          <img
                            className="whom-ticket-img tic-gold"
                            src={require("../../assets/images/ticket-gold.webp")}
                            alt=""
                          />
                        </div>
                        <h5
                          className="learn-content text-start"
                          dangerouslySetInnerHTML={{ __html: item }}
                        ></h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="gradient-border"></div>
      <div className="significance-section">
        <div className="container">
          <motion.div
            className="mb-70"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h2 className="text-the-heading">The</h2>
            <div className="significance-heading-section ">
              <img
                className="significance-design-img"
                src={require("../../assets/images/recap/recap-design.webp")}
                alt=""
              />
              <h2 className="text-significance-heading">SIGNIFICANCE</h2>
            </div>
          </motion.div>
          <motion.div
            className="row justify-content-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div className="col-lg-3 col-md-4" variants={fadeUp} whileHover={hoverLift}>
              <div className="signi-card">
                <div className="signi-img-sec">
                  <img
                    className="signi-img"
                    src={require("../../assets/images/significance-icon/s1.webp")}
                    alt=""
                  />
                </div>
                <p className="signi-text">Power of Community</p>
              </div>
            </motion.div>
            <motion.div className="col-lg-3 col-md-4" variants={fadeUp} whileHover={hoverLift}>
              <div className="signi-card">
                <div className="signi-img-sec">
                  <img
                    className="signi-img"
                    src={require("../../assets/images/significance-icon/s2.webp")}
                    alt=""
                  />
                </div>
                <p className="signi-text">High Impact Speakers</p>
              </div>
            </motion.div>
            <motion.div className="col-lg-3 col-md-4" variants={fadeUp} whileHover={hoverLift}>
              <div className="signi-card">
                <div className="signi-img-sec">
                  <img
                    className="signi-img"
                    src={require("../../assets/images/significance-icon/s3.webp")}
                    alt=""
                  />
                </div>
                <p className="signi-text">Closer Networking Opportunities</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="row justify-content-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div className="col-lg-3 col-md-6" variants={fadeUp} whileHover={hoverLift}>
              <div className="signi-card">
                <div className="signi-img-sec">
                  <img
                    className="signi-img"
                    src={require("../../assets/images/significance-icon/s4.webp")}
                    alt=""
                  />
                </div>
                <p className="signi-text">Innovation & Trends</p>
              </div>
            </motion.div>
            <motion.div className="col-lg-3 col-md-6" variants={fadeUp} whileHover={hoverLift}>
              <div className="signi-card">
                <div className="signi-img-sec">
                  <img
                    className="signi-img"
                    src={require("../../assets/images/significance-icon/s5.webp")}
                    alt=""
                  />
                </div>
                <p className="signi-text">Impact & Influence</p>
              </div>
            </motion.div>
            <motion.div className="col-lg-3 col-md-6" variants={fadeUp} whileHover={hoverLift}>
              <div className="signi-card">
                <div className="signi-img-sec">
                  <img
                    className="signi-img"
                    src={require("../../assets/images/significance-icon/s6.webp")}
                    alt=""
                  />
                </div>
                <p className="signi-text">Inspiration that Lasts Long</p>
              </div>
            </motion.div>
            <motion.div className="col-lg-3 col-md-6" variants={fadeUp} whileHover={hoverLift}>
              <div className="signi-card">
                <div className="signi-img-sec">
                  <img
                    className="signi-img"
                    src={require("../../assets/images/significance-icon/s7.webp")}
                    alt=""
                  />
                </div>
                <p className="signi-text">Interaction with the "Who is Who"</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="row justify-content-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div className="col-lg-3 col-md-4" variants={fadeUp} whileHover={hoverLift}>
              <div className="signi-card">
                <div className="signi-img-sec">
                  <img
                    className="signi-img"
                    src={require("../../assets/images/significance-icon/s8.webp")}
                    alt=""
                  />
                </div>
                <p className="signi-text">High Energy & Optimism</p>
              </div>
            </motion.div>
            <motion.div className="col-lg-3 col-md-4" variants={fadeUp} whileHover={hoverLift}>
              <div className="signi-card">
                <div className="signi-img-sec">
                  <img
                    className="signi-img"
                    src={require("../../assets/images/significance-icon/s9.webp")}
                    alt=""
                  />
                </div>
                <p className="signi-text">The Powerful "Eagle Awards"</p>
              </div>
            </motion.div>
            <motion.div className="col-lg-3 col-md-4" variants={fadeUp} whileHover={hoverLift}>
              <div className="signi-card">
                <div className="signi-img-sec">
                  <img
                    className="signi-img"
                    src={require("../../assets/images/significance-icon/s10.webp")}
                    alt=""
                  />
                </div>
                <p className="signi-text">Actionable Frameworks to Implement</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="event-organizer">
        <div className="bg-blue-gradient pt-lg-5 pb-lg-3 py-md-5 py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-md-8  my-auto">
                <motion.div
                  className="significance-heading-section  pb-4 text-start ms-0 me-auto"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                >
                  <img
                    className="significance-design-img"
                    src={require("../../assets/images/recap/recap-design.webp")}
                    alt=""
                  />
                  <h2 className="get-ready-df-text">
                    ORGANI<span className="bottom-border-gradient">SERS</span>
                  </h2>
                </motion.div>
                <motion.div
                  className="row justify-content-center"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                >
                  {scrollOrganizer.map((item, index) => {
                    const isActive = selectedOrgIdx === index;
                    return (
                      <motion.div
                        variants={fadeUp}
                        onClick={() => setSelectedOrgIdx(index)}
                        className={`event-organizer-card-2 mb-4 col col-md-4 col-6 text-center`}
                        style={{ opacity: isActive ? 1 : 0.5 }}
                        key={index}
                        onMouseEnter={() => setSelectedOrgIdx(index)}
                      >
                        <img
                          className={`org-thumb-photo${isActive ? " is-active" : ""}`}
                          src={item?.img2}
                          alt={item?.name}
                        />
                        <div>
                          <h6 className="core-card-text mb-1">{item?.name}</h6>
                          <p
                            className="core-card-subtext h-auto  text-small"
                            dangerouslySetInnerHTML={{ __html: item?.pos }}
                          ></p>
                          <div className="org-social d-flex justify-content-center gap-2 mt-2">
                            {item?.insta && (
                              <a href={item.insta} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                <i className="fa-brands fa-instagram"></i>
                              </a>
                            )}
                            {item?.facebook && (
                              <a href={item.facebook} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                <i className="fa-brands fa-facebook"></i>
                              </a>
                            )}
                            {item?.linkedin && (
                              <a href={item.linkedin} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                <i className="fa-brands fa-linkedin-in"></i>
                              </a>
                            )}
                            {item?.youtube && (
                              <a href={item.youtube} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                <i className="fa-brands fa-youtube"></i>
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
              <motion.div
                className="col-lg-3 col-md-4 my-auto"
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                <div className="owlcard-organizer">
                  <img
                    className="organizer-side-img"
                    src={scrollOrganizer[selectedOrgIdx]?.img}
                    alt={scrollOrganizer[selectedOrgIdx]?.name}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="gradient-border"></div>
      </div>
      <div className="core-committee-section">
        <div className="container">
          <motion.div
            className="mb-70"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h2 className="text-the-heading text-dark">Core</h2>
            <div className="significance-heading-section ">
              <img
                className="significance-design-img"
                src={require("../../assets/images/recap/recap-design.webp")}
                alt=""
              />
              <h2 className="text-significance-heading core-commite-heading">
                COMMITTEE
              </h2>
            </div>
          </motion.div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <motion.div
                className="row  justify-content-center"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                {coreCommittee.map((item, index) => {
                  return (
                    <motion.div
                      className="col-lg-4 col-md-5"
                      key={index + 1}
                      variants={fadeUp}
                      whileHover={hoverLift}
                    >
                      <div className="core-com-card">
                        <div>
                          <img
                            className="w-100 h-auto img-top-team"
                            src={item?.img}
                            alt=""
                          />
                        </div>
                        <div className="core-com-inner-card">
                          <h6 className="core-card-text">{item?.name}</h6>
                          <div className="core-card-subtext-head">
                            <p className="core-card-subtext">{item?.pos}</p>
                          </div>
                          <div className="core-com-sm-card">
                            <div className="core-com-sm">
                              {item?.insta?.length > 0 && (
                                <a
                                  className="core-comi-redirect"
                                  href={item?.insta}
                                  target="_blank" rel="noreferrer"
                                >
                                  <i class="fa-brands fa-instagram"></i>
                                </a>
                              )}
                              {item?.facebook?.length > 0 && (
                                <a
                                  className="core-comi-redirect"
                                  href={item?.facebook}
                                  target="_blank" rel="noreferrer"
                                >
                                  <i class="fa-brands fa-facebook"></i>
                                </a>
                              )}
                              {item?.linkedin?.length > 0 && (
                                <a
                                  className="core-comi-redirect"
                                  href={item?.linkedin}
                                  target="_blank" rel="noreferrer"
                                >
                                  <i class="fa-brands fa-linkedin-in"></i>
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
      </div>
      <div className="Speakers-lineup scroll-top-margin" id="Speakers">
        <div className="bg-blue-gradient">
          <div className="container">
            <motion.div
              className="row justify-content-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <motion.div className="col-lg-4 my-auto" variants={fadeUp}>
                <div className="significance-heading-section text-start ms-0 me-auto">
                  <img
                    className="significance-design-img"
                    src={require("../../assets/images/recap/recap-design.webp")}
                    alt=""
                  />
                  <h2 className="get-ready-df-text">
                    SPEA<span className="bottom-border-gradient">KERS</span>
                  </h2>
                </div>
                <h2 className="get-ready-df-text font-regular">Line-Up </h2>
              </motion.div>
              <motion.div className="col-lg-8 my-auto" variants={fadeUp}>
                <div>
                  <h5 className="learn-content text-light mb-3">
                    Operators. Builders. Founders who've done the work.
                  </h5>
                  <h5 className="learn-content text-light">
                    Each speaker is handpicked for their ability to deliver
                    high-signal insights, no fluff, no filler.
                  </h5>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="gradient-border"></div>
        <div>
          <SpeakersLineup />
        </div>
      </div>
      <div className="what-you-learn">
        <div className="container">
          <motion.div
            className="position-relative "
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h2 className="text-the-heading text-dark">What You’ll</h2>
            <div className="mb-4">
              <img className="design-what-you-learn" src={DesignImg} alt="" />
              <h2 className="text-significance-heading core-commite-heading">
                LEARN
              </h2>
            </div>
          </motion.div>
          <motion.div
            className="learn-round-heading mb-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h5 className="learn-content">
              Practical Insights. Actionable Frameworks
            </h5>
          </motion.div>
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12">
              <motion.div
                className="row justify-content-between"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                {learnData.map((item, index) => {
                  return (
                    <motion.div
                      className="col-lg-5 col-md-6"
                      key={index}
                      variants={fadeUp}
                    >
                      <div className="learn-left-content">
                        <div className="bg-rounded-learn-num">
                          <h1 className="rounded-learn-num">{index + 1}</h1>
                        </div>
                        <h5
                          className="learn-content"
                          dangerouslySetInnerHTML={{ __html: item.text }}
                        ></h5>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="hilton">
        <div className="bg-blue-gradient">
          <div className="container">
            <motion.div
              className="row justify-content-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <motion.div className="col-lg-7 col-md-7 my-auto" variants={fadeUp}>
                <h2 className="get-ready-df-text">Get Ready for </h2>
                <div className="significance-heading-section text-start ms-0 me-auto">
                  <img
                    className="significance-design-img"
                    src={require("../../assets/images/recap/recap-design.webp")}
                    alt=""
                  />
                  <h2 className="get-ready-df-text">
                    the AI{" "}
                    <span className="bottom-border-gradient">Future</span>
                  </h2>
                </div>
              </motion.div>
              <motion.div className="col-lg-4 col-md-5 my-auto" variants={fadeUp}>
                <div>
                  <motion.button
                    onClick={() => navigate("/Ticket")}
                    className="btn banner-btn big-btn "
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
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="gradient-border"></div>
        <div className="hilton-section">
          <div className="container">
            <div className="hilton-bg">
              <motion.div
                className="row justify-content-end"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                <motion.div className="col-lg-5" variants={fadeUp}>
                  <div className="">
                    <div className="loc-hilton mb-3">
                      <img
                        className="blue-location"
                        src={require("../../assets/images/blue-location.webp")}
                      />
                      <h5 className="hilton-loc-text">
                        Hilton, Chennai | May 23 & 24, 2026
                      </h5>
                    </div>
                    <img
                      className="w-100 h-auto mb-lg-0 mb-md-5 mb-5"
                      src={require("../../assets/images/hilton.webp")}
                    />
                  </div>
                </motion.div>
                <div className="col-lg-1"></div>
                <motion.div className="col-lg-5 my-auto" variants={fadeUp}>
                  <div>
                    <h2 className="text-the-heading text-dark text-start">
                      Why in
                    </h2>
                    <div className="significance-heading-section ms-0 mb-3">
                      <img
                        className="significance-design-img"
                        src={require("../../assets/images/recap/recap-design.webp")}
                        alt=""
                      />
                      <h2 className="text-significance-heading core-commite-heading text-start">
                        Chennai?
                      </h2>
                    </div>
                    <div className="bg-hub-text mb-4">
                      <h5 className="hilton-loc-text">
                        A Rising Hub for Digital Innovation
                      </h5>
                    </div>
                    <p className="hilton-para">
                      Chennai is fast becoming a strategic player in the global
                      tech <br className="br-tag" /> landscape, rich in talent,
                      innovation, and ambition.
                    </p>
                    <p className="hilton-para">
                      Set in the 5-star Hilton, this summit combines world-class
                      <br className="br-tag" />
                      facilities with the energy of one of India’s
                      fastest-growing
                      <br className="br-tag" /> digital ecosystems.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
