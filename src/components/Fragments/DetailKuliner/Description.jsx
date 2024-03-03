import React from "react";
import { motion } from "framer-motion";

const Description = ({ data }) => {
  return (
    <>
      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:w-1/2 w-full flex flex-col justify-center gap-5"
      >
        <h1 className="font-[Montserrat] text-2xl text-center">Deskripsi</h1>
        <p className="font-[Metropolis]">{data.deskripsi}</p>
      </motion.div>
      <motion.img
        initial={{ transform: "scale(0)" }}
        whileInView={{ transform: "scale(1)" }}
        transition={{ duration: 0.5 }}
        src={data.gallery[0]}
        alt={data.nama}
        className="sm:w-72 sm:h-72 w-full h-80 object-cover rounded-xl"
      />
    </>
  );
};

export default Description;
