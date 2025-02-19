import React from 'react';
import Image from "next/image";
import logo5 from "../util/1.png";
import logo6 from "../util/2.png";
import logo7 from "../util/3.png";

const Review = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Popular events
          </h2>

          <div className="flex w-full justify-evenly my-10 gap-16">
            <div className="w-[25rem] group">
              <Image
                src={logo5}
                alt="Event Image 1"
                className="transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="w-[25rem] group">
              <Image
                src={logo7}
                alt="Event Image 2"
                className="transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="w-[25rem] group">
              <Image
                src={logo5}
                alt="Event Image 3"
                className="transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Review;
