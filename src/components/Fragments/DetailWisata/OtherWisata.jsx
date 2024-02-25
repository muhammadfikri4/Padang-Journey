import React from "react";
import { Link } from "react-router-dom";

const OtherWisata = ({ wisata }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-center py-5">
      {wisata.map((item, i) => (
        <Link to={`/wisata/${item.id}`} key={i}>
          <img
            src={item.imageUrl}
            alt={item.nama}
            className="desktop:w-64 desktop:h-64 w-40 h-40 object-cover rounded-xl"
          />
        </Link>
      ))}
    </div>
  );
};

export default OtherWisata;
