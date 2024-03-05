import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

const TestimoniCard = ({ data, index }) => {
  return (
    <>
      <motion.div
        initial={{ x: -150 }}
        whileInView={{ x: 0 }}
        transition={{ duration: `0.${index + 2}` }}
        className="flex gap-10"
      >
        <div className="md:flex hidden flex-col justify-center items-center gap-2 w-max">
          <img
            src={data.fotoProfil}
            alt={data.nama}
            className="md:inline-block hidden object-cover rounded-full md:w-[80px] w-10 "
          />

          <p className="lg:opacity-1 opacity-0 font-[Metropolis] text-sm">
            {data.nama}
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <img
              src={data.fotoProfil}
              alt={data.nama}
              className="md:hidden inline-block w-8 h-8 object-cover rounded-full"
            />
            <div className="flex">
              {(() => {
                const items = [];
                for (let index = 0; index < data.rating; index++) {
                  items.push(<FaStar className="text-xl text-[#e6fc24]" />);
                }
                return items;
              })()}
            </div>
            <p>{data.rating}</p>
          </div>
          <p className="font-[Metropolis] text-sm">{data.komen}</p>
        </div>
      </motion.div>
    </>
  );
};

export default TestimoniCard;
