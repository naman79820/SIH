"use client"
import React, { useEffect, useRef, useState } from "react";
import logo1 from "../util/body.jpg";
import logo2 from "../util/3d.png";
import logo3 from "../util/logo3.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Anton, Poppins } from "next/font/google"; // Import both Anton and Poppins
import Head from "next/head"; // Import Head from Next.js

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
          <div className="w-full h-[80vh] flex justify-evenly">
            <div className="flex flex-col">
              <p className="text-[150px] flex-wrap w-[50vw] mt-16">
                Lorem <span className="animated-text">ipsum</span> dolor sit.
              </p>
              <p className="text-2xl ">
                Lorem ipsum dolor sit amet consectetur adipisicing
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
          className={`bg-[#04b442] w-[90vw] mx-auto rounded-3xl mt-10 pl-5 pb-20  transition-transform duration-500 ${
            isVisible ? "zoom-in" : "zoom-out"
          }`}
        >
          <div className="flex">
            <div className={`pl-5 w-[40vw] text-white ${anton.className} `}>
              <p className="text-white text-[70px] pt-16 ">
                Lorem ipsum dolor sit amet consectetur adipisicing
              </p>

              <p className={`${poppins.className} mt-16 w-[34vw] text-xl `}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                voluptate ipsam velit et deleniti incidunt eum reiciendis
                asperiores. Ab labore numquam ipsa incidunt cupiditate impedit.
                Impedit rem nostrum consequuntur animi.
              </p>
            </div>
            <div className="flex relative">
              <div className="flex justify-between items-center">
                <Image
                  className="ml-32 object-contain rotated-image1 "
                  src={logo3}
                  alt="Logo"
                  width={450}
                  height={100}
                />
                <Image
                  className="object-contain pt-[450px] rotated-image2 rounded-none "
                  src={logo3}
                  alt="Logo"
                  width={250}
                  height={150}
                />
              </div>
              <Image
                className="object-contain rotating-image rounded-none absolute"
                src={logo3}
                alt="Logo"
                width={250}
                height={150}
              />
            </div>
          </div>
          <div className={`flex gap-10 justify-evenly ${anton.className}`}>
          <div className="w-[25rem] h-[16rem] bg-[#BEED57] rounded-3xl flex items-center justify-around zoomable-div">
  <p className="text-2xl w-[10vw]">Lorem ipsum dolor sit amet</p>
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
            <div className="w-[25rem] h-[16rem] bg-[#BEED57] rounded-3xl flex items-center justify-around zoomable-div">
  <p className="text-2xl w-[10vw]">Lorem ipsum dolor sit amet</p>
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

<div className="w-[25rem] h-[16rem] bg-[#BEED57] rounded-3xl flex items-center justify-around zoomable-div">
  <p className="text-2xl w-[10vw]">Lorem ipsum dolor sit amet</p>
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
      </div>
    </>
  );
};

export default Body;
