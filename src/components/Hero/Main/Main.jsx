import React from "react";
import star from "../../../assets/Hero/star ellipse.png";
import table from "../../../assets/Hero/Group 352.png";

const Main = () => {
  return (
    <div className="relative text-white w-full flex flex-col justify-center items-center px-5 mt-14 sm:mt-7 md:mt-0">
      <h1 className="font-semibold text-center text-4xl md:text-5xl max-w-[673px] h-[80px] md:h-[122px] tracking-tighter leading-10 md:leading-15 bg-gradient-to-b from-[#bebfc2] from-0% to-[#FFFFFF] bg-clip-text text-transparent px-10 mt-6">
        Automate High-Volume Hiring in 2 Steps
      </h1>
      <p className="max-w-[359px] h-[48px] text-[#CCCFD7] text-center mt-5 px-5">
        Upload job description and resumes — get a ready-to-hire shortlist
      </p>
      {/* button  */}
      <div className="absolute top-[240px] md:top-64 z-20 rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
        <a href="/">
          <button className="bg-[#254CF8] px-6 py-3 w-[149px] rounded-lg shadow-[inset_0_7px_9.3px_rgba(205,205,205,0.2)] hover:cursor-pointer">
            Get Started
          </button>
        </a>
      </div>
      {/* vector line  */}
      <div className="absolute top-[300px] md:top-80 bg-gradient-to-r from-[#F9EC31] from-70% via-[#EB008B] to-black h-[1px] w-[254px] -rotate-90 opacity-70 z-10"></div>
      {/* star ellipse  */}
      <div className="absolute top-[310px]  md:top-[330px] z-20 ">
        <img src={star} alt="star ellipse" />
      </div>
      {/* ellipse 19  */}
      <div className="w-44 sm:w-72 md:w-[450px] lg:w-[628px] h-[222px] sm:h-[252px] md:h-[350px] lg:h-[522px] bg-gradient-to-r from-[#EB008B]/80 to-[#F9EC31]/80 blur-3xl rounded-full absolute top-[370px] sm:top-[390px] md:top-[400px] lg:top-[410px]"></div>

      {/* table  */}
      <div className="max-w-[1104px] h-[464px] rounded-[20px] md:rounded-[32px] bg-white/10 backdrop-blur-3xl p-4 z-0 absolute top-[411.7px] md:top-[431.5px] mx-5">
        <img src={table} alt="table" />
      </div>
    </div>
  );
};

export default Main;
