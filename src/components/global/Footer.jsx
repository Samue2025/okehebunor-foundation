"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { logoWhite } from "../../../public/assets/images";
import { PiWhatsappLogo } from "react-icons/pi";
import { AiTwotoneClockCircle } from "react-icons/ai";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => e.preventDefault();

  return (
    <footer className="bg-dark w-full flex flex-col">
      {/* Top Section */}
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between py-16 px-6 md:px-16 lg:px-40">
        {/* Left Container */}
        <div className="flex flex-col gap-6 lg:w-1/3">
          <Image src={logoWhite} alt="Okenhebunor Foundation Logo" quality={100} width={150} height={150} />
          <p className="text-white text-base font-poppins leading-[150%]">
            Empowering underserved communities through education, healthcare, and sustainable growth. Your support makes a difference in
            transforming lives.
          </p>
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-lg font-semibold">Subscribe to our newsletter</h3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="py-2.5 px-4 w-full sm:w-auto flex-1 rounded-lg bg-transparent border border-[#E8EBEB] text-white text-base placeholder:text-[#939393]"
              />
              <button type="submit" className="py-2.5 px-4 bg-yellow rounded-lg text-[#373535] text-base font-semibold w-full lg:w-fit">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Right Container */}
        <div className="flex flex-col sm:flex-row gap-10 lg:gap-20 lg:w-2/3 lg:justify-end">
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-lg font-bold">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/programs" className="text-white text-base hover:text-white/60">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-white text-base hover:text-white/60">
                  Causes
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white text-base hover:text-white/60">
                  Volunteers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white text-base hover:text-white/60">
                  Blogs & News
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-lg font-bold">Support</h3>
            <ul className="flex flex-col gap-2">
              <li>
                {/* <Link href="/" className="text-white text-base hover:text-white/60">
                  FAQs
                </Link> */}
              </li>
              <li>
                <Link href="/services" className="text-white text-base hover:text-white/60">
                  Policy Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="get-involved"
                  className="text-white text-base hover:text-white/60"
                >
                  Partnership
                </Link>
              </li>
              <li>
                <Link href="/donations" className="text-white text-base hover:text-white/60">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-lg font-bold">Contact</h3>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 text-white text-base hover:text-white/60">
                <FaEnvelope /> <Link href="mailto:Okehebunorfoundation@gmail.com">Okehebunorfoundation@gmail.com</Link>
              </li>
              <li className="flex items-center gap-2 text-white text-base hover:text-white/60">
                <PiWhatsappLogo /> <span>+2347067834186</span>
              </li>
              <li className="flex items-center gap-2 text-white text-base hover:text-white/60">
                <AiTwotoneClockCircle /> <span>Mon-Fri 8:am-6:pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white w-full flex flex-col md:flex-row items-center justify-between gap-4 py-4 px-6 md:px-16 lg:px-40">
        <small className="text-dark text-base text-center italic">
          © {new Date().getFullYear()} Okehenbunor Foundation, All rights reserved.
        </small>
        <div className="flex items-center gap-4">
          <Link href="https://www.facebook.com/okehebunorfoundation">
            <FaFacebook size={24} className="text-dark hover:text-dark/80" />
          </Link>
          <Link href="https://www.instagram.com/okehebunorfoundation">
            <FaInstagram size={24} className="text-dark hover:text-dark/80" />
          </Link>
          <Link href="https://www.linkedin.com/company/okehebunorfoundation">
            <FaLinkedinIn size={24} className="text-dark hover:text-dark/80" />
          </Link>
          <Link href="https://www.twitter.com/okehebunorfoundation">
            <FaTwitter size={24} className="text-dark hover:text-dark/80" />
          </Link>
          <Link href="https://www.youtube.com/channel/UC/videos">
            <FaYoutube size={24} className="text-dark hover:text-dark/80" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
