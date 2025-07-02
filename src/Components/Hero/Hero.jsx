import React from "react";
import hero1 from "../../assets/heropic1.jpg"; // placeholder product or lifestyle image
import hero2 from "../../assets/heropic2.jpg";
import hero3 from "../../assets/heropic3.jpg";

const Hero = () => {
  return (
    // <section className="bg-blue-50 py-10 px-4 md:px-12 mt-4">
    //   <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
    //     {/* Left Content */}
    //     <div className="flex-1 text-center md:text-left space-y-6">
    //       <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
    //         Discover the Best Deals on Electronics, Fashion & More!
    //       </h1>
    //       <p className="text-lg text-gray-600">
    //         Explore our wide range of quality products at unbeatable prices.
    //       </p>
    //       <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300">
    //         Shop Now
    //       </button>
    //     </div>

    //     {/* Right Image */}
    //     <div className="flex-1">
    //       <img
    //         src={hero1}
    //         alt="Featured Product"
    //         className="w-full h-auto rounded-xl shadow-lg"
    //       />
    //     </div>
    //   </div>
    // </section>

    <section className="mt-4 bg-blue-50 px-4 py-10 md:px-12">
      <div
        className="
        mx-auto flex max-w-7xl flex-col-reverse items-center gap-10
        md:flex-row
      "
      >
        {/* ─── Left content ─── */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1
            className="
            text-3xl font-bold text-gray-800
            sm:text-4xl
            lg:text-5xl
          "
          >
            Discover the Best Deals on Electronics,&nbsp;Fashion&nbsp;&amp;
            More!
          </h1>

          <p className="text-base text-gray-600 sm:text-lg">
            Explore our wide range of quality products at unbeatable prices.
          </p>

          <button
            className="
            rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white
            hover:bg-blue-700
            sm:text-base
            transition duration-300
          "
          >
            Shop Now
          </button>
        </div>

        {/* ─── Right image ─── */}
        <div className="flex-1 w-full">
          <img
            src={hero1}
            alt="Featured Product"
            className="
            h-52 w-full rounded-xl object-cover shadow-lg
            sm:h-64
            md:h-72
            lg:h-80
          "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
