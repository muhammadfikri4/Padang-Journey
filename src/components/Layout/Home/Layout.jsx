import React from "react";
import VideoPlayer from "../../Fragments/Home/VideoPlayer";
import AboutPadang from "../../Fragments/Home/AboutPadang";
import SliderDestination from "../../Fragments/Home/SliderDestination";

const Layout = () => {
  return (
    <div>
      <VideoPlayer />
      <div className="flex justify-between py-10">
        <AboutPadang />
      </div>
      <SliderDestination />
    </div>
  );
};

export default Layout;
