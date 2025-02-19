"use client"
import React, { useEffect, useRef, useState } from "react";
import logo1 from "../util/cube-removebg.png";
import logo2 from "../util/banner.webp";
import logo3 from "../util/x-Photoroom.png";
import logo4 from "../util/x-Photoroom.png";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import Head from "next/head"; // Import Head from Next.js
import { Anton, Poppins } from "next/font/google";

// Initialize Anton font
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

// Initialize Poppins font
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});


// Initialize Anton font


const Body = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <div>
        <div className={`pl-5 ${anton.className}`}>
          <div className="w-full h-[80vh]  flex justify-evenly">
            <div className="flex flex-col ">
              <p className="text-[150px] flex-wrap w-[50vw] mt-16">
                Hash<span className="animated-text">tag</span>
              </p>
              <p className="text-5xl ">
                Empowering minds, igniting innovation
              </p>
              <p className="text-4xl mt-8 ">
                the Hashtag Tech Society is where
              </p>
              <p className="text-4xl mt-7 ">
                technology meets creativity.
              </p>
              <ul className="mt-10">
                <Button
                  className={`bg-black text-white p-6 rounded-full px-14 ${poppins.className}`}
                  variant="outline"
                >
                  About Us
                </Button>
              </ul>
            </div>
            <div>
              <Image src={logo1} alt="Logo" width={750} height={150} />
            </div>
          </div>
        </div>

        <div
          ref={ref}
          className={`bg-black w-[90vw] mx-auto rounded-3xl mt-10 pl-5 pb-20  transition-transform duration-500 ${
            isVisible ? "zoom-in" : "zoom-out"
          }`}
        >
          <div className="flex">
            <div className={`pl-5 w-[40vw] text-white ${anton.className} `}>
              <p className="text-white text-[100px] pt-16 ">Everything you</p>
              <p className="text-[90px]">need to </p>
              <p className="text-[80px]"> know</p>

              <p
                className={`${poppins.className} mt-16 w-[34vw] text-xl text-white `}
              >
                Welcome to the Hashtag Society, the tech-driven hub at JIMS
                College, where innovation meets creativity. We aim to empower
                students by fostering a collaborative environment through
                workshops, events, and discussions. Join us to explore the
                latest trends, enhance your technical skills, and stay ahead in
                the world of technology.
              </p>
            </div>
            <div className="flex relative">
              <div className="flex justify-between items-center">
                <Image
                  className="ml-48 mt-16 object-contain rotated-image1 "
                  src={logo4}
                  alt="Logo"
                  width={330}
                  height={100}
                />
                <Image
                  className="object-contain pt-[500px]  rotated-image2 rounded-none "
                  src={logo3}
                  alt="Logo"
                  width={250}
                  height={150}
                />
              </div>
              <Image
                className="object-contain rotating-image rounded-none absolute top-10"
                src={logo3}
                alt="Logo"
                width={250}
                height={150}
              />
            </div>
          </div>
          <div
            className={`flex gap-10 mt-10 justify-evenly ${anton.className}`}
          >
            <div className="w-[25rem] h-[16rem] bg-[#ffdf58] rounded-3xl flex items-center justify-around zoomable-div">
              <p className="text-5xl w-[10vw]">Registration</p>
              <p>
                <a
                  className="inline-block rounded-full border border-black p-3 text-black hover:bg-black hover:black hover:text-white focus:outline-none focus:ring a"
                  href="#"
                >
                  <span className="sr-only"> Download </span>
                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </p>
            </div>
            <div className="w-[25rem] h-[16rem] bg-[#ffdf58] rounded-3xl flex items-center justify-around zoomable-div">
              <p className="text-5xl w-[10vw]">Events</p>
              <p>
                <a
                  className="inline-block rounded-full border border-black p-3 text-black hover:bg-black hover:black hover:text-white focus:outline-none focus:ring a"
                  href="#"
                >
                  <span className="sr-only"> Download </span>
                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </p>
            </div>

            <div className="w-[25rem] h-[16rem] bg-[#ffdf58] rounded-3xl flex items-center justify-around zoomable-div">
              <p className="text-5xl w-[10vw]">Members</p>
              <p>
                <a
                  className="inline-block rounded-full border border-black p-3 text-black hover:bg-black hover:black hover:text-white focus:outline-none focus:ring a"
                  href="#"
                >
                  <span className="sr-only"> Download </span>
                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </p>
            </div>
            {/* Repeat for other divs */}
          </div>
        </div>

        <div className="space-y-5 mt-16 w-[80vw] mx-auto">
          <div className="r">
            <p className="w-full items-center flex justify-center text-5xl font-bold ">
              About Hashtag
            </p>
          </div>
          <details
            className="group border-s-4 border-[#ffdf58] bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-2xl font-medium text-gray-900">
                What is Hashtag?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 text-lg   leading-relaxed text-gray-700">
              The hashtag society of JIMS College is an innovative and dynamic
              student-led group, rooted in the technical society of the college.
              It fosters creativity and collaboration by providing a platform
              for students to engage with the latest tech trends, share
              knowledge, and develop skills through workshops, events, and
              discussions.
            </p>
          </details>

          <details className="group border-s-4 border-[#ffdf58] bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                What is the primary goal of the Hashtag Society at JIMS College?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 text-lg  leading-relaxed text-gray-700">
              The primary goal of the Hashtag Society at JIMS College is to
              bridge the gap between students and the rapidly evolving world of
              technology, fostering a collaborative environment where students
              can explore, learn, and enhance their technical skills through
              interactive events, workshops, and discussions.
            </p>
          </details>
        </div>
      </div>
    </>
  );
};

export default Body;
