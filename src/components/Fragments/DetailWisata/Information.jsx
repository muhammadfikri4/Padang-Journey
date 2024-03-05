import React from "react";
import { motion } from "framer-motion";
import LikeButton from "../Kuliner/LikeButton";
import { Like } from "../../../utils/Function/Like";

const Information = ({
  title,
  description,
  before,
  after,
  show,
  data,
  setIsLiked,
  setLiked,
  checkLiked,
}) => {
  return (
    <motion.div
      initial={{ x: before }}
      whileInView={{ x: after }}
      transition={{ duration: 1 }}
      className="flex flex-col sm:gap-7 gap-4 sm:py-5 px-5 md:w-1/2"
    >
      <h1 className="font-[MetropolisBold] text-2xl md:text-left text-center">
        {title}
      </h1>
      <p className="font-[Metropolis] text-sm leading-6">{description}</p>
      {show && (
        <div
          className="w-max"
          onClick={() => {
            Like({ data, setIsLiked });
            setLiked(JSON.parse(localStorage.getItem("like-wisata")) || []);
          }}
        >
          <LikeButton
            data={data}
            checkLiked={checkLiked}
            bg={"#b8ff68"}
            bot={true}
          />
        </div>
      )}
    </motion.div>
  );
};

export default Information;
