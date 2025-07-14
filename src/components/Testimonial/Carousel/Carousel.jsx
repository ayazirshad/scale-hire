import React from "react";

const Carousel = ({ testimonials, currentIndex }) => {
  return (
    <div className="flex overflow-hidden flex-nowrap">
      {testimonials.map((item, index) => {
        return (
          <div
            key={index}
            className="w-[100%] min-w-[100%] transition-all duration-300"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
          >
            <div className="flex justify-between items-center">
              <p className="w-11 h-11 rounded-full bg-[#F2F7FF] text-[#030B24] flex justify-center items-center pt-5 font-bold text-5xl">
                “
              </p>
              <div className="h-[29px]">
                <img src={item.logo} alt="wavero" className="h-full" />
              </div>
            </div>
            <p className="text-[25px] sm:text-[32px] mt-5">
              {item.description}
            </p>
            <div className="mt-5">
              <h6 className="text-[16px] font-semibold">{item.person}</h6>
              <p className="text-[16px] text-[#52525B] mt-1">
                {item.designation}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
