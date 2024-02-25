import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import wisata from "../../../utils/Wisata.json";
import Card from "./Find/Card";
import { useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const Find = ({ query }) => {
  const [search, setSearch] = useState();
  const [filteringData, setFilteringData] = useState(wisata);
  const navigate = useNavigate();
  const getSearchData = (e) => {
    e.preventDefault();
    navigate(`/wisata?search=${search}`);
    const lowerSearch = search.toLowerCase();
    const filtering = wisata.filter((item) => {
      const lowerTitle = item.nama.toLowerCase();

      return lowerTitle.includes(lowerSearch);
    });
    setFilteringData(filtering);
  };

  const getDefaultData = () => {
    if (!search) {
      return;
    }
    const lowerSearch = query.toLowerCase();
    const filtering = wisata.filter((item) => {
      const lowerTitle = item.nama.toLowerCase();

      return lowerTitle.includes(lowerSearch);
    });
    setFilteringData(filtering);
  };
  useEffect(() => {
    getDefaultData();
  }, []);
  return (
    <>
      <div className="w-screem h-20 bg-[rgba(0,0,0,1)]"></div>
      <form
        onSubmit={getSearchData}
        className="flex w-screen desktop:px-10 px-3 gap-2 py-10"
      >
        <input
          type="search"
          className="w-full desktop:text-base font-[Metropolis] outline-none opacity-70 rounded-md desktop:px-4 px-3 border border-[rgba(0,0,0,.3)]"
          placeholder="Search"
          defaultValue={query && !"all" === "string" ? query : ""}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-[#303030] desktop:p-2.5 p-2 flex justify-center items-center rounded-md"
          onClick={getSearchData}
        >
          <IoSearch className="text-3xl text-white" />
        </button>
      </form>
      <div className="flex gap-5 py-10 px-10 justify-center flex-wrap">
        {filteringData.length > 0 ? (
          <>
            {filteringData.map((item) => (
              <Card data={item} />
            ))}
          </>
        ) : (
          <div className="flex justify-center">
            <NotFound width="300px" height="300px" />
          </div>
        )}
      </div>
    </>
  );
};

export default Find;
