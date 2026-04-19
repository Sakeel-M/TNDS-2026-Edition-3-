

import React, { useState, useEffect } from "react";
import PayTick from "../assets/images/pay-tick.webp";
const ThankYouPage = () => {
  return (
    <div>
      <div className="thankyou-page-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="">
                <div className="modal-content">
                  <div className="th-cnt-thank">
                    <img className="th-page-img" src={PayTick} alt=""></img>
                    <h1 className="th-page-bold mt-3">Success</h1>
                    <p className="">
                      We are delighted to inform you that we have received your
                      payment.
                    </p>

                    <a
                      href="https://www.instagram.com/tndigitalsummit/?igsh=dnRsaGgxZ2RxajVk"
                      target="_blank" rel="noreferrer"
                      className="d-flex thnk-page-follow align-items-center"
                    >
                      <h5 className=" gradient-text-thankyou mt-1 mb-0">
                        Follow Us for More Update :
                      </h5>
                      <span className="fs-5 gradient-text-thankyou px-2 py-0 mb-0">
                        <i class="fa-brands fa-instagram"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;

