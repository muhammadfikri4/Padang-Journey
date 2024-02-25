import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const Location = ({ location }) => {
  return (
    <div className="desktop:w-72 desktop:h-12 w-full h-12 bg-[rgba(0,0,0,.3)] flex items-center justify-start gap-8 px-5 desktop:py-8 py-3 rounded-xl backdrop-blur-[2px]">
      <IoLocationOutline className="text-[rgba(255,255,255,.8)] text-3xl" />
      <p className="text-white text-base font-[Montserrat]">{location}</p>
    </div>
  );
};

export default Location;
