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
    <>
      <nav
        className={`fixed flex items-center justify-between -top-1 right-0 left-0 py-7 px-7 z-10 ${
          isScroll || active
            ? "shadow-[0_-4px_15px_0_rgba(0,0,0,0.75)]"
            : `shadow-none`
        } `}
        style={{
          backgroundColor:
            isScroll ||
            active ||
            (findActive &&
              (location.pathname == "/wisata" ||
                location.pathname == "/kuliner"))
              ? "white"
              : `rgba(0,0,0,.3)`,
        }}
      >
        {/* <div className="flex justify-between items-center">
        
      </div> */}
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
          <Link to="/tentang">
            <li>Tentang</li>
          </Link>
        </ul>
        <div className="flex items-center justify-center gap-3">
          <div
            className="flex justify-center items-center"
            onClick={() => setIsChecked(!isChecked)}
          >
            {/* <FaCloudMoon className="text-4xl text-black" /> */}

            {/* <div className="flex items-center justify-center">
              {isChecked ? (
                <>
                  <IoPartlySunnySharp
                    className={`text-2xl ${
                      active ||
                      isScroll ||
                      (findActive &&
                        (location.pathname == "/wisata" ||
                          location.pathname == "/kuliner"))
                        ? "text-black"
                        : "text-white"
                    }`}
                  />
                </>
              ) : (
                <>
                  <FaCloudMoon
                    className={`text-2xl ${
                      active || isScroll ? "text-black" : "text-white"
                    }`}
                  />
                </>
              )}
            </div> */}
          </div>
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
      </nav>
      <div
        className={`fixed ${
          active ? "translate-y-0" : "-translate-y-[1000px]"
        } duration-300 z-[9] sm:hidden flex flex-col top-0 right-0 left-0 bottom-0 py-5 px-5 justify-center gap-12 list-none bg-white`}
      >
        <Link to={`/`} onClick={() => setActive(!active)}>
          Beranda
        </Link>
        <Link to={`/wisata`} onClick={() => setActive(!active)}>
          Wisata
        </Link>
        <Link to={`/kuliner`} onClick={() => setActive(!active)}>
          Kuliner
        </Link>
        <Link to={`/favorit`} onClick={() => setActive(!active)}>
          Favorit
        </Link>
        <Link to={`/tentang`} onClick={() => setActive(!active)}>
          Tentang
        </Link>
      </div>
    </>
  );
};

export default Navbar;
