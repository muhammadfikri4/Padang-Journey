import React from "react";
import Description from "./Description";
import { motion } from "framer-motion";

const LatarBelakang = ({ data }) => {
  return (
    <>
      <Description title="Latar Belakang" description={data.latarBelakang} />
      <motion.div
        initial={{ transform: "scale(0)" }}
        whileInView={{ transform: "scale(1)" }}
        transition={{ duration: 0.2 }}
        className="desktop:px-0 px-5"
      >
        <img
          src={data.otherImage[2]}
          alt={data.nama}
          className="w-98 h-80 object-cover rounded-xl"
        />
      </motion.div>
    </>
  );
};

export default LatarBelakang;
