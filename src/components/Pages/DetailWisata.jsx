import React, { useState } from "react";
import { useParams, useRoutes } from "react-router-dom";
import wisata from "../../utils/Wisata.json";
import Navbar from "../Fragments/Navbar";
import Title from "../Fragments/DetailWisata/Title";
import { motion } from "framer-motion";
import ImageDescription from "../Fragments/DetailWisata/ImageDescription";
import Banner from "../Fragments/DetailWisata/Banner";
import Layout from "../Layout/DetailWisata/Layout";
import NotFound from "../Fragments/NotFound";

const DetailWisata = () => {
  const { id } = useParams();
  const data = wisata.find((item) => item.id == id);
  return <>{!data ? <NotFound /> : <Layout data={data} />}</>;
};

export default DetailWisata;
