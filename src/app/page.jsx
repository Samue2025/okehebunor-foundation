"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { blogArr } from "./blog/page";
import React, { useState, useEffect } from "react";
import DonateModal from "@/components/views/DonateModal";
import { useGlobalContext } from "@/contexts/context";
import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  aboutImg2,
  program1,
  program2,
  support5,
  support2,
  support3,
  slide1,
  slide2,
  slide3,
} from "../../public/assets/images";
import GetInvolvedForm from "@/components/views/GetInvolvedForm";

const slides = [slide1, slide2, slide3];

const imageArr = [
  { id: 1, img: partner1 },
  { id: 2, img: partner2 },
  { id: 3, img: partner3 },
  { id: 4, img: partner4 },
  { id: 5, img: partner5 },
];

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const API_URL = `https://newsapi.org/v2/everything?q=nigeria&language=en&sortBy=popularity&apiKey=936f4527d49640cfae821ce52b6ec046`;

  useEffect(() => {
    fetchArticles();
  }, [page]);

  const fetchArticles = async () => {
    try {
      const response = await fetch(`${API_URL}&page=${page}&pageSize=20`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.status === "ok") {
        setArticles(data.articles); // Replace instead of append
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const { isModalOpen, showModal, isModalClose } = useGlobalContext();
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      {/* home hero */}
      <section className="relative h-screen text-white-10 flex items-start justify-start lg:px-24 px-4 py-10 overflow-hidden">
        {/* background image container */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
              style={{ backgroundImage: `url(${slide.src})` }}
              initial={{ opacity: index === activeSlide ? 1 : 0 }}
              animate={{ opacity: index === activeSlide ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
          ))}
        </div>
        <div className="relative z-10 flex flex-col items-start gap-6 justify-center max-w-[550px]">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-start -gap-6"
          >
            <h1 className="text-white text-5xl lg:text-6xl font-bold font-poppins leading-[120%] text-center flex items-center justify-center">
              Together, <Image src="/assets/images/together.svg" alt="future" width={33} height={35} quality={100} />
            </h1>
            <h1 className="text-white text-5xl lg:text-6xl font-bold font-poppins leading-[120%] text-center">We Create</h1>
            <h1 className="text-yellow text-5xl lg:text-6xl font-bold font-poppins leading-[120%] text-center">A Brighter</h1>
            <h1 className="text-green text-5xl lg:text-6xl font-bold font-poppins leading-[120%] text-center flex items-center justify-center">
              Future.
              <Image src="/assets/images/future.svg" alt="future" width={65} height={27} quality={100} />
            </h1>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-4 items-start"
          >
            <p className="text-white text-base lg:text-lg font-normal font-poppins leading-normal">
              Empowering underserved communities through education, healthcare, and sustainable development. At Okehebunor Foundation, we
              turn hope into reality by fostering opportunities for all.
            </p>

            <p className="text-base text-white font-normal leading-normal">
              <span className="font-bold">Charity</span> / Fundraiser
            </p>
            <div className="flex items-center justify-normal w-full gap-4">
              <button
                type="button"
                className="inline-block py-2.5 px-6 rounded-2xl bg-yellow border border-transparent text-dark font-poppins text-xs lg:text-base font-semibold uppercase transition-all hover:bg-transparent hover:border-white hover:text-white cursor-pointer"
              >
                Learn More
              </button>
              <button
                type="button"
                className="inline-block py-2.5 px-6 rounded-2xl bg-green border border-transparent text-white font-poppins text-xs lg:text-base font-semibold uppercase transition-all hover:bg-transparent hover:border-white cursor-pointer"
              >
                Get Involved
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* partners */}
      <section className="bg-white lg:px-24 px-4 py-10">
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex justify-between flex-nowrap gap-6 snap-x snap-mandatory scroll-smooth">
            {imageArr.map((i) => (
              <div key={i.id} className="snap-start shrink-0 w-[140px] h-auto flex items-center justify-center">
                <Image src={i.img} alt="partner" quality={100} className="object-contain w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* home about  */}
      <section className="lg:px-40 px-4 lg:py-24 py-14 bg-white flex flex-col lg:flex-row gap-14 items-center">
        {/* image */}
        <figure className="flex-1/2 relative w-full">
          <Image src={aboutImg2} alt="about" quality={100} className="object-cover w-full h-full" />
          <div className="bg-[#FB723C8C] absolute bottom-[-20px] left-0 h-[132px] w-[120px] flex flex-col items-center justify-center gap-2 ">
            <h2 className="text-7xl text-white text-center font-black leading-[100%]">4+</h2>
            <p className="text-white text-center text-sm font-normal uppercase leading-normal tracking-[2.1px]">Years</p>
          </div>
        </figure>

        {/* text */}
        <div className="flex flex-col items-start gap-4 flex-1/2">
          <span className="text-dark text-sm font-normal font-poppins leading-normal tracking-[2.1px] uppercase">OUR BEGINNINGS</span>

          <h2 className="text-dark text-[40px] font-bold font-poppins leading-[48px] capitalize">The origin of the Fundraiser</h2>

          <p className="text-dark text-base font-poppins font-normal leading-normal">
            Born from a vision of transformation and progress, the Okehebunor Foundation stands as a beacon of hope for communities across
            Africa. We believe that through collective action and sustainable initiatives, we can create an equitable society where everyone
            thrives. <br /> <br /> "Our mission is to empower, uplift, and inspire generations for a brighter tomorrow."
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
                <h3 className="text-dark text-sm lg:text-base font-bold font-poppins leading-normal uppercase"> Samuel S. Okehebunor</h3>
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

      {/* home result  */}
      <section className="container flex flex-col lg:flex-row lg:gap-[-1px] w-full items-center ">
        {/* item 1 */}
        <div
          className="bg-no-repeat bg-center bg-cover h-[281px] w-full lg:flex-1 center"
          style={{
            backgroundImage: "url('/assets/images/result1.png')",
          }}
        >
          <div className="flex flex-col gap-4 items-start w-[320px]">
            <h3 className="text-white text-center text-xl font-poppins font-semibold leading-normal uppercase">
              THANK TO THE RESULTS  ACHIEVED WITH YOU !
            </h3>

            <div className="flex justify-between gap-4 w-full">
              <div className="flex flex-col items-center">
                <h3 className="text-white text-center font-poppins font-bold leading-normal text-3xl">123</h3>
                <p className="text-white text-center font-poppins font-normal leading-normal text-base">Children Helped</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-white text-center font-poppins font-bold leading-normal text-3xl">67</h3>
                <p className="text-white text-center font-poppins font-normal leading-normal text-base">Volunteers & Supports</p>
              </div>
            </div>
          </div>
        </div>

        {/* item2 */}
        <div
          className="bg-no-repeat bg-center bg-cover h-[329px] w-full lg:flex-1 center "
          style={{
            backgroundImage: "url('/assets/images/result2.png')",
          }}
        >
          <div className="flex flex-col gap-4 items-center w-[320px] mx-auto">
            <h3 className="text-white text-center text-xl font-poppins font-semibold leading-normal uppercase">NEXT GOALS</h3>

            <div className="flex justify-between gap-4 w-full">
              <p className="text-white text-center font-poppins font-normal leading-normal text-base">New Hospital</p>

              <p className="text-white text-center font-poppins font-normal leading-normal text-base">25th March</p>
            </div>
            <div className="flex justify-between gap-4 w-full">
              <p className="text-white text-center font-poppins font-normal leading-normal text-base">Orphanages Repairs </p>

              <p className="text-white text-center font-poppins font-normal leading-normal text-base">2nd April</p>
            </div>
            <div className="flex justify-between gap-4 w-full">
              <p className="text-white text-center font-poppins font-normal leading-normal text-base">New Water System</p>

              <p className="text-white text-center font-poppins font-normal leading-normal text-base">19th May</p>
            </div>
            <div className="flex justify-between gap-4 w-full">
              <p className="text-white text-center font-poppins font-normal leading-normal text-base">New Vaccines </p>

              <p className="text-white text-center font-poppins font-normal leading-normal text-base">20th June</p>
            </div>
            <div className="flex justify-between gap-4 w-full">
              <p className="text-white text-center font-poppins font-normal leading-normal text-base">Food Outreaches</p>

              <p className="text-white text-center font-poppins font-normal leading-normal text-base">22nd July</p>
            </div>
          </div>
        </div>

        {/*item3  */}
        <div
          className="bg-no-repeat bg-center bg-cover h-[281px] w-full lg:flex-1 center"
          style={{
            backgroundImage: "url('/assets/images/result3.png')",
          }}
        >
          <div className="flex flex-col gap-4 items-center w-[320px]">
            <p className="text-white text-center font-poppins font-normal leading-normal text-sm uppercase tracking-[2.1px] ">Help Us</p>
            <h3 className="text-white text-center text-xl font-poppins font-semibold leading-normal uppercase">Reach Our Next Goal</h3>
            <button
              type="button"
              className="inline-block py-2.5 px-6 rounded-2xl bg-green border border-transparent text-white font-poppins text-base font-semibold uppercase transition-all hover:bg-transparent hover:border-white"
            >
              Get Involved
            </button>
          </div>
        </div>
      </section>

      {/* home programs */}
      <section className="lg:px-40 px-4 lg:py-24 py-14 bg-white flex flex-col gap-14 items-center">
        {/* header */}
        <div className="flex flex-col lg:flex-row items-center gap-4 w-full justify-between">
          <div className="flex flex-col gap-1 items-start  max-w-[700px]">
            <span className="text-dark text-sm font-normal font-poppins leading-[30px] uppercase">OUR Recent Campaigns</span>

            <h2 className="text-dark text-[40px] font-bold font-poppins lg:leading-[48px] leading-9 capitalize">
              Driving Positive Change, Creating Lasting Impact.
            </h2>
          </div>

          <div className="">
            <p className="text-dark text-base font-poppins font-normal leading-normal max-w-[400px]">
              Our foundation is dedicated to uplifting communities through education, healthcare, and essential aid. Join us in making a
              lasting impact.
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="flex flex-col lg:flex-row items-start bg-white rounded-md shadow-sm overflow-hidden">
            <Image src={program1} alt="food outreach" quality={100} className="w-full h-[357px] lg:h-full object-cover lg:flex-1/2" />

            <div className="p-6 flex flex-col gap-4 items-start justify-between h-full w-full lg:flex-1/2">
              <div className="flex flex-col gap-4 items-start justify-center">
                <span
                  className={`text-white px-4 py-2 rounded-lg in-checked: justify-center text-sm font-bold leading-normal inline-block w-fit bg-[#34B090]`}
                >
                  Food Outreach
                </span>

                <p className="text-base text-dark font-poppins font-normal leading-normal">Thurs Nov 6th, 2024</p>

                <h3 className="text-xl font-poppins font-bold text-dark leading-normal">Food Outreach To Kids & Communites</h3>
                <p className="text-base text-dark font-poppins font-normal leading-normal">
                  Join us in providing nutritious meals to underprivileged children and families. Your support helps fight hunger and bring
                  smiles to those in need.
                </p>
              </div>

              <Link
                href="/contact-us"
                className="flex px-6 py-2.5 items-center justify-center gap-4 rounded-2xl bg-[#47A3E2] font-semibold text-base text-white capitalize cursor-pointer"
              >
                Get more info
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start bg-white rounded-md shadow-sm overflow-hidden">
            <Image src={program2} alt="Volunteering" quality={100} className="w-full h-[357px] lg:h-full object-cover lg:flex-1/2" />

            <div className="p-6 flex flex-col gap-4 items-start justify-between h-full w-full lg:flex-1/2">
              <div className="flex flex-col gap-4 items-start justify-center">
                <span
                  className={`text-white px-4 py-2 rounded-lg in-checked: justify-center text-sm font-bold leading-normal inline-block w-fit bg-[#FF4800]`}
                >
                  Support
                </span>

                <p className="text-base text-dark font-poppins font-normal leading-normal">Thurs Nov 6th, 2024</p>

                <h3 className="text-xl font-poppins font-bold text-dark leading-normal">Volunteering And Support Aids</h3>
                <p className="text-base text-dark font-poppins font-normal leading-normal">
                  Be part of a life-changing experience by volunteering to support communities in need. Help distribute supplies, mentor
                  youth, and create positive change
                </p>
              </div>

              <Link
                href="/contact-us"
                className="flex px-6 py-2.5 items-center justify-center gap-4 rounded-2xl bg-[#47A3E2] font-semibold text-base text-white capitalize cursor-pointer"
              >
                Get more info
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="h-[619px] text-white-10 flex items-start lg:px-40 px-4 py-20 bg-no-repeat bg-center bg-cover "
        style={{
          backgroundImage: "url('/assets/images/homeStats.png')",
        }}
      >
        {/* header */}
        <div className="flex flex-col items-start gap-4 w-full justify-between">
          <div className="flex flex-col gap-6 items-start  max-w-[700px]">
            <h2 className="text-white text-[32px] lg:text-[40px] font-bold font-poppins lg:leading-[48px] leading-9 capitalize">
              We envision a world where everyone has the opportunity to learn and prosper
            </h2>
            <div className="flex items-center justify-center lg:justify-normal w-full gap-4">
              <button
                type="button"
                className="inline-block py-2.5 lg:px-6 px-2 rounded-2xl bg-yellow border border-transparent text-dark font-poppins text-xs lg:text-base font-semibold uppercase transition-all hover:bg-transparent hover:border-white hover:text-white cursor-pointer"
              >
                Learn More About Us
              </button>
              <button
                type="button"
                className="inline-block py-2.5 lg:px-6 px-2 rounded-2xl bg-green border border-transparent text-white font-poppins text-xs lg:text-base font-semibold uppercase transition-all hover:bg-transparent hover:border-white cursor-pointer"
              >
                Volunteer Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* home feature */}
      <section className="container  h-auto lg:h-[1000px] bg-[#1A4B3F] lg:px-40 px-4 flex flex-col gap-28 items-center ">
        {/* feature grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 items-start w-full transform -translate-y-40 lg:-translate-y-50">
          <div
            className=" bg-no-repeat bg-center bg-cover w-full h-[300px] "
            style={{
              backgroundImage: "url('/assets/images/feature1.png')",
            }}
          ></div>

          <div className="bg-[#AFF6EF] flex p-8 flex-col justify-end items-start gap-4 w-full h-full or">
            <h2 className="text-4xl text-dark text-center font-black leading-[100%]">68+</h2>
            <p className="text-dark text-center text-sm font-normal leading-normal ">Youth-in-work since 2017</p>
          </div>

          <div
            className=" bg-no-repeat bg-center bg-cover w-full h-[300px] "
            style={{
              backgroundImage: "url('/assets/images/feature2.png')",
            }}
          ></div>

          <div className="bg-[#F6E2AF] flex p-8 flex-col justify-end items-start gap-4 w-full h-full order-1 lg:order-none">
            <h2 className="text-4xl text-dark text-center font-black leading-[100%]">68%</h2>
            <p className="text-dark text-center text-sm font-normal leading-normal ">of our partners are African-led organizations</p>
          </div>

          <div
            className=" bg-no-repeat bg-center bg-cover w-full h-[300px] order-2 lg:order-none "
            style={{
              backgroundImage: "url('/assets/images/feature3.png')",
            }}
          ></div>

          <div className="bg-[#AFF6B6] flex p-8 flex-col justify-end items-start gap-4 w-full h-full">
            <h2 className="text-4xl text-dark text-center font-black leading-[100%]">41K</h2>
            <p className="text-dark text-center text-sm font-normal leading-normal">Indigenous youth-in-work through EleV</p>
          </div>
        </div>

        {/* Feature Grid 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start w-full -translate-y-40 lg:-translate-y-50">
          <div className="flex flex-col gap-4 items-start bg-[#1D604F] p-8 rounded">
            <Image src="/assets/images/featureicon1.svg" alt="Programs and Events" width={86} height={86} quality={100} />
            <h3 className="text-white text-xl font-bold leading-normal">Programs & Events</h3>
            <p className="text-white text-xl font-normal leading-normal">
              Discover our impactful programs and events designed to uplift communities and provide resources for a better future.
            </p>
            <Link
              href="/about-us"
              className="center py-2.5 px-6 rounded-2xl bg-[#47A3E2] text-white text-base font-semibold uppercase cursor-pointer"
            >
              Learn more
            </Link>
          </div>

          <div className="flex flex-col gap-4 items-start bg-[#1D604F] p-8 rounded">
            <Image src="/assets/images/featureicon2.svg" alt="Focus Areas" width={86} height={86} quality={100} />
            <h3 className="text-white text-xl font-bold leading-normal">Focus Areas</h3>
            <p className="text-white text-xl font-normal leading-normal">
              We prioritize education, employment, and mentorship to create opportunities for underserved communities.
            </p>
            <Link
              href="/about-us"
              className="center py-2.5 px-6 rounded-2xl bg-[#47A3E2] text-white text-base font-semibold uppercase cursor-pointer"
            >
              Learn more
            </Link>
          </div>

          <div className="flex flex-col gap-4 items-start bg-[#1D604F] p-8 rounded">
            <Image src="/assets/images/featureicon3.svg" alt="Volunteers" width={86} height={86} quality={100} />
            <h3 className="text-white text-xl font-bold leading-normal">Volunteers</h3>
            <p className="text-white text-xl font-normal leading-normal">
              Join our dedicated network of volunteers and be part of a movement that transforms lives through service and advocacy.
            </p>
            <Link
              href="/about-us"
              className="center py-2.5 px-6 rounded-2xl bg-[#47A3E2] text-white text-base font-semibold uppercase cursor-pointer"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* home donation */}
      <section className="  bg-white lg:px-40 px-4 py-14 flex flex-col gap-14 items-center">
        {/* header */}
        <div className="flex flex-col lg:flex-row items-center w-full justify-between">
          <div className="flex flex-col gap-1 items-start  max-w-[700px]">
            <span className="text-dark text-sm font-normal font-poppins leading-normal tracking-[2.1px] uppercase">OUR BEGINNINGS</span>

            <h2 className="text-dark text-[40px] font-bold font-poppins leading-[48px] capitalize">Welcome To Okehebunor Foundation!</h2>
          </div>

          <div className="">
            <p className="text-dark text-base font-poppins font-normal leading-normal max-w-[400px]">
              Our foundation is dedicated to uplifting communities through education, healthcare, and essential aid. Join us in making a
              lasting impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-6 w-full">
          <div className="flex flex-col items-start bg-white rounded-md shadow-sm border border-dark/20 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl ">
            <Image src={support3} alt="support" quality={100} className="w-full object-cover" />

            <div className="p-6 flex flex-col gap-4 items-start justify-between h-full w-full">
              <div className="flex flex-col gap-4 items-start justify-center">
                <h3 className="text-xl font-poppins font-bold text-dark leading-normal">Water Wells</h3>
                <p className="text-base text-dark font-poppins font-normal leading-normal">
                  Clean water is a basic necessity. Your donation helps us build wells in communities struggling with water scarcity.
                </p>

                <div className="flex items-start gap-4 w-full justify-between">
                  <p className="text-dark text-base font-semibold leading-normal text-left">
                    Goals: <br />
                    NGN 10,000,000
                  </p>
                  <p className="text-dark text-base font-semibold leading-normal text-right">
                    Raised: <br /> NGN 2,000,000
                  </p>
                </div>
                <button
                  type="button"
                  onClick={isModalOpen}
                  className="center py-2.5 px-6 rounded-2xl bg-[#47A3E2] text-white text-base font-semibold uppercase cursor-pointer"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start bg-white rounded-md shadow-sm border border-dark/20 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
            <Image src={support5} alt="support" quality={100} className="w-full object-cover" />

            <div className="p-6 flex flex-col gap-4 items-start justify-between h-full w-full">
              <div className="flex flex-col gap-4 items-start justify-center">
                <h3 className="text-xl font-poppins font-bold text-dark leading-normal">Help to mothers</h3>
                <p className="text-base text-dark font-poppins font-normal leading-normal">
                  Empower mothers with the resources they need to provide for their children. Your support funds job training, healthcare,
                  and shelter.
                </p>

                <div className="flex items-start gap-4 w-full justify-between">
                  <p className="text-dark text-base font-semibold leading-normal text-left">
                    Goals: <br />
                    NGN 10,000,000
                  </p>
                  <p className="text-dark text-base font-semibold leading-normal text-right">
                    Raised: <br /> NGN 2,000,000
                  </p>
                </div>
                <button
                  type="button"
                  onClick={isModalOpen}
                  className="center py-2.5 px-6 rounded-2xl bg-[#47A3E2] text-white text-base font-semibold uppercase cursor-pointer"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start bg-white rounded-md shadow-sm border border-dark/20 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
            <Image src={support2} alt="support" quality={100} className="w-full object-cover" />

            <div className="p-6 flex flex-col gap-4 items-start justify-between h-full w-full">
              <div className="flex flex-col gap-4 items-start justify-center">
                <h3 className="text-xl font-poppins font-bold text-dark leading-normal">Child Support & Education</h3>
                <p className="text-base text-dark font-poppins font-normal leading-normal">
                  We provide essential care, medical assistance, and emotional support to children facing hardships. risus.
                </p>

                <div className="flex items-start gap-4 w-full justify-between">
                  <p className="text-dark text-base font-semibold leading-normal text-left">
                    Goals: <br />
                    NGN 10,000,000
                  </p>
                  <p className="text-dark text-base font-semibold leading-normal text-right">
                    Raised: <br /> NGN 2,000,000
                  </p>
                </div>
                <button
                  type="button"
                  onClick={isModalOpen}
                  className="center py-2.5 px-6 rounded-2xl bg-[#47A3E2] text-white text-base font-semibold uppercase cursor-pointer"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* home blog */}
      <section className="lg:px-40 px-4 lg:py-24 py-14 bg-white flex flex-col gap-14 items-center">
        {/* header */}
        <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
          <div className="flex flex-col gap-1 items-start  max-w-[700px]">
            <span className="text-dark text-sm font-normal font-poppins leading-5 lg:leading-[30px] uppercase">OUR Blog Posts</span>

            <h2 className="text-dark text-[40px] font-bold font-poppins leading-[48px] capitalize">Check Our News</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 items-start gap-6 w-full">
          {articles.slice(0, 3).map((article, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-white rounded-md shadow-sm border border-dark/20 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl h-auto md:h-[600px]"
            >
              <Image
                src={article?.urlToImage || blog1}
                alt={article.title}
                width={400}
                height={250}
                quality={100}
                className="w-full object-cover"
              />
              <div className="p-6 flex flex-col gap-4 items-start justify-between h-full w-full">
                <div className="flex flex-col gap-4 items-start justify-center">
                  <p className="text-base text-dark font-poppins font-normal leading-normal">
                    {new Date(article.publishedAt).toDateString()}
                  </p>
                  <h3 className="text-xl font-poppins font-bold text-dark leading-normal">{article.title}</h3>
                  <p className="text-base text-dark font-poppins font-normal leading-normal">
                    {article?.description?.length > 100 ? `${article?.description.substring(0, 100)}...` : article.description}
                  </p>
                </div>
                <Link
                  href={article?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex px-6 py-2.5 items-center justify-center gap-4 rounded-2xl bg-[#47A3E2] font-semibold text-base text-white uppercase cursor-pointer"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="lg:px-40 px-4 lg:py-24 py-14 bg-white flex flex-col gap-14 items-center">
        {/* header */}
        <div className="flex flex-col lg:flex-row items-center w-full justify-between">
          <div className="flex flex-col gap-1 items-start  max-w-[700px]">
            <span className="text-dark text-sm font-normal font-poppins leading-normal tracking-[2.1px] uppercase">Get Involved</span>

            <h2 className="text-dark text-[40px] font-bold font-poppins leading-[48px] capitalize">Be part of our movements</h2>
          </div>

          <div className="">
            <p className="text-dark text-base font-poppins font-normal leading-normal max-w-[400px]">
              Join us in making a difference. Your support can change lives and create a brighter future for those in need.
            </p>
          </div>
        </div>
        <GetInvolvedForm />
      </section>

      <DonateModal onClose={isModalClose} showModal={showModal} />
    </>
  );
};

export default Home;
