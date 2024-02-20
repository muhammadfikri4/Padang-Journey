import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 530) {
      return setIsScroll(false);
    } else if (window.scrollY > 530) {
      return setIsScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <nav
      className={`fixed flex items-center justify-between top-0 right-0 left-0 py-7 px-7 z-10 ${
        isScroll
          ? "bg-white shadow-[0_2px_10px_0_rgba(0,0,0,0.75)]"
          : "bg-transparent shadow-none"
      } `}
    >
      {/* <div className="flex justify-between items-center">
        
      </div> */}
      <Link
        to="/"
        className={`font-bold text-xl ${
          isScroll ? "text-black" : "text-white"
        }`}
      >
        Padang Journey
      </Link>
      <ul
        className={`flex items-center gap-10 ${
          isScroll ? "text-black" : "text-white"
        }`}
      >
        <Link to="/">
          <li>Beranda</li>
        </Link>
        <Link to="/wisata">
          <li>Wisata</li>
        </Link>
        <Link to="/kuliner">
          <li>Kuliner</li>
        </Link>
        <Link to="/favorit">
          <li>Favorit</li>
        </Link>
        <Link to="/tentang">
          <li>Tentang Kami</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;