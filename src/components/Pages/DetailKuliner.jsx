import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import kuliner from "../../utils/Kuliner.json";
import Layout from "../Layout/DetailKuliner/Layout";
import NotFound from "../Fragments/NotFound";

const DetailKuliner = () => {
  const { id } = useParams();
  const data = kuliner.find((item) => item.id == id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {!data ? (
        <div className="flex justify-center items-center">
          <NotFound width="100vw" height="100vh" />
        </div>
      ) : (
        <Layout data={data} />
      )}
    </>
  );
};

export default DetailKuliner;
