import React, { useEffect, useState } from "react";
import Logo from "../assets/images/tnds-2026-logo.png"
import TicketWhite from '../assets/images/ticket-white.webp';
import TicketBlack from '../assets/images/ticket-black.webp';
import { NavLink, useNavigate } from "react-router-dom";
import { scrollToSection } from "../common/utills";
const Navbar = () => {
    const navigate = useNavigate();

    const [navSize, setnavSize] = useState("5rem");
    const [navColor, setnavColor] = useState("transparent");
    const [navBorder, setnavBorder] = useState("transparent");
    const listenScrollEvent = () => {
      window.scrollY > 10 ? setnavColor("rgb(7 29 167 / 44%)") : setnavColor("transparent");
      window.scrollY > 10 ? setnavBorder("#c7c7c7b8") : setnavColor("transparent");
      window.scrollY > 10 ? setnavSize("4rem") : setnavSize("5rem");
    };
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);

  return (
    <div>
      <nav style={{
          backgroundColor: navColor,
          transition: "all 1s",
          backdropFilter:navColor === "transparent" ? "blur(0px)" : "blur(5px)",
        }} className="navbar navbar-expand-lg navbar-dark">
        <div style={{borderBottom: navBorder === "transparent" ? `1px solid #c7c7c7b8` : " 1px solid transparent"}} className="container nav-container">
          <a className="navbar-brand" href="#">
            <img className="header-logo" src={Logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link "  to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link "  to="/Agenda">
                  Agenda
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#/#Speakers"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                    setTimeout(() => scrollToSection("Speakers"), 100);
                  }}
                >
                  Speakers
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link "  to="/Awards">
                  Awards
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link "  to="/PartnerWithUs">
                  Partner With Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link "  to="/TNDS2024Highlights">
                TNDS 2024 Highlights
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link " target="_blank"  href="https://tndigitalsummit.com/2024">
                  TNDS 2024
                </a>
              </li> */}
            </ul>
            <div className="nav-btn-container">
              <button  onClick={()=>navigate('/Ticket')} className="btn nav-btn" >
                    <div className="figure">
                        <img className="ticket-black" src={TicketWhite} alt="" />
                        <img className="ticket-white" src={TicketBlack} alt="" />
                    </div>
                    <span>Buy Tickets</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
