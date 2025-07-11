import React from "react";
import card1Pic from "../../../assets/V3/card1.png";

const Card1 = () => {
  return (
    <div className="bg-[#161514] text-[#FFFFFF] overflow-hidden rounded-3xl relative">
      <div className="flex py-16 gap-5">
        <div className="w-[45%] py-10 px-20  flex flex-col justify-center">
          <div
            className="p-[0.7px] w-10 h-10 rounded-full bg-linear-to-br from-[#FFFFFF] via-[#333333] to-[#FFFFFF] backdrop-blur-lg
      "
          >
            <button className="py-[6px] w-[39px] h-[39px] p-4 rounded-full bg-linear-to-br from-[#4a4a4a] to-[#121212] text-center">
              1
            </button>
          </div>
          <h3 className="mt-5 font-semibold text-3xl w-[290px]">
            The only thing you will do manually
          </h3>
          <p className="text-[#F0F0F0] mt-4 w-[322px]">
            Enter your job description and main elimination questions for that
            role.
          </p>
        </div>
        <div className="w-[55%]">
          <div className="rounded-l-[20px] bg-white/30 backdrop-blur-3xl h-[378px]">
            <img src={card1Pic} alt="cardPic" className="h-full w-full" />
          </div>
        </div>
      </div>
      <div className="w-[117px] h-[237px] bg-gradient-to-r from-[#EB008B]/80 to-[#F9EC31]/80 blur-3xl rounded-full absolute top-[330px] -left-10 "></div>
    </div>
  );
};

export default Card1;
