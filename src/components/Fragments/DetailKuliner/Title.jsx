import React from "react";

const Title = ({ data }) => {
  return (
    <section className="flex justify-center">
      <h1 className="desktop:text-7xl text-4xl font-[Montserrat] text-white text-center absolute top-1/2 p-6">
        {data.nama}
      </h1>
    </section>
  );
};

export default Title;
