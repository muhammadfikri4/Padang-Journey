import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const InterestWisata = ({ wisata }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 md:grid-rows-1 justify-items-center grid-cols-1 grid-rows-2 py-10 sm:gap-0 gap-2 place-items-center overflow-x-hidden">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col sm:items-center items-start gap-5 sm:pl-10 px-3 overflow-x-hidden"
        >
          <h1 className="md:w-10/12 font-[Montserrat] sm:text-4xl text-2xl sm:leading-[1.4] leading-[1.5] w-full ">
            Wisata Menarik Yang Ada Di Dunia{" "}
            <span className="bg-[#b8ff68] p-1.5 rounded-sm">Padang</span>
          </h1>
          <p
            className="md:w-10/12 w-full lg:text-base md:text-sm text-[14px] font-[Metropolis]"
            style={{ lineHeight: 1.7 }}
          >
            Padang memiliki wisata alam seperti meliputi Air Terjun Tiku yang
            menawarkan suasana yang menenangkan, serta pulau-pulau cantik
            seperti Pulau Sikuai yang mengundang pengunjung untuk menikmati
            keindahan bawah lautnya dengan snorkeling dan diving. Keindahan alam
            yang beragam ini membuat Kota Padang menjadi destinasi wisata yang
            menarik bagi para pelancong yang mencari pengalaman alam yang tak
            terlupakan.
          </p>
        </motion.div>
        <div className="flex justify-center px-3">
          <div className="md:grid hidden md:grid-rows-2 md:grid-cols-2 grid-cols-1 grid-row-2 lg:w-[90%] lg:h-full gap-1">
            {wisata[0].otherImage.map((item, i) => (
              <motion.div
                key={i}
                initial={{ transform: "scale(0)" }}
                whileInView={{ transform: "scale(1)" }}
                transition={{ duration: `0.${i + 3}` }}
                className={`overflow-hidden ${
                  (i == 0 || i == 2) && "w-full h-full"
                } object-cover ${i == 0 && "rounded-tl-[50px]"} ${
                  i == 2 &&
                  "rounded-bl-[50px] hover:scale-110 duration-300 w-36 h-full"
                } ${i == 1 && "w-36 h-full"}`}
              >
                <Link to={`/wisata/${wisata[0].id}`}>
                  <img
                    src={item}
                    alt="image"
                    className={`${
                      (i == 0 || i == 2) && "w-full h-full"
                    } object-cover ${i == 0 && "rounded-tl-[50px]"} ${
                      i == 2 && "rounded-bl-[50px]"
                    } ${
                      i !== 0 && i !== 2 && "w-36 h-full"
                    } hover:scale-110 duration-300`}
                  ></img>
                </Link>
                {/* <Link
                  to={`/wisata/${wisata[0].id}`}
                  key={i}
                  className=""
                >
                </Link> */}
              </motion.div>
            ))}
            <motion.div
              initial={{ transform: "scale(0)" }}
              whileInView={{ transform: "scale(1)" }}
              transition={{ duration: 0.5 }}
              className="w-36 h-full overflow-hidden"
            >
              <Link to={`/wisata/${wisata[0].id}`}>
                <img
                  src={wisata[0].imageUrl}
                  alt="image"
                  className="w-36 h-full object-cover hover:scale-110 duration-300"
                />
              </Link>
            </motion.div>
          </div>
          <div className="md:hidden grid grid-rows-2 grid-cols-2 w-full h-max justify-items-center gap-1">
            {wisata[0].otherImage.map((item, i) => (
              <motion.div
                key={i}
                initial={{ transform: "scale(0)" }}
                whileInView={{ transform: "scale(1)" }}
                transition={{ duration: `0.${i + 3}` }}
                className={`w-full h-full object-cover ${
                  i == 0 && "rounded-tl-2xl"
                } ${i == 1 && "rounded-tr-2xl"} ${
                  i == 2 && "rounded-bl-2xl"
                } overflow-hidden`}
              >
                <Link
                  to={`/wisata/${wisata[0].id}`}
                  className="hover:scale-110"
                >
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
              </motion.div>
            ))}
            <motion.div
              initial={{ transform: "scale(0)" }}
              whileInView={{ transform: "scale(1)" }}
              transition={{ duration: 0.4 }}
              className={`w-full h-full rounded-br-xl overflow-hidden`}
            >
              <Link to={`/wisata/${wisata[0].id}`} className="hover:scale-110">
                <motion.img
                  initial={{ transform: "scale(0)" }}
                  whileInView={{ transform: "scale(1)" }}
                  transition={{ duration: 0.4 }}
                  src={wisata[0].imageUrl}
                  alt="image"
                  className={`w-full h-full object-cover`}
                ></motion.img>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestWisata;
// flex sm:w-max w-screen justify-center items-center py-10 gap-3 sm:px-3 px-5
