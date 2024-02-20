import React from "react";

const Title = ({ data }) => {
  return (
    <section className="flex justify-center">
      <h1 className="text-8xl font-[MetropolisBold] text-white text-center absolute top-1/2 p-6">
        {data.nama}
      </h1>
    </section>
  );
};

export default Title;
