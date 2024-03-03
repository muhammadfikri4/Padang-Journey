import React from "react";
import CardBenefit from "./CardBenefit";

const Benefit = () => {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-center font-[MetropolisBold] text-3xl">
          Keuntungan Berwisata Di Padang
        </h1>
        <div className="md:px-3 sm:px-1 px-3 py-10 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-center md:gap-3 sm:gap-5 gap-3">
          <CardBenefit
            title={"Memiliki Wisata yang Sangat Indah"}
            description={
              "Padang memiliki wisata yang menawarkan keindahan alam yang memikat dan warisan budaya yang kaya karena dikelilingi oleh pegunungan yang hijau dan pantai yang mempesona."
            }
            duration={0.2}
          />
          <CardBenefit
            title={"Kuliner yang Sangat Beragam"}
            description={
              "Padang memiliki kulinernya yang kaya dan lezat, dengan ciri khas masakan Minangkabau yang menggunakan bumbu rempah-rempah yang melimpah dan kuah santan yang gurih."
            }
            duration={0.3}
          />
          <CardBenefit
            title={"Jarak Destinasi yang Relatif Dekat"}
            description={
              "Padang memiliki wisata yang berjarak dekat yang memungkinkan wisatawan untuk menikmati pengalaman wisata yang beragam dalam waktu singkat."
            }
            duration={0.4}
          />
          <CardBenefit
            title={"Spot Foto yang Sangat Menarik"}
            description={
              "Salah satu spot foto yang menarik di Padang adalah Ngarai Sianok. Terletak di sekitar Bukittinggi, Ngarai Sianok menawarkan pemandangan alam yang spektakuler."
            }
            duration={0.5}
          />
        </div>
      </div>
    </>
  );
};

export default Benefit;
