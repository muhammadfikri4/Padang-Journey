import React from "react";
import ImageDescription from "./ImageDescription";
import Information from "./Information";

const Description = ({ data }) => {
  return (
    <>
      <section className="py-10 flex flex-col sm:flex-row items-center justify-center sm:gap-20 gap-5 overflow-x-hidden">
        <ImageDescription data={data} />
        <Information
          title="Deskripsi"
          before={200}
          after={0}
          description={data.deskripsi}
        />
      </section>
    </>
  );
};

export default Description;
