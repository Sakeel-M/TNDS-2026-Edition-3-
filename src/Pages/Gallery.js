import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GalleryContent from "../components/GalleryContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Gallery = () => {
  const location = useLocation();
  useEffect(() => {
    const { search } = location;
    if (!search) {
      window.scroll(0, 0);
    }
  }, []);
  return (
    <div>
      <Navbar />
      <GalleryContent />
      <Footer />
    </div>
  );
};

export default Gallery;
