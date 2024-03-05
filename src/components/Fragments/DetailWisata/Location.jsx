import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const Location = ({ location }) => {
  return (
    <div className="bg-[rgba(0,0,0,.3)] flex items-center justify-center gap-8 p-3 px-7 rounded-xl backdrop-blur-[2px]">
      <IoLocationOutline className="text-[rgba(255,255,255,.8)] text-xl" />
      <p className="text-white lg:text-base md:text-[11px] text-sm font-[Montserrat]">
        {location}
      </p>
    </div>
  );
};

export default Location;
