import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../common/motionVariants";

const day1 = {
  date: "23 May 2026",
  weekday: "Saturday",
  venue: "Hilton, Chennai",
  sessions: [
    {
      time: "09:00 AM - 09:05 AM",
      title: "Inauguration",
      speakers: [{ name: "Hema Rakesh", role: "Master of Ceremony" }],
    },
    {
      time: "09:05 AM - 09:30 AM",
      title: "Welcome Note",
      speakers: [{ name: "Dharaneetharan G D", role: "Founder & CEO, Social Eagle" }],
    },
    {
      time: "09:30 AM - 10:15 AM",
      title: "Fireside Chat with Dr. AVM",
      speakers: [{ name: "Dr. A. Velumani, PhD.", role: "Creator, Thyrocare" }],
    },
    {
      time: "10:15 AM - 10:40 AM",
      title: "The Power of Consistency in Content Creation",
      speakers: [{ name: "Sudharsanan Ganapathy", role: "Founder, SGI Collective" }],
    },
    {
      time: "11:10 AM - 11:55 AM",
      title: "Andromeda Update in Meta & its Impact on Businesses",
      speakers: [{ name: "Vishnu Hari", role: "Co-Founder, Social Eagle" }],
    },
    {
      time: "11:55 AM - 12:35 PM",
      title: "Build Local, Scale National - Scaling D2C Brands Pan India",
      speakers: [{ name: "Devanand Balasubramanian", role: "Business Strategist, Navyug Global Ventures" }],
    },
    {
      time: "01:30 PM - 02:00 PM",
      title: "Visionary Thinking Framework",
      speakers: [{ name: "Dharaneetharan G D", role: "Founder & CEO, Social Eagle" }],
    },
    {
      time: "02:00 PM - 02:10 PM",
      title: "Power Tools, Power Moves",
      speakers: [{ name: "Uma Jagadeesan", role: "Founder, Vikas Tools" }],
    },
    {
      time: "02:10 PM - 02:20 PM",
      title: "Building a Brand from the Margins",
      speakers: [{ name: "Sathiyabama", role: "Founder, N Square Herbals" }],
    },
    {
      time: "02:20 PM - 02:50 PM",
      title: "The Growth Story of Cookd",
      speakers: [{ name: "Aathitiyan V S", role: "Founder & CEO, Cookd" }],
    },
    {
      time: "03:20 PM - 03:55 PM",
      title: "Women of Grit",
      moderator: "Hema Rakesh",
      speakers: [
        { name: "Arthi Raguram", role: "Founder & CEO, Deyga Organics" },
        { name: "Niveda Ravikumar", role: "Co-Founder & CEO, Bliss Natural" },
        { name: "Preethi Shashikumar", role: "Founder, Preethiwear" },
      ],
    },
    {
      time: "03:55 PM - 04:25 PM",
      title: "AI in God Mode (AI Agents for Funnels, Course Creation and Performance Marketing)",
      speakers: [{ name: "Karthik Ramani", role: "Co-Founder & CTO, FlexiFunnels" }],
    },
    {
      time: "04:25 PM - 05:10 PM",
      title: "Creating an AI Employee",
      speakers: [{ name: "Manojkumar Vasudevan", role: "Director, Social Eagle" }],
    },
    {
      time: "06:00 PM Onwards",
      title: "Awards & Recognition",
      speakers: [],
    },
    {
      time: "08:30 PM Onwards",
      title: "Dinner",
      speakers: [],
    },
  ],
};

