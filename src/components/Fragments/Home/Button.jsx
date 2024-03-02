import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link
      to="/wisata"
      className="bg-[#041f2f] text-white w-max px-7 py-2 rounded-3xl"
    >
      Jelajahi Sekarang
    </Link>
  );
};

export default Button;
