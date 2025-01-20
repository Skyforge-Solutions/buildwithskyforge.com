import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto mt-16 flex justify-center items-center flex-col min-h-96 p-5">
      <h1 className="font-semibold text-7xl">
        <span className="text-[#03A07A]">Rekhta</span> &{" "}
        <span className="text-[#03A07A]">SkyForge</span>
      </h1>
      <h2 className="text-4xl mt-5 font-semibold text-gray-500">
        We are offering our combined domain expertise
      </h2>
    </div>
  );
};

export default Hero;
