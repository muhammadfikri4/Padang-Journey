import React from "react";
import VideoPlayer from "../../Fragments/Home/VideoPlayer";
import AboutPadang from "../../Fragments/Home/AboutPadang";
import SliderDestination from "../../Fragments/Home/SliderDestination";
import Kuliner from "../../Fragments/Home/Kuliner";
import SliderTraveling from "../../Fragments/Home/SliderTraveling";

const Layout = () => {
  return (
    <div>
      <VideoPlayer />
      <AboutPadang />
      <SliderDestination />
      <Kuliner />
      <SliderTraveling />
    </div>
  );
};

export default Layout;
