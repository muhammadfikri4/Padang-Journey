import React from "react";
import { Like } from "../../../utils/Function/Like";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const LikeButton = ({ checkLiked, setIsLiked, data }) => {
  return (
    <div
      className="bg-white p-2 rounded-bl-xl cursor-pointer"
      onClick={() => Like({ data, setIsLiked })}
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
