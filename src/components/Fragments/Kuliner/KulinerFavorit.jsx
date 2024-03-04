import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdArrowRightAlt } from "react-icons/md";
import LikeButton from "./LikeButton";

const KulinerFavorit = ({ kuliner, checkLiked, setIsLiked }) => {
  return (
    <>
      <div className="py-20">
        <h1 className="text-center font-[Montserrat] text-3xl">
          Kuliner Favorit Khas Padang
        </h1>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-center relative overflow-hidden py-10 sm:gap-2 gap-5 sm:md:px-0 sm:px-5 px-3">
          {kuliner.slice(0, 4).map((item, i) => (
            <motion.div
              initial={{ transform: "scale(0)" }}
              whileInView={{ transform: "scale(1)" }}
              transition={{ duration: `0.${i + 2}` }}
              key={i}
              className={`sm:max-w-64 sm:min-w-20 sm:h-80 w-full group rounded-xl overflow-hidden relative`}
              title={item.nama}
            >
              <Link to={`/kuliner/${item.id}`} key={i}>
                <>
                  <img
                    src={item.imageUrl}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`w-full h-full absolute top-0 group-hover:opacity-100 opacity-0 ${
                      (i == 0 && "bg-[rgba(229,57,53,.7)]") ||
                      (i == 1 && "bg-[rgba(53,85,229,0.7)]") ||
                      (i == 2 && "bg-[rgba(73,229,53,0.7)]") ||
                      (i == 3 && "bg-[rgba(255,163,76,0.7)]")
                    } flex flex-col justify-center items-center duration-500`}
                  >
                    <p className="text-xl font-[Montserrat] text-white cursor-default">
                      {item.nama}
                    </p>
                    <MdArrowRightAlt className="text-5xl text-white" />
                  </div>
                </>
              </Link>
              <div className="absolute -top-1 -right-1 ">
                <LikeButton
                  checkLiked={() => checkLiked(item.id)}
                  setIsLiked={setIsLiked}
                  data={item}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default KulinerFavorit;
