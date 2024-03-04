import React, { useState } from "react";
import { motion } from "framer-motion";
import LikeButton from "../Kuliner/LikeButton";

const Description = ({ data, kuliner }) => {
  const [isLiked, setIsLiked] = useState(false);
  //   const [datas, setDatas] = useState(kuliner);
  const liked = JSON.parse(localStorage.getItem("like-kuliner")) || [];
  const checkLiked = (id) => {
    const result = liked.find((item) => item.id == id);
    return result;
  };
  return (
    <>
      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 w-full flex flex-col justify-center gap-5"
      >
        <h1 className="font-[Montserrat] text-2xl text-center">Deskripsi</h1>
        <p className="font-[Metropolis]">{data.deskripsi}</p>
        <div className="w-max">
          <LikeButton
            setIsLiked={setIsLiked}
            data={data}
            checkLiked={checkLiked}
            bg={"#b8ff68"}
            bot={true}
          />
        </div>
      </motion.div>
      <div className="flex justify-center">
        <motion.img
          initial={{ transform: "scale(0)" }}
          whileInView={{ transform: "scale(1)" }}
          transition={{ duration: 0.5 }}
          src={data.gallery[0]}
          alt={data.nama}
          className="md:w-72 md:h-72 w-full h-96 object-cover rounded-xl"
        />
      </div>
    </>
  );
};

export default Description;
