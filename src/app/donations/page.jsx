"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { support1, support2, support3, support4, support5, give } from "../../../public/assets/images";
import stripe from "../../../public/assets/icons/stripe.svg";
import paypal from "../../../public/assets/icons/paypal.svg";
import visa from "../../../public/assets/icons/visa.svg";
import master from "../../../public/assets/icons/master.svg";
import DonateModal from "@/components/views/DonateModal";
import { useGlobalContext } from "@/contexts/context";

export const donationArr = [
  {
    id: 1,
    title: "Child Support",
    description: "Every child deserves a bright future. Your donation provides food, shelter, and education to underprivileged children.",
    donationNum: 2,
    donationPercent: "27%",
    image: support1,
  },
  {
    id: 2,
    title: "Education",
    description:
      "Education is the key to breaking the cycle of poverty. Help us provide books, school supplies, and tuition assistance to children in need.",
    donationNum: 5,
    donationPercent: "47%",
    image: support2,
  },
  {
    id: 3,
    title: "New Water Wells",
    description: "Clean water is a basic necessity. Your donation helps us build wells in communities struggling with water scarcity.",
    donationNum: 3,
    donationPercent: "17%",
    image: support3,
  },
  {
    id: 4,
    title: "Child Care & Support",
    description: "We provide essential care, medical assistance, and emotional support to children facing hardships.",
    donationNum: 5,
    donationPercent: "47%",
    image: support4,
  },
  {
    id: 5,
    title: "Help to Mothers",
    description:
      "Empower mothers with the resources they need to provide for their children. Your support funds job training, healthcare, and shelter.",
    donationNum: 1,
    donationPercent: "7%",
    image: support5,
  },
];

