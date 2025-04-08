"use client";

import React, { useState } from "react";
import Image from "next/image";
import DonateCTA from "@/components/views/DonateCTA";
import { motion } from "framer-motion";
import { aboutImg, team1, team2, team3, team4, team5, team6 } from "../../../public/assets/images";

const AboutUs = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* about hero */}
      <section
        className="h-[493px] text-white-10 flex items-center justify-center lg:px-24 px-4  bg-no-repeat bg-center bg-cover "
        style={{
          backgroundImage: "url('/assets/images/aboutHeroBanner.png')",
        }}
      >
        <div className="flex flex-col items-center justify-center max-w-[608px]">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white text-[36px] lg:text-6xl font-bold font-poppins leading-normal"
          >
            About Us
          </motion.h1>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-white text-base lg:text-lg font-normal font-poppins leading-normal text-center"
          >
            Discover our journey, our passion, and how you can be a part of something impactful.
          </motion.p>
        </div>
      </section>

      <section className="lg:px-40 px-4 lg:py-0 py-14 bg-white flex flex-col lg:flex-row gap-14 items-center">
        {/* image */}
        <figure className="flex-1/2 relative">
          <Image src={aboutImg} alt="about" quality={100} className="object-cover" />
          <div className="bg-green/80 absolute top-0 right-0 h-full w-[200px] flex flex-col items-center justify-center gap-2 ">
            <Image src="/assets/icons/hand.svg" alt="hand" quality={100} width={94} height={94} />
            <h2 className="text-6xl text-white text-center font-black leading-[100%]">4+</h2>
            <p className="text-white text-center text-sm font-normal uppercase leading-normal tracking-[2.1px]">Years of giving</p>
          </div>
        </figure>

        {/* text */}
        <div className="flex flex-col items-start gap-4 flex-1/2">
          <span className="text-dark text-sm font-normal font-poppins leading-normal tracking-[2.1px] uppercase">OUR BEGINNINGS</span>

          <h2 className="text-dark text-[40px] font-bold font-poppins leading-[48px] capitalize">The origin of the Fundraiser</h2>

          <p className="text-dark text-base font-poppins font-normal leading-normal">
            The Okehebunor Foundation was born out of a deep desire to create real change in the lives of the less privileged. Founded by
            Samuel S. Okehebunor, our journey began with a simple mission—to bring hope, support, and opportunities to those who need it the
            most. Over the past four years, we've worked tirelessly to uplift communities, empower individuals, and provide critical
            assistance where it's needed the most. <br /> <br /> "Our mission is to empower, uplift, and inspire generations for a brighter
            tomorrow."
          </p>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              {/* avatar */}
              <Image
                src="/assets/images/avatar.svg"
                alt="avatar"
                width={50}
                height={50}
                quality={100}
                className="rounded-full object-cover"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-dark text-sm lg:text-base font-bold font-poppins leading-normal uppercase">
                  {" "}
                  Samuel S. Okehebunor
                </h3>
                <p className="text-dark text-sm lg:text-base font-normal font-poppins leading-normal tracking-[2.1px]">CEO, FOUNDER</p>
              </div>
            </div>
            <Image
              src="/assets/images/signature.png"
              alt="signature"
              width={137}
              height={36}
              quality={100}
              className="w-[90px] lg:w-[137px] h-full"
            />
          </div>
        </div>
      </section>

      {/* about values */}
      <section className="lg:px-40 px-4 lg:py-24 py-14 bg-white flex flex-col lg:flex-row gap-14 items-center">
        <div className="flex flex-col items-center gap-4">
          <span className="flex w-6 h-6 p-2.5 flex-col items-start gap-2 rounded-full bg-yellow"></span>
          <h3 className="text-dark text-center text-[32px] font-poppins font-bold leading-[43px] ">Our Mission</h3>
          <p className="text-dark text-center text-base font-normal leading-normal">
            To create sustainable change by providing education, healthcare, and economic empowerment to underprivileged communities.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="flex w-6 h-6 p-2.5 flex-col items-start gap-2 rounded-full bg-green"></span>
          <h3 className="text-dark text-center text-[32px] font-poppins font-bold leading-[43px] ">Our Vision</h3>
          <p className="text-dark text-center text-base font-normal leading-normal">
            A world where every individual, regardless of background, has access to the resources and opportunities they need to thrive.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="flex w-6 h-6 p-2.5 flex-col items-start gap-2 rounded-full bg-[#47A3E2]"></span>
          <h3 className="text-dark text-center text-[32px] font-poppins font-bold leading-[43px] ">Our Core Values</h3>
          <p className="text-dark text-center text-base font-normal leading-normal">
            Integrity, Compassion, Sustainability, and Empowerment. These principles guide every decision we make and every action we take.
          </p>
        </div>
      </section>

      <DonateCTA />

      {/* about team */}
      <section className="lg:px-40 px-4 lg:py-24 py-14 bg-white flex flex-col gap-6  w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-6">
          <div className="flex flex-col items-start gap-4 flex-1/2">
            <span className="text-dark text-sm font-normal font-poppins leading-normal tracking-[2.1px] uppercase">OUR TEAM</span>

            <h2 className="text-dark text-[40px] font-bold font-poppins leading-[48px] capitalize">
              Meet the Passionate teams Behind Our Mission
            </h2>

            <p className="text-dark text-base font-poppins font-normal leading-normal">
              Our team is driven by a shared vision of making a difference in communities that need it most. With a deep commitment to
              service, our founders and volunteers work tirelessly to bring hope, resources, and empowerment to those facing challenges.
              Together, we are building a future where kindness and generosity create real, lasting change.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-4 w-full flex-1/2">
            <figure className="relative">
              <Image src={team3} alt="team" quality={100} className="object-cover rounded-lg" />
              <div className="flec flex-col gap-2 items-start p-8 w-[268px] absolute bottom-0">
                <h3 className="text-white text-center text-xl font-poppins font-bold leading-normal uppercase">CEO, Founder</h3>
                <p className="text-white text-base text-center font-poppins font-normal leading-normal">Sunday Okehebunor</p>
              </div>
            </figure>

            <figure className="relative">
              <Image src={team2} alt="team" quality={100} className="object-cover rounded-lg" />
              <div className="flec flex-col gap-2 items-start p-8 w-[268px] absolute bottom-0">
                <h3 className="text-white text-center text-xl font-poppins font-bold leading-normal uppercase">Co-Founder</h3>
                <p className="text-white text-base text-center font-poppins font-normal leading-normal">Lara Johnson King</p>
              </div>
            </figure>
          </div>
        </div>

        {/* team below */}
        <div className="flex flex-col lg:flex-row items-center gap-[1.8rem] w-full">
          <figure className="relative">
            <Image src={team1} alt="team" quality={100} className="object-cover rounded-lg" />
            <div className="flec flex-col gap-2 items-start p-8 w-[268px] absolute bottom-0">
              <h3 className="text-white text-center text-xl font-poppins font-bold leading-normal uppercase">Head Volunteer</h3>
              <p className="text-white text-base text-center font-poppins font-normal leading-normal">Sambi Lukemba</p>
            </div>
          </figure>

          <figure className="relative">
            <Image src={team4} alt="team" quality={100} className="object-cover rounded-lg" />
            <div className="flec flex-col gap-2 items-start p-8 w-[268px] absolute bottom-0">
              <h3 className="text-white text-center text-xl font-poppins font-bold leading-normal uppercase">Volunteer</h3>
              <p className="text-white text-base text-center font-poppins font-normal leading-normal">Adama Olemabo</p>
            </div>
          </figure>

          <figure className="relative">
            <Image src={team5} alt="team" quality={100} className="object-cover rounded-lg" />
            <div className="flec flex-col gap-2 items-start p-8 w-[268px] absolute bottom-0">
              <h3 className="text-white text-center text-xl font-poppins font-bold leading-normal uppercase">Volunteer</h3>
              <p className="text-white text-base text-center font-poppins font-normal leading-normal">Richard James</p>
            </div>
          </figure>

          <figure className="relative">
            <Image src={team6} alt="team" quality={100} className="object-cover rounded-lg" />
            <div className="flec flex-col gap-2 items-start p-8 w-[268px] absolute bottom-0">
              <h3 className="text-white text-center text-xl font-poppins font-bold leading-normal uppercase">Volunteer</h3>
              <p className="text-white text-base text-center font-poppins font-normal leading-normal">Tamara Gbefade</p>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
