import { Carousel } from "@material-tailwind/react";
import React from "react";
import wisata from "../../../utils/Wisata.json";

const Galery = ({ data }) => {
  return (
    <Carousel className="rounded-xl sm:w-1/2 w-full sm:h-72 h-52">
      <div className="flex w-full h-full gap-1">
        <img
          src={data.imageUrl}
          alt="image 1"
          className="h-full w-1/2 object-cover"
        />
        <img
          src={data.gallery[0]}
          alt="image 1"
          className="h-full w-1/2 object-cover"
        />
      </div>
      <div className="flex w-full h-full gap-1">
        <img
          src={data.gallery[1]}
          alt="image 1"
          className="h-full w-1/2 object-cover"
        />
        <img
          src={data.gallery[2]}
          alt="image 1"
          className="h-full w-1/2 object-cover"
        />
      </div>
    </Carousel>
  );
};

export default Galery;
