import React from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../common/motionVariants";

const GalleryContent = () => {
  return (
    <div className="margin-top-part">
      <section className="gallery-bg">
        <div className="container pt-5">
          <motion.div
            className="core-commite-heading d-flex Gallery-head  Gallery-heading-section py-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <img
              className="Gallery-design-img"
              src={require("../assets/images/recap/recap-design.webp")}
              alt=""
            />
            <h2 className="recap-heading">Gallery</h2>
          </motion.div>
          <motion.div
            className="d-flex Gallery-head1 py-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="Gallery-border  font-bold-clash">
              TNDS 2024 - Where It Began
            </div>
          </motion.div>
        </div>
        <div className="container">
          <motion.div
            className="row mb-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g1.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g2.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g3.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g4.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6 my-auto">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g5.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g6.webp")}
                alt=""
              />
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g7.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g8.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g9.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g10.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g11.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g12.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g13.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g14.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g15.webp")}
                alt=""
              />
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g16.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g17.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g18.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g19.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g20.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g21.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g22.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g23.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g24.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g25.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g26.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g27.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g28.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g29.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g30.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g31.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g32.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g33.webp")}
                alt=""
              />
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g34.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g35.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g36.webp")}
                alt=""
              />
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g37.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g55.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g38.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g39.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g40.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6 my-auto">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g41.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g42.webp")}
                alt=""
              />
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g43.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g44.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g45.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g46.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g47.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g48.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g49.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g50.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g51.webp")}
                alt=""
              />
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g52.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g53.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g54.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g55.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g56.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g57.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g58.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g59.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g60.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g61.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g62.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g63.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g64.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g65.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g66.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g67.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g68.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g69.webp")}
                alt=""
              />
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g70.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g71.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g72.webp")}
                alt=""
              />
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g73.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g74.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g75.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g76.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g77.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6 my-auto">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g78.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g79.webp")}
                alt=""
              />
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g80.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g81.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g82.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g83.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g84.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g85.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g86.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g87.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g88.webp")}
                alt=""
              />
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g89.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g90.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g91.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g92.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g110.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g93.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g94.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g95.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g96.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g97.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g98.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g99.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g100.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g101.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g102.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g103.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g104.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g105.webp")}
                alt=""
              />
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g106.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g107.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g108.webp")}
                alt=""
              />
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g109.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g111.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g112.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g113.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g114.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6 my-auto">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g115.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g116.webp")}
                alt=""
              />
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g117.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g118.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g119.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g120.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g121.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g122.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g123.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g124.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g125.webp")}
                alt=""
              />
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g117.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g126.webp")}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-3">
              <img
                className="Gallery-img"
                src={require("../assets/images/Gallery/g127.webp")}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryContent;
