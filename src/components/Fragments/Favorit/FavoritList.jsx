import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { Like, LikeKuliner } from "../../../utils/Function/Like";
import { IoMdHeart } from "react-icons/io";
import CardFavorit from "./CardFavorit";

const FavoritList = ({ datas, setIsLiked, setWisata, setKuliner }) => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 justify-items-center px-3 py-5">
      {datas.map((item, i) => (
        <CardFavorit
          duration={`0.${i + 2}`}
          key={i}
          item={item}
          i={i}
          setIsLiked={setIsLiked}
          setKuliner={setKuliner}
          setWisata={setWisata}
        />
      ))}
    </div>
  );
};

export default FavoritList;
