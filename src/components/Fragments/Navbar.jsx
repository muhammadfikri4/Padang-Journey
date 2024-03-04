import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaCloudMoon } from "react-icons/fa";
import { IoPartlySunnySharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import useStore from "../../store/store";
import PadangJourney from "../../assets/Icons/PadangJourney.svg";

const Navbar = ({ navActive, setNavActive }) => {
  const [active, setActive] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const { findActive, setFindActive } = useStore();
  const location = useLocation();

  const listenScrollEvent = (event) => {
    if (window.scrollY > 0) {
      return setIsScroll(true);
    } else {
      if (window.innerWidth >= 540) {
        setActive(false);
      }
      return setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", listenScrollEvent);

    return () => window.removeEventListener("resize", listenScrollEvent);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <nav className={`fixed top-0 right-0 left-0 z-[9999]`}>
      <div
        className={`duration-300 flex items-center justify-between px-7 ${
          isScroll || active
            ? "shadow-[0_-4px_15px_0_rgba(0,0,0,0.75)] py-5"
            : `shadow-none py-7`
        } `}
        style={{
          backgroundColor:
            isScroll ||
            active ||
            (findActive &&
              (location.pathname == "/wisata" ||
                location.pathname == "/kuliner"))
              ? "white"
              : `rgba(0,0,0,.1)`,
        }}
      >
        <Link
          to="/"
          className={`font-bold text-xl ${
            isScroll ||
            active ||
            (findActive &&
              (location.pathname == "/wisata" ||
                location.pathname == "/kuliner"))
              ? "text-black"
              : "text-white"
          }`}
        >
          <img src={PadangJourney} alt="logo" className="w-12 h-12" />
        </Link>
        <ul
          className={`sm:flex hidden items-center gap-10 ${
            isScroll ||
            active ||
            (findActive &&
              (location.pathname == "/wisata" ||
                location.pathname == "/kuliner"))
              ? "text-black"
              : "text-white"
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
        </ul>
        <div className="flex items-center justify-center gap-3">
          <div
            className="flex justify-center items-center"
            onClick={() => setIsChecked(!isChecked)}
          ></div>
          {active ? (
            <IoClose
              className={`sm:hidden inline-block cursor-pointer text-3xl ${
                active ? "text-black" : "text-white"
              }`}
              onClick={() => setActive(!active)}
            />
          ) : (
            <RiMenu4Line
              className={`sm:hidden inline-block cursor-pointer text-3xl ${
                active ||
                isScroll ||
                (findActive &&
                  (location.pathname == "/wisata" ||
                    location.pathname == "/kuliner"))
                  ? "text-black"
                  : "text-white"
              }`}
              onClick={() => setActive(!active)}
            />
          )}
          {findActive &&
          (location.pathname == "/wisata" ||
            location.pathname == "/kuliner") ? (
            <IoClose
              className={`sm:inline-block hidden cursor-pointer text-3xl ${
                active ||
                isScroll ||
                (findActive &&
                  (location.pathname == "/wisata" ||
                    location.pathname == "/kuliner"))
                  ? "text-black"
                  : "text-white"
              }`}
              onClick={() => {
                setNavActive(!navActive);
                setFindActive();
              }}
            />
          ) : (
            <>
              {location.pathname == "/wisata" ||
              location.pathname == "/kuliner" ? (
                <IoSearch
                  className={`sm:inline-block hidden cursor-pointer text-3xl ${
                    active || isScroll ? "text-black" : "text-white"
                  }`}
                  onClick={() => {
                    setNavActive(!navActive);
                    setFindActive();
                  }}
                />
              ) : (
                ""
              )}
            </>
          )}
        </div>
      </div>
      <div
        className={`absolute ${
          active ? "translate-y-0" : "-translate-y-[1000px]"
        } duration-300 z-[-1] sm:hidden flex flex-col top-[100%] right-0 left-0 bottom-0 justify-between min-h-max list-none bg-white font-[Metropolis]`}
      >
        <Link to={`/`} onClick={() => setActive(!active)}>
          <p className="hover:bg-gray-100 px-5 py-3">Beranda</p>
        </Link>
        <Link to={`/wisata`} onClick={() => setActive(!active)}>
          <p className="hover:bg-gray-100 px-5 py-3">Wisata</p>
        </Link>
        <Link to={`/kuliner`} onClick={() => setActive(!active)}>
          <p className="hover:bg-gray-100 px-5 py-3">Kuliner</p>
        </Link>
        <Link to={`/favorit`} onClick={() => setActive(!active)}>
          <p className="hover:bg-gray-100 px-5 py-3">Favorit</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
