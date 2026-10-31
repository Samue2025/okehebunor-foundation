"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  galleryA1,
  galleryA2,
  galleryA3,
  galleryA4,
  galleryA5,
  galleryA6,
  galleryA7,
  galleryA8,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
  gallery26,
  gallery27,
  gallery28,
  gallery29,
  gallery30,
  gallery31,
  gallery32,
  gallery33,
  gallery34,
  gallery35,
  gallery36,
  gallery37,
  gallery38,
  gallery39,
} from "../../../public/assets/images";

const images = [
  galleryA1,
  galleryA2,
  galleryA3,
  galleryA4,
  galleryA5,
  galleryA6,
  galleryA7,
  galleryA8,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
  gallery26,
  gallery27,
  gallery28,
  gallery29,
  gallery30,
  gallery31,
  gallery32,
  gallery33,
  gallery34,
  gallery35,
  gallery36,
  gallery37,
  gallery38,
  gallery39,
];

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState(gallery1);

  const getImg = (img) => {
    setTempImg(img);
    setModal(true);
  };

  return (
    <>
      <section
        className="h-[493px] text-white flex items-center justify-center lg:px-24 px-4 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/assets/images/aboutHeroBanner.webp')" }}
      >
        <div className="flex flex-col items-center justify-center max-w-[608px]">
          <h1 className="rise-in text-white text-[36px] lg:text-6xl font-bold font-poppins leading-normal">
            Gallery
          </h1>

          <p className="rise-in-late text-white text-base lg:text-lg font-normal font-poppins leading-normal text-center">
            Explore moments that inspire. Witness the impact of our mission through captured memories.
          </p>
        </div>
      </section>

      <section className="w-ful text-white py-10 px-4 lg:px-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              className="gallery-card mb-3 block w-full cursor-pointer overflow-hidden rounded-2xl border-0 bg-transparent p-0 text-left shadow-md"
              onClick={() => getImg(image)}
            >
              <Image
                src={image}
                alt="Gallery photo"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
              />
            </button>
          ))}
        </div>
      </section>

      {modal && (
        <div className="modal open" onClick={() => setModal(false)}>
          <div className="relative w-[80%] h-[80%] flex items-center justify-center">
            <Image src={tempImg} alt="Gallery photo" sizes="90vw" className="w-full h-full object-contain" />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
