import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import PadangJourney from "../../assets/Icons/PadangJourneyWhite.svg";

const Footer = () => {
  return (
    <div className="grid grid-cols-2 px-5 py-7 bg-[#b8ff68]">
      <div className="sm:w-96 w-[100%] sm:px-10 px-2">
        {/* <h1 className="font-[Montserrat] text-3xl pb-3">Padang Journey</h1> */}
        <img src={PadangJourney} alt="logo" className="w-20 h-20 pb-3" />
        <p className="text-sm">
          Website ini merupakan sebuah halaman informasi tentang wisata dan
          kuliner apa saja yang ada di Kota Padang
        </p>
        <div className="flex items-center gap-3 py-5">
          <FaInstagram className="text-2xl cursor-pointer" />
          <FaXTwitter className="text-2xl cursor-pointer" />
          <FaFacebook className="text-2xl cursor-pointer" />
          <FaYoutube className="text-2xl cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 font-[MetropolisBold]">
        <Link to={"/beranda"}>Beranda</Link>
        <Link to={"/wisata"}>Wisata</Link>
        <Link to={"/kuliner"}>Kuliner</Link>
        <Link to={"/favorit"}>Favorit</Link>
        <Link to={"/tentang"}>Tentang</Link>
      </div>
    </div>
  );
};

export default Footer;
