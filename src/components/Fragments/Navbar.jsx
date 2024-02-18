import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed flex items-center justify-between top-0 right-0 left-0 py-7 px-7">
      {/* <div className="flex justify-between items-center">
        
      </div> */}
      <Link to="/" className="font-bold text-xl text-white">
        Padang Journey
      </Link>
      <ul className="flex items-center gap-10 text-white">
        <Link to="/">
          <li>Beranda</li>
        </Link>
        <Link to="/">
          <li>Wisata</li>
        </Link>
        <Link to="/">
          <li>Kuliner</li>
        </Link>
        <Link to="/">
          <li>Favorit</li>
        </Link>
        <Link to="/">
          <li>Tentang Kami</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
