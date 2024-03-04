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

        <div className="flex flex-col justify-center pt-10 px-5">
          <motion.h1
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center font-[Montserrat] text-3xl py-10"
          >
            Rasakan Kenikmatan Kuliner Khas Padang
          </motion.h1>
          <div>
            <motion.img
              initial={{ transform: "scale(0)" }}
              whileInView={{ transform: "scale(1)" }}
              transition={{ duration: 0.3 }}
              src={kuliner[4].imageUrl}
              alt="image"
              className="w-full md:h-[500px] h-80 object-cover rounded-xl"
            />
            <div className="md:inline-block flex justify-center md:px-0 px-10">
              <motion.p
                initial={{ x: -150 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.4 }}
                className="font-[MetropolisBold] md:text-6xl text-3xl bg-[#c8ffc3] md:w-max w-full md:px-7 text-center py-2 rounded-md relative md:-top-8 md:left-10 -top-6"
              >
                {kuliner[4].nama}
              </motion.p>
            </div>
          </div>
        </div>

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
