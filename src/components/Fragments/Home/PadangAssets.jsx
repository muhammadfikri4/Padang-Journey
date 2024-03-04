import kuliner from "../../../utils/Kuliner.json";
import wisata from "../../../utils/Wisata.json";
import { motion } from "framer-motion";

export default function PadangAssets() {
  return (
    <div
      className="kuliner py-20 bg-slate-200"
      style={{ paddingInline: "calc((100% - 900px) / 2)" }}
    >
      <div className="mx-5 flex flex-col gap-10 ">
        <motion.h2
          initial={{ x: -150 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold"
        >
          Wisata & Kuliner Terbaik di Padang
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 grid-rows-5 md:grid-rows-3 md:gap-10 gap-5">
          <motion.div
            initial={{ transform: "scale(0)" }}
            whileInView={{ transform: "scale(1)" }}
            transition={{ duration: 0.2 }}
            className="text-center flex flex-col overflow-hidden"
          >
            <img
              className="w-full min-h-[200px] rounded-xl duration-1000 xs:min-h-[150px] sm:min-h-[230px] h-full object-cover"
              src={wisata[2].imageUrl}
              alt=""
            />
            <h3
              className="text-sm md:text-base lg:text-lg font-semibold px-4 py-2"
              style={{ lineHeight: "1.1rem" }}
            >
              {wisata[2].nama}
            </h3>
          </motion.div>
          <motion.div
            initial={{ transform: "scale(0)" }}
            whileInView={{ transform: "scale(1)" }}
            transition={{ duration: 0.3 }}
            className="text-center row-span-1 xs:row-span-2 flex flex-col overflow-hidden"
          >
            <img
              className="w-full min-h-[200px] rounded-xl duration-1000 sm:min-h-[150px] md:min-h-[230px] h-full object-cover"
              src={wisata[1].otherImage[2]}
              alt=""
            />
            <h3
              className="text-sm md:text-base lg:text-lg font-semibold px-4 py-2"
              style={{ lineHeight: "1.1rem" }}
            >
              {wisata[1].nama}
            </h3>
          </motion.div>
          <motion.div
            initial={{ transform: "scale(0)" }}
            whileInView={{ transform: "scale(1)" }}
            transition={{ duration: 0.4 }}
            className="text-center md:row-span-1 row-span-1 sm:row-span-2 flex flex-col overflow-hidden"
          >
            <img
              className="w-full min-h-[200px] rounded-xl duration-1000 sm:min-h-[150px] md:min-h-[230px] h-full object-cover"
              src={kuliner[2].gallery[0]}
              alt=""
            />
            <h3
              className="text-sm md:text-base lg:text-lg font-semibold px-4 py-2"
              style={{ lineHeight: "1.1rem" }}
            >
              {kuliner[2].nama}
            </h3>
          </motion.div>
          <motion.div
            initial={{ transform: "scale(0)" }}
            whileInView={{ transform: "scale(1)" }}
            transition={{ duration: 0.5 }}
            className="text-center row-span-1 sm:row-span-2 flex flex-col overflow-hidden"
          >
            <img
              className="w-full min-h-[200px] rounded-xl duration-1000 xs:min-h-[150px] sm:min-h-[230px] h-full object-cover"
              src={kuliner[3].imageUrl}
              alt=""
            />
            <h3
              className="text-sm md:text-base lg:text-lg font-semibold px-4 py-2"
              style={{ lineHeight: "1.1rem" }}
            >
              {kuliner[3].nama}
            </h3>
          </motion.div>
          <motion.div
            initial={{ transform: "scale(0)" }}
            whileInView={{ transform: "scale(1)" }}
            transition={{ duration: 0.6 }}
            className="text-center row-span-1 sm:row-span-2 flex flex-col overflow-hidden"
          >
            <img
              className="w-full min-h-[200px] rounded-xl duration-1000 sm:min-h-[150px] md:min-h-[230px] h-full object-cover"
              src={wisata[4].imageUrl}
              alt=""
            />
            <h3
              className="text-sm md:text-base lg:text-lg font-semibold px-4 py-2"
              style={{ lineHeight: "1.1rem" }}
            >
              Lorem ipsum
            </h3>
          </motion.div>
          <motion.div
            initial={{ transform: "scale(0)" }}
            whileInView={{ transform: "scale(1)" }}
            transition={{ duration: 0.65 }}
            className="text-center flex flex-col overflow-hidden"
          >
            <img
              className="w-full min-h-[200px] rounded-xl duration-1000 xs:min-h-[150px] sm:min-h-[230px] h-full object-cover"
              src={kuliner[1].imageUrl}
              alt=""
            />
            <h3
              className="text-sm md:text-base lg:text-lg font-semibold px-4 py-2"
              style={{ lineHeight: "1.1rem" }}
            >
              {kuliner[1].nama}
            </h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
