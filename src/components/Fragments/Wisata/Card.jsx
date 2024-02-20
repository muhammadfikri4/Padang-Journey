import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/wisata/${item.id}`} className="flex w-9/12 gap-5">
      <img
        src={item.imageUrl}
        alt={item.nama}
        className="w-[200px] h-[150px] object-cover rounded-xl"
      />
      <div className="flex flex-col justify-center gap-5">
        <p className="font-bold text-2xl">{item.nama}</p>
        <p>
          {item.kecamatan}, {item.kota}
        </p>
        <p className="w-full h-[45px] text-sm truncate whitespace-nowrap text-wrap">
          {item.deskripsi}
        </p>
      </div>
    </Link>
  );
};

export default Card;
