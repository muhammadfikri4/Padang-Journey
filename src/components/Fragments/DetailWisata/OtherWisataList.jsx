import React from "react";
import OtherWisata from "./OtherWisata";

const OtherWisataList = ({ wisata }) => {
  return (
    <>
      <section className="py-5">
        <div className="flex justify-center">
          <h1 className="font-[MetropolisBold] pb-2 text-3xl text-center border border-x-0 border-t-0 border-b-black w-max">
            Wisata Menarik Lainnya
          </h1>
        </div>
        <OtherWisata wisata={wisata} />
      </section>
    </>
  );
};

export default OtherWisataList;
