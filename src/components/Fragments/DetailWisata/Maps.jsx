import React from "react";

const Maps = ({ data }) => {
  return (
    <section className="sm:px-10 px-5">
      <iframe
        src={data.locationUrl}
        className="w-full h-[350px] sm:h-[600px]"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Maps;