const day2 = {
  date: "24 May 2026",
  weekday: "Sunday",
  venue: "Hilton, Chennai",
  sessions: [
    {
      time: "09:00 AM - 09:45 AM",
      title: "Special Address",
      speakers: [{ name: "Erode Mahesh", role: "Anchor, Educator & Motivational Speaker" }],
    },
    {
      time: "09:45 AM - 10:10 AM",
      title: "The Entrepreneur's Perseverance",
      speakers: [{ name: "Khanthini Vijayakumar", role: "Co-Founder, The Old Mirchi Biryani" }],
    },
    {
      time: "10:10 AM - 10:50 AM",
      title: "The Happy Entrepreneur",
      speakers: [{ name: "S. Selvakumar", role: "Founder & Chairman, Anandham Youth Foundation" }],
    },
    {
      time: "11:20 AM - 11:45 AM",
      title: "Creating 'The Sales System' for the AI Era",
      speakers: [{ name: "Antony Willbert", role: "Chief Conversion Strategist, Social Eagle" }],
    },
    {
      time: "11:45 AM - 12:15 PM",
      title: "5-Step Process to Start an E-Commerce Business in 2026",
      speakers: [{ name: "Nivetha Muralidharan", role: "Founder, Newgenmax" }],
    },
    {
      time: "12:15 PM - 01:00 PM",
      title: "The Power Panel",
      moderator: "Dharaneetharan G D",
      speakers: [
        { name: "CK Ranganathan", role: "Chairman and Managing Director, CavinKare" },
        { name: "CK Kumaravel", role: "Co-Founder, Naturals" },
      ],
    },
    {
      time: "02:00 PM - 03:00 PM",
      title: "4DX - The Four Disciplines of Execution",
      speakers: [{ name: "Dr. Kannan Gireesh", role: "Founder & CEO, Live Life Education Pvt. Ltd." }],
    },
    {
      time: "03:00 PM - 03:30 PM",
      title: "Crafting SILAII",
      speakers: [{ name: "Arun Titan", role: "Founder & CEO, SILAII" }],
    },
    {
      time: "04:00 PM - 04:35 PM",
      title: "When the Going Gets Tough, the Tough Get Going",
      speakers: [{ name: "Vijay Kapoor", role: "Founder & MD, Derby Jeans Community" }],
    },
    {
      time: "04:35 PM - 05:05 PM",
      title: "A2B Wins and Challenges",
      speakers: [{ name: "KT Srinivasa Raja", role: "Managing Director, Adyar Ananda Bhavan" }],
    },
    {
      time: "05:05 PM - 05:35 PM",
      title: "Your Next One Year",
      speakers: [{ name: "Dharaneetharan G D", role: "Founder & CEO, Social Eagle" }],
    },
    {
      time: "05:35 PM - 06:00 PM",
      title: "Closing Note",
      speakers: [{ name: "Dharaneetharan G D", role: "Founder & CEO, Social Eagle" }],
    },
  ],
};

const DayCard = ({ day }) => (
  <motion.div
    className="agenda-day-card"
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={viewportOnce}
  >
    <div className="agenda-day-badges">
      <span className="agenda-pill agenda-pill--header">
        <span className="agenda-pill-icon">
          <i className="fa-solid fa-calendar-days"></i>
        </span>
        {day.date} | {day.weekday}
      </span>
      <span className="agenda-pill agenda-pill--header">
        <span className="agenda-pill-icon">
          <i className="fa-solid fa-location-dot"></i>
        </span>
        {day.venue}
      </span>
    </div>
    <motion.div
      className="agenda-rows"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {day.sessions.map((s, si) => (
        <motion.div className="agenda-row" key={si} variants={fadeUp}>
          <div className="agenda-pill agenda-pill--time">{s.time}</div>
          <div className="agenda-pill agenda-pill--session">
            <h5 className="agenda-session-title">{s.title}</h5>
            {s.moderator && (
              <p className="agenda-moderator">
                <em>Moderated by</em> <strong>{s.moderator}</strong>
              </p>
            )}
            {s.speakers.map((p, pi) => (
              <p className="agenda-speaker" key={pi}>
                <strong>{p.name}</strong>
                {p.role && <span> - {p.role}</span>}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

const AgendaContent = () => {
  return (
    <div className="margin-top-part">
      <section className="agenda-redesign py-5">
        <div className="container">
          <motion.div
            className="significance-heading-section mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <img
              className="significance-design-img"
              src={require("../assets/images/recap/recap-design.webp")}
              alt=""
            />
            <h2 className="text-significance-heading core-commite-heading">AGENDA</h2>
          </motion.div>
          <DayCard day={day1} />
          <DayCard day={day2} />
        </div>
      </section>
    </div>
  );
};

export default AgendaContent;
