import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [active, setActive] = useState(false);
  const [bg, setBg] = useState("transparent");
  const location = useLocation();

  const param = new URLSearchParams(location.search).get("search");

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
        isScroll || active
          ? "shadow-[0_2px_10px_0_rgba(0,0,0,0.75)]"
          : `shadow-none`
      } `}
      style={{
        backgroundColor: isScroll || active ? "white" : `transparent`,
      }}
    >
      {/* <div className="flex justify-between items-center">
        
      </div> */}
      <Link
        to="/"
        className={`font-bold text-xl ${
          isScroll || active ? "text-black" : "text-white"
        }`}
      >
        Padang Journey
      </Link>
      <ul
        className={`desktop:flex hidden items-center gap-10 ${
          isScroll || active ? "text-black" : "text-white"
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
      {active ? (
        <IoClose
          className="desktop:hidden text-4xl text-black"
          onClick={() => setActive(false)}
        />
      ) : (
        <RiMenu4Line
          className={`desktop:hidden text-4xl ${
            isScroll ? "text-black" : "text-white"
          } `}
          onClick={() => setActive(true)}
        />
      )}
    </nav>
  );
};

export default Navbar;
