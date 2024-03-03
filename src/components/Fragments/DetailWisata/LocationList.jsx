import React from "react";
import Location from "./Location";

const LocationList = ({ data }) => {
  return (
    <>
      <div className="absolute top-[510px] sm:flex hidden sm:flex-row flex-col sm:gap-10 gap-5">
        <Location location={data.kecamatan} />
        <Location location={data.kota} />
        <Location location={data.provinsi} />
      </div>
    </>
  );
};

export default LocationList;
