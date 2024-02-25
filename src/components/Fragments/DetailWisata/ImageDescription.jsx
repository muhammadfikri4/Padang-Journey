import React from "react";
import { motion } from "framer-motion";

const ImageDescription = ({ data }) => {
  return (
    <div className="desktop:px-0 px-5">
      <motion.div
        initial={{ transform: "scale(0)" }}
        whileHover={{ transform: "scale(1.01)" }}
        whileInView={{ transform: "scale(1)" }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={data.otherImage[1]}
          alt={data.nama}
          className={`w-96 h-80 object-cover rounded-xl desktop:inline-block hidden relative -left-[50px] -bottom-[30px]`}
        />
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        whileHover={{ transform: "scale(1.01)" }}
        whileInView={{ transform: "scale(1)" }}
        transition={{ duration: 0.35 }}
      >
        <img
          src={data.otherImage[0]}
          alt={data.nama}
          className={`w-96 h-80 object-cover rounded-xl desktop:absolute desktop:-top-80`}
        />
      </motion.div>
    </div>
  );
};

export default ImageDescription;
