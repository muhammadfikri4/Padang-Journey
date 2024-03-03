import React from "react";

const Banner = ({ data }) => {
  return (
    <div className="bg-black w-screen h-screen">
      <img
        src={data.imageUrl}
        alt={data.nama}
        className="w-full h-full object-cover opacity-55"
      />
    </div>
  );
};

export default Banner;
