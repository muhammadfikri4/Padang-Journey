import React, { useEffect } from "react";
import Layout from "../Layout/Kuliner/Layout";

const Kuliner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout />
    </>
  );
};

export default Kuliner;
