import React, { useEffect } from "react";
import Banner from "../../Fragments/DetailKuliner/Banner";
import Title from "../../Fragments/DetailKuliner/Title";
import Footer from "../../Fragments/Footer";
import { motion } from "framer-motion";
import Description from "../../Fragments/DetailKuliner/Description";
import { FaStar } from "react-icons/fa";
import { Progress } from "@material-tailwind/react";
import Galery from "../../Fragments/DetailKuliner/Gallery";

const Layout = ({ data }) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [data]);
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
        <div className="flex sm:flex-row flex-col-reverse items-center justify-center sm:gap-20 gap-5 sm:px-0 px-3">
          <Description data={data} />
        </div>
        <div className="flex justify-center gap-20 py-28">
          <motion.img
            initial={{ transform: "scale(0)" }}
            whileInView={{ transform: "scale(1)" }}
            transition={{ duration: 0.5 }}
            src={data.restaurantImage}
            className="w-80 h-80 object-cover rounded-xl"
          ></motion.img>
          <div className="w-1/2 flex flex-col gap-3 -mt-3">
            <h1 className="font-[Montserrat] text-2xl text-center ">
              Testimoni
            </h1>
            <div className="flex flex-col gap-5">
              {data.testimoni.map((item, i) => (
                <motion.div
                  initial={{ x: -150 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: `0.${i + 2}` }}
                  className="flex gap-10"
                >
                  <div className="flex flex-col justify-center items-center gap-2">
                    <div className="w-8 h-8 bg-blue-gray-700 rounded-full overflow-hidden">
                      <img
                        src={item.fotoProfil}
                        alt={item.nama}
                        className="w-full h-full"
                      />
                    </div>
                    <p className="font-[Metropolis] text-sm">{item.nama}</p>
                    {/* <div className="flex">
                      <FaStar className="text-xl text-[#e8ff1a]" />
                      <p>{item.rating}</p>
                    </div> */}
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <div className="flex">
                        {(() => {
                          const items = [];
                          for (let index = 0; index < item.rating; index++) {
                            items.push(
                              <FaStar className="text-xl text-[#e6fc24]" />
                            );
                          }
                          return items;
                        })()}
                      </div>
                      <p>{item.rating}</p>
                    </div>
                    <p className="font-[Metropolis] text-sm">{item.komen}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-20 py-10 items-center">
          <motion.div
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-5">
              <p className="w-32">Luar Biasa</p>
              <Progress
                value={data.ulasan.luarBiasa}
                className="w-56"
                size="lg"
              />
            </div>
            <div className="flex items-center gap-5">
              <p className="w-32">Sangat Bagus</p>
              <Progress
                value={data.ulasan.sangatBagus}
                className="w-56"
                size="lg"
              />
            </div>
            <div className="flex items-center gap-5">
              <p className="w-32">Biasa</p>
              <Progress value={data.ulasan.biasa} className="w-56" size="lg" />
            </div>
            <div className="flex items-center gap-5">
              <p className="w-32">Buruk</p>
              <Progress value={data.ulasan.buruk} className="w-56" size="lg" />
            </div>
            <div className="flex items-center gap-5">
              <p className="w-32">Sangat Buruk</p>
              <Progress
                value={data.ulasan.sangatBuruk}
                className="w-56"
                size="lg"
              />
            </div>
          </motion.div>
          <Galery data={data} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
