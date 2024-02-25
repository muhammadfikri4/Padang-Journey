import React from "react";

const Description = ({ title, description }) => {
  return (
    <div className="flex flex-col desktop:gap-7 gap-4 desktop:py-5 px-5 desktop:w-1/2">
      <h1 className="font-[MetropolisBold] text-2xl desktop:text-left text-center">
        {title}
      </h1>
      <p className="font-[Metropolis] text-sm leading-6">{description}</p>
    </div>
  );
};

export default Description;
