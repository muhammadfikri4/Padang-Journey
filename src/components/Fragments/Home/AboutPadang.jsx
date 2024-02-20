import React from "react";
import Button from "./Button";
import wisata from "../../../utils/Wisata.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutPadang = () => {
  return (
    <div className="flex justify-center">
      <section className="px-10 py-5 flex gap-10">
        <div className="flex flex-col gap-10">
          {wisata.slice(0, 2).map((item) => (
            <motion.div
              initial={{ opacity: 0, transform: "scale(0)" }}
              whileInView={{ opacity: 1, transform: "scale(1)" }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/wisata/${item.id}`}>
                <img
                  src={item.imageUrl}
                  alt={item.nama}
                  className="object-cover w-64 h-40 rounded-3xl"
                />
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, transform: "scale(0)" }}
          whileInView={{ opacity: 1, transform: "scale(1)" }}
          transition={{ duration: 0.4 }}
        >
          <Link to={`/wisata/${wisata[2].id}`}>
            <img
              src={wisata[2].imageUrl}
              alt="wisata"
              className="w-64 h-[360px] rounded-3xl object-cover "
            />
          </Link>
        </motion.div>
      </section>
      <section className="flex flex-col gap-7 py-5 px-5 w-1/2">
        <p>
          Kota Padang memiliki keindahan alam yang menarik, seperti pantai dan
          gunung yang mempesona. Beberapa tempat wisata populer di kota ini
          antara lain Pantai Padang, Pantai Air Manis, Bukit Tinggi, Danau
          Maninjau, dan Gunung Marapi.Kota Padang juga terkenal dengan masakan
          Padang yang terkenal di seluruh Indonesia dan bahkan dunia. Masakan
          Padang yang terkenal adalah nasi rendang, gulai ayam, dendeng balado,
          dan sate padang.Selain itu, Kota Padang juga memiliki sejarah dan
          budaya yang kaya, seperti adat Minangkabau yang masih dijaga hingga
          saat ini.
        </p>
        <Button />
      </section>
    </div>
  );
};

export default AboutPadang;