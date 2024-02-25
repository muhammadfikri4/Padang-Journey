import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const InputSearch = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("all");
  return (
    <>
      <form
        onSubmit={() => navigate(`/wisata?search=${search}`)}
        className="w-screen flex desktop:flex-row flex-col desktop:justify-center items-center absolute top-1/2 desktop:gap-3 gap-2 desktop:px-3 px-2"
      >
        <input
          type="search"
          className="desktop:w-8/12 w-full desktop:text-2xl outline-none opacity-70 rounded-md desktop:p-4 py-2 px-3"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => navigate(`/wisata?search=${search}`)}
          className="bg-[#303030] desktop:p-4 p-1.5 flex justify-center items-center rounded-md desktop:w-20 w-full"
        >
          <IoSearch className="hidden desktop:inline-block text-3xl text-white" />
          <p className="inline-block desktop:hidden text-white font-[Montserrat]">
            Search
          </p>
        </button>
      </form>
    </>
  );
};

export default InputSearch;
