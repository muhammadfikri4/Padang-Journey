import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const InterestWisata = ({ wisata }) => {
  return (
    <>
      <div className="container grid sm:grid-cols-2 sm:grid-rows-1 grid-cols-1 grid-rows-2 py-10 sm:gap-0 gap-0">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col gap-5 sm:pl-10 px-3"
        >
          <h1 className="font-[Montserrat] sm:text-4xl text-2xl sm:leading-[1.4] leading-snug">
            Wisata Menarik Yang Ada Di Dunia{" "}
            <span className="bg-[#b8ff68] p-1.5 rounded-sm">Padang</span>
          </h1>
          <p className="sm:w-10/12 w-full sm:text-base text-[14px] leading-[23px] font-[Metropolis]">
            Padang memiliki wisata alam seperti meliputi Air Terjun Tiku yang
            menawarkan suasana yang menenangkan, serta pulau-pulau cantik
            seperti Pulau Sikuai yang mengundang pengunjung untuk menikmati
            keindahan bawah lautnya dengan snorkeling dan diving. Keindahan alam
            yang beragam ini membuat Kota Padang menjadi destinasi wisata yang
            menarik bagi para pelancong yang mencari pengalaman alam yang tak
            terlupakan.
          </p>
        </motion.div>
        <div className="flex sm:justify-end justify-center px-3">
          <div className="sm:grid hidden grid-rows-2 grid-cols-2 w-[90%] gap-1">
            {wisata[0].otherImage.map((item, i) => (
              <Link to={`/wisata/${wisata[0].id}`} key={i}>
                <motion.img
                  initial={{ transform: "scale(0)" }}
                  whileInView={{ transform: "scale(1)" }}
                  transition={{ duration: `0.${i + 3}` }}
                  src={item}
                  alt="image"
                  className={`${
                    (i == 0 || i == 2) && "w-full h-full"
                  } object-cover ${i == 0 && "rounded-tl-[50px]"} ${
                    i == 2 && "rounded-bl-[50px]"
                  } ${i !== 0 && i !== 2 && "w-36 h-full"} hover:scale-110`}
                ></motion.img>
              </Link>
            ))}
            <motion.img
              initial={{ transform: "scale(0)" }}
              whileInView={{ transform: "scale(1)" }}
              transition={{ duration: 0.6 }}
              src={wisata[0].imageUrl}
              alt="image"
              className="w-36 h-full object-cover"
            ></motion.img>
          </div>
          <div className="sm:hidden grid grid-rows-2 grid-cols-2 w-[screen] h-max justify-items-center gap-2">
            {wisata[0].otherImage.map((item, i) => (
              <Link to={`/wisata/${wisata[0].id}`}>
                <motion.img
                  initial={{ transform: "scale(0)" }}
                  whileInView={{ transform: "scale(1)" }}
                  transition={{ duration: `0.${i + 3}` }}
                  src={item}
                  alt="image"
                  className={`w-full h-full object-cover ${
                    i == 0 && "rounded-tl-2xl"
                  } ${i == 1 && "rounded-tr-2xl"} ${
                    i == 2 && "rounded-bl-2xl"
                  }`}
                ></motion.img>
              </Link>
            ))}
            <motion.img
              initial={{ transform: "scale(0)" }}
              whileInView={{ transform: "scale(1)" }}
              transition={{ duration: 0.6 }}
              src={wisata[0].imageUrl}
              alt="image"
              className="w-full h-full object-cover rounded-br-2xl"
            ></motion.img>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestWisata;
// flex sm:w-max w-screen justify-center items-center py-10 gap-3 sm:px-3 px-5