const Donation = () => {
  const [errors, setErrors] = useState({});
  const [customMode, setCustomMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    amount: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAmountClick = (amount) => {
    setCustomMode(false);
    setFormData((prevData) => ({ ...prevData, amount: amount.toString() }));
  };
  const handleCustomClick = () => {
    setCustomMode(true);
    setFormData((prevData) => ({ ...prevData, amount: "" }));
  };
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const { isModalOpen, showModal, isModalClose } = useGlobalContext();

  const getPercentValue = (percentString) => parseInt(percentString.replace("%", ""));

  return (
    <>
      <section
        className="h-screen text-white-10 flex items-center justify-center lg:px-40 px-4 bg-no-repeat bg-center bg-cover "
        style={{
          backgroundImage: "url('/assets/images/donateHeroBanner.png')",
        }}
      >
        <div className="flex flex-col lg:flex-row gap-14 items-center">
          <div className="flex flex-col gap-4 items-center flex-1/2">
            <Image src={give} alt="give" quality={100} />
            <p className="text-white text-center text-sm font-normal leading-normal uppercase tracking-[2.1px]">Donate Now!</p>
            <p className="text-white text-center text-base font-normal leading-normal">
              Join us in making a difference! Your contributions help support education, healthcare, and essential resources for those in
              need.
            </p>
            <div className="flex items-center gap-4">
              <Image src={stripe} alt="stripe" quality={100} />
              <Image src={visa} alt="visa" quality={100} />
              <Image src={paypal} alt="paypal" quality={100} />
              <Image src={master} alt="mastercard" quality={100} />
            </div>

            <div className="flex items-center justify-center w-full gap-4">
              <button
                type="button"
                className="inline-block py-2.5 px-6 rounded-2xl bg-yellow border border-transparent text-dark font-poppins text-xs lg:text-base font-semibold uppercase transition-all hover:bg-transparent hover:border-white hover:text-white cursor-pointer"
              >
                Learn More about us
              </button>
              <button
                type="button"
                className="inline-block py-2.5 px-6 rounded-2xl bg-green border border-transparent text-white font-poppins text-xs lg:text-base font-semibold uppercase transition-all hover:bg-transparent hover:border-white cursor-pointer"
              >
                View causes
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-center p-8 bg-[#191818CC] h-[380px] rounded flex-1/2">
            <h3 className="text-white text-center text-xl font-bold leading-normal uppercase tracking-[2.1px]">Support Us</h3>
            <p className="text-white text-center text-base font-normal leading-normal">
              Join us in making a difference! Your contributions help support education, healthcare, and essential resources for those in
              need.
            </p>
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex gap-2 items-center w-full">
                <label className="px-4 py-2.5 rounded bg-green text-white text-base font-bold">NGN</label>
                <input
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="NGN 0.00"
                  disabled={!customMode}
                  className={`w-full py-2.5 px-4 rounded border bg-[#EDEDED] text-dark outline-none placeholder:text-[#ACA8A8] ${
                    errors.amount ? "border-red-500" : "border-transparent"
                  }`}
                />
              </div>
              {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
              <div className="flex flex-wrap gap-2 w-full justify-start">
                {[50000, 100000, 500000].map((amt) => (
                  <button
                    type="button"
                    key={amt}
                    onClick={() => handleAmountClick(amt)}
                    className="px-4 py-2.5 rounded bg-green text-white text-sm sm:text-base font-medium"
                  >
                    NGN {amt.toLocaleString()}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={handleCustomClick}
                  className="px-4 py-2.5 rounded bg-green text-white text-sm sm:text-base font-medium cursor-pointer"
                >
                  Custom
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={isModalOpen}
              className="px-4 py-2.5 rounded-2xl bg-green w-full text-white text-sm sm:text-base font-semibold uppercase transition-all hover:scale-[1.01]"
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      <section className="lg:px-40 px-4 lg:py-24 py-14 bg-white flex flex-col gap-14 items-center">
        <div className="flex flex-col lg:flex-row items-center w-full justify-between">
          <div className="flex flex-col gap-1 items-start max-w-[700px]">
            <span className="text-dark text-sm font-normal font-poppins leading-normal tracking-[2.1px] uppercase">OUR BEGINNINGS</span>
            <h2 className="text-dark text-[40px] font-bold font-poppins leading-[48px] capitalize">Welcome To Okehebunor Foundation!</h2>
          </div>
          <div>
            <p className="text-dark text-base font-poppins font-normal leading-normal max-w-[400px]">
              Our foundation is dedicated to uplifting communities through education, healthcare, and essential aid. Join us in making a
              lasting impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-6 w-full">
          {donationArr.map((event) => (
            <div
              key={event.id}
              className="flex flex-col items-start bg-white rounded-md shadow-sm border border-dark/20 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl h-[520px]"
            >
              <Image src={event.image} alt={event.title} quality={100} className="w-full object-cover" />
              <div className="p-6 flex flex-col gap-4 items-start justify-between h-full w-full">
                <div className="flex flex-col gap-4 items-start justify-center">
                  <h3 className="text-xl font-poppins font-bold text-dark leading-normal">{event.title}</h3>
                  <p className="text-base text-dark font-poppins font-normal leading-normal">{event.description}</p>
                  <button
                    type="button"
                    onClick={isModalOpen}
                    className="flex items-center justify-center gap-4 rounded-2xl bg-transparent font-semibold text-base text-dark cursor-pointer underline"
                  >
                    Donate
                  </button>
                </div>
                <div className="w-full space-y-2">
                  <div className="flex items-center justify-between w-full">
                    <p className="text-dark text-base font-poppins font-normal leading-normal">
                      <span className="font-bold text-green">{event.donationPercent} </span> of 100%
                    </p>
                    <p className="text-dark text-base font-poppins font-normal leading-normal">
                      <span className="font-bold text-green">{event.donationNum} </span>
                      Donations
                    </p>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green transition-all duration-500 ease-in-out"
                      style={{ width: `${getPercentValue(event.donationPercent)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="lg:px-40 px-4 lg:py-24 py-14 bg-white flex flex-col gap-14 items-center">
        <DonateModal onClose={isModalClose} showModal={showModal} />
      </section>
    </>
  );
};

export default Donation;
