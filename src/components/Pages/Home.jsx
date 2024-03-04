import React, { useEffect, useRef } from "react";
import Navbar from "../Fragments/Navbar";
import VideoPlayer from "../Fragments/Home/VideoPlayer";
import AboutPadang from "../Fragments/Home/AboutPadang";
import Layout from "../Layout/Home/Layout";
import { Button, Carousel } from "@material-tailwind/react";
import wisata from "../../utils/Wisata.json";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout />
      {/* <div className="flex justify-center"></div>
      <br /> */}
    </>
  );
};

export default Home;
