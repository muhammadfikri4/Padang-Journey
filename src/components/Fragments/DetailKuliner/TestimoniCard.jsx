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
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src={data.fotoProfil}
            alt={data.nama}
            className="w-10 h-10 object-cover rounded-full"
          />

          <p className="font-[Metropolis] text-sm">{data.nama}</p>
        </div>
        <div>
          <div className="flex gap-2">
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
