import React from "react";
import useStore from "../../../store/store";
import { Link } from "react-router-dom";

const FindWisata = ({ data, findWisata, wisata, setData }) => {
  const { findActive, setFindActive } = useStore();
  return (
    <div
      className={`absolute bg-white top-0 bottom-0 left-0 right-0 ${
        findActive ? "translate-y-0" : "-translate-y-[1000px]"
      } duration-300 z-[8]`}
    >
      <div className="flex justify-center px-3">
        <input
          type="search"
          className="w-screen bg-[#e7ffdd] mt-28 text-xl px-5 py-2 outline-none rounded-md placeholder:font-[Montserrat] placeholder:text-base"
          placeholder="Cari Wisata"
          onChange={(e) => findWisata(e, { wisata, setData })}
          autoFocus
        />
      </div>
      <div className="flex flex-col gap-5 mt-5">
        {data.length > 0 ? (
          data.map((item, i) => (
            <Link
              to={`/wisata/${item.id}`}
              key={i}
              className="w-screen px-5 flex gap-5"
            >
              <img
                src={item.imageUrl}
                alt={item.nama}
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div className="flex py-3">
                <h1 className="font-[MetropolisBold] text-lg">{item.nama}</h1>
              </div>
            </Link>
          ))
        ) : (
          <>
            <div className="flex justify-center items">
              <p className="text-lg font-[Metropolis] text-black">
                Wisata Tidak Ditemukan!
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FindWisata;
