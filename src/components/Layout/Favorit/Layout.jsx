import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { Like, LikeKuliner } from "../../../utils/Function/Like";
import { motion } from "framer-motion";
import FavoritList from "../../Fragments/Favorit/FavoritList";
import Banner from "../../Fragments/Favorit/Banner";

const Layout = () => {
  const [kuliner, setKuliner] = useState(
    JSON.parse(localStorage.getItem("like-kuliner")) || []
  );
  const [wisata, setWisata] = useState(
    JSON.parse(localStorage.getItem("like-wisata")) || []
  );
  // const wisata = JSON.parse(localStorage.getItem("like-wisata")) || [];
  const [datas, setDatas] = useState([...wisata, ...kuliner]);
  const [isLiked, setIsLiked] = useState(false);
  const checkLiked = ({ id, category }) => {
    const result =
      category == "wisata"
        ? wisata.find((item) => item.id == id)
        : kuliner.find((item) => item.id == id);
    return result;
  };

  useEffect(() => {
    setDatas([...wisata, ...kuliner]);
  }, [wisata, kuliner]);
  return (
    <div className="overflow-x-hidden">
      <Banner />
      {datas.length > 0 ? (
        <FavoritList
          datas={datas}
          setIsLiked={setIsLiked}
          setWisata={setWisata}
          setKuliner={setKuliner}
        />
      ) : (
        <div className="flex justify-center items-center">
          <p className="text-center font-[MetropolisBold]">
            Anda Tidak Menyukai Apapun!
          </p>
        </div>
      )}
    </div>
  );
};

export default Layout;
