import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import wisata from "../../../../utils/Wisata.json";
import { Link, useNavigate } from "react-router-dom";
import { Like, findLike } from "../../../../utils/Function/Like";

const Card = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    findLike({ setIsLiked, data });
  });
  return (
    <div className="desktop:w-56 desktop:h-72 w-36 h-48 rounded-xl overflow-hidden group relative">
      <Link to={`/wisata/${data.id}`}>
        <img
          src={data.imageUrl}
          alt={data.nama}
          className="w-full h-full object-cover"
        />
      </Link>
      <p className="transform desktop:group-hover:-translate-y-14 group-hover:-translate-y-16 transition-transform duration-300 desktop:text-[15px] text-[12px] text-center bg-[rgba(0,0,0,.5)] desktop:py-5 h-[70px] text-white font-[Montserrat] cursor-pointer desktop:px-0 px-3 desktop:block flex items-center justify-center">
        <span>{data.nama}</span>
      </p>
      <div className="absolute top-0 right-0">
        <div
          className="bg-white p-1.5 px-2 rounded-bl-xl cursor-pointer"
          onClick={() => Like({ setIsLiked, data })}
        >
          {isLiked == true ? (
            <IoMdHeart className="text-xl" />
          ) : (
            <IoMdHeartEmpty className="text-xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
