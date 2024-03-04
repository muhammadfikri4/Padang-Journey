import React from "react";
import { Like, LikeKuliner } from "../../../utils/Function/Like";
import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const CardFavorit = ({
  item,
  i,
  setKuliner,
  setWisata,
  setIsLiked,
  duration,
}) => {
  return (
    <motion.div
      initial={{ transform: "scale(0)" }}
      whileInView={{ transform: "scale(1)" }}
      transition={{ duration }}
      className="relative overflow-hidden shadow-xl  w-full h-full rounded-xl"
      key={i}
    >
      <Link
        to={`${item.ulasan ? `/kuliner/${item.id}` : `/wisata/${item.id}`}`}
      >
        <Card className=" w-full overflow-hidden">
          <div className="w-full">
            <img
              src={item.imageUrl}
              alt="profile-picture"
              className="h-64 w-full object-cover"
            />
          </div>

          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 text-[19px]"
            >
              {item.nama}
            </Typography>
          </CardBody>
        </Card>
      </Link>
      <div className="absolute top-0 right-0">
        <div
          className={`p-2 rounded-bl-lg rounded-tr-lg cursor-pointer z-5`}
          style={{ backgroundColor: "#b8ff68" }}
          onClick={() => {
            item.ulasan
              ? (() => {
                  LikeKuliner({ data: item, setIsLiked });
                  setKuliner(
                    JSON.parse(localStorage.getItem("like-kuliner")) || []
                  );
                })()
              : (() => {
                  Like({ data: item, setIsLiked });
                  setWisata(
                    JSON.parse(localStorage.getItem("like-wisata")) || []
                  );
                })();
          }}
        >
          <IoMdHeart className="text-black text-2xl" />
          {/* {checkLiked({
                  id: item.id,
                  category: item.ulasan ? "kuliner" : "wisata",
                }) ? (
                  <IoMdHeart className="text-black text-2xl" />
                ) : (
                  <IoMdHeartEmpty className="text-black text-2xl" />
                )} */}
        </div>
      </div>
    </motion.div>
  );
};

export default CardFavorit;
