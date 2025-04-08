"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { blog1, blog2 } from "../../../public/assets/images";

export const blogArr = [
  {
    id: 1,
    date: "Thurs Nov 6th, 2024",
    title: "Sharing Foods as well as Smiles",
    description:
      "Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus.",
    category: "foodOutreach",
    image: blog1,
  },
  {
    id: 2,
    date: "Sat Feb 18th, 2025",
    title: "Volunteering And Support Aids Community",
    description:
      "Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus.",
    category: "support",
    image: blog2,
  },
  {
    id: 3,
    date: "Sat Feb 18th, 2025",
    title: "Volunteering And Support Aids Community",
    description:
      "Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus.",
    category: "support",
    image: blog2,
  },
];

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("ngo");
  const [sortOption, setSortOption] = useState("latest");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const API_URL = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&sortBy=popularity&apiKey=936f4527d49640cfae821ce52b6ec046`;

  useEffect(() => {
    fetchArticles();
  }, [page]);

  const fetchArticles = async () => {
    try {
      const response = await fetch(`${API_URL}&page=${page}&pageSize=20&sortBy=${sortOption}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.status === "ok") {
        setArticles(data.articles); // Replace instead of append
        setTotalResults(data.totalResults);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const handleSearch = () => {
    setPage(1); // Reset to the first page for a new search
    fetchArticles();
  };

  const handleInputChange = (e) => setSearchQuery(e.target.value);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") console.log("Search Query:", searchQuery);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const handleNextPage = () => {
    if (page * 10 < totalResults) {
      setPage((prev) => prev + 1);
      fetchArticles(); // Fetch next page articles
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      fetchArticles(); // Fetch previous page articles
    }
  };

  return (
    <>
      <section
        className="h-[493px] text-white-10 flex items-center justify-center lg:px-24 px-4  bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: "url('/assets/images/aboutHeroBanner.png')" }}
      >
        <div className="flex flex-col items-center justify-center max-w-[608px]">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white text-[36px] lg:text-6xl font-bold font-poppins leading-normal"
          >
            News & Media
          </motion.h1>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-white text-base lg:text-lg font-normal font-poppins leading-normal text-center"
          >
            Read about our blog posts anywhere
          </motion.p>
        </div>
      </section>

      <section className="lg:px-40 px-4 lg:py-24 py-14 bg-white flex flex-col gap-14 items-center">
        <div className="flex flex-col gap-4 items-start w-full">
          <div className="flex flex-col gap-1 items-start  max-w-[700px]">
            <span className="text-dark text-sm font-normal font-poppins leading-[30px] uppercase">OUR Blog Posts</span>

            <h2 className="text-dark text-[40px] font-bold font-poppins leading-[48px] capitalize">Check Our News</h2>
          </div>

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
                  placeholder="Search for blog..."
                  className="w-full outline-none placeholder:text-[#8C9394] text-base font-poppins font-normal"
                />
              </div>
            </div>

            <div className="flex items-center justify-between lg:justify-end w-full gap-2">
              {/* <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="py-2.5 px-6 rounded-2xl border border-dark text-dark font-poppins text-base font-normal"
              >
                <option value="latest">Sort by Latest</option>
                <option value="oldest">Sort by Oldest</option>
                <option value="title-asc">Sort by Title A-Z</option>
                <option value="title-desc">Sort by Title Z-A</option>
                <option value="category">Sort by Category</option>
              </select> */}

              <button
                type="button"
                onClick={handleSearch}
                className="w-[150px] lg:w-[170px] py-2.5 px-6 rounded-2xl bg-green border border-transparent text-white font-poppins text-base font-semibold uppercase transition-all hover:bg-transparent hover:border-green hover:text-green"
              >
                Search Blog
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 items-start gap-6 w-full">
          {articles.map((article, index) => (
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

        <section className="flex justify-between items-center w-full mt-8">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className={`py-2 px-4 rounded-lg ${page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-green text-white"}`}
          >
            Previous
          </button>
          <span className="text-dark font-poppins text-base">
            Page {page} of {Math.ceil(totalResults / 10)}
          </span>
          <button
            onClick={handleNextPage}
            disabled={page * 10 >= totalResults}
            className={`py-2 px-4 rounded-lg ${page * 10 >= totalResults ? "bg-gray-300 cursor-not-allowed" : "bg-green text-white"}`}
          >
            Next
          </button>
        </section>
      </section>
    </>
  );
};

export default Blog;
