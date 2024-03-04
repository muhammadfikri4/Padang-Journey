import React, { useEffect } from "react";
import Banner from "../../Fragments/DetailKuliner/Banner";
import Title from "../../Fragments/DetailKuliner/Title";
import Footer from "../../Fragments/Footer";
import { motion } from "framer-motion";
import Description from "../../Fragments/DetailKuliner/Description";
import { FaStar } from "react-icons/fa";
import { Progress } from "@material-tailwind/react";
import Galery from "../../Fragments/DetailKuliner/Gallery";
import Testimoni from "../../Fragments/DetailKuliner/Testimoni";
import kuliner from "../../../utils/Kuliner.json";
import Review from "../../Fragments/DetailKuliner/Review";
const Layout = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  return (
    <>
      <Banner data={data} />
      <Title data={data} />

      <div>
        <div className="py-10 flex justify-center">
          <h1 className="text-center text-4xl font-[Montserrat] border border-b-black border-x-0 border-t-0 w-max pb-3">
            Detail
          </h1>
        </div>
        <div className="flex md:flex-row w-full flex-col-reverse items-center justify-center sm:gap-20 gap-5 md:px-2 sm:px-2 px-3">
          <Description data={data} kuliner={kuliner} />
        </div>
        <div className="flex md:flex-row flex-col justify-center gap-20 py-28 md:px-2 px-3">
          <Testimoni data={data} />
        </div>

        <div className="flex sm:flex-row flex-col-reverse justify-center gap-20 py-10 items-center sm:px-0 px-3">
          <Review data={data} />
          <Galery data={data} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
