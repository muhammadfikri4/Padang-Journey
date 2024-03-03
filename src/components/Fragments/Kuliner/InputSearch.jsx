import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import useStore from "../../../store/store";

const InputSearch = ({ onClick }) => {
  const { findActive, setFindActive } = useStore();
  return (
    <>
      <div className="sm:hidden flex justify-center z-96">
        <div
          className="sm:hidden flex justify-center items-center gap-2 fixed bottom-10 bg-[#e9fcc3] px-5 py-3 rounded-lg font-[Montserrat] text-[#4bca11] z-20 cursor-pointer"
          onClick={onClick}
        >
          {findActive ? (
            <>
              <IoClose className="text-3xl" />
            </>
          ) : (
            <>
              <p>Search</p>
              <IoSearch className="text-3xl" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default InputSearch;
