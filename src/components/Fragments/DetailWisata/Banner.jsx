import React from "react";

const Banner = ({ data }) => {
  return (
    <>
      <img
        src={data.imageUrl}
        alt={data.nama}
        className="w-screen h-screen object-cover"
      />
    </>
  );
};

export default Banner;
