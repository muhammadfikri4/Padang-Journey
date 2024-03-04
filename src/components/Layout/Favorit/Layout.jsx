import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import kuliner from "../../../utils/Kuliner.json";
import wisata from "../../../utils/Wisata.json";
import { Like, LikeKuliner } from "../../../utils/Function/Like";

const Layout = () => {
  const kuliner = JSON.parse(localStorage.getItem("like-kuliner")) || [];
  const wisata = JSON.parse(localStorage.getItem("like-wisata")) || [];
  const [datas, setDatas] = useState([...wisata, ...kuliner]);
  const [isLiked, setIsLiked] = useState(false);
  const checkLiked = ({ id, category }) => {
    const result =
      category == "wisata"
        ? wisata.find((item) => item.id == id)
        : kuliner.find((item) => item.id == id);
    return result;
  };
  return (
    <>
      <div className="w-screen h-80 bg-[#caf0fa] ">
        <div className="w-full h-full bg-[url('https://firebasestorage.googleapis.com/v0/b/pariwisata-d318c.appspot.com/o/polkadots.png?alt=media&token=77ba68f9-9d61-48d9-a0f6-c0ca3e060a7c')] bg-no-repeat opacity-20"></div>
        <h1 className="font-[Montserrat] text-5xl relative left-20 -top-1/3">
          Wisata / Kuliner yang Anda Sukai
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-5 justify-items-center py-5">
        {datas.map((item, i) => (
          <Link
            to={`${item.ulasan ? `/kuliner/${item.id}` : `/wisata/${item.id}`}`}
          >
            <Card className="w-96">
              <CardHeader floated={false} className="h-full relative">
                <img
                  src={item.imageUrl}
                  alt="profile-picture"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute top-0 right-0">
                  <div
                    className={`p-2 rounded-bl-lg cursor-pointer z-5 z-10`}
                    style={{ backgroundColor: "white" }}
                    onClick={() =>
                      item.ulasan
                        ? LikeKuliner({ data: kuliner, setIsLiked })
                        : Like({ data: wisata, setIsLiked })
                    }
                  >
                    {checkLiked({
                      id: item.id,
                      category: item.ulasan ? "kuliner" : "wisata",
                    }) ? (
                      <IoMdHeart className="text-black text-2xl" />
                    ) : (
                      <IoMdHeartEmpty className="text-black text-2xl" />
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {item.nama}
                </Typography>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Layout;
