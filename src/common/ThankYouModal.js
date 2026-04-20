import React from "react";
import CustomModal from "./CustomModal";
const Thankyou = `${process.env.PUBLIC_URL}/${encodeURIComponent("TNDS 2026 Logo White.png")}`;
const ThankYouModal = ({ open, setOpen }) => {
  return (
    <div>
      <CustomModal
        open={open}
        onClickOutside={() => {
          setOpen(false);
        }}
      >
        <div className="modal-content thankyou-modal-content">
          <div className="th-cnt">
            <img className="thankyou-logo" src={Thankyou} alt="Thanks" />
            <h1 className="font-bold">Thank You</h1>
            <p>Your details has been successfully submitted</p>

            <button
              onClick={() => setOpen(false)}
              class="btn yellow-btn"
              data="Back"
            ></button>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default ThankYouModal;
