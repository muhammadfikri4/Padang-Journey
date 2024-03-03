import React from "react";
import { Link } from "react-router-dom";
import OtherWisataItem from "./OtherWisataItem";

const OtherWisata = ({ wisata }) => {
  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 justify-items-center sm:px-5 px-5 md:px-32 gap-5 py-5">
      {wisata.map((item, index) => (
        <Link to={`/wisata/${item.id}`} key={index}>
          <OtherWisataItem data={item} index={index} />
        </Link>
      ))}
    </div>
  );
};

export default OtherWisata;
