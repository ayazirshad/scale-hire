import React from "react";
import card2Pic from "../../../assets/V3/card2.png";

const Card2 = () => {
  return (
    <div className="bg-[#161514] text-[#FFFFFF] overflow-hidden rounded-3xl relative w-full">
      <div className="md:flex md:flex-row-reverse py-8 md:py-16 gap-5">
        <div className="w-full md:w-[45%] py-10 px-8 lg:px-20 flex flex-col justify-center ">
          <div
            className="p-[0.7px] w-10 h-10 rounded-full bg-linear-to-br from-[#FFFFFF] via-[#333333] to-[#FFFFFF] backdrop-blur-lg
          "
          >
            <button className="py-[6px] w-[39px] h-[39px] p-4 rounded-full bg-linear-to-br from-[#4a4a4a] to-[#121212] text-center">
              2
            </button>
          </div>
          <h3 className="mt-5 font-semibold text-3xl max-w-[290px]">
            Automated reach out to qualified candidates
          </h3>
          <p className="text-[#F0F0F0] mt-4 max-w-[322px]">
            SorsX AI reach out to candidates who match your job. They complete a
            quick AI video interview, answering your elimination questions.
          </p>
        </div>
        <div className="w-full md:w-[55%] pr-8">
          <div className="rounded-r-[20px] sm:rounded-r-[30px] md:rounded-r-[40px] bg-white/30 backdrop-blur-3xl ">
            <img src={card2Pic} alt="cardPic" className="h-full w-full" />
          </div>
        </div>
      </div>
      <div className="w-[117px] h-[237px] bg-gradient-to-r from-[#EB008B]/80 to-[#F9EC31]/80 blur-3xl rounded-full absolute top-10 md:top-[330px] -right-24 md:-right-16 "></div>
    </div>
  );
};

export default Card2;
