import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OtherKuliner = ({ kuliner }) => {
  return (
    <>
      <section className="py-5">
        <div className="flex justify-center overflow-hidden">
          <motion.h1
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4 }}
            className="font-[MetropolisBold] pb-2 text-3xl text-center border border-x-0 border-t-0 border-b-black w-max"
          >
            Kuliner Menarik Lainnya
          </motion.h1>
        </div>
        <div className="grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 justify-items-center sm:px-5 px-5 md:px-32 gap-5 py-5">
          {kuliner.map((item, index) => (
            <Link to={`/kuliner/${item.id}`} key={index}>
              <motion.div
                initial={{ opacity: 0, transform: "scale(0)" }}
                whileInView={{ opacity: 1, transform: "scale(1)" }}
                transition={{ duration: `0.${index}` }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.nama}
                  className="sm:w-64 sm:h-64 w-40 h-40 object-cover rounded-xl"
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default OtherKuliner;
