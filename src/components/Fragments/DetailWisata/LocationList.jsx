import React from "react";
import Location from "./Location";

const LocationList = ({ data }) => {
  return (
    <>
      <div className="absolute bottom-10 md:flex hidden md:flex-row flex-col sm:gap-10 gap-5 px-3">
        <Location location={data.kecamatan} />
        <Location location={data.kota} />
        <Location location={data.provinsi} />
      </div>
    </>
  );
};

export default LocationList;
