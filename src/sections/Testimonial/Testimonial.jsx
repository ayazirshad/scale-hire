import React, { useState } from "react";
import waveroLogo from "../../assets/Testimonial/wavero.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Carousel from "../../components/Testimonial/Carousel/Carousel";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousIndex = () => {
    currentIndex == 0
      ? setCurrentIndex(testimonials.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  const handleNextIndex = () => {
    currentIndex == testimonials.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  const testimonials = [
    {
      person: "Jenny Wilson",
      designation: "Co-Founder of Waverio",
      description:
        "SorsX helped us scale effortlessly during peak hiring seasons. Their automated flow made our process smoother than ever.",
      logo: waveroLogo,
    },
    {
      person: "Wilson Jimmy",
      designation: "Founder of Waverio",
      description:
        "Thanks to SorsX, we reduced our hiring time by over 50%. The platform is intuitive and efficient for fast-paced teams.",
      logo: waveroLogo,
    },
    {
      person: "Asim Khan",
      designation: "CEO of Waverio",
      description:
        "What impressed me the most about SorsX was the candidate quality. The AI-powered screening truly delivers top talent.",
      logo: waveroLogo,
    },
  ];

  return (
    <div
      className="text-[#FFFFFF] flex flex-col items-center mb-8 px-5"
      id="reviews"
    >
      <div className="max-w-[628px] mt-24">
        <Carousel testimonials={testimonials} currentIndex={currentIndex} />

        <div className="flex gap-3 mt-5">
          <button
            className="w-11 h-11 rounded-full bg-[#F2F7FF] hover:bg-[#c0c5cc] transition-all duration-300 text-[#030B24] flex justify-center items-center font-bold hover:cursor-pointer group"
            onClick={() => handlePreviousIndex()}
          >
            <FaArrowLeft
              size={18}
              className="group-hover:scale-110 transition-all duration-300"
            />
          </button>
          <div className="p-[0.7px] w-11 h-11 rounded-full bg-linear-to-bl from-[#FFFFFF] via-[#333333] to-[#FFFFFF] backdrop-blur-lg flex justify-center items-center">
            <button
              className="w-[42px] h-[42px] rounded-full bg-linear-to-tr from-[#4a4a4a] to-[#121212] text-center flex justify-center items-center hover:cursor-pointer transition-all duration-300 hover:text-[#c0c5cc] group"
              onClick={() => handleNextIndex()}
            >
              <FaArrowRight
                size={18}
                className="group-hover:scale-110 transition-all duration-300"
              />
            </button>
          </div>
        </div>
        <div className="mt-16 w-full bg-linear-to-r from-[#161514] via-[#919191] to-[#161514] h-[1px]"></div>
      </div>
    </div>
  );
};

export default Testimonial;
