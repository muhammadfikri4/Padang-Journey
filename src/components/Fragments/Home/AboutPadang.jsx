import React from "react";
import Button from "./Button";
import wisata from "../../../utils/Wisata.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutPadang = () => {
  return (
    <div className="flex flex-col px-10 py-10 gap-10 overflow-x-hidden">
      <motion.h1
        initial={{ x: -150 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center font-[Montserrat]"
      >
        Tentang Padang
      </motion.h1>
      <div className="flex md:flex-row flex-col duration-500 gap-5 lg:gap-10 justify-center">
        <section className="flex gap-5 duration-500 lg:gap-10 md:min-w-[400px] flex-1 justify-end">
          <div className="flex flex-1 flex-col gap-5 lg:gap-10">
            {wisata.slice(0, 2).map((item) => (
              <motion.div
                initial={{ opacity: 0, transform: "scale(0)" }}
                whileInView={{ opacity: 1, transform: "scale(1)" }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="flex-1"
              >
                <Link to={`/wisata/${item.id}`}>
                  <img
                    src={item.imageUrl}
                    alt={item.nama}
                    className="object-cover w-full h-full rounded-3xl"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, transform: "scale(0)" }}
            whileInView={{ opacity: 1, transform: "scale(1)" }}
            transition={{ duration: 0.4 }}
            className="flex-1"
          >
            <Link to={`/wisata/${wisata[2].id}`}>
              <img
                src={wisata[2].imageUrl}
                alt="wisata"
                className="w-full h-full rounded-3xl object-cover "
              />
            </Link>
          </motion.div>
        </section>
        <motion.section
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-2 lg:gap-7 lg:text-base text-sm py-5 flex-1"
        >
          <p className="leading-7 font-[Metropolis]">
            Kota Padang memiliki keindahan alam yang menarik, seperti pantai dan
            gunung yang mempesona. Beberapa tempat wisata populer di kota ini
            antara lain Pantai Padang, Pantai Air Manis, Bukit Tinggi, Danau
            Maninjau, dan Gunung Marapi.Kota Padang juga terkenal dengan masakan
            Padang yang terkenal di seluruh Indonesia dan bahkan dunia.
          </p>
          <Button />
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPadang;
