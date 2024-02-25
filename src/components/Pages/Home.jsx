import React, { useEffect, useRef } from "react";
import Navbar from "../Fragments/Navbar";
import VideoPlayer from "../Fragments/Home/VideoPlayer";
import AboutPadang from "../Fragments/Home/AboutPadang";
import Layout from "../Layout/Home/Layout";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout />
    </>
  );
};

export default Home;
