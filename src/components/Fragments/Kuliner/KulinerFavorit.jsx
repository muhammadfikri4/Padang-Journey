import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdArrowRightAlt } from "react-icons/md";
import LikeButton from "./LikeButton";
import CardFavorit from "./CardFavorit";

const KulinerFavorit = ({ kuliner, checkLiked, setIsLiked }) => {
  return (
    <>
      <div className="py-20">
        <h1 className="text-center font-[Montserrat] text-3xl">
          Kuliner Favorit Khas Padang
        </h1>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-center relative overflow-hidden py-10 sm:gap-2 gap-5 sm:md:px-0 sm:px-5 px-3">
          {kuliner.slice(0, 4).map((item, i) => (
            <CardFavorit
              item={item}
              i={i}
              checkLiked={checkLiked}
              setIsLiked={setIsLiked}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default KulinerFavorit;
