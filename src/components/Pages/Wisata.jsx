import React, { useEffect } from "react";
import Layout from "../Layout/Wisata/Layout";
import { useLocation } from "react-router-dom";

const Wisata = ({ navActive, setNavActive }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout setNavActive={setNavActive} navActive={navActive} />
    </>
  );
};

export default Wisata;
