import React from "react";
import { motion } from "framer-motion";

const OtherWisataItem = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "scale(0)" }}
      whileInView={{ opacity: 1, transform: "scale(1)" }}
      transition={{ duration: `0.${index}` }}
    >
      <img
        src={data.imageUrl}
        alt={data.nama}
        className="lg:w-full lg:h-72 md:w-56 md:h-56 w-screen h-36 object-cover rounded-xl"
      />
    </motion.div>
  );
};

export default OtherWisataItem;
