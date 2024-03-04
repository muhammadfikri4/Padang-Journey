import React from "react";
import VideoPlayer from "../../Fragments/Home/VideoPlayer";
import AboutPadang from "../../Fragments/Home/AboutPadang";
import SliderTraveling from "../../Fragments/Home/SliderTraveling";
import SliderDestination from "../../Fragments/Home/SliderDestination";
import Kuliner from "../../Fragments/Home/Kuliner";
import Footer from "../../Fragments/Footer";

const Layout = () => {
  return (
    <>
      <VideoPlayer />
      <AboutPadang />
      <SliderDestination />
      <Kuliner />
      <SliderTraveling />
      <div className="-mb-10">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
