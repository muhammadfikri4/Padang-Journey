import React from "react";
import Title from "../../Fragments/DetailWisata/Title";
import { motion } from "framer-motion";
import ImageDescription from "../../Fragments/DetailWisata/ImageDescription";
import Banner from "../../Fragments/DetailWisata/Banner";
import Description from "../../Fragments/DetailWisata/Description";
import wisata from "../../../utils/Wisata.json";
import { Link } from "react-router-dom";

const Layout = ({ data }) => {
  return (
    <>
      <Banner data={data} />
      <Title data={data} />
      <section className="flex justify-center">
        <h1 className="text-center mt-10 py-2 text-4xl font-[MetropolisBold] border border-x-0 border-t-0 w-max border-b-black">
          Detail
        </h1>
      </section>
      <section className="py-10 flex justify-center gap-20">
        <ImageDescription data={data} />
        <Description title="Deskripsi" description={data.deskripsi} />
      </section>
      <section className="flex py-10 justify-center gap-20">
        <Description title="Latar Belakang" description={data.latarBelakang} />
        <motion.div
          initial={{ transform: "scale(0)" }}
          whileInView={{ transform: "scale(1)" }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={data.otherImage[2]}
            alt={data.nama}
            className="w-98 h-80 object-cover rounded-xl"
          />
        </motion.div>
      </section>
      <section className="py-5">
        <div className="flex justify-center">
          <h1 className="font-[MetropolisBold] pb-2 text-3xl text-center border border-x-0 border-t-0 border-b-black w-max">
            Wisata Menarik Lainnya
          </h1>
        </div>
        <div className="flex flex-wrap gap-5 justify-center py-5">
          {wisata.map((item, i) => (
            <Link to={`/wisata/${item.id}`}>
              <img
                src={item.imageUrl}
                alt={item.nama}
                className="w-64 h-64 object-cover rounded-xl"
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Layout;
