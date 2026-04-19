import React from "react";
import { motion } from "framer-motion";
import Location from "../assets/images/blue-location.webp";
import { panel1, panel2 } from "./Agenda";
import { fadeUp, viewportOnce } from "../common/motionVariants";
const AgendaContent = () => {
  return (
    <div className="margin-top-part">
      <div className="agenda-page ">
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="significance-heading-section mb-4 ">
              <img
                className="significance-design-img"
                src={require("../assets/images/recap/recap-design.webp")}
                alt=""
              />
              <h2 className="text-significance-heading core-commite-heading">
                AGENDA
              </h2>
            </div>
            <div className="">
              <p className="banner-rounded-content text-dark border-dark mb-5">
                <img className="location-img" src={Location} alt=""></img>
                <span>Hilton, Chennai | May 23 & 24, 2026</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="agenda-table-bg">
        <div className="container mb-5 pb-5">
          <motion.h2
            className="font-semibold text-center text-dark mb-70"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            Day 1 -{" "}
            <span className="bottom-border-gradient text-center font-semibold text-dark">
              May 23, 2026
            </span> {" "}- (Saturday)
          </motion.h2>
          <motion.div
            className="row justify-content-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="col-lg-12 agenda-table-overflow ">
              <table className="w-100 agenda-table">
                <tr className="agenda-first-row">
                  <td className="rounded-border-heading w-time ">
                    <p className="table-heading">Time</p>
                  </td>
                  <td className="rounded-border-heading w-topic">
                    <p className="table-heading">Topic</p>
                  </td>
                  <td className="rounded-border-heading w-speaker">
                    <p className="table-heading">Speaker / Panel Discussion</p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-yellow w-time ">
                    <p className="table-yellow-content">07:30 AM - 09:00 AM</p>
                  </td>
                  <td className="rounded-border-yellow w-speaker" colSpan={2}>
                    <p className="table-yellow-content">Registration</p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">09:00 AM - 09:20 AM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content text-start">
                      Grand Inauguration and Initiation
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content text-start pt-3">
                      <span className="font-bold ">Dharaneetharan G D</span>
                      <br />
                      Founder & CEO, Social Eagle <br /> Founder, 21DC Community
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">09:20 AM - 10:05 AM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content text-start">
                      Opening Keynote - Future of Business & <br /> Impact of AI
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content text-start pt-3">
                      <span className="font-bold ">C Sivasankaran</span>
                      <br />
                      Founder, Aircel & Mentor, AIWO
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content pt-3 ">
                      10:05 AM - 10:50 AM
                    </p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content pt-3  text-start">
                      Win Fast, Retire Young
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content  text-start pt-3">
                      <span className="font-bold ">Himanshu Agrawal </span>
                      <br />
                      Founder, Origin8 & Former CEO, Internet Coaching Empire
                    </p>
                  </td>
                </tr>

                <tr>
                  <td className="rounded-border-yellow w-time ">
                    <p className="table-yellow-content">10:50 AM - 11:10 AM</p>
                  </td>
                  <td className="rounded-border-yellow w-speaker" colSpan={2}>
                    <p className="table-yellow-content">BREAK</p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">11:10 AM - 11:40 AM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content text-start">
                      The Magic of Thinking Big
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content text-start">
                      <span className="font-bold">CK Kumaravel </span>
                      <br />
                      Co-Founder, Naturals
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">11:40 AM - 12:25 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content  text-start">
                      <span className="font-bold">Panel Discussion</span>
                      <br />
                      Agni Siragugal - The Indomitable Spirit of Our Women
                      <br />
                      <br />
                      <span className="">
                        Moderated By{" "}
                        <span className="font-bold">Vishnu Hari</span>
                        <br /> Co-Founder, Social Eagle
                      </span>
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    {panel1.map((a) => (
                      <p className="table-para-content text-start">
                        <span className="font-bold">{a.name}</span>
                        {a.role.map((b) => (
                          <>
                            <br /> {b}
                          </>
                        ))}

                      </p>
                    ))}

                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">12:25 PM - 01:05 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content  text-start">
                      AI Agents - The Future of AI
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content text-start">
                      <span className="font-bold">Dr. Deepak Renganathan</span>
                      <br /> Global AI & Marketing Thought Leader
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-yellow w-time ">
                    <p className="table-yellow-content">01:05 PM - 02:00 PM</p>
                  </td>
                  <td className="rounded-border-yellow w-speaker" colSpan={2}>
                    <p className="table-yellow-content">LUNCH</p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">02:00 PM - 02:45 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content  text-start">
                      Mindset for the Future
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content  text-start">
                      <span className="font-bold ">Dr. Kannan Gireesh</span>
                      <br />
                      Founder & CEO, Live Life Education Pvt. Ltd.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">02:45 PM - 03:30 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content text-start">
                      <span className="font-bold ">Panel Discussion</span>{" "}
                      <br />
                      The Eagle Attitude - Defying the Odds
                      <br />
                      <br />

                      Moderated By{" "}
                      <span className="font-bold">Vishnu Hari</span>
                      <br /> Co-Founder, Social Eagle
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    {panel2.map((a) => (
                      <p className="table-para-content text-start">
                        <span className="font-bold">{a.name}</span>
                        {a.role.map((b) => (
                          <>
                            <br /> {b}
                          </>
                        ))}

                      </p>
                    ))}
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-yellow w-time ">
                    <p className="table-yellow-content">03:30 PM - 03:50 PM</p>
                  </td>
                  <td className="rounded-border-yellow w-speaker" colSpan={2}>
                    <p className="table-yellow-content">BREAK</p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">03:50 PM - 04:20 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content text-start">
                      Personal Growth Through Life Long Learning
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content text-start">
                      <span className="font-bold  text-start">
                        Surendran Jayasekar
                      </span>
                      <br />
                      Founder, Success Gyan
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">04:20 PM - 04:45 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content text-start">
                      Entrepreneurship 4.0{" "}
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content text-start">
                      <span className="font-bold  text-start">
                        Latha Pandiarajan
                      </span>{" "}
                      <br />
                      Co-Founder & Director, Ma Foi-CIEL Group
                    </p>
                  </td>
                </tr>

                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">04:45 PM - 05:30 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content text-start">
                      How to Turn Your Business into a Movement
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content text-start">
                      <span className="font-bold  text-start">
                        Siddharth Rajsekar
                      </span>
                      <br />
                      Founder, Internet Lifestyle Hub
                      <br /> India's Digital Reformer & Mentor
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-yellow w-time ">
                    <p className="table-yellow-content">05:30 PM - 06:15 PM</p>
                  </td>
                  <td className="rounded-border-yellow w-speaker" colSpan={2}>
                    <p className="table-yellow-content">NETWORKING BREAK</p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time bg-transf-blue">
                    <p className="table-para-content font-bold text-dark">
                      06:15 PM - 09:15 PM
                    </p>
                  </td>
                  <td
                    className="rounded-border-content w-speaker bg-transf-blue"
                    colSpan={2}
                  >
                    <p className="table-para-content text-dark font-bold">
                      AWARDS
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-yellow w-time ">
                    <p className="table-yellow-content">09:15 PM Onwards</p>
                  </td>
                  <td className="rounded-border-yellow w-speaker" colSpan={2}>
                    <p className="table-yellow-content">NETWORKING DINNER</p>
                  </td>
                </tr>
              </table>
            </div>
          </motion.div>
        </div>
        <div className="container mb-70 pb-4">
          <motion.h2
            className="font-semibold text-center text-dark mb-70"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            Day 2 -{" "}
            <span className="bottom-border-gradient text-center font-semibold text-dark">
              May 24, 2026
            </span>{" "}- (Sunday)
          </motion.h2>
          <motion.div
            className="row justify-content-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="col-lg-12 agenda-table-overflow ">
              <table className="w-100 agenda-table">
                <tr className="agenda-first-row">
                  <td className="rounded-border-heading w-time ">
                    <p className="table-heading">Time</p>
                  </td>
                  <td className="rounded-border-heading w-topic">
                    <p className="table-heading">Topic</p>
                  </td>
                  <td className="rounded-border-heading w-speaker">
                    <p className="table-heading">Speaker / Panel Discussion</p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">09:30 AM - 10:00 AM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content text-start">
                      Key Note - From Madurai to the Metros: <br /> Scaling with
                      Soul
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content text-start pt-3">
                      <span className="font-bold ">Mr. Ba. Ramesh</span>
                      <br />
                      Joint Managing Director - Thangamayil Jewellery
                    </p>
                  </td>
                </tr>

                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">10:00 AM - 10:30 AM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content text-start">
                      How to grow a D2C Brand
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content text-start pt-3">
                      <span className="font-bold "> Vishnu Hari </span> <br />
                      Co-Founder, Social Eagle
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content pt-3 ">
                      10:30 AM - 11:05 AM
                    </p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content pt-3  text-start">
                      <span className="font-bold ">Panel Discussion</span>
                      <br /> The OG Panel <br />
                      <br /> Moderated By{" "}
                      <span className="font-bold ">
                        Suresh Radhakrishnan
                      </span>{" "}
                      <br />
                      Founder & CEO, Mypreneur
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content text-start pt-3">
                      <span className="font-bold ">
                        Deepak Kanakaraju AKA Digital Deepak
                      </span>
                      <br />
                      Founder & CEO, Microstartup.com
                    </p>
                    <p className="table-para-content  text-start pt-3">
                      <span className="font-bold ">Gopal Krishnan</span> <br />
                      Creator, Binge Marketing
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-yellow w-time ">
                    <p className="table-yellow-content">11:05 AM - 11:20 AM</p>
                  </td>
                  <td className="rounded-border-yellow w-speaker" colSpan={2}>
                    <p className="table-yellow-content">BREAK</p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">11:20 AM - 11:45 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content text-start">
                      Bulletproof Mindset for New-Age Entrepreneurs
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content text-start">
                      <span className="font-bold  text-start">
                        Dharaneetharan G D
                      </span>
                      <br />
                      Founder & CEO, Social Eagle
                      <br /> Founder, 21DC Community
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">11:45 PM - 12:15 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content  text-start">
                      Build Your Best Funnel using AI
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content text-start">
                      <span className="font-bold  text-start">
                        Saurabh Bhatnagar & Karthik Ramani
                      </span>
                      <br />
                      Co-Founders, FlexiFunnels
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">12:15 PM - 12:45 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content  text-start">
                      <span className="font-bold  text-start">
                        {" "}
                        Panel Discussion{" "}
                      </span>
                      <br /> Demystifying Content Strategy for Businesses <br />{" "}
                      <br /> Moderated By{" "}
                      <span className="font-bold  text-start">
                        {" "}
                        Arun Kumar M G{" "}
                      </span>{" "}
                      <br /> Founder, CR8IVE.IN
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content text-start">
                      <span className="font-bold  text-start">
                        Kennet Alphy
                      </span>
                      <br />
                      Co-Founder, The Goat Media
                    </p>
                    <p className="table-para-content text-start">
                      <span className="font-bold  text-start">Epaphra</span>
                      <br />
                      Founder & CEO, Townscholar
                    </p>
                    <p className="table-para-content  text-start">
                      <span className="font-bold  text-start">Premkumar C</span>
                      <br />
                      Founder, Middle Class Editing
                    </p>
                    <p className="table-para-content  text-start">
                      <span className="font-bold  text-start">Ashwinnath R</span>
                      <br />
                      Founder & CEO, Ashtag Inc.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">12:45 PM - 01:30 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content  text-start">Grow or Go</p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content text-start">
                      <span className="font-bold  text-start">
                        Dr. A. Velumani, PhD{" "}
                      </span>{" "}
                      <br /> Creator, Thyrocare
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-yellow w-time ">
                    <p className="table-yellow-content">01:30 PM - 02:25 PM</p>
                  </td>
                  <td className="rounded-border-yellow w-speaker" colSpan={2}>
                    <p className="table-yellow-content">LUNCH</p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">02:25 PM - 02:55 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content  text-start">
                      Ilakudan Kalakku - இலக்குடன் கலக்கு
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content  text-start">
                      <span className="font-bold  text-start">
                        Surekaa Sundar
                      </span>{" "}
                      <br />
                      CEO, Talent Factory
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">02:55 PM - 03:10 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content text-start">
                      How to Build a 1 Crore Profit Generating Recurring
                      Revenue SaaS Agency
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content text-start">
                      <span className="font-bold  text-start">
                        Karthik Naidu
                      </span>
                      <br /> Founder & CEO, StartYourSaaS.io
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">03:10 PM - 03:35 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content text-start">
                      Ask us Anything - Moderated by Sai Krishna G R
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content border-bottom text-start">
                      <span className="font-bold  text-start">
                        Dharaneetharan G D
                      </span>
                      <br /> Founder & CEO, Social Eagle <br /> Founder, 21DC
                      Community
                    </p>
                    <p className="table-para-content text-start">
                      <span className="font-bold  text-start">
                        Sudharsanan Ganapathy
                      </span>
                      <br /> Founder, The Social Company & SGI
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-yellow w-time ">
                    <p className="table-yellow-content">03:35 PM - 03:50 PM</p>
                  </td>
                  <td className="rounded-border-yellow w-speaker" colSpan={2}>
                    <p className="table-yellow-content">BREAK</p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">03:50 PM - 04:15 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content text-start">
                      Business Levers for Success
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content text-start">
                      <span className="font-bold  text-start">
                        Akhila Rajeshwar
                      </span>
                      <br />
                      Executive Director, TiE Chennai
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">04:15 PM - 04:45 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content text-start">
                      Surprise Session
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content text-start">
                      <span className="font-bold  text-start"></span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">04:45 PM - 05:05 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content text-start">
                      Success Principles
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content  text-start">
                      <span className="font-bold  text-start">
                        Arun Titan
                      </span>
                      <br /> Founder & CEO of SILAII
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-border-content w-time ">
                    <p className="table-para-content ">05:05 PM - 05:35 PM</p>
                  </td>
                  <td className="rounded-border-content  w-topic">
                    <p className="table-para-content text-start">
                      Valedictory Session
                    </p>
                  </td>
                  <td className="rounded-border-content w-speaker">
                    <p className="table-para-content  text-start">
                      <span className="font-bold  text-start">
                        Dharaneetharan G D
                      </span>
                      <br /> Founder & CEO, Social Eagle <br /> Founder, 21DC
                      Community
                    </p>
                  </td>
                </tr>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AgendaContent;
