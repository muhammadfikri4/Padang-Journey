import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { Like, LikeKuliner } from "../../../utils/Function/Like";
import { motion } from "framer-motion";

const Layout = () => {
  const [kuliner, setKuliner] = useState(
    JSON.parse(localStorage.getItem("like-kuliner")) || []
  );
  const [wisata, setWisata] = useState(
    JSON.parse(localStorage.getItem("like-wisata")) || []
  );
  // const wisata = JSON.parse(localStorage.getItem("like-wisata")) || [];
  const [datas, setDatas] = useState([...wisata, ...kuliner]);
  const [isLiked, setIsLiked] = useState(false);
  const checkLiked = ({ id, category }) => {
    const result =
      category == "wisata"
        ? wisata.find((item) => item.id == id)
        : kuliner.find((item) => item.id == id);
    return result;
  };

  useEffect(() => {
    setDatas([...wisata, ...kuliner]);
  }, [wisata, kuliner]);
  return (
    <>
      <div className="w-screen h-80 bg-[#caf0fa] ">
        <div className="w-full h-full bg-[url('https://firebasestorage.googleapis.com/v0/b/pariwisata-d318c.appspot.com/o/polkadots.png?alt=media&token=77ba68f9-9d61-48d9-a0f6-c0ca3e060a7c')] bg-no-repeat opacity-20"></div>
        <motion.h1
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-[Montserrat] lg:text-5xl md:text-4xl sm:text-2xl text-2xl relative left-20 -top-1/3"
        >
          Wisata / Kuliner yang Anda Sukai
        </motion.h1>
      </div>
      {datas.length > 0 ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 justify-items-center px-3 py-5">
          {datas.map((item, i) => (
            <div
              className="relative overflow-hidden shadow-xl max-w-96 max-h-96 rounded-xl"
              key={i}
            >
              <Link
                to={`${
                  item.ulasan ? `/kuliner/${item.id}` : `/wisata/${item.id}`
                }`}
              >
                <Card className=" w-full overflow-hidden">
                  <div className="w-full">
                    <img
                      src={item.imageUrl}
                      alt="profile-picture"
                      className="h-64 w-full object-cover"
                    />
                  </div>

                  <CardBody className="text-center">
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      className="mb-2 text-[19px]"
                    >
                      {item.nama}
                    </Typography>
                  </CardBody>
                </Card>
              </Link>
              <div className="absolute top-0 right-0">
                <div
                  className={`p-2 rounded-bl-lg rounded-tr-lg cursor-pointer z-5`}
                  style={{ backgroundColor: "#b8ff68" }}
                  onClick={() => {
                    item.ulasan
                      ? (() => {
                          LikeKuliner({ data: item, setIsLiked });
                          setKuliner(
                            JSON.parse(localStorage.getItem("like-kuliner")) ||
                              []
                          );
                        })()
                      : (() => {
                          Like({ data: item, setIsLiked });
                          setWisata(
                            JSON.parse(localStorage.getItem("like-wisata")) ||
                              []
                          );
                        })();
                  }}
                >
                  <IoMdHeart className="text-black text-2xl" />
                  {/* {checkLiked({
                  id: item.id,
                  category: item.ulasan ? "kuliner" : "wisata",
                }) ? (
                  <IoMdHeart className="text-black text-2xl" />
                ) : (
                  <IoMdHeartEmpty className="text-black text-2xl" />
                )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p className="text-center font-[MetropolisBold]">
            Anda Tidak Menyukai Apapun!
          </p>
        </div>
      )}
    </>
  );
};

export default Layout;
