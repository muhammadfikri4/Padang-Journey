import React, { useEffect, useState } from "react";
import ImageDescription from "./ImageDescription";
import Information from "./Information";
import { Like, LikeKuliner } from "../../../utils/Function/Like";
import LikeButton from "../Kuliner/LikeButton";

const Description = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);

  const [liked, setLiked] = useState(
    JSON.parse(localStorage.getItem("like-wisata")) || []
  );
  const checkLiked = (id) => {
    const result = liked.find((item) => item.id == id);
    return result;
  };
  useEffect(() => {
    setLiked(JSON.parse(localStorage.getItem("like-wisata")) || []);
  }, [isLiked]);
  return (
    <>
      <section className="py-10 flex flex-col md:flex-row items-center justify-center lg:gap-20 md:gap-8 gap-5 overflow-x-hidden">
        <ImageDescription data={data} />
        <>
          <Information
            title="Deskripsi"
            before={200}
            after={0}
            description={data.deskripsi}
            data={data}
            setIsLiked={setIsLiked}
            setLiked={setLiked}
            checkLiked={checkLiked}
            show={true}
          />
        </>
      </section>
    </>
  );
};

export default Description;
