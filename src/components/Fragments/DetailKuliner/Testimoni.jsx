import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import TestimoniCard from "./TestimoniCard";

const Testimoni = ({ data }) => {
  return (
    <>
      <motion.img
        initial={{ transform: "scale(0)" }}
        whileInView={{ transform: "scale(1)" }}
        transition={{ duration: 0.5 }}
        src={data.restaurantImage}
        className="md:w-80 md:h-80 w-full h-96 object-cover rounded-xl"
      ></motion.img>
      <div className="md:w-1/2 w-full flex flex-col gap-3 sm:-mt-3 -mt-5 sm:px-0 px-3">
        <h1 className="font-[Montserrat] text-2xl text-center ">Testimoni</h1>
        <div className="flex flex-col gap-5">
          {data.testimoni.map((item, i) => (
            <TestimoniCard data={item} index={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimoni;
