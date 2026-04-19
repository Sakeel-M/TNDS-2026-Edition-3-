import React, { useState } from "react";
import { motion } from "framer-motion";
import DesignImg from "../assets/images/design-img.webp";
import axios from "axios";
import ThankYouModal from "../common/ThankYouModal";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "../common/motionVariants";
const PartnerWithUsPage = () => {
  const [value, setValue] = useState({});
  const [validation, setValidation] = useState({});
  const [thankYouModal, setThankYouModal] = useState(false);
  const [loading, setLoading] = useState(false);

  function isEmail(email) {
    return !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  const CheckValidation = () => {
    let Status = true,
      validdateData = {};
    if (!value.name || !value.name?.length) {
      validdateData.name = "Name is Required";
      Status = false;
    } else if (!isNaN(value.name)) {
      validdateData.name = "Name is invalid";
      Status = false;
    } else if (value.name === undefined) {
      validdateData.name = "Name is Required";
      Status = false;
    } else if (value.name === "") {
      validdateData.name = "Name is Required";
      Status = false;
    } else if (value.name.length <= 1) {
      validdateData.name = "Name must be maximum 2 letters";
      Status = false;
    }

    if (!value.mobileNumber === undefined) {
      validdateData.mobileNumber = "Mobile Number is Required";
      Status = false;
    } else if (!value.mobileNumber?.toString().length) {
      validdateData.mobileNumber = "Mobile Number is Required";
      Status = false;
    } else if (value.mobileNumber.toString().length !== 10) {
      validdateData.mobileNumber = "Mobile Number must be 10 digits";
      Status = false;
    } else if (!/^\d{10}$/.test(value.mobileNumber)) {
      validdateData.mobileNumber = "Mobile Number must be exactly 10 digits";
      Status = false;
    }

    if (!value.email?.trim()?.length) {
      validdateData.email = "Email is Required";
      Status = false;
    } else if (value.email?.includes(" ")) {
      validdateData.email = "Email cannot include spaces";
      Status = false;
    } else if (value.email && isEmail(value.email)) {
      validdateData.email = "Email is Invalid";
      Status = false;
    }

    if (!value.companyName) {
      validdateData.companyName = "Company Name is Required";
      Status = false;
    }
    if (!value.companyWebsite) {
      validdateData.companyWebsite = "Company Website is Required";
      Status = false;
    }
    if (!value.positionInCompany) {
      validdateData.positionInCompany = "Position In Company is Required";
      Status = false;
    }
    if (!value.messagetoTNDS) {
      validdateData.messagetoTNDS = "Company Name is Required";
      Status = false;
    }
    setValidation({ ...validation, ...validdateData });
    return Status;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(validation);
    let inputvalue = {
      Name: value.name,
      MobileNumber: value.mobileNumber,
      Email: value.email,
      CompanyName: value.companyName,
      CompanyWebsite: value.companyWebsite,
      PositionInCompany: value.positionInCompany,
      MessagetoTNDS: value.messagetoTNDS,
      Date: new Date(),
      Location: window.location.href,
    };
    let formdata = new FormData();
    for (let key in inputvalue) {
      formdata.append(key, inputvalue[key]);
    }
    if (CheckValidation()) {
      try {
        await axios
          .post(
            "https://script.google.com/macros/s/AKfycby2mqdhbvgAeQp0NoorIPbU3gxLgB351O6uz1vHODhdGnHW8R9n59eoSLsnpH5TpVkwyg/exec",
            formdata
          )
          .then(() => {
            setValue({});
            setThankYouModal(true);
            e.target.reset();
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const setData = (e, key) => {
    setValue({ ...value, [key]: e });
    if (validation[key]) setValidation({ ...validation, [key]: false });
  };

  return (
    <div className="margin-top-part">
      <ThankYouModal
        open={thankYouModal}
        setOpen={() => {
          setThankYouModal(false);
        }}
      />
      <div className="partner-with-us ">
        <div className="container">
          <motion.div
            className="position-relative mb-5 "
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h2 className="text-the-heading text-dark">Become a</h2>
            <div className="pb-4">
              <img className="design-what-you-learn" src={DesignImg} alt="" />
              <h2 className="text-significance-heading core-commite-heading">
                PARTNER
              </h2>
            </div>
            <div className="pb-3">
              <h4 className="text-dark font-bold mb-2">
                Join the Builders of the AI Era
              </h4>
              <h5 className="text-dark mb-2">Get Ready for AI Future</h5>
              <p className="text-dark mb-0">Be part of the AI movement.</p>
            </div>
          </motion.div>
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <form className="" onSubmit={(e) => handleSubmit(e)}>
                <motion.div
                  className="row"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                >
                  <motion.div className="col-lg-6" variants={fadeUp}>
                    <div className="mb-contact-form">
                      <label className="label-text">Full Name*</label>
                      <input
                        type="text"
                        className="form-control pws-form"
                        placeholder="Enter Your Full Name"
                        name="name"
                        onChange={(e) => {
                          setData(e.target.value, "name");
                        }}
                      />
                      {validation.name && (
                        <span className="validationmsg small">
                          {validation.name}
                        </span>
                      )}
                    </div>
                  </motion.div>
                  <motion.div className="col-lg-6" variants={fadeUp}>
                    <div className="mb-contact-form">
                      <label className="label-text">Mobile Number*</label>
                      <input
                        type="text"
                        className="form-control pws-form"
                        name="mobileNumber"
                        onChange={(e) => {
                          setData(e.target.value, "mobileNumber");
                        }}
                        maxLength={10}
                        placeholder="Enter Your Mobile Number"
                      />
                      {validation.mobileNumber && (
                        <span className="validationmsg small">
                          {validation.mobileNumber}
                        </span>
                      )}
                    </div>
                  </motion.div>
                  <motion.div className="col-lg-6" variants={fadeUp}>
                    <div className="mb-contact-form">
                      <label className="label-text">Email*</label>
                      <input
                        type="text"
                        className="form-control pws-form"
                        name="email"
                        onChange={(e) => {
                          setData(e.target.value, "email");
                        }}
                        placeholder="Enter Your email"
                      />
                      {validation.email && (
                        <span className="validationmsg small">
                          {validation.email}
                        </span>
                      )}
                    </div>
                  </motion.div>
                  <motion.div className="col-lg-6" variants={fadeUp}>
                    <div className="mb-contact-form">
                      <label className="label-text">Company Name*</label>
                      <input
                        type="text"
                        className="form-control pws-form"
                        name="companyName"
                        onChange={(e) => {
                          setData(e.target.value, "companyName");
                        }}
                        placeholder="Enter Your  Company Name"
                      />
                      {validation.companyName && (
                        <span className="validationmsg small">
                          {validation.companyName}
                        </span>
                      )}
                    </div>
                  </motion.div>
                  <motion.div className="col-lg-6" variants={fadeUp}>
                    <div className="mb-contact-form">
                      <label className="label-text">Company Website*</label>
                      <input
                        type="text"
                        className="form-control pws-form"
                        name="companyWebsite"
                        onChange={(e) => {
                          setData(e.target.value, "companyWebsite");
                        }}
                        placeholder="Enter Your  Company Website"
                      />
                      {validation.companyWebsite && (
                        <span className="validationmsg small">
                          {validation.companyWebsite}
                        </span>
                      )}
                    </div>
                  </motion.div>
                  <motion.div className="col-lg-6" variants={fadeUp}>
                    <div className="mb-contact-form">
                      <label className="label-text">Position In Company*</label>
                      <input
                        type="text"
                        className="form-control pws-form"
                        name="positionInCompany"
                        onChange={(e) => {
                          setData(e.target.value, "positionInCompany");
                        }}
                        placeholder="Enter Your  Position"
                      />
                      {validation.positionInCompany && (
                        <span className="validationmsg small">
                          {validation.positionInCompany}
                        </span>
                      )}
                    </div>
                  </motion.div>
                  <motion.div className="col-lg-12" variants={fadeUp}>
                    <div className="mb-contact-form">
                      <label className="label-text">Message to TNDS*</label>
                      <input
                        type="text"
                        className="form-control pws-form"
                        name="messagetoTNDS"
                        onChange={(e) => {
                          setData(e.target.value, "messagetoTNDS");
                        }}
                        placeholder="Type your message here...."
                      />
                      {validation.messagetoTNDS && (
                        <span className="validationmsg small">
                          {validation.messagetoTNDS}
                        </span>
                      )}
                    </div>
                  </motion.div>
                  <motion.div className="col-lg-12 " variants={fadeUp}>
                    <div className="btn-contact">
                      <motion.button
                        className={`btn btn-anim-contact w-100 py-3  ${
                          loading ? "sending" : ""
                        }`}
                        type="submit"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                      >
                        {loading ? (
                          <div className="spinner-border" role="status">
                            <span className="sr-only ">Loading...</span>
                          </div>
                        ) : (
                          "Submit"
                        )}

                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUsPage;
