import React from "react";
import Information from "./Information";
import { motion } from "framer-motion";

const LatarBelakang = ({ data }) => {
  return (
    <section className="flex flex-col-reverse sm:flex-row py-10 justify-center sm:gap-20 gap-5">
      <Information
        title="Latar Belakang"
        description={data.latarBelakang}
        after={0}
        before={-200}
      />
      <motion.div
        initial={{ transform: "scale(0)" }}
        whileInView={{ transform: "scale(1)" }}
        transition={{ duration: 0.2 }}
        className="sm:px-0 px-5"
      >
        <img
          src={data.otherImage[2]}
          alt={data.nama}
          className="w-98 h-80 object-cover rounded-xl"
        />
      </motion.div>
    </section>
  );
};

export default LatarBelakang;
