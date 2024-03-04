import React from "react";
import { motion } from "framer-motion";
import { Progress } from "@material-tailwind/react";

const Review = ({ data }) => {
  return (
    <>
      <motion.div
        initial={{ x: -150 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-5 md:w-max w-full"
      >
        <div className="py-3 flex justify-center">
          <h1 className="font-[Montserrat] text-2xl">Ulasan</h1>
        </div>
        <div className="flex items-center gap-5">
          <p className="w-32">Luar Biasa</p>
          <Progress
            value={data.ulasan.luarBiasa}
            className="md:w-56 w-full"
            size="lg"
          />
        </div>
        <div className="flex items-center gap-5">
          <p className="w-32">Sangat Bagus</p>
          <Progress
            value={data.ulasan.sangatBagus}
            className="md:w-56 w-full"
            size="lg"
          />
        </div>
        <div className="flex items-center gap-5">
          <p className="w-32">Biasa</p>
          <Progress
            value={data.ulasan.biasa}
            className="md:w-56 w-full"
            size="lg"
          />
        </div>
        <div className="flex items-center gap-5">
          <p className="w-32">Buruk</p>
          <Progress
            value={data.ulasan.buruk}
            className="md:w-56 w-full"
            size="lg"
          />
        </div>
        <div className="flex items-center gap-5">
          <p className="w-32">Sangat Buruk</p>
          <Progress
            value={data.ulasan.sangatBuruk}
            className="md:w-56 w-full"
            size="lg"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Review;
