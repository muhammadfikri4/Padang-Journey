import React from "react";
import { motion } from "framer-motion";

const Maps = () => {
  return (
    <div className="px-5 py-10">
      <motion.h1
        initial={{ x: -250 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center font-[Montserrat] text-4xl py-5"
      >
        Lokasi Kota Padang
      </motion.h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255314.4285981683!2d100.22645134762556!3d-0.934236408098996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b942e2b117bb%3A0xb8468cb5c3046ba5!2sPadang%2C%20Kota%20Padang%2C%20Sumatera%20Barat!5e0!3m2!1sid!2sid!4v1709564720921!5m2!1sid!2sid"
        className="w-full h-[350px] sm:h-[600px]"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
