import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRender(true);
    }, 550);

    // Membersihkan timeout pada unmount untuk mencegah memory leaks
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1">
        <div className="flex flex-col sm:justify-center gap-5 sm:items-center sm:px-5 px-4 sm:order-1 order-2 sm:mt-0 mt-5">
          <motion.h1
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-[Montserrat] sm:text-4xl text-2xl sm:leading-[1.4] leading-relaxed"
          >
            Jelajahi Kuliner Terbaik Khas{" "}
            <span className="bg-[#b8ff68] py-1 px-3">Padang</span>
          </motion.h1>
          <motion.p
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-[Metropolis] sm:text-base text-sm"
          >
            Padang mempunyai kuliner yang kaya dan bervariasi, menjadi salah
            satu kebanggaan dari Provinsi Sumatera Barat, Indonesia. Dikenal
            dengan kelezatan dan kekayaan rempah-rempahnya, kuliner Padang
            menawarkan hidangan-hidangan yang menggugah selera dan unik.
          </motion.p>
        </div>
        <div className=" sm:order-2 order-1">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/pariwisata-d318c.appspot.com/o/SatePadang.webp?alt=media&token=776b9266-f687-4d78-bf1e-703f0cd51979"
            }
            alt="img"
            className="sm:w-full sm:h-screen w-screen h-[50vh] object-cover sm:rounded-bl-xl rounded-none"
          />
          <div
            className={`${
              isRender && "hidden duration-200"
            } bg-gray-300 sm:w-full sm:h-screen w-screen h-[50vh] absolute top-0`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
