import React from "react";

const HireFrame = () => {
  return (
    <div className="text-[#FFFFFF] relative flex justify-center items-center">
      <div className="w-[816px] container mx-auto flex flex-col justify-center items-center my-20">
        <h1 className="text-center text-[40px]">
          Hire faster without sacrificing quality
        </h1>
        <p className="text-lg text-[#CCCFD7] w-[350px] text-center mt-4">
          Scale Hire ensures you only engage with candidates who meet your
          standards.
        </p>
        <div className="rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.25)] mt-7">
          <button className="bg-[#254CF8] px-6 py-3 w-[149px] rounded-lg shadow-[inset_0_7px_9.3px_rgba(205,205,205,0.2)] hover:cursor-pointer">
            Start Today
          </button>
        </div>
      </div>
      <div className="w-[1070px] h-[822px] bg-gradient-to-r from-[#EB008B]/80 to-[#F9EC31]/80 blur-3xl rounded-full absolute top-[370px] -z-10"></div>
    </div>
  );
};

export default HireFrame;
