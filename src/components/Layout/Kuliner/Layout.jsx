import React, { useEffect, useState } from "react";
import Banner from "../../Fragments/Kuliner/Banner";
import { motion } from "framer-motion";
import Footer from "../../Fragments/Footer";
import kuliner from "../../../utils/Kuliner.json";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import LikeButton from "../../Fragments/Kuliner/LikeButton";
import { Link } from "react-router-dom";
import InputSearch from "../../Fragments/Kuliner/InputSearch";
import useStore from "../../../store/store";
import KulinerFavorit from "../../Fragments/Kuliner/KulinerFavorit";
import FindKuliner from "../../Fragments/Kuliner/FindKuliner";
import { findKuliner } from "../../../utils/Function/Find";
import KulinerKhas from "../../Fragments/Kuliner/KulinerKhas";

const Layout = () => {
  const { findActive, setFindActive } = useStore();
  const [data, setData] = useState(kuliner);
  // const liked = JSON.parse(localStorage.getItem("like-kuliner")) || [];
  const [isLiked, setIsLiked] = useState(false);
  const [liked, setLiked] = useState(
    JSON.parse(localStorage.getItem("like-kuliner")) || []
  );
  const checkLiked = (id) => {
    const result = liked.find((item) => item.id == id);
    return result;
  };
  useEffect(() => {
    setLiked(JSON.parse(localStorage.getItem("like-kuliner")) || []);
  }, [isLiked]);

  return (
    <>
      <div className={`${findActive && "hidden"} overflow-x-hidden`}>
        <Banner />

        <KulinerKhas kuliner={kuliner} />

        <KulinerFavorit
          kuliner={kuliner}
          checkLiked={checkLiked}
          setIsLiked={setIsLiked}
          setLiked={setLiked}
        />
        <Footer />
      </div>
      <FindKuliner
        kuliner={kuliner}
        setData={setData}
        data={data}
        findKuliner={findKuliner}
      />
      <InputSearch onClick={setFindActive} />
    </>
  );
};

export default Layout;

// after:w-64 after:h-80 ${
//     i == 0 && "after:bg-red-600"
//   } ${i == 1 && "after:bg-blue-600"} ${
//     i == 2 && "after:bg-green-600"
//   } after:absolute after:top-0 after:z-7 after:opacity-0 hover:after:opacity-70 after:duration-300
