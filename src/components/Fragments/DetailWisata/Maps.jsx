import React from "react";

const Maps = ({ data }) => {
  return (
    <iframe
      src={data.locationUrl}
      className="w-full h-[350px] desktop:h-[600px]"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Maps;
