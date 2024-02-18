import React from "react";
import Button from "./Button";

const AboutPadang = () => {
  return (
    <>
      <section className="px-10 py-5 flex gap-10">
        <div className="flex flex-col gap-10">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pariwisata-d318c.appspot.com/o/WisataPadang-1.jpg?alt=media&token=5669d78a-6004-4eef-afed-0a6b65e746c5"
            alt="wisata"
            className="object-cover w-64 h-40 rounded-3xl"
          />

          <img
            src="https://firebasestorage.googleapis.com/v0/b/pariwisata-d318c.appspot.com/o/images.jpg?alt=media&token=a0c5351d-eb26-4e7e-9ba2-33a3c7883591"
            alt="wisata"
            className="w-64 h-40 bg-[#414141] rounded-3xl object-cover"
          />
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/pariwisata-d318c.appspot.com/o/sungai.jpg?alt=media&token=3b46a616-4d9f-4efc-82a4-17559fbea122"
          alt="wisata"
          className="w-64 h-[360px] bg-[#414141] rounded-3xl object-cover "
        />
      </section>
      <section className="flex flex-col justify-between py-5 px-5 w-1/2">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          possimus quas ducimus quae ex corrupti earum, sint architecto vel,
          necessitatibus assumenda accusantium quisquam reprehenderit explicabo
          eum obcaecati cupiditate. Dolores explicabo sunt necessitatibus eos
          iure temporibus. Quidem ipsa libero soluta dolorum officia. Unde eum
          saepe inventore quae nulla ut temporibus numquam, possimus voluptas
          quos veniam veritatis ipsam, quo laudantium aliquid ab eos. Officiis
          similique nemo eveniet maiores, culpa magni soluta in mollitia aperiam
          recusandae dolor ipsa, magnam dignissimos, saepe corporis. Perferendis
          aperiam voluptas sit aspernatur quas fugit eveniet, odit totam
          consequatur eius quasi, iste voluptates repellendus eos vero neque
          magnam quam?
        </p>
        <Button />
      </section>
    </>
  );
};

export default AboutPadang;
