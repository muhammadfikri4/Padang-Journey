import { Carousel } from "@material-tailwind/react";
import React from "react";
import wisata from "../../../utils/Wisata.json";

const Galery = ({ data }) => {
  return (
    <Carousel className="rounded-xl w-screen sm:h-[400px] h-44">
      <div className="flex w-full h-full gap-1">
        <img
          src={data.imageUrl}
          alt="image 1"
          className="h-full w-1/3 object-cover"
        />
        <img
          src={data.otherImage[0]}
          alt="image 1"
          className="h-full w-1/3 object-cover"
        />
        <img
          src={data.otherImage[1]}
          alt="image 1"
          className="h-full w-1/3 object-cover"
        />
      </div>
      <div className="flex w-full h-full gap-1">
        <img
          src={data.otherImage[2]}
          alt="image 1"
          className="h-full w-full object-cover"
        />
      </div>
    </Carousel>
  );
};

export default Galery;
