import React from "react";
import { motion } from "framer-motion";

const Information = ({ title, description, before, after }) => {
  return (
    <motion.div
      initial={{ x: before }}
      whileInView={{ x: after }}
      transition={{ duration: 1 }}
      className="flex flex-col sm:gap-7 gap-4 sm:py-5 px-5 sm:w-1/2"
    >
      <h1 className="font-[MetropolisBold] text-2xl sm:text-left text-center">
        {title}
      </h1>
      <p className="font-[Metropolis] text-sm leading-6">{description}</p>
    </motion.div>
  );
};

export default Information;
