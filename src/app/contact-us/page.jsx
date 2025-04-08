"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { map } from "../../../public/assets/images";

const ContactUs = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "A name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Form Data:", formData);
      // Reset form after submission
      setFormData({ name: "", email: "", message: "" });
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
      {/* contact hero */}
      <section
        className="h-[493px] text-white-10 flex items-center justify-center lg:px-24 px-4  bg-no-repeat bg-center bg-cover "
        style={{
          backgroundImage: "url('/assets/images/contactHeroBanner.png')",
        }}
      >
        <div className="flex flex-col items-center justify-center max-w-[608px]">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white text-[36px] lg:text-6xl font-bold font-poppins leading-normal text-center"
          >
            Contact Us
          </motion.h1>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-white text-base lg:text-lg font-normal font-poppins leading-normal"
          >
            Have questions? We are here to help. Reach out to us anytime.
          </motion.p>
        </div>
      </section>

      {/* form and map */}
      <section className="flex flex-col lg:flex-row items-start gap-14 lg:px-40 px-4 py-24 bg-white ">
        {/* form */}
        <form className="flex flex-col gap-8 items-start w-full flex-1" onSubmit={handleSubmit} autoComplete="off">
          {/* form header */}
          <div className="flex flex-col items-start gap-1">
            <span className="text-dark text-sm font-normal font-poppins leading-normal tracking-[2.1px] uppercase">Write to Us</span>
            <h2 className="text-dark text-[40px] font-bold font-poppins leading-[43px] capitalize">We’d love to hear from you</h2>
            <p className="text-dark text-base font-poppins font-normal leading-normal">
              Whether you have inquiries, suggestions, or want to collaborate, our team is always ready to assist. Send us a message, and we
              will respond as soon as possible.
            </p>
          </div>

          {/* form input */}
          <div className="flex flex-col gap-2 items-start w-full">
            {/* name */}
            <div className="flex flex-col gap-1 w-full">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="enter your first name"
                className={`w-full flex items-center justify-center gap-2.5 p-4 rounded border bg-[#EDEDED] text-dark outline-none focus:border focus:border-transparent placeholder:text-[#ACA8A8] placeholder:font-normal placeholder:font-poppins ${
                  errors.name ? "border-red-500" : "border-transparent"
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* email */}
            <div className="flex flex-col gap-1 w-full">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="enter your email address"
                className={`w-full flex items-center justify-center gap-2.5 p-4 rounded border bg-[#EDEDED] text-dark outline-none focus:border focus:border-transparent placeholder:text-[#ACA8A8] placeholder:font-normal placeholder:font-poppins ${
                  errors.email ? "border-red-500" : "border-transparent"
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* message */}
            <div className="flex flex-col gap-1 w-full">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write a message..."
                className={`w-full flex items-center justify-center gap-2.5 p-4 rounded border border-transparent bg-[#EDEDED] text-dark outline-none focus:border focus:border-transparent placeholder:text-[#ACA8A8] placeholder:font-normal placeholder:font-poppins resize-none h-[150px] ${
                  errors.message ? "border-red-500" : "border-transparent"
                }`}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
          </div>

          {/* form button */}
          <button
            type="submit"
            className="w-full lg:inline-block py-2.5 px-6 rounded-2xl bg-green border border-transparent text-white font-poppins text-base font-semibold uppercase transition-all hover:bg-transparent hover:border-green hover:text-green"
          >
            Send
          </button>
        </form>

        {/* map */}
        <div className="flex flex-col items-start gap-6  w-full flex-1">
          <Image src={map} alt="map" quality={100} />

          <div className="grid grid-cols-1  items-start gap-4 w-full">
            {/* <div className="flex items-center gap-8 justify-between w-full">
              <h3 className="text-dark text-base font-poppins font-bold uppercase leading-normal">Address:</h3>
              <p className="text-dark text-base font-poppins font-normal leading-normal">123, Street Name</p>
            </div> */}

            {/* <div className="flex items-center gap-8 justify-between w-full">
              <h3 className="text-dark text-base font-poppins font-bold uppercase leading-normal">Phone:</h3>
              <p className="text-dark text-base font-poppins font-normal leading-normal">+ 202 567 404</p>
            </div> */}

            <div className="flex items-start gap-8  w-full">
              <h3 className="text-dark text-base font-poppins font-bold uppercase leading-normal">City:</h3>
              <p className="text-dark text-base font-poppins font-normal leading-normal">Lagos, Nigeria</p>
            </div>

            <div className="flex items-start gap-8  w-full">
              <h3 className="text-dark text-base font-poppins font-bold uppercase leading-normal">Email:</h3>
              <p className="text-dark text-base font-poppins font-normal leading-normal">Okehebunorfoundation@gmail.com</p>
            </div>
          </div>

          <h2 className="text-dark font-poppins text-[40px] font-bold leading-[43px]">+2347067834186</h2>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
