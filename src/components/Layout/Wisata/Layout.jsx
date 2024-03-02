import React, { useEffect, useLayoutEffect } from "react";
import Banner from "../../Fragments/Wisata/Banner";
import wisata from "../../../utils/Wisata.json";
import Card from "../../Fragments/Wisata/Card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Layout = () => {
  return (
    <>
      <Banner />
      <div className="flex justify-center py-10">
        <h1 className="font-[MetropolisBold] text-4xl text-center pb-5 border border-t-0 border-x-0 border-b-black w-max h-max">
          Paling Sering Di Kunjungi
        </h1>
      </div>
      <div className="flex justify-center items-center gap-3">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.75,
          }}
          className="flex flex-col justify-start gap-3"
        >
          <h1 className="font-[MetropolisBold] text-3xl w-64">
            Temukan Wisata Menarik
          </h1>
          <p className="font-[Metropolis] text-sm opacity-70">
            Jadikan pengalaman terbaik anda
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
          }}
          className="flex items-center py-10 gap-3"
        >
          {wisata.slice(1, 4).map((item, i) => (
            //   <Card item={item} />
            <Link to={`/wisata/${item.id}`} key={i}>
              <img
                src={item.imageUrl}
                className="w-48 h-52 object-cover rounded-xl"
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
