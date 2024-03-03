import React from "react";
import { motion } from "framer-motion";

const CardBenefit = ({ title, description, duration }) => {
  return (
    <motion.div
      initial={{ transform: "scale(0)" }}
      whileInView={{ transform: "scale(1)" }}
      transition={{ duration }}
      className="sm:max-w-64 sm:min-w-20 sm:max-h-80 w-full border border-[rgba(0,0,0,0.4)] rounded-lg p-2"
    >
      <h1 className="font-[Montserrat] text-[#83cf2c]">{title}</h1>
      <p className="text-sm font-[Metropolis] my-4">{description}</p>
    </motion.div>
  );
};

export default CardBenefit;
