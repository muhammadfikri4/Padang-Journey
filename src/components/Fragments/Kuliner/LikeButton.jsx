import React from "react";
import { LikeKuliner } from "../../../utils/Function/Like";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const LikeButton = ({ checkLiked, setIsLiked, data, bg, bot }) => {
  return (
    <div
      className={`p-2 ${
        bot ? "rounded-lg" : "rounded-bl-xl"
      } cursor-pointer z-5`}
      style={{ backgroundColor: bg || "white" }}
      // onClick={() => LikeKuliner({ data, setIsLiked })}
    >
      {checkLiked(data.id) ? (
        <IoMdHeart className="text-black text-2xl" />
      ) : (
        <IoMdHeartEmpty className="text-black text-2xl" />
      )}
    </div>
  );
};

export default LikeButton;
