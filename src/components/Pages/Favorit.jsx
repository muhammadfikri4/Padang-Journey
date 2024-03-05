import React, { useEffect } from "react";
import Layout from "../Layout/Favorit/Layout";

const Favorit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout />
    </>
  );
};

export default Favorit;
