import React from "react";
import Layout from "../Layout/Wisata/Layout";
import { useLocation } from "react-router-dom";
import Find from "../Fragments/Wisata/Find";

const Wisata = () => {
  const location = useLocation();
  const param = new URLSearchParams(location.search).get("search");
  return <>{param ? <Find query={param} /> : <Layout />}</>;
};

export default Wisata;
