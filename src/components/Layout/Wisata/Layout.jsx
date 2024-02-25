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

const Layout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <InputSearch />
      <div className="flex justify-center py-10">
        <h1 className="font-[MetropolisBold] desktop:text-4xl text-2xl text-center desktop:pb-5 pb-2 border border-t-0 border-x-0 border-b-black w-max h-max">
          Paling Sering Di Kunjungi
        </h1>
      </div>
      <div className="flex desktop:flex-row flex-col justify-center items-center desktop:gap-3 gap-0">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.75,
          }}
          className="flex flex-col items-start justify-start gap-3 desktop:px-0"
        >
          <h1 className="font-[MetropolisBold] desktop:text-3xl text-[20px] desktop:w-64 w-screen desktop:px-0 px-5">
            Temukan Wisata Menarik
          </h1>
          <p className="font-[Metropolis] text-sm opacity-70 desktop:px-0 px-5">
            Jadikan pengalaman terbaik anda
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
          }}
          className="flex items-center py-10 gap-3 desktop:px-0 px-3"
        >
          {wisata.slice(1, 4).map((item, i) => (
            //   <Card item={item} />
            <Link to={`/wisata/${item.id}`} key={i}>
              <img
                src={item.imageUrl}
                className="desktop:w-48 desktop:h-52 w-32 h-40 object-cover rounded-xl"
                alt={item.nama}
              />
            </Link>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Layout;
