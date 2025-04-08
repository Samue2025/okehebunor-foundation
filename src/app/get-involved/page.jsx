"use client";

import React, { useState } from "react";
import Image from "next/image";
import DonateCTA from "@/components/views/DonateCTA";
import GetInvolvedForm from "@/components/views/GetInvolvedForm";
import { motion } from "framer-motion";

const GeInvolved = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
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
            Be Part of Us
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

      <section className="lg:px-40 px-4  lg:py-24 py-14 bg-white flex flex-col  gap-14 items-center">
        <div className="flex items-center gap-10">
          <div className="flex flex-col items-center gap-4">
            <span className="flex w-6 h-6 p-2.5 flex-col items-start gap-2 rounded-full bg-yellow"></span>
            <h3 className="text-dark text-center text-[32px] font-poppins font-bold leading-[43px] ">Our Volunteer</h3>
            <p className="text-dark text-center text-base font-normal leading-normal">
              Join our team of dedicated volunteers to make a meaningful impact. Contribute your time and skills to support our initiatives
              and drive positive change in communities.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="flex w-6 h-6 p-2.5 flex-col items-start gap-2 rounded-full bg-green"></span>
            <h3 className="text-dark text-center text-[32px] font-poppins font-bold leading-[43px] ">Partner With Us</h3>
            <p className="text-dark text-center text-base font-normal leading-normal">
              Collaborate with us to create lasting solutions. We welcome partnerships with NGOs, businesses, and governments to expand our
              reach and maximize impact.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="flex w-6 h-6 p-2.5 flex-col items-start gap-2 rounded-full bg-[#47A3E2]"></span>
            <h3 className="text-dark text-center text-[32px] font-poppins font-bold leading-[43px] ">Join Our Network</h3>
            <p className="text-dark text-center text-base font-normal leading-normal">
              Stay connected with us by joining our network. Subscribe to receive updates on events, initiatives, and engagement
              opportunities to be a part of the movement.
            </p>
          </div>
        </div>

        <GetInvolvedForm />
      </section>

      <DonateCTA />
    </div>
  );
};

export default GeInvolved;
