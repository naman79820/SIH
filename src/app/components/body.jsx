import React from "react";
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
          <div></div>
        </div>
        
      </div>
    </>
  );
};

export default Body;
