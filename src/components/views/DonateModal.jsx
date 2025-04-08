// DonateModal.jsx
"use client";

import React, { useState, useEffect } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { toast } from "react-toastify";
// import { PaystackButton } from "react-paystack";
import dynamic from "next/dynamic";

const PaystackButton = dynamic(() => import("react-paystack").then((mod) => mod.PaystackButton), {
  ssr: false,
});

const DonateModal = ({ onClose, showModal }) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    amount: "",
  });
  const [customMode, setCustomMode] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  useEffect(() => {
    if (showModal) document.getElementById("firstName")?.focus();
  }, [showModal]);

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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "A first name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "A last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.amount.trim()) newErrors.amount = "Donation amount is required.";
    return newErrors;
  };
  const publicKey = "pk_test_130eca05e84f54c2dd2cde5251c0177dabd8e969";

  const paystackConfig = {
    email: formData.email,
    amount: Number(formData.amount) * 100,
    publicKey,
    metadata: {
      custom_fields: [
        {
          display_name: "First Name",
          variable_name: "firstName",
          value: formData.firstName,
        },
        {
          display_name: "Last Name",
          variable_name: "lastName",
          value: formData.lastName,
        },
        {
          display_name: "Email",
          variable_name: "email",
          value: formData.email,
        },
        {
          display_name: "Amount",
          variable_name: "amount",
          value: formData.amount,
        },
      ],
    },
    onSuccess: () => {
      toast.success("Payment successful");
      setFormData({ firstName: "", lastName: "", email: "", amount: "" });
      onClose();
    },
    onClose: () => {
      toast.error("Payment cancelled");
    },
    onError: () => {
      toast.error("Payment failed");
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) setErrors(newErrors);
    else {
      setErrors({});
      console.log("Form Data:", formData);
      setFormData({ firstName: "", lastName: "", email: "", amount: "" });
    }
  };

  if (!showModal) return null;

  return (
    <section
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-[100] ticketModal-overlay px-4 sm:px-6"
    >
      <div className="flex flex-col items-center justify-end rounded-2xl bg-white shadow w-full max-w-[600px] p-4 sm:p-6 lg:p-8 gap-6">
        <div className="self-end flex justify-end items-end">
          <button onClick={onClose} aria-label="Close Modal" className="p-2">
            <RiCloseLargeLine />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center w-full" autoComplete="off">
          <h3 className="text-dark text-lg sm:text-xl font-bold leading-normal capitalize border-b pb-4 border-[#DBD3D3] w-full">
            Personal Info
          </h3>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
            <div className="flex flex-col gap-2 items-start w-full">
              <label htmlFor="firstName" className="text-base font-sans font-normal text-[#1B1304]">
                First Name <span className="text-[#FB1313]">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="enter your first name"
                className={`w-full p-4 rounded border bg-[#EDEDED] text-dark outline-none placeholder:text-[#ACA8A8] ${
                  errors.firstName ? "border-red-500" : "border-transparent"
                }`}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div className="flex flex-col gap-2 items-start w-full">
              <label htmlFor="lastName" className="text-base font-sans font-normal text-[#1B1304]">
                Last Name <span className="text-[#FB1313]">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="enter your last name"
                className={`w-full p-4 rounded border bg-[#EDEDED] text-dark outline-none placeholder:text-[#ACA8A8] ${
                  errors.lastName ? "border-red-500" : "border-transparent"
                }`}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="email" className="text-base font-sans font-normal text-[#1B1304]">
              Email Address <span className="text-[#FB1313]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="enter your email address"
              className={`w-full p-4 rounded border bg-[#EDEDED] text-dark outline-none placeholder:text-[#ACA8A8] ${
                errors.email ? "border-red-500" : "border-transparent"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <h3 className="text-dark text-lg sm:text-xl font-bold leading-normal capitalize border-b pb-4 border-[#DBD3D3] w-full">Amount</h3>
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

          <PaystackButton
            {...paystackConfig}
            text="Donate Now"
            className="px-4 py-2.5 rounded bg-green w-full text-white text-sm sm:text-base font-semibold uppercase transition-all hover:scale-[1.01]"
          />
        </form>
      </div>
    </section>
  );
};

export default DonateModal;
