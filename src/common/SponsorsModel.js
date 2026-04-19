import React, { useState } from "react";
import CustomModal from "./CustomModal";
import thanksimg from"../assets/images/thanks/thanks1.webp"
import thanksweb from"../assets/images/thanks/thanksweb.webp"
import TicketWhite from "../assets/images/ticket-white.webp";
import TicketBlack from "../assets/images/ticket-black.webp";

import { useNavigate } from "react-router-dom";

const SponsorsModal = ({ open, setOpen }) => {
    const [buyTicketModal, setBuyTicketModal] = useState(false);
 
    const navigation = useNavigate();

    return (
        <div>
            <CustomModal
                open={open}
                onClickOutside={() => {
                    setOpen(false);
                }}
            >
                <div className="modal-content sponsors-modal-content">
                    <div className="close-btn">
                        <i
                            className="fa-regular fa-circle-xmark"
                            onClick={() => setOpen(false)}
                        ></i>
                    </div>

                    <div className="sponsors-logo">
                        <div className="container">
                            <div className="text-center">
                                <h1 className="sponsors-text font-bold fs-2 mt-3 ">Thanks to our Sponsors.</h1>
                                <div className="sponsors-text mb-4">
                                Your support played a vital role in delivering value.
                                </div>
                            </div>
                            <div className="row justify-content-center">
                           
  
  <div>
  
<img src={thanksweb} alt="img1" className="logoclass d-lg-block d-none"/>
<img src={thanksimg} alt="img" className="w-100  d-lg-none d-block"/>
  </div>


                                <div className="col-lg-12 ">
                                    <div className="text-center mb-2 mt-2">
                                    <a
  href="https://docs.google.com/forms/d/e/1FAIpQLScXeUmuNkB06poR1MBzu4cYA5RK11QVSCiBp8CKCABtq3OyIA/viewform?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <button  className="btn banner-btn">
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
                      <span> Waiting list for TNDS 2026</span>
                    </button>
</a>

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

export default SponsorsModal;