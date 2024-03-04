import React from "react";
import { motion } from "framer-motion";

const KulinerKhas = ({ kuliner }) => {
  return (
    <div className="flex flex-col justify-center pt-10 px-5 overflow-x-hidden">
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
  );
};

export default KulinerKhas;
