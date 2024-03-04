import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="w-screen h-80 bg-[#caf0fa] ">
      <div className="w-full h-full bg-[url('https://firebasestorage.googleapis.com/v0/b/pariwisata-d318c.appspot.com/o/polkadots.png?alt=media&token=77ba68f9-9d61-48d9-a0f6-c0ca3e060a7c')] bg-no-repeat opacity-20"></div>
      <motion.h1
        initial={{ x: -150 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="font-[Montserrat] lg:text-5xl md:text-4xl sm:text-2xl text-xl relative sm:left-10 left-2 -top-1/3 sm:px-0 px-2"
      >
        Wisata / Kuliner yang Anda Sukai
      </motion.h1>
    </div>
  );
};

export default Banner;
