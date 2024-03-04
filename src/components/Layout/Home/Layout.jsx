import React from "react";
import VideoPlayer from "../../Fragments/Home/VideoPlayer";
import AboutPadang from "../../Fragments/Home/AboutPadang";
import SliderTraveling from "../../Fragments/Home/SliderTraveling";
import SliderDestination from "../../Fragments/Home/SliderDestination";
import PadangAssets from "../../Fragments/Home/PadangAssets";
import Footer from "../../Fragments/Footer";
import { motion } from "framer-motion";
import Maps from "../../Fragments/Home/Maps";

const Layout = () => {
  return (
    <div className="overflow-x-hidden">
      <VideoPlayer />
      <AboutPadang />
      <SliderDestination />
      <PadangAssets />
      <SliderTraveling />
      <Maps />
      <Footer />
    </div>
  );
};

export default Layout;
