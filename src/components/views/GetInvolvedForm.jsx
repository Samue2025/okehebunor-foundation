"use client";

import React, { useState } from "react";
import DonateCTA from "@/components/views/DonateCTA";

const GetInvolvedForm = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
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
    <div
      className="h-auto w-full bg-no-repeat bg-center bg-cover p-8 flex items-center justify-center gap-14 "
      style={{
        backgroundImage: "url('/assets/images/getinvolved.png')",
      }}
    >
      <div className="self-star flex flex-col gap-4 items-start w-full ">
        <span className="text-white text-sm font-normal font-poppins leading-normal uppercase tracking-[2.1px]">Get Involved</span>
        <h2 className="text-white text-[40px] font-bold font-poppins leading-[48px] capitalize">Join Us Today</h2>
        <p className="text-white text-base font-normal leading-normal max-w-[408px]">
          Join us in making a difference. Your support can change lives and create a brighter future for those in need.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-2xl">
        <form className="flex flex-col gap-8 p-8 items-start w-full flex-1" onSubmit={handleSubmit} autoComplete="off">
          {/* Name */}
          <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="name" className="text-base font-poppins font-semibold leading-[150%] text-dark">
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="enter your full name"
              className={`w-full flex items-center justify-center gap-2.5 p-4 rounded border bg-[#EDEDED] text-dark outline-none focus:border focus:border-transparent placeholder:text-[#ACA8A8] placeholder:font-normal placeholder:font-poppins ${
                errors.name ? "border-red-500" : "border-transparent"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* email */}
          <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="email" className="text-base font-poppins font-semibold leading-[150%] text-dark">
              Email
            </label>

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

          {/* subject */}
          <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="subject" className="text-base font-poppins font-semibold leading-[150%] text-dark">
              Subject
            </label>

            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full flex items-center justify-center gap-2.5 p-4 rounded border bg-[#EDEDED] text-dark outline-none focus:border focus:border-transparent placeholder:text-[#ACA8A8] placeholder:font-normal placeholder:font-poppins ${
                errors.subject ? "border-red-500" : "border-transparent"
              }`}
            >
              <option value="" disabled>
                Select a subject
              </option>
              <option value="volunteer">Volunteer</option>
              <option value="partner">Partner With Us</option>
              <option value="join-network">Join Our Network</option>
            </select>
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
          </div>

          {/* message */}
          <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="message" className="text-base font-poppins font-semibold leading-[150%] text-dark">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write a message..."
              className={`w-full flex items-center justify-center gap-2.5 p-4 rounded border border-transparent bg-[#EDEDED] text-dark outline-none focus:border focus:border-transparent placeholder:text-[#ACA8A8] placeholder:font-normal placeholder:font-poppins resize-none h-[100px] ${
                errors.message ? "border-red-500" : "border-transparent"
              }`}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* form button */}
          <button
            type="submit"
            className="w-full lg:inline-block py-2.5 px-6 rounded-2xl  cursor-pointer bg-green border border-transparent text-white font-poppins text-base font-semibold uppercase transition-all hover:bg-transparent hover:border-green hover:text-green"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInvolvedForm;
