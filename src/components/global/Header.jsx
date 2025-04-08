"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaChevronDown, FaCheckSquare, FaEnvelope, FaCreditCard } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiMenu2Fill, RiCloseLargeLine } from "react-icons/ri";
import { logoWhite } from "../../../public/assets/images";
import { useGlobalContext } from "@/contexts/context";
import DonateModal from "../views/DonateModal";

const navMenu = [
  { id: 1, name: "Home", url: "/", hasChevron: false },
  { id: 2, name: "About Us", url: "/about-us", hasChevron: false },
  { id: 3, name: "Programs", url: "/programs", hasChevron: false },
  { id: 4, name: "Donate", url: "/donations", hasChevron: false },
  { id: 5, name: "Contact", url: "/contact-us", hasChevron: false },
  {
    id: 6,
    name: "More",
    url: "#",
    hasChevron: true,
    submenu: [
      { id: 7, name: "Get Involed", url: "/get-involved" },
      { id: 8, name: "Blog", url: "/blog" },
      { id: 9, name: "Gallery", url: "/gallery" },
    ],
  },
];

const Header = () => {
  const { isModalOpen, showModal, isModalClose } = useGlobalContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-dark">
        {/* Top Contact Bar */}
        <div className="hidden lg:flex bg-[#FAFAFA] py-4 px-6 lg:px-40 justify-between items-center">
          <div className="flex items-center gap-6">
            {/* <div className="flex items-center gap-2">
              <FaCreditCard className="text-dark" />
              <p className="text-dark text-sm font-normal">Payment Options</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckSquare className="text-dark" />
              <p className="text-dark text-sm font-normal">Terms & Condition</p>
            </div> */}
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-dark" />
              <p className="text-dark text-sm font-normal">Lagos, Nigeria</p>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-dark" />
              <Link href="mailto:Okehebunorfoundation@gmail.com" className="text-dark text-sm font-normal">Okehebunorfoundation@gmail.com</Link>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav
          className="py-4 px-6 lg:px-40 flex justify-between items-center w-full text-white bg-dark bg-center bg-cover bg-no-repeat relative"
          style={{ backgroundImage: "url('/assets/images/headerBanner.png')" }}
        >
          {/* Logo */}
          <Link href="/">
            <Image src={logoWhite} alt="BRS Floors" width={86} height={62} quality={100} />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-4">
            {navMenu.map((item) => (
              <li key={item.id} className="relative flex items-center justify-center gap-3 py-2.5 px-4 group">
                <Link
                  href={item.url}
                  className={`flex items-center gap-3 text-base font-poppins uppercase transition-all hover:text-yellow ${
                    pathname === item.url ? "text-yellow font-semibold" : "text-white font-normal"
                  }`}
                  onClick={() => item.hasChevron && setIsDropdownOpen(!isDropdownOpen)}
                >
                  {item.name} {item.hasChevron && <FaChevronDown className="text-orange" />}
                </Link>
                {item.hasChevron && isDropdownOpen && (
                  <ul className="absolute top-full left-1 bg-dark/80 backdrop-blur-[12px] rounded-md shadow-md py-2 z-50 w-[150px]">
                    {item.submenu?.map((sub) => (
                      <li key={sub.id}>
                        <Link
                          href={sub.url}
                          className="block px-4 py-2 text-base font-poppins capitalize text-white hover:bg-yellow hover:text-dark"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <button
            type="button"
            onClick={isModalOpen}
            className="hidden lg:inline-block py-2.5 px-6 rounded-2xl bg-green border border-transparent text-white font-poppins text-base font-semibold uppercase transition-all hover:bg-transparent hover:border-white"
          >
            Donate Now
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white text-2xl">
            {isMenuOpen ? <RiCloseLargeLine /> : <RiMenu2Fill />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="lg:hidden bg-dark  w-full px-6 py-4 text-white space-y-4 absolute bg-center bg-cover bg-no-repeat bg-fixed"
            style={{ backgroundImage: "url('/assets/images/headerBanner.png')" }}
          >
            {navMenu.map((item) => (
              <div key={item.id} className="relative">
                <Link
                  href={item.url}
                  className="flex items-center justify-between w-full py-2 text-base uppercase font-poppins hover:text-yellow"
                  onClick={() => {
                    if (item.hasChevron) {
                      setIsDropdownOpen((prev) => !prev);
                    } else {
                      setIsDropdownOpen(false);
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {item.name} {item.hasChevron && <FaChevronDown className="inline ml-2 text-orange" />}
                </Link>
                {item.hasChevron && isDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    {item.submenu?.map((sub) => (
                      <Link
                        key={sub.id}
                        href={sub.url}
                        className="block text-base py-2 hover:text-yellow"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={isModalOpen}
              className="block py-2 px-4 text-center rounded-2xl bg-green font-semibold uppercase w-full outline-none"
            >
              Donate Now
            </button>
          </motion.div>
        )}
      </header>

      <DonateModal onClose={isModalClose} showModal={showModal} />
    </>
  );
};

export default Header;
