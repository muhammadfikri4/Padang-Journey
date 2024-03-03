import React, { useEffect, useLayoutEffect, useState } from "react";
import Banner from "../../Fragments/Wisata/Banner";
import wisata from "../../../utils/Wisata.json";
import Card from "../../Fragments/Wisata/Card";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import Find from "../../Fragments/DetailWisata/Find";
import { GoSearch } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import InputSearch from "../../Fragments/Wisata/InputSearch";
import InterestWisata from "../../Fragments/Wisata/InterestWisata";
import FamousWisata from "../../Fragments/Wisata/FamousWisata";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import useStore from "../../../store/store";
import FindWisata from "../../Fragments/Wisata/FindWisata";
import Benefit from "../../Fragments/Wisata/Benefit";
import Footer from "../../Fragments/Footer";
import { findWisata } from "../../../utils/Function/Find";

const Layout = () => {
  const [data, setData] = useState(wisata);
  const { findActive, setFindActive } = useStore();

  return (
    <>
      <div className={`${findActive && "hidden"}`}>
        <Banner />

        <div className="flex justify-center py-10">
          <h1 className="font-[MetropolisBold] sm:text-4xl text-2xl text-center sm:pb-5 pb-2 border border-t-0 border-x-0 border-b-black w-max h-max">
            Paling Sering Di Kunjungi
          </h1>
        </div>
        <InterestWisata wisata={wisata} />

        <FamousWisata wisata={wisata} />
        <Benefit />

        <Footer />
      </div>
      <InputSearch onClick={setFindActive} />

      <FindWisata
        data={data}
        findWisata={findWisata}
        wisata={wisata}
        setData={setData}
      />
    </>
  );
};

export default Layout;
