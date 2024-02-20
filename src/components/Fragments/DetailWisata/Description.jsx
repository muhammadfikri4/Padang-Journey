import React from "react";

const Description = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-7 py-5 px-5 w-1/2">
      <h1 className="font-[MetropolisBold] text-2xl">{title}</h1>
      <p className="font-[Metropolis] text-sm leading-6">{description}</p>
    </div>
  );
};

export default Description;
