"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaTimes, FaList } from "react-icons/fa";
import { BiSolidGridAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { program1, program2, program3, program4 } from "../../../public/assets/images";
import DonateCTA from "@/components/views/DonateCTA";

const eventArr = [
  {
    id: 1,
    date: "Thurs Nov 6th, 2024",
    title: "Food Outreach To Kids & Communities",
    description:
      "Join us in providing nutritious meals to underprivileged children and families. Your support helps fight hunger and bring smiles to those in need.",
    category: "foodOutreach",
    image: program1,
  },
  {
    id: 2,
    date: "Sat Feb 18th, 2025",
    title: "Volunteering And Support Aids",
    description:
      "Be part of a life-changing experience by volunteering to support communities in need. Help distribute supplies, mentor youth, and create positive change.",
    category: "support",
    image: program2,
  },
  {
    id: 3,
    date: "Thurs Nov 6th, 2024",
    title: "Okehebunor Foundation Meeting",
    description:
      "An insightful gathering where we discuss strategies to improve our outreach efforts. Engage with leaders and volunteers dedicated to making an impact.",
    category: "meeting",
    image: program3,
  },
  {
    id: 4,
    date: "Sat Feb 18th, 2025",
    title: "Charity Football Match",
    description:
      "Enjoy an exciting football match while supporting a good cause! Funds raised will go towards education programs for children in underserved communities.",
    category: "fundraiser",
    image: program4,
  },
];

const categoryColors = {
  foodOutreach: "bg-[#34B090]",
  support: "bg-[#FF4800]",
  meeting: "bg-[#34B090]",
  fundraiser: "bg-[#FBC94C]",
};

const Programs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const handleInputChange = (e) => setSearchQuery(e.target.value);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") console.log("Search Query:", searchQuery);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const filteredEvents = eventArr.filter((event) => event.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <section
        className="h-[493px] text-white-10 flex items-center justify-center lg:px-40 px-4 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/assets/images/programHeroBanner.png')" }}
      >
        <div className="flex flex-col items-center justify-center max-w-[608px]">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white text-[36px] lg:text-6xl font-bold font-poppins leading-normal text-center"
          >
            Our Events
          </motion.h1>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-white text-base lg:text-lg font-normal font-poppins leading-normal"
          >
            Read about our event and know how you can be part of it.
          </motion.p>
        </div>
      </section>

      <section className="lg:px-40 px-4 py-20 bg-white flex flex-col gap-14 items-start">
        {/* header */}
        <div className="flex flex-col gap-4 items-start w-full">
          <h2 className="text-2xl text-dark font-poppins font-bold leading-normal">Events</h2>

          <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-2.5 py-2.5 lg:px-6 rounded-lg border-transparent  lg:border lg:border-dark">
            <div className="flex w-full items-center gap-2.5">
              <div className="flex items-center gap-2 border border-dark lg:border-none py-2.5 px-6 lg:py-0 lg:px-0 rounded-lg w-full">
                {searchQuery ? (
                  <FaTimes size={20} className="text-[#8C9394] cursor-pointer" onClick={() => setSearchQuery("")} />
                ) : (
                  <FaSearch size={20} className="text-[#8C9394]" />
                )}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Search for event..."
                  className="w-full outline-none placeholder:text-[#8C9394] text-base font-poppins font-normal "
                />
              </div>
            </div>

            <div className="flex items-center justify-between lg:justify-end w-full gap-2">
              <button
                type="submit"
                className="w-[140px] lg:w-[150px] py-2.5 px-6 rounded-2xl bg-green border border-transparent text-white font-poppins text-base font-semibold uppercase transition-all hover:bg-transparent hover:border-green hover:text-green"
              >
                Find Event
              </button>
              <div className="flex items-center gap-2">
                <span
                  className={`flex w-[32px] h-[32px] p-2 items-center justify-center gap-0.5 rounded cursor-pointer ${
                    viewMode === "grid" ? "bg-green text-white" : "bg-[#E8E8E8] text-dark"
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <BiSolidGridAlt size={20} />
                </span>

                <span
                  className={`flex w-[32px] h-[32px] p-2 items-center justify-center gap-0.5 rounded cursor-pointer ${
                    viewMode === "list" ? "bg-green text-white" : "bg-[#E8E8E8] text-dark"
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  <FaList size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* event card */}
        <div
          className={`w-full grid ${
            viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6" : "grid-cols-1 gap-4 max-w-[600px] mx-auto"
          }`}
        >
          {filteredEvents.map((event) => (
            <div key={event.id} className="flex flex-col lg:flex-row items-start bg-white rounded-md shadow-sm overflow-hidden">
              <Image src={event.image} alt={event.title} quality={100} className="w-full h-[357px] lg:h-full object-cover lg:flex-1/2" />

              <div className="p-6 flex flex-col gap-4 items-start justify-between h-full w-full lg:flex-1/2">
                <div className="flex flex-col gap-4 items-start justify-center">
                  <span
                    className={`text-white px-4 py-2 rounded-lg in-checked: justify-center text-sm font-bold leading-normal inline-block w-fit ${
                      categoryColors[event.category]
                    }`}
                  >
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </span>

                  <p className="text-base text-dark font-poppins font-normal leading-normal">{event.date}</p>

                  <h3 className="text-xl font-poppins font-bold text-dark leading-normal">{event.title}</h3>
                  <p className="text-base text-dark font-poppins font-normal leading-normal">{event.description}</p>
                </div>

                <Link
                  href="/contact-us"
                  className="flex px-6 py-2.5 items-center justify-center gap-4 rounded-2xl bg-[#47A3E2] font-semibold text-base text-white capitalize cursor-pointer"
                >
                  Get more info
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <DonateCTA />
    </>
  );
};

export default Programs;
