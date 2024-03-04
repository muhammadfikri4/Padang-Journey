import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { Like, findLike } from "../../../utils/Function/Like";
import LikeButton from "./LikeButton";

const FamousWisata = ({ wisata }) => {
  const [isLiked, setIsLiked] = useState(false);

  const [liked, setLiked] = useState(
    JSON.parse(localStorage.getItem("like-wisata")) || []
  );
  const checkLiked = (id) => {
    const result = liked.find((item) => item.id == id);
    return result;
  };
  useEffect(() => {
    setLiked(JSON.parse(localStorage.getItem("like-wisata")));
  }, [isLiked]);

  return (
    <>
      <div className="pb-10 px-5 my-14 grid md:grid-cols-4 md:grid-rows-2 sm:grid-cols-3 sm:grid-rows-3 grid-cols-2 grid-rows-4 sm:gap-5 gap-3">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-[MetropolisBold] text-xl sm:text-3xl sm:text-right text-left"
        >
          Wisata Terkenal Padang.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, transform: "scale(0)" }}
          whileInView={{ opacity: 1, transform: "scale(1)" }}
          transition={{ duration: 0.2 }}
          className="rounded-xl overflow-hidden"
        >
          <img
            className="w-full h-full object-cover hover:scale-110 duration-300"
            src={wisata[0].imageUrl}
            alt="image"
          />
          <div
            className="absolute -top-1 -right-1 "
            onClick={() =>
              (() => {
                Like({ data: wisata[0], setIsLiked });
                setLiked(JSON.parse(localStorage.getItem("like-wisata")) || []);
              })()
            }
          >
            <LikeButton
              data={wisata[0]}
              checkLiked={checkLiked}
              setIsLiked={setIsLiked}
            />
            {/* <div className="bg-white p-2 rounded-bl-xl cursor-pointer">
              {checkLiked(wisata[0].id) ? (
                <IoMdHeart className="text-black text-2xl" />
              ) : (
                <IoMdHeartEmpty className="text-black text-2xl" />
              )}
            </div> */}
          </div>
        </motion.div>
        {wisata.slice(3, 7).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, transform: "scale(0)" }}
            whileInView={{ opacity: 1, transform: "scale(1)" }}
            transition={{ duration: `0.${index + 3}` }}
            className="rounded-xl overflow-hidden"
          >
            <img
              className="w-full h-full object-cover hover:scale-110 duration-300"
              src={item.imageUrl}
              alt={item.nama}
            />
            <div
              className="absolute -top-1 -right-1 "
              onClick={() =>
                (() => {
                  Like({ data: item, setIsLiked });
                  setLiked(
                    JSON.parse(localStorage.getItem("like-wisata")) || []
                  );
                })()
              }
            >
              <LikeButton
                setIsLiked={setIsLiked}
                checkLiked={checkLiked}
                data={item}
              />
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, transform: "scale(0)" }}
          whileInView={{ opacity: 1, transform: "scale(1)" }}
          transition={{ duration: 0.5 }}
          className="rounded-xl overflow-hidden"
        >
          <img
            className="w-full h-full object-cover hover:scale-110 duration-300"
            src={wisata[2].imageUrl}
            alt={wisata[2].nama}
          />
          <div
            className="absolute top-0 right-0 "
            onClick={() =>
              (() => {
                Like({ data: wisata[2], setIsLiked });
                setLiked(JSON.parse(localStorage.getItem("like-wisata")) || []);
              })()
            }
          >
            <LikeButton
              data={wisata[2]}
              checkLiked={checkLiked}
              setIsLiked={setIsLiked}
            />
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-[MetropolisBold] sm:text-3xl text-xl sm:text-left text-right"
        >
          Nikmati Petualangan
        </motion.h1>
      </div>
    </>
  );
};

export default FamousWisata;
