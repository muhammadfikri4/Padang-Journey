import React, { useEffect } from "react";
import wisata from "../../../utils/Wisata.json";
import Banner from "../../Fragments/DetailWisata/Banner";
import Description from "../../Fragments/DetailWisata/Description";
import Galery from "../../Fragments/DetailWisata/Galery";
import LatarBelakang from "../../Fragments/DetailWisata/LatarBelakang";
import LocationList from "../../Fragments/DetailWisata/LocationList";
import Maps from "../../Fragments/DetailWisata/Maps";
import OtherWisataList from "../../Fragments/DetailWisata/OtherWisataList";
import Title from "../../Fragments/DetailWisata/Title";

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
        <LocationList data={data} />
      </div>
      <section className="flex justify-center">
        <h1 className="text-center mt-10 py-2 text-4xl font-[MetropolisBold] border border-x-0 border-t-0 w-max border-b-black">
          Detail
        </h1>
      </section>
      <Description data={data} />
      <LatarBelakang data={data} />
      <Maps data={data} />
      <div className="flex justify-center py-10 sm:px-10 px-3">
        <Galery data={data} />
      </div>
      <OtherWisataList wisata={wisata} />
    </>
  );
};

export default Layout;
