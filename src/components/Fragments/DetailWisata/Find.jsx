import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Find = ({ setIsFind, isFind }) => {
  return (
    <div className="w-screen h-screen bg-white z-50 absolute top-0">
      <div className="w-screen flex justify-end px-5 ">
        <IoMdClose
          className="text-4xl text cursor-pointer"
          onClick={() => setIsFind(false)}
        />
      </div>
      <div className="flex items-center justify-center py-10">
        <input
          type="text"
          className="w-9/12 py-4 px-3 text-xl font-[Metropolis] bg-[#d3d3d3] rounded-bl-xl rounded-tl-xl outline-none"
          placeholder="Search"
          autoFocus
        />
        <div className="bg-[#d3d3d3] py-3 px-3 rounded-tr-xl rounded-br-xl cursor-pointer">
          <IoSearch className="text-4xl text-[rgba(0,0,0,.7)]" />
        </div>
      </div>
    </div>
  );
};

export default Find;
