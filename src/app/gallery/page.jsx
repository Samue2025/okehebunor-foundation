"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  blog1,
  blog2,
  team1,
  team2,
  team3,
  team4,
  team5,
  team6,
  program1,
  program2,
  program3,
  program4,
} from "../../../public/assets/images";

const images = [blog1, blog2, team1, team2, team3, team4, team5, team6, program1, program2, program3, program4];

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState(team2);

  const getImg = (img) => {
    setTempImg(img);
    setModal(true);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <>
      <section
        className="h-[493px] text-white flex items-center justify-center lg:px-24 px-4 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/assets/images/aboutHeroBanner.png')" }}
      >
        <div className="flex flex-col items-center justify-center max-w-[608px]">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white text-[36px] lg:text-6xl font-bold font-poppins leading-normal"
          >
            Gallery
          </motion.h1>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-white text-base lg:text-lg font-normal font-poppins leading-normal text-center"
          >
            Explore moments that inspire. Witness the impact of our mission through captured memories.
          </motion.p>
        </div>
      </section>

      <section className="w-ful text-white py-10 px-4 lg:px-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileHover="hover"
              variants={imageVariants}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="mb-3 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden rounded-2xl shadow-md"
              onClick={() => getImg(image)}
            >
              <Image src={image} alt="Gallery Image" quality={100} className="w-full h-auto transform transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      <div className={modal ? "modal open" : "modal"} onClick={() => setModal(false)}>
        <div className="relative w-[80%] h-[80%] flex items-center justify-center">
          <Image src={tempImg} alt="Gallery Image" quality={100} className="w-full h-full object-contain" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
