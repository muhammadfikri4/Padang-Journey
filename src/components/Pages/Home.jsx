import React, { useEffect, useRef } from "react";
import Navbar from "../Fragments/Navbar";
import VideoPlayer from "../Fragments/Home/VideoPlayer";
import AboutPadang from "../Fragments/Home/AboutPadang";
import Layout from "../Layout/Home/Layout";

const Home = () => {
  //   fetch(
  //     "https://padang-journey-default-rtdb.asia-southeast1.firebasedatabase.app/wisata.json"
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       let collection = [];
  //       for (const key in res) {
  //         collection.push(res[key]);
  //       }
  //       console.log(collection);
  //     });

  return (
    <>
      <Navbar />
      <Layout />
    </>
  );
};

export default Home;
