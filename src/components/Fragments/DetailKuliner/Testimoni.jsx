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
        className="lg:w-96 lg:h-96 w-full h-80 object-cover rounded-xl"
      ></motion.img>
      <div className="lg:w-1/2 w-full flex flex-col gap-3 sm:-mt-3 -mt-5 sm:px-0 px-3">
        <h1 className="font-[Montserrat] text-2xl text-center ">Testimoni</h1>
        <div className="flex flex-col gap-8">
          {data.testimoni.map((item, i) => (
            <TestimoniCard data={item} index={i} />
            // <div className="relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-xl px-5">
            //   <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            //     <img
            //       src={item.fotoProfil}
            //       alt={item.nama}
            //       className="relative inline-block h-8 w-8 !rounded-full  object-cover object-center"
            //     />
            //     <div className="flex w-full flex-col gap-0.5">
            //       <div className="flex items-center justify-between">
            //         <h5 className="block font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            //           {item.nama}
            //         </h5>
            //         <div className="flex items-center gap-1">
            //           {/* <p>{item.rating}</p> */}
            //           {(() => {
            //             const items = [];
            //             for (let index = 0; index < item.rating; index++) {
            //               items.push(
            //                 <FaStar className="text-xl text-[#e6fc24]" />
            //               );
            //             }
            //             return items;
            //           })()}
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            //   <div className="p-0 mb-2">
            //     <p className="block font-sans text-sm antialiased font-light leading-relaxed text-inherit">
            //       "{item.komen}"
            //     </p>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimoni;
