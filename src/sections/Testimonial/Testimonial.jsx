import React from "react";
import waveroLogo from "../../assets/Testimonial/wavero.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div
      className="text-[#FFFFFF] flex flex-col items-center mb-8 px-5"
      id="reviews"
    >
      <div className="max-w-[628px] mt-24">
        <div className="flex justify-between items-center">
          <p className="w-11 h-11 rounded-full bg-[#F2F7FF] text-[#030B24] flex justify-center items-center pt-5 font-bold text-5xl">
            “
          </p>
          <div className="h-[29px]">
            <img src={waveroLogo} alt="wavero" className="h-full" />
          </div>
        </div>
        <p className="text-[28px] sm:text-[32px] mt-5">
          We loved using SorsX. Lorem ipsum dolor sit amet consectetur. Nec
          adipiscing feugiat interdum molestie metus.
        </p>
        <div className="mt-5">
          <h6 className="text-[16px] font-semibold">Jenny Wilson</h6>
          <p className="text-[16px] text-[#52525B] mt-1">
            Co-Founder of Waverio
          </p>
        </div>
        <div className="flex gap-3 mt-5">
          <button className="w-11 h-11 rounded-full bg-[#F2F7FF] text-[#030B24] flex justify-center items-center font-bold ">
            <FaArrowLeft size={18} />
          </button>
          <div
            className="p-[0.7px] w-11 h-11 rounded-full bg-linear-to-bl from-[#FFFFFF] via-[#333333] to-[#FFFFFF] backdrop-blur-lg flex justify-center items-center
      "
          >
            <button className=" w-[42px] h-[42px] rounded-full bg-linear-to-tr from-[#4a4a4a] to-[#121212] text-center flex justify-center items-center">
              <FaArrowRight size={18} />
            </button>
          </div>
        </div>
        <div className="mt-16 w-full bg-linear-to-r from-[#161514] via-[#919191] to-[#161514] h-[1px]"></div>
      </div>
    </div>
  );
};

export default Testimonial;
