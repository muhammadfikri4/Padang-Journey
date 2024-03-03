import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Carousel, Typography } from "@material-tailwind/react";
import wisata from "../../../utils/Wisata.json";

const Banner = () => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsDone(true);
    }, 500);

    // Membersihkan timeout pada unmount untuk mencegah memory leaks
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <div className="sm:flex hidden justify-center">
        <Carousel
          className="rounded-bl-xl rounded-br-xl w-screen h-screen"
          loop={true}
          autoplay={true}
          autoplayDelay={5000}
          navigation={false}
        >
          {wisata.slice(2, 5).map((item) => (
            <>
              <div className="flex w-full h-full gap-1">
                <img
                  src={item.imageUrl}
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
              </div>
            </>
          ))}
        </Carousel>
      </div>
      <div className="w-screen h-screen sm:hidden carousel flex">
        {wisata.slice(2, 5).map((item) => (
          <div className="carousel-item w-full h-full">
            <img
              src={item.imageUrl}
              className="w-full object-cover"
              alt={item.nama}
            />
          </div>
        ))}
      </div>
      <div
        className={`${
          isDone
            ? "hidden"
            : "absolute top-0 right-0 left-0 bottom-0 bg-gray-300"
        }`}
      ></div>
    </>
  );
};

export default Banner;
