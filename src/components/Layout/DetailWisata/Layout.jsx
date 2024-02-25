import React, { useEffect, useState } from "react";
import Title from "../../Fragments/DetailWisata/Title";
import { motion } from "framer-motion";
import ImageDescription from "../../Fragments/DetailWisata/ImageDescription";
import Banner from "../../Fragments/DetailWisata/Banner";
import Description from "../../Fragments/DetailWisata/Description";
import wisata from "../../../utils/Wisata.json";
import { Link } from "react-router-dom";
import Location from "../../Fragments/DetailWisata/Location";
import Maps from "../../Fragments/DetailWisata/Maps";
import LatarBelakang from "../../Fragments/DetailWisata/LatarBelakang";
import OtherWisata from "../../Fragments/DetailWisata/OtherWisata";
import Find from "../../Fragments/DetailWisata/Find";

const Layout = ({ data }) => {
  // const images = [data.imageUrl, ...data.otherImage];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  return (
    <>
      <Banner data={data} />
      <Title data={data} />
      <div className="flex justify-center">
        <div className="absolute top-[510px] flex desktop:flex-row flex-col desktop:gap-10 gap-5">
          <Location location={data.kecamatan} />
          <Location location={data.kota} />
          <Location location={data.provinsi} />
        </div>
      </div>
      <section className="flex justify-center">
        <h1 className="text-center mt-10 py-2 text-4xl font-[MetropolisBold] border border-x-0 border-t-0 w-max border-b-black">
          Detail
        </h1>
      </section>
      <section className="py-10 flex flex-col desktop:flex-row items-center justify-center desktop:gap-20 gap-5">
        <ImageDescription data={data} />
        <Description title="Deskripsi" description={data.deskripsi} />
      </section>
      <section className="flex flex-col-reverse desktop:flex-row py-10 justify-center desktop:gap-20 gap-5">
        <LatarBelakang data={data} />
      </section>
      <section className="desktop:px-10 px-5">
        <Maps data={data} />
      </section>
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

export default Layout;
