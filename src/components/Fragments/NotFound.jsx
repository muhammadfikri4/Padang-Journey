import React from "react";
import Lottie from "lottie-react";
import notfound from "../../assets/Lottie/404.json";

const NotFound = ({ height = "80vh", width = "80vw" }) => {
  return (
    <>
      <Lottie
        animationData={notfound}
        loop={true}
        style={{
          width,
          height,
        }}
      />
    </>
  );
};

export default NotFound;
